import React from "react";
import Logo from "./logo";

const SiteFooter = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by @ Easy Learning 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
