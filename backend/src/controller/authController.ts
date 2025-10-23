import { Request, Response } from "express";
import { StatusCode } from "../config/statusCode";
import { authService } from "../Di/authDi";
import { setRefreshTokenCookie, clearRefreshTokenCookie } from "../utils/cookieUtils";
import { handleControllerError, formatUserResponse } from "../utils/responseUtils";
export const registerController = async (req: Request, res: Response):Promise<void> => {

     const { name, email, password } = req.body.user;
     try {
       const user = await authService.registerUser({ name, email, password })
         res.status(StatusCode.CREATED).json({
              message: "User registered successfully",
              user: formatUserResponse(user)
         })
         return
     } catch (error) {
          handleControllerError(error, res, "registerUser");
     }
};



export const loginController = async (req: Request, res: Response): Promise<void> => {
     const { email, password } = req.body;
     console.log(email, password);
     try {
         const { user, accessToken, refreshToken } = await authService.loginUser(email, password);
         
         setRefreshTokenCookie(res, refreshToken);

         res.status(StatusCode.OK).json({ 
             message: 'User logged in successfully', 
             accessToken, 
             user: formatUserResponse(user)
         });

     } catch (error) {
          handleControllerError(error, res, "loginUser");
     }
};

export const refreshTokenController = async (req: Request, res: Response): Promise<void> => {
    try {
        const refreshToken = req.cookies.refreshToken;
        
        if (!refreshToken) {
            res.status(StatusCode.UNAUTHORIZED).json({ message: "Refresh token not found" });
            return;
        }

        const { accessToken, refreshToken: newRefreshToken } = await authService.refreshToken(refreshToken);
        
        setRefreshTokenCookie(res, newRefreshToken);

        res.status(StatusCode.OK).json({ 
            message: 'Token refreshed successfully', 
            accessToken 
        });

    } catch (error) {
        handleControllerError(error, res, "refreshToken", StatusCode.UNAUTHORIZED);
    }
};

export const logoutController = async (req: Request, res: Response): Promise<void> => {
    try {
        clearRefreshTokenCookie(res);

        res.status(StatusCode.OK).json({ message: 'Logged out successfully' });
    } catch (error) {
        handleControllerError(error, res, "logout");
    }
};
