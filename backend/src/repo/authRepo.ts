import { IUser } from "../entity/user";
import { IUserRepo } from "../Irepo/IuserRepo";
import User, { MongooseUser } from "../model/userSchema";
import BaseRepo from "./baseRepo";

export default class AuthRepo extends BaseRepo<MongooseUser, IUser> implements IUserRepo{
    constructor() {
        super(User);
    }
}

