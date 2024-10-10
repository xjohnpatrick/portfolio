import React from 'react'

import { HoverEffect } from './ui/card-hover-effect'
import { Timeline } from "@/components/ui/timeline";

import { projectsData2021, projectsData2023, projectsData2024 } from '@/data'

export const Projects = () => {
    const data = [
      {
        title: "Projects for 2024",
        content: (
          <div>
            <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Built with Next.js, Next UI and Aceternity UI from scratch
            </p>
            <div className="flex">
              <HoverEffect items={projectsData2024}/>
            </div>
          </div>
      ),
    }, 
    {
      title: "Early 2023 Projects",
      content: (
        <div>
          <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Built using Laravel and Next.js along with Tailwind CSS and Next UI
          </p>
          <div className="flex">
            <HoverEffect items={projectsData2023}/>
          </div>
        </div>
    ),
  }, 
  {
    title: "Projects from 2021",
    content: (
      <div>
        <p className="text-black-100 dark:text-neutral-200 text-xs md:text-sm font-normal">
          Built using Vanilla JavaScript along with Bootstrap and CSS
        </p>
        <div className="flex">
          <HoverEffect items={projectsData2021}/>
        </div>
      </div>
  ),
}, 
  ];
  return (
      <div className='w-full'>
        <Timeline data={data} />
      </div>
  )
}