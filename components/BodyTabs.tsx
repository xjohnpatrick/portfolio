"use client";

import { Tabs } from "@/components/ui/tabs";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import Link from "next/link";

export function BodyTabs() {
  const tabs = [
    {
      title:  <Link href="#about">About Me</Link>,
      value: "about me page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-beige/90 to-sage">
          <p className="text-sage">About Me</p>
          <AboutMe />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-beige/90 to-sage">
          <p className="text-sage">Projects</p>
          <Projects />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-beige/90 to-sage">
          <p className="text-sage">Experience</p>
          <Experience />
        </div>
      ),
    },
    {
      title: <Link href="#contact">Contact</Link>,
      value: "contact page",
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
