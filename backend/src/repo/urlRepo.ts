import { IUrl } from "../entity/Iurl";
import { IUrlRepo } from "../interface/Irepo/IurlRepo";
import urlModel, { MongooseUrl } from "../model/urlSchema";
import BaseRepo from "./baseRepo";

export default class UrlRepo extends BaseRepo<MongooseUrl, IUrl> implements IUrlRepo{  
    constructor() { 
        super(urlModel);
    }
    
    async findByLongUrl(longUrl: string): Promise<IUrl | null> {
        const record = await this._model.findOne({ longUrl });
        return record ? this.toEntity(record) : null;
    }

    async addHistory(shortUrl: string, history: string): Promise<void> {
        const record = await this._model.findOne({ shortUrl });
        console.log(record);
        console.log(shortUrl, history);
        if (!record) {
            throw new Error('URL not found');
        }
        record.history.push(history);
        await record.save();
    }

    async findByUserId(userId: string, page: number, limit: number, search?: string): Promise<{ data: IUrl[]; total: number }> {
        const filter: any = { userId };
        if (search && search.trim()) {
            const regex = new RegExp(search.trim(), 'i');
            filter.$or = [
                { longUrl: regex },
                { shortUrl: regex },
            ];
        }

        const total = await this._model.countDocuments(filter);
        const skip = (page - 1) * limit;

        const records = await this._model
            .find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return { data: records.map(record => this.toEntity(record)), total };
    }
}
