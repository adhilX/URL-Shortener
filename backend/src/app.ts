import express from "express";      
import dotenv from "dotenv";
import authRouter from "./routes/authRoute";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from "./config/db";
import urlRoute from "./routes/urlRoute";
import { BASE_PATHS } from "./constants/routes";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
connectDB();
app.use(cors({ 
    origin: process.env.ORIGIN,
    credentials: true 
}));

app.use(BASE_PATHS.AUTH, authRouter);
app.use(BASE_PATHS.URL, urlRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
  