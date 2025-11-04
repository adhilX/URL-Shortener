import { Request, Response } from "express";
import { StatusCode } from "../config/statusCode";
import { urlService } from "../Di/urlDi";
export const getShortURL = async (req: Request, res: Response): Promise<void> => {

    try {
        const { longUrl } = req.body;
        const userId = (req as any).user?.id;

        if (!userId) {
            res.status(StatusCode.UNAUTHORIZED).json({ message: "User not authenticated" });
            return;
        }

       const { shortUrl, isNew } = await urlService.createShortUrl(longUrl, userId);
        if (isNew) {
            res.status(StatusCode.CREATED).json({ shortUrl })
            return
        }
        res.status(StatusCode.OK).json({ shortUrl })
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
}

export const redirectURL = async (req: Request, res: Response): Promise<void> => {
    try {
        const { shortId } = req.params;
        const longUrl = await urlService.getLongUrl(shortId);
        if (longUrl) {
            res.redirect(longUrl);
            return;
        } else {
            res.status(StatusCode.NOT_FOUND).json({ message: 'URL not found' });
            return;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("redirectURL ERROR :", error);
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
            return;
        }
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: "Unknown error occurred" });
        return;
    }
};

export const getUserHistory = async (req: Request, res: Response): Promise<void> => {
    try {

        const userId = (req as any).user?.id;
        
        if (!userId) {
            res.status(StatusCode.UNAUTHORIZED).json({ message: "User not authenticated" });
            return;
        }

        const page = parseInt(req.query.page as string) 
        const limit = parseInt(req.query.limit as string)
        const search = (req.query.search as string) 

        const { data, total } = await urlService.getUserHistory(userId, page, limit, search);
        const totalPages = Math.ceil(total / limit) 

        res.status(StatusCode.OK).json({
            items: data,
            page,
            limit,
            total,
            totalPages
        });
        return;
    } catch (error) {
        if (error instanceof Error) {
            console.log("getUserHistory ERROR :", error);
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
            return;
        }
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: "Unknown error occurred" });
        return;
    }
};