import { Request, Response } from "express";
import urlModel from "../model/urlSchema";
import { StatusCode } from "../config/statusCode";
import generateShortURL from "../utils/shortURL";

export const getShortURL = async (req: Request, res: Response): Promise<void> => {

    try {
        const { longUrl } = req.body

        const existsUrl = await urlModel.findOne({ longUrl })

        if (existsUrl) {
            res.status(StatusCode.OK).json({ shortUrl: existsUrl.shortUrl })
            return
        }
        const url = await urlModel.create({ longUrl, shortUrl: generateShortURL() })
        res.status(StatusCode.CREATED).json({ shortUrl: url.shortUrl })
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
        const url = await urlModel.findOne({ shortUrl: shortId });
        if (url) {
            url.history.push(new Date().toISOString());
            await url.save();
            res.redirect(url.longUrl);
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