import { IUrl } from "../entity/Iurl";
import { IUrlRepo } from "../interface/Irepo/IurlRepo";
import generateShortURL from "../utils/shortURL";
import { IUrlService } from "../interface/Iservices/IUrlService";

export class UrlService implements IUrlService{
    constructor(private _urlRepo: IUrlRepo) {}

    async createShortUrl(longUrl: string, userId: string): Promise<{ shortUrl: string; isNew: boolean }> {
        const existsUrl = await this._urlRepo.findByLongUrl(longUrl);
        if (existsUrl) {
            return { shortUrl: existsUrl.shortUrl, isNew: false };
        }
        const shortUrl = generateShortURL();
        const newUrl: IUrl = { longUrl, shortUrl, userId, history: [] };
      
        const url = await this._urlRepo.create(newUrl);
        return { shortUrl: url.shortUrl, isNew: true };
    }


    async getLongUrl(shortUrl: string): Promise<string | null> {
        const url = await this._urlRepo.findByShortUrl(shortUrl);
        if (!url) {
            return null;
        }
        
       await this._urlRepo.addHistory(url.shortUrl, new Date().toISOString());
        
      
        return url.longUrl;
    }

    async getUserHistory(userId: string): Promise<IUrl[]> {
        return await this._urlRepo.findByUserId(userId);
    }

}