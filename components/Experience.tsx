import { experience } from "@/data";
import React from "react";

export const Experience = () => {
    return (
      <div className="flex w-full h-full">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-black">Bases Conversion and Development Authority</h1>
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="w-full h-36 flex items-center justify-center px-6 py-2 bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-2xl font-bold transform hover:-translate-y-1 transition duration-400"
            >
              {exp.description}
            </div>
          ))}
        </div>
      </div>
    );
  };