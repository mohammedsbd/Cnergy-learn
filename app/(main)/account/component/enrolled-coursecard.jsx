import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { getCategoryDetails } from '@/queries/categories';
import { getReport } from '@/queries/reports';

const EnrolledCourseCard = async ({enrollment}) => {
   // console.log(enrollment);
    const courseCategory = await getCategoryDetails(enrollment?.course?.category?._id);
