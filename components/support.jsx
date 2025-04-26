import Image from "next/image";
import React from "react";

const support = () => {
  return (
    <div className="bg-darkBlue text-black py-5 px-4 md:px-16 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:leading-tight font-poppins">
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative">Let us know for support</span>
            </span>
          </p>

          <p className="text-black leading-relaxed mb-8 mt-8">
            I Am Founder Of Easy Learning Academy And Best Selling Online
            Instructor Around The World My life’s mission is to help novice and
            professional software engineers increase their skills, make more
            money, and ultimately change their lives for the better.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-fuchsia-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-fuchsia-800 transition"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
            >
              Call for Support
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/images/support1.png"
            alt="Support"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default support;
