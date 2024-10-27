"use client";

import React from "react";
import AboutMe from "./AboutMe";
import { capabilities } from "@/data";
import Image from "next/image";

export default function Capabilities() {
  return (
    <div className="flex flex-col w-full h-[1170px] relative">
      <div className="flex flex-col items-center h-[600px] w-full">
        <div className="flex flex-col absolute top-5 lg:top-16 text-center z-20">
          <span className="text-gray-100">Capabilities</span>
          <span className="text-white text-2xl">Things I do</span>
        </div>
        <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
          {capabilities.map((cpb) => (
            <div
              key={cpb.id}
              className="relative w-full flex justify-center group"
            >
              <Image
                src={cpb.img}
                alt={cpb.alt}
                width={500}
                height={500}
                className="w-full bg-cover h-auto opacity-40 lg:group-hover:opacity-70 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black-100 opacity-40 lg:group-hover:opacity-20 transition-all duration-300" />
              <div className="flex flex-col absolute bottom-20 lg:group-hover:bottom-32 transition-all text-center duration-300">
                <span className="text-white text-4xl leading-6">
                  {cpb.title}
                </span>
              </div>
              <div className="flex flex-col absolute bottom-14 lg:group-hover:bottom-24 transition-all text-center duration-300 delay-75">
                <span className="text-gray-100 text-lg leading-6">
                  {cpb.description}
                </span>
              </div>
              <div className="hidden lg:flex h-[1px] w-14 bg-gray-100 absolute top-10 lg:group-hover:w-24 transition-all duration-500" />
              <div className="hidden lg:flex h-[1px] w-14 bg-gray-100 absolute bottom-10 lg:group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <AboutMe />
    </div>
  );
}
