import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    //   console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
    // varify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECREAT);
    console.log(decodedToken);

    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};
