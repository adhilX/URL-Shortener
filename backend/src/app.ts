import express from "express";      
import dotenv from "dotenv";
import authRouter from "./routes/authRoute";
import cors from 'cors'
import connectDB from "./config/db";
import urlRoute from "./routes/urlRoute";
dotenv.config();
const app = express();

app.use(express.json());
connectDB();
app.use(cors({ origin: process.env.ORIGIN }));

app.use('/', authRouter);
app.use('/url',urlRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
1