"use server"

import { User } from "@/model/user-model";
import { validatePassword } from "@/queries/users";
import { revalidatePath } from "next/cache"; 
import bcrypt from 'bcryptjs';

export async function updateUserInfo(email,updatedData){
    try {
        const filter = {email: email};
        await User.findOneAndUpdate(filter,updatedData);
        revalidatePath('/account');
    } catch (error) {
        throw new Error(error);
    }

}
// End method 
