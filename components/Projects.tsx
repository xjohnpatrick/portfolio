import React from "react";
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
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <IoIosCheckmarkCircle /> Material UI
            </div>
          </div>
          {projectsData2024
            .filter((proj) => proj.id === 0)
            .map((proj) => (
              <div className="flex flex-col bg-black/80 w-64 h-52 lg:w-72 lg:h-72 rounded-2xl shadow-xl">
                <div className="flex flex-col h-1/3 p-4">
                  <span className="text-lg text-beige/80">{proj.title}</span>
                  <span className="text-sm text-beige/80">
                    {proj.description}
                  </span>
                </div>
                <div
                  className={`flex h-2/3 m-2 bg-center bg-cover rounded-2xl items-center justify-center text-beige/80 font-bold duration-300 hover:scale-150 hover:rounded-none z-50 ${
                    proj.img ? "" : "bg-sage"
                  }`}
                  style={
                    proj.img ? { backgroundImage: `url(${proj.img})` } : {}
                  }
                >
                  {!proj.img && <span>{proj.alt}</span>}
                </div>
              </div>
            ))}
          <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal my-4">
            This is a self-developed system built with Next.js and Tailwind CSS.
          </p>
          <div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <IoIosCheckmarkCircle /> Next UI
            </div>
          </div>
          {projectsData2024
            .filter((proj) => proj.id === 1)
            .map((proj) => (
              <div className="flex flex-col bg-black/80 w-64 h-52 lg:w-72 lg:h-72 rounded-2xl shadow-xl">
                <div className="flex flex-col h-1/3 p-4">
                  <span className="text-lg text-beige/80">{proj.title}</span>
                  <span className="text-sm text-beige/80">
                    {proj.description}
                  </span>
                </div>
                <div
                  className={`flex h-2/3 m-2 bg-center bg-cover rounded-2xl items-center justify-center text-beige/80 z-50 font-bold duration-300 hover:scale-150 hover:rounded-none ${
                    proj.img ? "" : "bg-sage"
                  }`}
                  style={
                    proj.img ? { backgroundImage: `url(${proj.img})` } : {}
                  }
                >
                  {!proj.img && <span>{proj.alt}</span>}
                </div>
              </div>
            ))}
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
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            <IoIosCheckmarkCircle /> Next UI
          </div>
          {projectsData2023.map((proj) => (
            <div className="flex flex-col bg-black/80 w-64 h-52 lg:w-72 lg:h-72 rounded-2xl shadow-xl">
              <div className="flex flex-col h-1/3 p-4">
                <span className="text-lg text-beige/80">{proj.title}</span>
                <span className="text-sm text-beige/80">
                  {proj.description}
                </span>
              </div>
              <div
                className={`flex h-2/3 m-2 bg-center bg-cover rounded-2xl items-center z-50 justify-center text-beige/80 font-bold duration-300 hover:scale-150 hover:rounded-none ${
                  proj.img ? "" : "bg-sage"
                }`}
                style={proj.img ? { backgroundImage: `url(${proj.img})` } : {}}
              >
                {!proj.img && <span>{proj.alt}</span>}
              </div>
            </div>
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
