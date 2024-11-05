"use client";

import React, { useEffect } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { TransitionLink } from "@/utils/TransitionLink";
import { setupObserver } from "@/app/scroll";

export default function ProjectList() {
  useEffect(() => {
    const components = document.querySelectorAll(".revealLeft");
    setupObserver(components);
  }, []);
  return (
    <div className="flex flex-col w-full h-[700px] lg:h-[500px] items-center p-6">
      <div className="w-[340px] sm:w-[400px] lg:w-[1000px] revealLeft">
        <div className="flex flex-col w-full">
          <span className="uppercase leading-3 text-gray text-base mt-4 font-bebas">
            In Progress
          </span>
          <span className="uppercase text-white text-3xl mb-4 font-bebas">
            Projects
          </span>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-10">
          {projects.map((proj) => (
            <>
              {/* FOR LARGE DEVICES */}
              <div
                key={proj.id}
                className="hidden sm:block w-full h-[240px] lg:h-72 box2"
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
                      className="box2-back w-full h-full flex flex-col items-center justify-center bg-black"
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
                      <span className="text-white font-bebas text-4xl text-center">
                        {proj.description}
                      </span>
                    </div>
                  </div>
                </TransitionLink>
              </div>
              {/* FOR MOBILE DEVICES */}
              <div
                key={proj.id}
                className="block sm:hidden w-full h-[240px] lg:h-72 box2"
              >
                <TransitionLink href={`/projects/${proj.id}`} passHref>
                  <div className="relative w-full h-full">
                    <Image
                      src={proj.img[0]}
                      alt={proj.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TransitionLink>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
