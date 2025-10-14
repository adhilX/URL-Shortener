import mongoose from 'mongoose';
import { Document } from 'mongoose';


export interface MongooseUrl extends Document {
    longUrl: string;
    shortUrl: string;
    history: string[];
    createdAt: Date;
    updatedAt: Date;
}

const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    history: { type: Array, default: [] },
   },{ timestamps: true});


   const urlModel = mongoose.model<MongooseUrl>('URL', urlSchema);
export default urlModel;