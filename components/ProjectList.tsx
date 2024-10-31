"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import { TransitionLink } from "@/utils/TransitionLink";

export default function ProjectList() {
  return (
    <div className="flex flex-col sm:flex-row w-full lg:w-[1000px] gap-4">
      {projects.map((proj) => (
        <div key={proj.id} className="grid grid-cols-1 w-full h-72">
          <div className="relative">
            <TransitionLink href={`/projects/${proj.id}`} passHref>
              <Image
                src={proj.img}
                alt={proj.alt}
                fill
                className="object-cover"
              />
            </TransitionLink>
          </div>
        </div>
      ))}
    </div>
  );
}
