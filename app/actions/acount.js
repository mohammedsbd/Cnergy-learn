"use server"

import { User } from "@/model/user-model";
import { validatePassword } from "@/queries/users";
import { revalidatePath } from "next/cache"; 
import bcrypt from 'bcryptjs';

