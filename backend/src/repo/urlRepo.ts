import { IUrl } from "../entity/Iurl";
import { IUrlRepo } from "../interface/Irepo/IurlRepo";
import urlModel, { MongooseUrl } from "../model/urlSchema";
import BaseRepo from "./baseRepo";

export default class UrlRepo extends BaseRepo<MongooseUrl, IUrl> implements IUrlRepo{  
    constructor() { 
        super(urlModel);
    }
    
    async findByLongUrl(longUrl: string): Promise<IUrl | null> {
        const record = await this.model.findOne({ longUrl });
        return record ? this.toEntity(record) : null;
    }

    async addHistory(shortUrl: string, history: string): Promise<void> {
        const record = await this.model.findOne({ shortUrl });
        console.log(record);
        console.log(shortUrl, history);
        if (!record) {
            throw new Error('URL not found');
        }
        record.history.push(history);
        await record.save();
    }
}
