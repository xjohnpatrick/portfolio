import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { words } from "@/data";
import Link from "next/link";
import SimpleBtn from "./button/SimpleBtn";

const Hero = () => {
  return (
    <div className="flex relative flex-col w-full h-screen" id="hero">
      <span className="flex absolute top-5 left-5 text-beige">
        © Code by John Patrick
      </span>

      <div className="flex justify-center h-full w-full">
        <div className="flex flex-col items-center justify-center md:px-10 md:gap-10">
          <div className="text-center md:tracking-wider mb-4 text-lg lg:text-2xl text-beige/80 leading-tight">
            Welcome to my portfolio
            <p className="text-center md:tracking-wider my-8 text-lg lg:text-2xl text-beige/80">
              Hi, I&apos;m <span className="text-sage">John Patrick</span>, a
              passionate web developer working with Next.js.
            </p>
          </div>

          <TypewriterEffect words={words} className="w-full md:w-[800px] p-2" />
          <Link href="#work">
            <SimpleBtn
              title="View my work"
              className="px-4 py-2 rounded-md text-beige text-sm bg-sage mt-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
