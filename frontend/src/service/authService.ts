import { isAxiosError } from "axios";
import axiosInstance from "../axios/axiosInstance";
import type IUser from "../types/IUser";

export const userLogin = async ({email, password}: {email: string, password: string}) => {
  try {
    const response = await axiosInstance.post("/login", {email,password})
    return response?.data;
  } catch (error) {
 console.log('error while client login', error)
        if (isAxiosError(error)) {
            throw new Error(error.response?.data?.message)
        }
        throw new Error('error while client login')
      }
};
export const userSignup = async (user:IUser) => {
  try {
    const response = await axiosInstance.post("/register", {user})
    return response?.data;
  } catch (error) {
 console.log('error while client signup', error)
        if (isAxiosError(error)) {
            throw new Error(error.response?.data?.message)
        }
        throw new Error('error while client signup')
      }
};
