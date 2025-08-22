import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {

  let token;
  if (
    req.headers.cookie
  
  ) {
    try {
      token = req.headers.cookie.split("=")[1];
      console.log(token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default protect;
