"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className="flex w-full items-center justify-center">
      {projects.map((proj) => (
        <div key={proj.id} id={`project-${proj.id}`} className="flex">
          <div className="flex flex-col items-center group">
            <div className="flex items-center justify-center w-full mb-4">
              <Image
                src={proj.img}
                alt={proj.alt}
                width={500}
                height={300}
                className="bg-black h-auto mx-2"
              />
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 flex-col items-center justify-center w-full text-center">
              <span className="text-lg lg:text-3xl text-white">
                {proj.title}
              </span>
              <span className="text-sm lg:text-2xl text-gray">
                {proj.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
