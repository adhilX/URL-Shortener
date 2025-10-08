import { Request, Response } from "express";
export const loginController = async (req: Request, res: Response) => {
    try {
        res.send("Login endpoint");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
 }


 export const registerController = async (req: Request, res: Response) => {
    try {
        res.send("Register endpoint");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
 }
 