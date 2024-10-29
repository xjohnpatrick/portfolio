import { experience, personalInfo } from "@/data";
import Image from "next/image";
import React from "react";

interface AboutMeProps {
  className?: string;
  text?: string;
}

export default function AboutMe({ className, text }: AboutMeProps) {
  return (
    <div
      className={`flex w-full h-screen justify-center items-center ${
        className || "bg-black-100 p-4"
      }`}
    >
      <div
        className={`flex flex-col ${className ? "w-[1000px]" : "w-[1200px]"}`}
      >
        <span
          className={`uppercase ${
            className ? "text-gray" : "text-gray-100"
          } text-sm`}
        >
          {text ? "Information" : "John Patrick Isidoro"}
        </span>
        <span
          className={`uppercase ${
            className ? "text-gray" : "text-white"
          } text-3xl`}
        >
          About Me
        </span>

        {personalInfo.map((info) => (
          <div key={info.id}>
            {info.content.map((paragraph, index) => (
              <p
                key={index}
                className={`${
                  className ? "text-gray" : "text-white/60"
                } font-sans mb-4`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <span
          className={`uppercase ${
            className ? "text-gray" : "text-white"
          } text-sm mt-4`}
        >
          About Me
        </span>
        <span
          className={`uppercase ${
            className ? "text-gray" : "text-white"
          } text-3xl mb-4`}
        >
          Experience
        </span>

        {experience.map((exp) => (
          <div key={exp.id}>
            <Image
              src={exp.imgLogo}
              alt={exp.altLogo}
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
