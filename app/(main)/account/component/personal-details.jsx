"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { updateUserInfo } from '@/app/actions/account';
import { toast } from 'sonner';

const PersonalDetails = ({userInfo}) => {
    // console.log(userInfo);
    const [infoState, setInfoState] = useState({
        "firstName" : userInfo.firstName,
        "lastName" : userInfo.lastName,
        "email" : userInfo.email,
        "designation" : userInfo.designation,
        "bio" : userInfo.bio, 
    });

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        setInfoState({
            ...infoState, [field]: value
        });
    }
    /// console.log(infoState);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateUserInfo(userInfo?.email,infoState);
            toast.success("User details updated successfully");
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    }



    return (
<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
    <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
    <form onSubmit={handleUpdate} >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
                <Label className="mb-2 block">
                    First Name : <span className="text-red-600">*</span>
                </Label>
                <Input
                    type="text"
                    placeholder="First Name:"
                    id="firstName"
                    name="firstName"
                    value={infoState?.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label className="mb-2 block">
                    Last Name : <span className="text-red-600">*</span>
                </Label>
                <Input
                    type="text"
                    placeholder="Last Name:"
                    id="lastName"
                    name="lastName"
                    value={infoState?.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
