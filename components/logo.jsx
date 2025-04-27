// import Image from "next/image";
// import React from "react";
// import {MainNav} from "@/components/main-nav";
// import logo from "@/assets/cnergy.jpg";
// import { cn } from "@/lib/utils";
// import { MainNav } from '@/components/main-nav';

// const Logo = ({ className = "" }) => {
//   return (
//     <div className='flex min-h-screen flex-col'>
//     <header className='z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b'>
//     <div className='container flex h-20 items-center justify-between py-6'>
//         <MainNav items={navLinks} />
//     </div>

//     </header>
    
//     <main> {children} </main>
//     <SiteFooter/>

// </div>
//   );
// };

// export default Logo;
import Image from "next/image";
import React from "react";
import logo from "@/assets/cnergy.jpg";
import { cn } from "@/lib/utils";

const Logo = ({ className = "" }) => {
  return (
    <div>
      <Image className={cn("max-w-[40px]", className)} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;