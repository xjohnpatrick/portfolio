"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className="flex w-full items-center justify-center">
      {projects.map((proj) => (
          <div key={proj.id} id={`project-${proj.id}`} className="flex m-4">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center w-full text-center">
                  <h1 className="text-lg lg:text-3xl text-white">
                    {proj.title}
                  </h1>
                  <span className="text-sm lg:text-2xl text-gray">
                    {proj.description}
                  </span>
                </div>
                <div className="flex items-center justify-center w-full m-4 hover:-translate-y-1 transform transition duration-200">
                  <Image
                    src={proj.img}
                    alt={proj.alt}
                    width={500}
                    height={500}
                    className="bg-black rounded-2xl"
                  />
                </div>
              </div>
          </div>
      ))}
    </div>
  );
}
