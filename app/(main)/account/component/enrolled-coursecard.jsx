import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { getCategoryDetails } from '@/queries/categories';
import { getReport } from '@/queries/reports';

const EnrolledCourseCard = async ({enrollment}) => {
   // console.log(enrollment);
    const courseCategory = await getCategoryDetails(enrollment?.course?.category?._id);

    const filter = {course: enrollment?.course?._id, student:enrollment?.student?._id }

    const report = await getReport(filter);
    //console.log(report);

    /// Total Completed Modules 
    const totalCompletedModules = report?.totalCompletedModeules?.length;
    
    // Get all Quizzes and Assignments 
    const quizzes = report?.quizAssessment?.assessments;
    const totalQuizzes = quizzes?.length;

    // Find attempted quizzes 
    const quizzesTaken = quizzes.filter(q => q.attempted);
    //console.log(quizzesTaken);
    
    // find how many quizzes answered correct 
