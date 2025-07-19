"use client"
import React from 'react';
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from '@/lib/utils';
import { createCheckoutSession } from '@/app/actions/stripe';
const EnrollCourse = ({ asLink }) => {

    const formAction = async(data) => {
        const { url } = await createCheckoutSession(data);
        window.location.assign(url);
    }