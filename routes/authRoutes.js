import { Router } from "express";
import { register, login, verifyToken, logout, googleAuth,updateProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
//udate //

router.put("/profile",protect,updateProfile);

// Email-Password Auth
router.post("/register", register);
router.post("/login", login);

// Google Auth
router.post("/google", googleAuth);

// Verify JWT
router.get("/verify", verifyToken);

// Logout
router.post("/logout", logout);

export default router;
