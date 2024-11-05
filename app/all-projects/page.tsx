import { projects } from "@/data";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";
import React from "react";

export default function AllProjects() {
  return (
    <div className="flex flex-col w-full h-screen items-center p-6">
      <div className="w-full md:w-[750px]">
        <div className="flex flex-col w-full">
          <span
            className="uppercase leading-3 text-gray text-base mt-4 font-bebas"
          >
            2023-2024
          </span>
          <span className="uppercase text-white text-3xl mb-4 font-bebas">
            Projects
          </span>
        </div>
        <div className="flex flex-col w-full gap-10">
          {projects.map((proj) => (
            <div key={proj.id} className="w-full h-[240px] box">
              <TransitionLink href={`/projects/${proj.id}`} passHref>
                <div className="box-inner relative w-full h-full">
                  <Image
                    src={proj.img[0]}
                    alt={proj.alt}
                    fill
                    className="object-cover box-front"
                  />

                  <div
                    className="box-back w-full h-full flex flex-col items-center justify-center bg-black"
                    style={{
                      backgroundImage: "url('/bg_box.jpg')",
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
