import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";  
import { User } from "@/model/user-model";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email){
    const user = await User.findOne({email: email}).lean();
    return replaceMongoIdInObject(user);
} 

