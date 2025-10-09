import e, { Request, Response } from "express";
import User from "../model/userSchema";
import { StatusCode } from "../config/statusCode";
import {comparePassword, hashPassword } from "../utils/passwordHash";
import { accessToken } from "../utils/jwt";
export const registerController = async (req: Request, res: Response):Promise<void> => {

     const { name, email, password } = req.body.user;
     try {
          const existEmail = await User.findOne({ email });

          if (existEmail) {
               res.status(StatusCode.BAD_REQUEST)
                    .json({ message: "User  already exists" });
               return
          }
          const HashedPass = await hashPassword(password)
          const user = new User({ name, email, password: HashedPass });
          await user.save();
       
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
          const existUser = await User.findOne({ email });
          if (!existUser) {
               res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
               return
          }
          const passCompare = await comparePassword(password, existUser.password);
          console.log(passCompare);
          if (!passCompare) {
               res.status(StatusCode.UNAUTHORIZED).json({ message: 'Password does not match' });
               return
          }
          const token = accessToken ({ id: existUser._id })
          res.status(StatusCode.OK).json({ message: 'User logged in successfully', token, user:existUser });

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
