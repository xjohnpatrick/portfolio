"use client";
import React, { useEffect } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { TransitionLink } from "@/utils/TransitionLink";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import SideNavigation from "@/components/SideNavigation";
import { setupObserver } from "@/app/scroll";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  useEffect(() => {
    if (project) {
      const components = document.querySelectorAll(".revealLeft");
      setupObserver(components);
    }
  }, [project]);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4 p-6">
      <SideNavigation />
      <div className="flex flex-col items-center">
        <p className="text-gray font-bebas text-sm lg:text-base">
          {project.website}
        </p>
        <p className="text-white text-xl lg:text-3xl font-bebas text-center">
          {project.title} - {project.description}
        </p>
        <p className="text-gray text-xs lg:text-sm text-center">
          {project.about}
        </p>
      </div>
      <div className="flex gap-4 text-white text-[8px] sm:text-[10px]">
        {[
          { label: "Role", value: project.role },
          { label: "Organization", value: project.agency },
          { label: "Year", value: project.year },
        ].map((item, index) => (
          <p key={index} className="flex">
            {item.label}:<span className="text-gray ml-1">{item.value}</span>
          </p>
        ))}
      </div>

      {project.link && (
        <div key={project.id}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="flex text-xs text-blue bg-black-200 p-2"
          >
            View App
          </Link>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {project.img.map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-52 sm:h-80 md:h-96 lg:h-[600px] revealLeft"
          >
            <Image
              src={image}
              alt={project.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {[
          {
            label: "Home",
            href: "/",
            icon: <IoIosArrowBack />,
          },
          {
            label: "All Projects",
            href: "/all-projects",
            icon: <IoIosArrowForward />,
          },
        ].map((item, index) => (
          <TransitionLink key={index} href={item.href}>
            <span className="text-blue text-[10px] bg-black-200 p-2 flex items-center hover:text-white gap-1">
              {item.label === "Home" && item.icon}
              {item.label}
              {item.label === "All Projects" && item.icon}
            </span>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}
