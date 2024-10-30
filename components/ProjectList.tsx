"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className="flex flex-col sm:flex-row w-full lg:w-[1000px] gap-4">
      {projects.map((proj) => (
        <div key={proj.id} className="grid grid-cols-1 w-full h-72">
          <div className="relative">
            <Image
              src={proj.img}
              alt={proj.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="flex flex-col items-center group bg-white w-full">
            <div className="items-center justify-center w-full mb-4 mx-2 bg-red-200">
              asd
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 flex-col items-center justify-center w-full text-center">
              <span className="text-lg lg:text-3xl text-white">
                {proj.title}
              </span>
              <span className="text-sm lg:text-2xl text-gray">
                {proj.description}
              </span>
            </div>
          </div> */
}
