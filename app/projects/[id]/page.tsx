import React from "react";
import { projects } from "@/data";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-gray font-bebas">{project.title}</h1>
        <p className="text-white text-3xl font-bebas">{project.description}</p>
      </div>
      <div className="flex gap-4">
        <p className="text-white text-[10px]">
          Role:
          <span className="text-gray text-[10px]"> {project.role}</span>
        </p>
        <p className="text-white text-[10px]">
          Agency:
          <span className="text-gray text-[10px]"> {project.agency}</span>
        </p>
        <p className="text-white text-[10px]">
          Year:
          <span className="text-gray text-[10px]"> {project.year}</span>
        </p>
      </div>
      <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-64 sm:h-80 md:h-96 lg:h-[600px] relative gap-4">
        <Image src={project.img} alt={project.alt} fill className="object-cover"/>
      </div>
    </div>
  );
}