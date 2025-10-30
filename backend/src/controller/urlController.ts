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
        // Extract userId from the token (assuming it's added by middleware)
        const userId = (req as any).user?.id;
        
        if (!userId) {
            res.status(StatusCode.UNAUTHORIZED).json({ message: "User not authenticated" });
            return;
        }

        const page = Math.max(parseInt((req.query.page as string) || '1', 10), 1);
        const limit = Math.max(Math.min(parseInt((req.query.limit as string) || '10', 10), 100), 1);
        const search = (req.query.search as string) || undefined;

        const { data, total } = await urlService.getUserHistory(userId, page, limit, search);
        const totalPages = Math.ceil(total / limit) || 1;

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