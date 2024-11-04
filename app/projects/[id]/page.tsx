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

  if (!project) {
    return <p>Project not found</p>;
  }

  useEffect(() => {
    const components = document.querySelectorAll(".revealLeft");
    setupObserver(components);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-6">
      <SideNavigation />
      <div className="flex flex-col items-center">
        <h1 className="text-gray font-bebas">{project.website}</h1>
        <span className="text-white text-3xl font-bebas">
          {project.title} - {project.description}
        </span>
        <p className="text-gray text-sm text-center">
          {project.about}
        </p>
      </div>
      <div className="flex gap-4">
        <p className="text-white text-[10px]">
          Role:
          <span className="text-gray text-[10px]"> {project.role}</span>
        </p>
        <p className="text-white text-[10px]">
          Organization:
          <span className="text-gray text-[10px]"> {project.agency}</span>
        </p>
        <p className="text-white text-[10px]">
          Year:
          <span className="text-gray text-[10px]"> {project.year}</span>
        </p>
      </div>
      {project.link && (
        <div>
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
            className="relative w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-64 sm:h-80 md:h-96 lg:h-[600px] revealLeft"
          >
            <Image src={image} alt={project.alt} fill />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <TransitionLink href="/">
          <span className="text-blue text-[10px] bg-black-200 p-2 flex items-center hover:text-white gap-1">
            <IoIosArrowBack />
            Home
          </span>
        </TransitionLink>
        <TransitionLink href="/all-projects">
          <span className="text-blue text-[10px] bg-black-200 p-2 flex items-center hover:text-white gap-1">
            All Projects
            <IoIosArrowForward />
          </span>
        </TransitionLink>
      </div>
    </div>
  );
}
