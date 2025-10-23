import { IUser } from "../entity/user";
import { IUserRepo } from "../interface/Irepo/IuserRepo";
import User, { MongooseUser } from "../model/userSchema";
import BaseRepo from "./baseRepo";

export default class AuthRepo extends BaseRepo<MongooseUser, IUser> implements IUserRepo{
    constructor() {
        super(User);
    }

    async findById(id: string): Promise<IUser | null> {
        const user = await this._model.findById(id);
        return user ? this.toEntity(user) : null;
    }
}

