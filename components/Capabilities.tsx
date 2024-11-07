"use client";
import React, { useEffect } from "react";
import { capabilities, experience, personalInfo, technologies } from "@/data";
import Image from "next/image";
import { setupObserver } from "@/app/scroll";

export default function Capabilities() {
  useEffect(() => {
    const components = document.querySelectorAll(".reveal-left, .reveal-right");
    setupObserver(components);
  }, []);
  return (
    <div className="flex flex-col w-full h-[1500px] md:h-[1450px] relative">
      <div className="flex flex-col items-center h-[600px] w-full reveal-right">
        <div className="flex flex-col absolute top-5 lg:top-14 text-center z-20">
          <span className="text-gray font-bebas">Capabilities</span>
          <span className="text-white text-2xl font-bebas">Things I do</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full bg-black-100">
          {capabilities.map((cpb) => (
            <div
              key={cpb.id}
              className="flex justify-center relative w-full group"
            >
              <Image
                src={cpb.img}
                alt={cpb.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black-100 opacity-60 lg:group-hover:opacity-30 transition-all duration-300" />
              <div className="flex flex-col absolute bottom-20 lg:group-hover:bottom-32 transition-all text-center duration-300">
                <span className="text-white text-4xl leading-6 font-bebas">
                  {cpb.title}
                </span>
              </div>
              <div className="flex flex-col absolute bottom-14 lg:group-hover:bottom-24 transition-all text-center duration-300 delay-75">
                <span className="text-gray text-lg leading-6 font-bebas">
                  {cpb.description}
                </span>
              </div>
              <div className="hidden lg:flex h-[1px] w-14 bg-gray absolute top-10 lg:group-hover:w-24 transition-all duration-500" />
              <div className="hidden lg:flex h-[1px] w-14 bg-gray absolute bottom-10 lg:group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full h-[650px] absolute bottom-0 p-6 lg:p-16 justify-center clip-trapezoid-right bg-white">
        <div className="flex flex-col w-full lg:w-[1200px] h-full">
          <div className="flex flex-col w-full py-2">
            <span className="uppercase leading-3 text-gray text-base font-bebas reveal-left">
              Information
            </span>
            <span className="uppercase text-gray-100 text-3xl font-bebas reveal-left">
              About Me
            </span>
          </div>
          {personalInfo.map((info) => (
            <div key={info.id} className="reveal-right">
              {info.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-100 mb-4 text-xs md:text-sm lg:text-base reveal-right"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-col w-full py-2">
            <span className="uppercase leading-3 text-gray text-base font-bebas reveal-left">
              About Me
            </span>
            <span className="uppercase text-gray-100 text-3xl font-bebas reveal-left">
              Experience
            </span>
          </div>
          <div className="flex gap-4 w-full h-full py-2">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="flex items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-auto lg:h-auto reveal-right"
              >
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

      <div className="flex flex-col w-full h-[280px] md:h-[200px] py-2 px-4 reveal-left items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bebas text-gray text-base mt-2 leading-3">
            Know how to do
          </h1>
          <h1 className="font-bebas text-white text-2xl mt-2">Skills</h1>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8 lg:gap-20">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-auto lg:h-auto"
            >
              <Image src={tech.img} alt={tech.alt} width={80} height={50} />
              <div className="absolute -bottom-4 lg:-bottom-8 text-white text-xs lg:text-lg text-nowrap">
                {tech.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* */}
    </div>
  );
}
