import { IUrl } from "../../entity/Iurl";
import { IBaseRepo } from "./IbaseRepo";

export interface IUrlRepo extends IBaseRepo<IUrl> {
    findByLongUrl(longUrl: string): Promise<IUrl | null>;
    addHistory(shortUrl: string, history: string): Promise<void>;
    findByUserId(
        userId: string,
        page: number,
        limit: number,
        search?: string
    ): Promise<{ data: IUrl[]; total: number }>;
}
