import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { words } from "@/data";
import { BodyTabs } from "./BodyTabs";

const Hero = () => {
  return (
    <div className="flex relative flex-col w-full h-screen">
      <span className="flex absolute top-5 left-5 text-beige">
        © Code by John Patrick
      </span>

      <div className="flex flex-col 2xl:flex-row h-full w-full mt-24 md:mt-16">
        <div className="flex flex-col items-center justify-center md:px-10 md:gap-10">
          <p className="text-center md:tracking-wider mb-4 text-lg lg:text-2xl text-beige/80 uppercase">
            Welcome to my portfolio
          </p>
          <TypewriterEffect
            words={words}
            className="w-full md:w-[800px] p-2"
          />
          <p className="text-center md:tracking-wider my-8 text-lg lg:text-2xl text-beige/80">
            Hi, I'm <span className="text-sage">John Patrick</span>, a
            passionate web developer working with Next.js.
          </p>
        </div>

        <div className="flex w-full h-full px-10">
          <BodyTabs />
        </div>
      </div>
    </div>
  );
};

export default Hero;
