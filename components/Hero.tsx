"use client";
import React, { useEffect, useState } from "react";
import SimpleBtn from "./button/SimpleBtn";
import ProjectList from "@/components/ProjectList";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex flex-col w-full h-screen relative">
      <div
        className={`flex sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black h-12" : "bg-transparent h-16"
        }`}
      >
        <button
          className={`font-chokokutai absolute left-5 text-white uppercase transition-all duration-300 ease-in-out text-3xl ${
            scrolled ? "top-1 text-2xl" : "top-2.5"
          }`}
        >
          jpi
        </button>
        <div
          className={`flex absolute right-4 text-white gap-4 transition-all duration-300 ease-in-out text-lg ${
            scrolled ? "top-2.5" : "top-4"
          }`}
        >
          <SimpleBtn title="Projects" />
          <SimpleBtn title="Experience" />
          <SimpleBtn title="About Me" />
        </div>
      </div>

      <div className="flex w-full justify-center">
        <span className="text-[150px] text-white">I am John Patrick</span>
      </div>

      <div className="flex w-full justify-center">
        <div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-100 leading-3">In progress</span>
            <span className="text-2xl text-white">Projects</span>
          </div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Hero;
