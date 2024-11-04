"use client";
import React, { useEffect } from "react";
import { capabilities, experience, personalInfo } from "@/data";
import Image from "next/image";
import { setupObserver } from "@/app/scroll";

export default function Capabilities() {
  useEffect(() => {
    const components = document.querySelectorAll(".revealRight, .revealLeft");
    setupObserver(components);
  }, []);
  return (
    <div className="flex flex-col w-full h-[1250px] lg:h-[1170px] relative">
      <div className="flex flex-col items-center h-[600px] w-full revealRight">
        <div className="flex flex-col absolute top-5 lg:top-14 text-center z-20">
          <span className="text-gray font-bebas">Capabilities</span>
          <span className="text-white text-2xl font-bebas">Things I do</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full bg-black-200">
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
              <div className="absolute inset-0 bg-black-200 opacity-40 lg:group-hover:opacity-20 transition-all duration-300" />
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

      <div className="flex w-full h-[700px] lg:h-[600px] justify-center items-center clip-trapezoid-right absolute bottom-0 bg-white revealLeft">
        <div className="flex flex-col w-[1200px] mx-6">
          <span className="uppercase tracking-wider leading-3 text-gray text-base font-bebas">
            Information
          </span>
          <span className="uppercase text-gray-100 text-3xl font-bebas">
            About Me
          </span>
          {personalInfo.map((info) => (
            <div key={info.id}>
              {info.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-100 mb-4 text-xs lg:text-base`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <span
            className={`uppercase leading-3 text-gray text-base mt-4 font-bebas`}
          >
            About Me
          </span>
          <span className={`uppercase text-gray-100 text-3xl mb-4 font-bebas`}>
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
    </div>
  );
}
