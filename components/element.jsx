import Image from "next/image";
import React from "react";

const element = () => {
  return (
    <div className="bg-darkBlue min-h-screen px-0 py-12">
      <div className="w-full bg-fuchsia-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 text-center md:text-left pt-10 pb-10">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Fast-track your learning
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Learn By Doing
          </h2>
          <p className="text-gray-600">
            Learn Programing skills, from absolute beginner to advanced
            mastery.We try to create project base course which help your to
            learn professionally and make you fell as a complete developer
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/images/two.png"
            alt="Learning by doing"
            width={500}
            height={400}
            unoptimized
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/assets/images/one.png"
            alt="Put Your Learning"
            width={500}
            height={400}
            unoptimized
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-green-600 font-semibold text-lg mb-2">
            Step-by-step lessons
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Put Your Learning <br /> Into Practice
          </h2>
          <p className="text-gray-600">
            Apply your learning with real-world projects and learn everything
            you need to take your career to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default element;
