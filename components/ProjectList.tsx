"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className="flex flex-col w-full h-full">
      {projects.map((proj, index) => (
        <div key={proj.id} id={`project-${proj.id}`} className="flex m-4">
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-col items-center justify-center w-full text-center">
                <h1 className="text-lg lg:text-3xl text-sage">{proj.title}</h1>
                <span className="text-sm lg:text-2xl text-sage">
                  {proj.description}
                </span>
              </div>
              <div className="flex items-center justify-center w-full m-4">
                <Image
                  src={proj.img}
                  alt={proj.alt}
                  width={900}
                  height={500}
                  className="rounded-2xl bg-black w-64 md:w-72 lg:w-full"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center w-full m-4">
                <Image
                  src={proj.img}
                  alt={proj.alt}
                  width={900}
                  height={500}
                  className="rounded-2xl bg-black w-64 md:w-72 lg:w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full text-center">
                <h1 className="text-lg lg:text-3xl text-sage">{proj.title}</h1>
                <span className="text-sm lg:text-2xl text-sage">
                  {proj.description}
                </span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
