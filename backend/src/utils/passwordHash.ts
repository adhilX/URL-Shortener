import { hash } from "bcrypt"


export const hashPassword = async(pass:string):Promise<string>=>{
    const hashedPassword = await hash(pass,10)
    return hashedPassword
} 


export const compare = async(pass:string,hashedPass:string):Promise<boolean>=>{
    const match = await compare(pass,hashedPass)
    return match
}