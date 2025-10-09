import { sign, verify } from "jsonwebtoken"

 export const accessToken  = (payload:object):string=>{
    return sign(payload ,process.env.JWT_SECRET as string)
 } 

 export const verifyToken = (token:string):object | string=>{
    return verify(token,process.env.JWT_SECRET as string)
 }