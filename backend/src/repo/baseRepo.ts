import { Model } from "mongoose";
import { IBaseRepo } from "../Irepo/IbaseRepo";

export default class BaseRepo<TPersistence, TDomain> implements IBaseRepo<TDomain> {
    constructor(protected model: Model<TPersistence>) { }

    protected toEntity(data: TPersistence): TDomain {
        return data as unknown as TDomain;
    }

    async create(data: TDomain): Promise<TDomain> {
        const createdData = await this.model.create(data);
        return this.toEntity(createdData);
    }
    async findByEmail(email: string): Promise<TDomain | null> {
        const user = await this.model.findOne({ email });
        return user ? this.toEntity(user) : null;
    }
    async findByShortUrl(shortUrl: string): Promise<TDomain | null> {
        const record = await this.model.findOne({ shortUrl });
        return record ? this.toEntity(record) : null;
    }
}