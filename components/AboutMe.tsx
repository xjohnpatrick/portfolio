import { experience, personalInfo } from "@/data";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex w-full h-[1000px] justify-center p-4 mt-16">
      <div className="flex flex-col w-[1200px]">
        <span className="font-bebas tracking-wider leading-3 text-gray text-[16px]">
          Information
        </span>
        <span className="font-bebas text-white text-3xl">About Me</span>

        {personalInfo.map((info) => (
          <div key={info.id} className="flex w-full bg-black-200 h-96 my-4 p-1">
            <div className="flex w-full gap-1">
              <div className="flex w-full relative">
                <Image
                  src={info.img[0]}
                  alt={info.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col lg:flex-row w-full gap-1">
                <div className="flex w-full h-full gap-1">
                  {[info.img[2]].map((src, index) => (
                    <div key={index} className="w-full h-full relative">
                      <Image
                        src={src}
                        alt={info.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex lg:flex-col w-full h-full gap-1">
                  {[info.img[3], info.img[4]].map((src, index) => (
                    <div key={index} className="w-full h-full relative">
                      <Image
                        src={src}
                        alt={info.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
            <div key={exp.id} className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-auto flex items-center">
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
