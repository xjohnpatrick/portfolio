import { experience } from "@/data";
import Image from "next/image";
import React from "react";
import bcdaLogo from "../public/bcda.svg";
import umakLogo from "../public/umak.svg";
import cmemboApp from "../public/cmemboApp.png"

export const Experience = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <span className="flex text-sage text-2xl my-4">
          Companies and Institution
        </span>
      </div>
      <div>
        <Image
          src={bcdaLogo}
          alt="BCDA Company Logo"
          width={200}
          height={300}
        />
        <div className="grid grid-cols-2 gap-2">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="w-96 h-40 text-2xl flex items-center justify-center px-6 py-2 border-2 border-black dark:border-white dark:text-white text-black rounded-2xl font-bold transform hover:-translate-y-1 transition duration-400"
            >
              {exp.description}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={umakLogo}
          alt="University of Makati Logo"
          width={100}
          height={100}
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          {experience
            .filter((exp) => exp.id === 0)
            .map((exp) => (
              <div
                key={exp.id}
                className="w-96 h-40 text-2xl flex items-center justify-center px-6 py-2 border-2 border-black dark:border-white dark:text-white text-black rounded-2xl font-bold transform hover:-translate-y-1 transition duration-400"
              >
                {exp.description}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
