import React from "react";
import { Metadata } from "next";
import { projects } from "@/data";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  const metadata: Metadata = {
    title: project ? project.title : "Projects",
    description: project ? project.description : "Project Description",
  };

  return <main>{children}</main>;
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  return {
    title: project ? project.title : "Projects",
    description: project
      ? project.description
      : "Project Description",
  };
}
