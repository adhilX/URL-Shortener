import { IUrl } from "../entity/Iurl";
import { IUrlRepo } from "../interface/Irepo/IurlRepo";
import generateShortURL from "../utils/shortURL";
import { IUrlService } from "../interface/Iservices/IUrlService";

export class UrlService implements IUrlService{
    constructor(private urlRepo: IUrlRepo) {}

    async createShortUrl(longUrl: string): Promise<{ shortUrl: string; isNew: boolean }> {
        const existsUrl = await this.urlRepo.findByLongUrl(longUrl);
        if (existsUrl) {
            return { shortUrl: existsUrl.shortUrl, isNew: false };
        }
        const shortUrl = generateShortURL();
        const newUrl: IUrl = { longUrl, shortUrl };
      
        const url = await this.urlRepo.create(newUrl);
        return { shortUrl: url.shortUrl, isNew: true };
    }


    async getLongUrl(shortUrl: string): Promise<string | null> {
        const url = await this.urlRepo.findByShortUrl(shortUrl);
        if (!url) {
            return null;
        }
        
       await this.urlRepo.addHistory(url.shortUrl, new Date().toISOString());
        
      
        return url.longUrl;
    }

}