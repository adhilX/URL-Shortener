import axiosInstance from "../axios/axiosInstance";
import type { IUrlHistory } from "../types/IUrl";

export const createShortUrl = async (longUrl: string) => {
    try {
      const response = await axiosInstance.post("/url/create-shorturl", { longUrl });
      return response.data;
    } catch (error) {
      console.error("Error creating short URL:", error);
      throw error;
    }
  };

export const getUserHistory = async (): Promise<IUrlHistory[]> => {
  try {
    const response = await axiosInstance.get("/url/user-history");
    return response.data;
  } catch (error) {
    console.error("Error fetching user history:", error);
    throw error;
  }
};