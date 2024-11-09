"use client";
import React, { useEffect, useState } from "react";
import { heroText } from "@/data";
import ProjectList from "@/components/ProjectList";
import { setupObserver } from "@/app/scroll";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === heroText[0].text.length - 1 ? 0 : prevIndex + 1
      );
    }, 5700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const components = document.querySelectorAll(".revealRight");
    setupObserver(components);
  }, []);
  return (
    <div
      className="flex flex-col w-full h-[1000px] sm:h-[1500px] mt-16 p-4"
      id="hero"
    >
      <div className="flex w-full h-[300px] md:h-[600px] xl:h-[800px]">
        <div className="flex w-full h-full relative justify-center">
          <div className="opacity-20 responsive-background font-chokokutai uppercase text-[200px] md:text-[400px] xl:text-[600px] flex xl:absolute xl:-top-56 xl:left-36">
            j
          </div>
          <div className="flex xl:absolute xl:top-56 xl:left-[450px]">
            <span className="font-chokokutai uppercase text-white/10 text-[200px] md:text-[400px] xl:text-[300px]">
              p
            </span>
          </div>
          <div className="flex xl:absolute xl:top-96 xl:left-[800px]">
            <span className="font-chokokutai uppercase text-white/10 text-[200px] md:text-[400px] xl:text-[300px]">
              i
            </span>
          </div>
        </div>
        <div className="hidden xl:flex w-full h-full">
          <div className="flex flex-col h-full w-full justify-center">
            {heroText[0].text.map((textLine, index) => (
              <span
                key={index}
                className={`text-[100px] text-white font-bebas text-center ${
                  index === currentTextIndex ? "fly" : "hidden"
                }`}
              >
                {textLine}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex xl:hidden w-full h-[400px] justify-center">
        <div className="flex flex-col h-full justify-center">
          {heroText[0].text.map((textLine, index) => (
            <span
              key={index}
              className={`text-7xl xl:text-[100px] text-white font-bebas text-center ${
                index === currentTextIndex ? "fly" : "hidden"
              }`}
            >
              {textLine}
            </span>
          ))}
        </div>
      </div>
      <ProjectList />
    </div>
  );
}
