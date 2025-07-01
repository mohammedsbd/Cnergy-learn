import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import React from 'react';
import { SessionProvider } from "next-auth/react"

const navLinks = [
    { 
      title: "Features",
      href: "/features",
    },
    { 
        title: "Pricing",
        href: "/pricing",
    },
    { 
        title: "Blog",
        href: "/blog",
    },
    { 
        title: "Documentation",
        href: "/documentation",
    }, 
    
  ];

const MainLayout = ({children}) => {
    return ( 
<div className='flex min-h-screen flex-col'>
    <header className='z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b'>
    
    <SessionProvider>
    <div className='container flex h-20 items-center justify-between py-6'>
        <MainNav items={navLinks} />
    </div>
    </SessionProvider>

    </header>
    
    <main className='flex-1 pt-20 flex flex-col border-b border-gray-700'> {children} </main>
    <SiteFooter/>

</div>
    );
};

export default MainLayout;