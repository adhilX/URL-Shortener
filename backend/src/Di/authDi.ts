import AuthRepo from "../repo/authRepo";
import { AuthService } from "../services/authService";

export const authRepo = new AuthRepo()
export const authService = new AuthService(authRepo)


