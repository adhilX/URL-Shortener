import { IUrl } from "../../entity/Iurl";

export interface IUrlService {
    createShortUrl(longUrl: string, userId: string): Promise<{ shortUrl: string; isNew: boolean }>;
    getLongUrl(shortUrl: string): Promise<string | null>;
    getUserHistory(
        userId: string,
        page: number,
        limit: number,
        search?: string
    ): Promise<{ data: IUrl[]; total: number }>;
}