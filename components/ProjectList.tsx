"use client";

import React, { useEffect } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { TransitionLink } from "@/utils/TransitionLink";
import { setupObserver } from "@/app/scroll";

export default function ProjectList() {
  useEffect(() => {
    const components = document.querySelectorAll(".revealUp");
    setupObserver(components);
  }, []);
  return (
    <div className="flex flex-col w-full justify-center items-center h-[700px] lg:h-[500px]">
      <div className="flex flex-col revealUp">
        <span className="text-gray font-bebas text-sm leading-3">
          In Progress
        </span>
        <span className="text-white font-bebas text-3xl">Projects</span>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="box2 grid grid-cols-1 w-[420px] h-64 lg:w-[500px] lg:h-72"
            >
              <TransitionLink href={`/projects/${proj.id}`} passHref>
                <div className="box2-inner relative w-full h-full">
                  <Image
                    src={proj.img[0]}
                    alt={proj.alt}
                    fill
                    className="object-cover box2-front"
                  />

                  <div
                    className="box2-back bg-black w-full h-full flex flex-col items-center justify-center"
                    style={{
                      backgroundImage: "url('/bg_box2.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <span className="text-white font-bebas text-2xl">
                      {proj.title}
                    </span>
                    <span className="text-white font-bebas text-4xl">
                      {proj.description}
                    </span>
                  </div>
                </div>
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
