import { experience, personalInfo } from "@/data";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex w-full h-[600px] justify-center items-center bg-white clip-trapezoid-right absolute bottom-0">
      <div className="flex flex-col w-[1000px]">
        <span className="uppercase text-gray text-sm">
          John Patrick Isidoro
        </span>
        <span className="uppercase text-gray text-3xl">About Me</span>
        {personalInfo.map((info) => (
          <div key={info.id}>
            {info.content.map((paragraph, index) => (
              <p key={index} className="text-gray font-sans mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
        <span className="uppercase text-gray text-sm mt-4">About Me</span>
        <span className="uppercase text-gray text-3xl mb-4">Experience</span>
        {experience.map((exp) => (
          <div>
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
