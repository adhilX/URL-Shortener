import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone?:string
  password: string;
  isAdmin: boolean; 
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone:{type:String},
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);
 
export default User;