import { IUser } from "../entity/user";
import { IUserRepo } from "../interface/Irepo/IuserRepo";
import { hashPassword, comparePassword } from "../utils/passwordHash";
import { accessToken } from "../utils/jwt";
import { IAuthService } from "../interface/Iservices/IAuthService";

export class AuthService implements IAuthService {
    constructor(private authRepo: IUserRepo) { }

    async registerUser(userData: IUser): Promise<IUser> {
        const { name, email, password } = userData;
        const existEmail = await this.authRepo.findByEmail(email);

        if (existEmail) {
            throw new Error("User already exists");
        }
        const HashedPass = await hashPassword(password);
        const user = await this.authRepo.create({ name, email, password: HashedPass });
        return user;
    }

    async loginUser(email: string, password: string): Promise<{ user: IUser; token: string }> {
        const existUser = await this.authRepo.findByEmail(email);
        if (!existUser) {
            throw new Error("User not found")   ;
        }
        const passCompare = await comparePassword(password, existUser.password);
        if (!passCompare) {
            throw new Error("Password does not match");
        }
        const token = accessToken({ id: existUser._id });
        return { user: existUser, token };
    }
}