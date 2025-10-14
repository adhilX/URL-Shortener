import { IUser } from "../../entity/user";

export interface IAuthService {
    registerUser(userData: IUser): Promise<IUser>;
    loginUser(email: string, password: string): Promise<{ user: IUser; token: string }>;
}