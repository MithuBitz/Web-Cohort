import express from "express";

//Import the User controller
import {
  forgetPassword,
  getMe,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  varifyUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

// Initialize the route from express
const router = express.Router();

// Set a method with help of router for registerUser
router.post("/register", registerUser);

//verify user route
router.get("/verify/:token", varifyUser);

//loginUser route
router.post("/login", loginUser);

//getMe route for profile
router.get("/me", isLoggedIn, getMe);

//Logout route
router.get("/logout", logoutUser);

//Forget password route
router.get("/forget-pass", forgetPassword);

// Reset password
router.post("/reset-password/:token", resetPassword);
export default router;
