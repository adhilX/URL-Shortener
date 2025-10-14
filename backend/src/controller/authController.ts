import { Request, Response } from "express";
import { StatusCode } from "../config/statusCode";
import { authService } from "../Di/authDi";
export const registerController = async (req: Request, res: Response):Promise<void> => {

     const { name, email, password } = req.body.user;
     try {
       const user = await authService.registerUser({ name, email, password })
         res.status(StatusCode.CREATED).json({
              message: "User registered successfully",
              user: {
                   _id: user._id,
                   name: user.name,
                   email: user.email,
              }
         })
         return
     } catch (error) {
          if (error instanceof Error) {
               console.log("registerUser ERROR :", error);
               res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
               return
          }
          res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: "Unknown error occurred" });
          return
     }
};



export const loginController = async (req: Request, res: Response):Promise<void>  => {
     const { email, password } = req.body;
     console.log(email, password);
     try {
         const { user, token } = await authService.loginUser(email, password)
          res.status(StatusCode.OK).json({ message: 'User logged in successfully', token, user });

     } catch (error) {
          if (error instanceof Error) {
               console.log("loginUser ERROR:", error);
               res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
               return
          }
          res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: "Unknown error occurred" });
          return
     }
};
