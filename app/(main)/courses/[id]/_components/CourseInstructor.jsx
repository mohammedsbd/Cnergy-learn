import React from 'react';
import { Presentation } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import { getCourseDetailsByInstructor } from '@/queries/courses';
import Link from 'next/link';

const CourseInstructor = async ({course}) => {
  const instructor = course?.instructor;
  const fullName = `${instructor?.firstName} ${instructor?.lastName}`
  //console.log(course);


  const courseDetailsByInstructor = await getCourseDetailsByInstructor(instructor._id.toString());

  // console.log(courseDetailsByInstructor);

