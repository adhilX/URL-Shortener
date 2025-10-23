import { IUser } from "../../entity/user";
import { IBaseRepo } from "./IbaseRepo";

export interface IUserRepo extends IBaseRepo<IUser> {
    findById(id: string): Promise<IUser | null>;
}