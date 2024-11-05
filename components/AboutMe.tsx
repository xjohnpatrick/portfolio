import { experience, personalInfo } from "@/data";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex w-full h-[1000px] justify-center p-4">
      <div className="flex flex-col w-[1200px]">
        <span className="font-bebas tracking-wider leading-3 text-gray text-[16px]">
          Information
        </span>
        <span className="font-bebas text-white text-3xl">About Me</span>

        {personalInfo.map((info) => (
          <div className="flex w-full bg-black-200 h-96 my-4 p-1">
            <div className="flex bg-green-100 w-full p-1">
              <div className="flex w-full bg-red-100 relative">
                <Image
                  src={info.img[0]}
                  alt={info.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full bg-yellow-100"></div>
            </div>
          </div>
        ))}

        {personalInfo.map((info) => (
          <div key={info.id}>
            {info.content.map((paragraph, index) => (
              <p key={index} className={`text-white/80 mb-4 text-sm`}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <span className={`font-bebas leading-3 text-gray text-[16px] mt-4`}>
          About Me
        </span>
        <span className={`font-bebas text-white text-3xl mb-4`}>
          Experience
        </span>
        <div className="flex gap-4 items-center">
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
    </div>
  );
}
