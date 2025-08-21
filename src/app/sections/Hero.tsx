import Image from "next/image";
import React from "react";
import ProjectSlider from "../components/ProjectSlider";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-background px-4 pt-24 sm:pt-32">
      {/* Top badge */}
      <div className="mb-8">
        {/* <div className="bg-gradient-to-r rounded-full from-gradientone via-gradienttwo to-gradientthree p-[2px]">
          <div className="bg-background flex gap-2 rounded-full py-2 px-4 items-center justify-center text-sm sm:text-base font-medium text-black">
            Full Stack Web Developer{" "}
            <Image src="/star.svg" alt="Logo Image" width={18} height={18} />
            UI/UX Designer
          </div>
        </div> */}
        <img src="/hero.svg" className="h-11" />
      </div>

      {/* Main Content */}
      <div className="z-30 flex flex-col gap-6 items-center text-center">
        <h2 className="text-transparent py-5 bg-gradient-to-b from-dark to-black bg-clip-text text-4xl sm:text-5xl lg:text-7xl">
          Designing Ideas... <br/>
          Developing Solutions...
        </h2>

        <button className="py-3 px-8 sm:py-4 sm:px-12 md:px-16 w-full sm:w-auto max-w-xs sm:max-w-sm bg-gradient-to-b from-dark to-black text-white shadow-lg shadow-dark/25 rounded-xl font-medium text-base sm:text-lg hover:scale-105 transition-transform">
          Let&apos;s Talk
        </button>

        {/* Project Slider */}
        <div className="w-full mt-8">
          <ProjectSlider />
        </div>
      </div>

      {/* Background gradient blobs */}
      <div className="absolute rounded-full w-[30rem] sm:w-[45rem] lg:w-[60rem] h-[8rem] sm:h-[12rem] lg:h-[15rem] bottom-0 -left-20 bg-gradientone blur-[6rem] sm:blur-[7rem]" />
      <div className="absolute rounded-full w-[30rem] sm:w-[45rem] lg:w-[60rem] h-[8rem] sm:h-[12rem] lg:h-[15rem] bottom-0 right-10 sm:right-40 bg-gradienttwo blur-[6rem] sm:blur-[7rem]" />
      <div className="absolute rounded-full w-[30rem] sm:w-[45rem] lg:w-[60rem] h-[8rem] sm:h-[12rem] lg:h-[15rem] bottom-0 -right-20 bg-gradientthree blur-[6rem] sm:blur-[7rem]" />
    </section>
  );
};

export default Hero;
