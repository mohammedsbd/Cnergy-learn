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

