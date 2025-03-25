import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.model.js";

dotenv.config();

// Build a controller for register a user
const registerUser = async (req, res) => {
  //Get the data from body
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }
    console.log("Token part");

    const token = crypto.randomBytes(32).toString("hex");
    console.log("Token", token);
    user.verificationToken = token;

    await user.save();

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 2525,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email", // Subject line
      text: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token}
        `,
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered ",
      error,
      success: false,
    });
  }
  // console.log("Hit the register route");
};

//Controller for varify user
const varifyUser = async (req, res) => {
  console.log("varify User route hit");

  // Get the token form url
  const { token } = req.params;
  if (!token) {
    return res.status(400).json({
      message: "Token not found",
    });
  }

  //find user based on token
  const user = await User.findOne({ verificationToken: token });
  //if no user then return a response
  if (!user) {
    return res.status(400).json({
      message: "Token is invalid",
    });
  }
  //if user found then set isVarified field to true
  user.isVerified = true;
  //remove the varification token
  //Prefare undefined than null
  user.verificationToken = undefined;
  //save the user
  await user.save();
  //return a response
  res.status(200).json({
    success: true,
    message: "User verified successfully",
  });
};

// Controller for loginUser
const loginUser = async (req, res) => {
  //get the email and password
  const { email, password } = req.body;
  //validate for email and password emptyness
  if (!email || !password) {
    return res.status(400).json({
      message: "Both Email and password required",
    });
  }
  try {
    //find one user with help of email
    const user = await User.findOne({ email });
    //if user not found return a response
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //if user found first compare the password with help of bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    //hold the true/false value of pasword matching
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }
    //if password match then create a jsonwebtoken and hold it in a variable
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECREAT, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    //Store the token inside the cookie useing cookie-parser
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 600 * 1000, // 10 days in millisecond
    };
    res.cookie("token", token, cookieOptions);
    //return res with 200 and send the user with required field only
    res.status(200).json({
      success: true,
      message: "User login successfully",
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
      message: "Login Failed",
    });
  }
};

const getMe = async (req, res) => {
  // console.log(req.user);
  if (!req.user) {
    return res.status(404).json({
      message: "Token not found from user",
    });
  }
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "User Found for profile",
    user,
  });

  console.log("get me route hit");
};

//Logout controller
const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  res.status(200).json({
    success: true,
    message: "Logout successfull",
  });
};

//Forget password controller
const forgetPassword = async (req, res) => {
  try {
    // Get Email
    const { email } = req.body;
    // Find user based on email
    const user = await User.findOne({ email });
    // reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    // reset expiry object with a 10 min from now
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    // Save the user
    await user.save();
    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 2525,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Recover Password", // Subject line
      text: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/reset-password/${resetToken}
        `,
    };

    await transporter.sendMail(mailOption);

    res.status(200).json({
      success: true,
      message: "forget passwords work fine",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to reset Password",
      error,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    console.log(token);

    const { password, confirmPass } = req.body;

    // Validate for password and confirmPass
    if (password !== confirmPass) {
      return res.status(400).json({
        message: "Password and confirm password not same",
      });
    }
    // find the user in db based on resetPasswordToken and password reset expiry
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    // if user not found return res
    if (!user) {
      return res.status(400).json({
        message: "User not found for password reset",
      });
    }
    // if user found then set the password with new one
    user.password = password;
    // reset the resetPasswordToken and password reset expiry
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    // save the user
    await user.save();
    res.status(200).json({
      success: true,
      message: "Password Reset successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Reset Password Failed",
      error,
    });
  }
};

export {
  registerUser,
  varifyUser,
  loginUser,
  getMe,
  logoutUser,
  forgetPassword,
  resetPassword,
};
