import { experience, personalInfo } from "@/data";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex w-full h-screen justify-center bg-black-100 p-4">
      <div className="flex flex-col w-[1200px]">
        <span
          className="uppercase tracking-wider leading-3 text-gray text-[16px]"
        >
          Information
        </span>
        <span
          className="uppercase text-white text-3xl"
        >
          About Me
        </span>

        {personalInfo.map((info) => (
          <div
            key={info.id}
            className="grid grid-cols-2 lg:grid-cols-6 bg-black-200 h-96 my-4 p-1 gap-1"
          >
            <div className="w-full relative col-span-1 lg:col-span-3">
              <Image
                src={info.img[0]}
                alt={info.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:flex w-full relative">
              <Image
                src={info.img[1]}
                alt={info.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:flex w-full relative">
              <Image
                src={info.img[2]}
                alt={info.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:grid grid-flow-row">
              <div className="w-full relative ">
                <Image
                  src={info.img[3]}
                  alt={info.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full relative ">
                <Image
                  src={info.img[4]}
                  alt={info.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:hidden flex flex-col gap-1">
              <div className="grid grid-cols-2 h-full gap-1">
                <div className="w-full relative">
                  <Image
                    src={info.img[1]}
                    alt={info.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full relative">
                  <Image
                    src={info.img[2]}
                    alt={info.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 h-full gap-1">
                <div className="w-full relative">
                  <Image
                    src={info.img[3]}
                    alt={info.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full relative">
                  <Image
                    src={info.img[4]}
                    alt={info.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {personalInfo.map((info) => (
          <div key={info.id}>
            {info.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-white/80 font-sans mb-4`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <span
          className={`uppercase leading-3 text-gray text-[16px] mt-4`}
        >
          About Me
        </span>
        <span
          className={`uppercase text-white text-3xl mb-4`}
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
