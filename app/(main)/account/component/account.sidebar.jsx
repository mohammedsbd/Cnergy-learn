import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link"; 
import Menu from './account-menu';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getUserByEmail } from '@/queries/users';

const AccountSidebar = async () => {

    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const loggedInUser = await getUserByEmail(session?.user?.email);
    // console.log(loggedInUser);



    return (
<div className="lg:w-1/4 md:px-3">
<div className="relative">
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <div className="profile-pic text-center mb-5">
            <input
                id="pro-img"
                name="profile-image"
                type="file"
                className="hidden"
                    
            />
