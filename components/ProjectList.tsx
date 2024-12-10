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
    <div className="flex w-full h-auto justify-center mt-4 revealLeft">
      <div className="flex flex-col items-center w-[320px] sm:w-full h-full">
        <div className="flex flex-col w-full items-center">
          <span className="uppercase leading-3 text-gray text-base mt-4 font-bebas">
            Check It Out
          </span>
          <span className="uppercase text-white text-3xl mb-4 font-bebas">
            Projects
          </span>
        </div>

        <div className="grid grid-cols-2 lg:flex gap-1 lg:gap-4">
          {projects.map((proj) => (
            <React.Fragment key={proj.id}>
              {/* FOR LARGE DEVICES */}
              <div
                key={`${proj.id}-desktop`}
                className="hidden lg:block w-[200px] h-[275px] box2"
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
                      className="box2-back w-full h-full flex flex-col items-center justify-center bg-white"
                      // style={{
                      //   backgroundImage: "url('/bg_box2.jpg')",
                      //   backgroundSize: "contain",
                      //   backgroundRepeat: "no-repeat",
                      // }}
                    >
                      <span className="text-gray-100 font-bebas text-2xl">
                        {proj.title}
                      </span>
                      <span className="text-gray-100 font-bebas text-4xl text-center">
                        {proj.description}
                      </span>
                    </div>
                  </div>
                </TransitionLink>
              </div>

              {/* FOR MOBILE DEVICES */}
              <div
                key={`${proj.id}-mobile`}
                className="block lg:hidden w-[150px] sm:w-[200px] h-[150px] sm:h-[275px] bg-slate-500"
              >
                <TransitionLink href={`/projects/${proj.id}`} passHref>
                  <div className="relative w-full h-full">
                    <Image
                      src={proj.img[0]}
                      alt={proj.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </TransitionLink>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
