import Image from "next/image";
import React from "react";
import logo from "@/assets/cnergy.jpg";
import { cn } from "@/lib/utils";

const Logo = ({ className = "" }) => {
  return (
    <div>
      <Image className={cn("max-w-[80px]", className)} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
