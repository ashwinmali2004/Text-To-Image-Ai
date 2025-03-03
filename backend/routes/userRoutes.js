import express from "express";
import { loginUser, registerUser, userCredits } from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.post("/credits", userAuth, userCredits);

export default userRouter;