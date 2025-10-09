import axiosInstance from "../axios/axiosInstance";

export const createShortUrl = async (longUrl: string) => {
    try {
      const response = await axiosInstance.post("/url/create-shorturl", { longUrl });
      return response.data;
    } catch (error) {
      console.error("Error creating short URL:", error);
      throw error;
    }
  };