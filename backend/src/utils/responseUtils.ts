import { Response } from 'express';
import { StatusCode } from '../config/statusCode';

export const handleControllerError = (
    error: unknown, 
    res: Response, 
    operation: string,
    statusCode: number = StatusCode.INTERNAL_SERVER_ERROR
): void => {
    if (error instanceof Error) {
        console.log(`${operation} ERROR:`, error);
        res.status(statusCode).json({ message: error.message });
        return;
    }
    res.status(statusCode).json({ message: "Unknown error occurred" });
    return;
};

export const handleUnauthorized = (res: Response, message: string = "User not authenticated"): void => {
    res.status(StatusCode.UNAUTHORIZED).json({ message });
};

export const formatUserResponse = (user: any) => ({
    _id: user._id,
    name: user.name,
    email: user.email
});

export const getUserFromRequest = (req: any): string | null => {
    return req.user?.id || null;
};
