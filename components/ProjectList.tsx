"use client";

import React, { useEffect } from "react";
import { projects } from "@/app/data";
import Image from "next/image";
import { TransitionLink } from "@/utils/TransitionLink";
import { setupObserver } from "@/app/scroll";

export default function ProjectList() {
  useEffect(() => {
    const components = document.querySelectorAll(".revealLeft");
    setupObserver(components);
  }, []);
  return (
    <div className="flex w-full h-[500px] justify-center mt-4">
      <div className="flex flex-col w-[320px] sm:w-[400px] lg:w-[500px] xl:w-[1016px] h-full">
        <div className="flex flex-col w-full">
          <span className="uppercase leading-3 text-gray text-base mt-4 font-bebas">
            In Progress
          </span>
          <span className="uppercase text-white text-3xl mb-4 font-bebas">
            Projects
          </span>
        </div>

        <div className="grid xl:grid-cols-2">
          {projects.map((proj) => (
            <React.Fragment key={proj.id}>
              {/* FOR LARGE DEVICES */}
              <div
                key={`${proj.id}-desktop`}
                className="hidden lg:block w-[500px] h-[230px] lg:h-[275px] box2"
              >
                <TransitionLink href={`/projects/${proj.id}`} passHref>
                  <div className="box2-inner relative w-full h-full">
                    <Image
                      src={proj.img[0]}
                      alt={proj.alt}
                      fill
                      className="object-cover box2-front"
                      sizes="(min-width: 1024px) 500px, 100vw"
                    />
                    <div
                      className="box2-back w-full h-full flex flex-col items-center justify-center"
                      style={{
                        backgroundImage: "url('/bg_box2.jpg')",
                        backgroundSize: "contain",
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
                key={`${proj.id}-mobile`}
                className="block lg:hidden w-full h-[150px] sm:h-[200px]"
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
