"use client";
import React, { useEffect, useState } from "react";
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
    <div className="flex flex-col w-full h-[800px] sm:h-[900px] lg:h-[1000px] lg:justify-center gap-4">
      <div className="flex flex-col w-full justify-center items-center h-64 lg:h-auto px-2">
        {heroText[0].text.map((textLine, index) => (
          <span
            key={index}
            className={`text-7xl lg:text-[150px] text-white font-bebas mt-4 text-center ${
              index === currentTextIndex ? "fly" : "hidden"
            }`}
          >
            {textLine}
          </span>
        ))}
      </div>
    </div>
  );
}
