"use client";

import { Tabs } from "@/components/ui/tabs";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import Link from "next/link";
import SimpleBtn from "./button/SimpleBtn";
import { BsEnvelopeArrowDownFill } from "react-icons/bs";

export function BodyTabs() {
  const tabs = [
    {
      title: "About",
      value: "about me page",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-black to-black-100">
          <p className="text-beige">About Me</p>
          <AboutMe />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects page",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-black to-black-100">
          <p className="text-beige">Projects</p>
          <Projects />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience page",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-black to-black-100">
          <p className="text-beige">Experience</p>
          <Experience />
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full h-screen bg-sage/80 rounded-full" id="work">
      <div className="h-[35rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-10">
        <Link href="#contact">
          <SimpleBtn
            title="Email Me"
            Icon={BsEnvelopeArrowDownFill}
            className="hidden absolute top-1 right-5 text-beige lg:flex items-center gap-2 hover:bg-black z-50 rounded-full py-2 px-4"
          />
        </Link>
        <Tabs
          tabs={tabs}
        />
      </div>
    </div>
  );
}
