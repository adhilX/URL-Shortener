import express  from "express";
import {loginController, registerController, refreshTokenController, logoutController } from "../controller/authController";
import { API_ROUTES } from "../constants/routes";

const authRouter = express.Router();

authRouter.post(API_ROUTES.AUTH.LOGIN, loginController);

authRouter.post(API_ROUTES.AUTH.REGISTER, registerController);

authRouter.post(API_ROUTES.AUTH.REFRESH_TOKEN, refreshTokenController);

authRouter.post(API_ROUTES.AUTH.LOGOUT, logoutController);

export default authRouter;