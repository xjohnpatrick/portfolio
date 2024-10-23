"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-sage dark:text-neutral-200 text-xs md:text-sm font-normal my-4">
            Built with Mysql and Next.js, along with Tailwind CSS.
          </p>
          <div>
            <div className="flex gap-2 items-center text-sage/80 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <IoIosCheckmarkCircle /> Next UI
            </div>
          </div>
          {projects
            .filter((proj) => proj.id === 0)
            .map((proj) => (
              <Link key={proj.id} href={`#project-${proj.id}`}>
                <div className="flex flex-col bg-sage/80 w-64 h-56 lg:w-72 lg:h-72 rounded-2xl shadow-xl">
                  <div className="flex flex-col h-1/3 p-4">
                    <span className="text-lg text-beige/80">{proj.title}</span>
                    <span className="text-sm text-beige/80">
                      {proj.description}
                    </span>
                  </div>
                  <div className="flex h-2/3 m-2 bg-center bg-cover rounded-2xl items-center z-50 justify-center text-beige/80 font-bold duration-300">
                    <Image
                      src={proj.img}
                      alt={proj.alt}
                      width={500}
                      height={500}
                      className="rounded-2xl w-64 md:w-72 lg:w-full h-[134px] lg:h-full"
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ),
    },
    {
      title: "Early 2023 Project",
      content: (
        <div>
          <p className="text-sage dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built with Laravel and Next.js, along with Tailwind CSS.
          </p>
          <div className="flex gap-2 items-center text-sage/80 dark:text-neutral-300 text-xs md:text-sm mb-2">
            <IoIosCheckmarkCircle /> Next UI
          </div>
          {projects
            .filter((proj) => proj.id === 1)
            .map((proj) => (
              <Link key={proj.id} href={`#project-${proj.id}`}>
                <div className="flex flex-col bg-sage/80 w-64 h-56 lg:w-72 lg:h-72 rounded-2xl shadow-xl">
                  <div className="flex flex-col h-1/3 p-4">
                    <span className="text-lg text-beige/80">{proj.title}</span>
                    <span className="text-sm text-beige/80">
                      {proj.description}
                    </span>
                  </div>
                  <div className="flex h-2/3 m-2 bg-center bg-cover rounded-2xl items-center z-50 justify-center text-beige/80 font-bold duration-300">
                    <Image
                      src={proj.img}
                      alt={proj.alt}
                      width={500}
                      height={500}
                      className="rounded-2xl w-64 md:w-72 lg:w-full h-[134px] lg:h-full"
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
