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
      className="flex flex-col w-full h-[1000px] md:h-[1500px] lg:justify-center gap-4 mt-16 lg:mt-0 relative"
      id="hero"
    >
        <div className="flex justify-center w-full">
          <div
            className={`font-chokokutai uppercase text-[200px] md:text-[400px] lg:text-[600px] lg:absolute lg:left-[250px] lg:-top-[150px] opacity-20`}
            style={{
              backgroundImage: "url(/myImage4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            j
          </div>
          <div
            className={`font-chokokutai text-white/10 uppercase text-[200px] md:text-[400px] lg:text-[300px] lg:absolute lg:left-[550px] lg:top-[233px]`}
          >
            p
          </div>
          <div
            className={`font-chokokutai text-white/10 uppercase text-[200px] md:text-[400px] lg:text-[300px] lg:absolute lg:left-[850px] lg:top-[400px]`}
          >
            i
          </div>
        </div>

        <div className="flex w-full relative px-4 h-[200px] lg:h-[400px] justify-center">
          <div className="flex flex-col items-center lg:absolute lg:right-56 lg:bottom-0 lg:top-auto xl:bottom-auto xl:top-20 xl:w-[700px]">
            {heroText[0].text.map((textLine, index) => (
              <span
                key={index}
                className={`text-7xl lg:text-[100px] text-white font-bebas text-center ${
                  index === currentTextIndex ? "fly" : "hidden"
                }`}
              >
                {textLine}
              </span>
            ))}
            <p className="text-white text-center text-sm md:text-base lg:text-lg sm:w-[500px]">
              As a Front-End Developer, I bring ideas to life with clean,
              efficient code. I create seamless, interactive experiences that
              engage users. Let&apos;s build something amazing together, one pixel at
              a time!
            </p>
          </div>
        </div>
      <ProjectList />
    </div>
  );
}
