import React from "react";

import { HoverEffect } from "./ui/card-hover-effect";
import { Timeline } from "@/components/ui/timeline";

import { IoIosCheckmarkCircle } from "react-icons/io";

import { projectsData2023, projectsData2024 } from "@/data";

export const Projects = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built my portfolio using Next.js and Tailwind CSS.
          </p>
          <div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <IoIosCheckmarkCircle /> Aceternity UI
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <IoIosCheckmarkCircle /> Next UI
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <IoIosCheckmarkCircle /> Material UI
            </div>
          </div>
          <div className="flex">
            <HoverEffect items={[projectsData2024[0]]} />
          </div>
          <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            This is a self-developed system built with Next.js and Tailwind CSS.
          </p>
          <div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <IoIosCheckmarkCircle /> Next UI
            </div>
          </div>
          <div className="flex">
            <HoverEffect items={[projectsData2024[1]]} />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023 Project",
      content: (
        <div>
          <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built with Laravel and Next.js, along with Tailwind CSS.
          </p>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <IoIosCheckmarkCircle /> Next UI
          </div>
          <div className="flex">
            <HoverEffect items={projectsData2023} />
          </div>
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
