import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { StatusCode } from "../config/statusCode";
import { verifyToken } from "../utils/jwt";

export const tokenChecker = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-access-token"] as string;
  console.log('Token:', token);
  if (!token) {
    res.status(StatusCode.UNAUTHORIZED).json({ error: "Access token missing" });
    return;
  }
  try {
    const decoded = verifyToken(token);

    console.log("Authorized:", decoded);
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ error: "Invalid or expired token" });
    return
  }
};
