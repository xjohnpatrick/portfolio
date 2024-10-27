"use client";

import React from "react";
import AboutMe from "./AboutMe";
import { capabilities } from "@/data";
import Image from "next/image";

export default function Capabilities() {
  return (
    <div className="flex flex-col w-full h-[1300px] relative">
      <div className="flex flex-col items-center h-[600px] w-full">
        <div className="flex flex-col absolute top-16 text-center z-20">
          <span className="text-gray-100">Capabilities</span>
          <span className="text-white text-2xl">Things I do</span>
        </div>
        <div className="flex h-full w-full">
          {capabilities.map((cpb) => (
            <div
              key={cpb.id}
              className="relative w-full flex justify-center group"
            >
              <Image
                src={cpb.img}
                alt={cpb.alt}
                width={1000}
                height={500}
                className="w-full h-auto opacity-40 group-hover:opacity-80 transition-all"
              />
              <div className="absolute inset-0 bg-black-100 opacity-50 group-hover:opacity-30 transition-all" />
              <div className="h-[1px] w-12 bg-gray-100 absolute top-10 group-hover:w-20 transition-all" />
              <div className="flex flex-col absolute bottom-14 text-center">
                <span className="text-white text-4xl leading-6">
                  {cpb.title}
                </span>
                <span className="text-gray-300 text-lg transition-all delay-100">
                  {cpb.description}
                </span>
              </div>
              <div className="h-[1px] w-12 bg-gray-100 absolute bottom-10 group-hover:w-20 transition-all" />
            </div>
          ))}
        </div>
      </div>

      <AboutMe />
    </div>
  );
}
