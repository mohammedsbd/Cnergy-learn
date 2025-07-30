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

