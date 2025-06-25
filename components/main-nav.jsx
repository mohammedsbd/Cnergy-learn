'use client' 
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './logo';
import { cn } from '@/lib/utils';

import { X } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'; 
import MobileNav from './mobile-nav';
import { useSession , signOut } from 'next-auth/react';

const MainNav = ({items,children}) => {
    const {data:session} = useSession();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loginSession, setLoginSession] = useState(null);

    useEffect(() => {
        console.log("Test information");
        setLoginSession(session);
    },[session]);



    return (
<>
<div className='flex gap-6 lg:gap-10'>
    <Link href="/">
        <Logo/>
    </Link>
    {
        items?.length ? (
            <nav className='hidden gap-6 lg:flex'>
                {
                   items?.map((item,index) => (
                    <Link
                    key={index}
                    href={item.disable ? "#" : item.href}
                    className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm ")}
                    >
                    {item.title}
                    </Link>
                   )) 
                }
            </nav> 
        ) : null
    }

    {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
    ) }
     
</div>

    <nav className='flex items-center gap-3'>
        
        {
            !loginSession && (
                <div className='items-center gap-3 hidden lg:flex'>
                <Link href='/login' className={cn(buttonVariants({size: "sm"}), "px-4")}>
                    Login
                </Link>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Register</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 mt-4">
            <DropdownMenuItem className="cursor-pointer">
                <Link href='/register/student'>Student</Link> 
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
                <Link href='/register/instructor'>Instructor</Link> 
            </DropdownMenuItem> 
        </DropdownMenuContent>  
    </DropdownMenu> 
            </div> 
            )
        }
        
       

    {loginSession && (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='cursor-pointer'>
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@ariyan" />
    <AvatarFallback>CN</AvatarFallback> 
    </Avatar>
            </div> 
     </DropdownMenuTrigger>

     <DropdownMenuContent align="end" className="w-56 mt-4">
        <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href='account'>Profile</Link> 
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href='account/enrolled-courses'>My Courses</Link> 
        </DropdownMenuItem> 
        <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href=''>Testimonials & Certificates</Link> 
        </DropdownMenuItem> 
        <DropdownMenuItem className="cursor-pointer" asChild>
 <Link href='' onClick={(e) => {e.preventDefault(); signOut(); }} >Logout</Link> 
        </DropdownMenuItem> 
    </DropdownMenuContent>   

    </DropdownMenu>
    )}
    



    <button className='flex items-center space-x-2 lg:hidden' onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <X/> : <Menu/> } 
    </button>


    
    </nav> 

</>


    );
};

export default MainNav;