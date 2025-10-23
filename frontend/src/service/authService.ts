import { isAxiosError } from "axios";
import axiosInstance from "../axios/axiosInstance";
import type IUser from "../types/IUser";

export const userLogin = async ({email, password}: {email: string, password: string}) => {
  try {
    const response = await axiosInstance.post("/login", {email, password}, {
      withCredentials: true 
    });
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

export const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/refresh-token", {}, {
      withCredentials: true
    });
    return response?.data;
  } catch (error) {
    console.log('error while refreshing token', error)
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message)
    }
    throw new Error('error while refreshing token')
  }
};

export const userLogout = async () => {
  try {
    const response = await axiosInstance.post("/logout", {}, {
      withCredentials: true
    });
    return response?.data;
  } catch (error) {
    console.log('error while logout', error)
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message)
    }
    throw new Error('error while logout')
  }
};
