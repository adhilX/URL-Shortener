import { Request, Response } from "express";
export const loginController = async (req: Request, res: Response) => {
    try {
        res.send("Login endpoint");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
 }


 