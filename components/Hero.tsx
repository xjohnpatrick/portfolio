"use client";
import React, { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import { heroText } from "@/data";

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
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
      {heroText[0].text.map((textLine, index) => (
        <span
          key={index}
          className={`text-7xl lg:text-[150px] text-white font-bebas mt-4 ${
            index === currentTextIndex ? "fly" : "hidden"
          }`}
        >
          {textLine}
        </span>
      ))}
      <ProjectList />
    </div>
  );
}
