import { projects } from '@/data';
import { TransitionLink } from '@/utils/TransitionLink';
import Image from 'next/image';
import React from 'react'

export default function AllProjects() {
  return (
    <div className="flex flex-col w-full h-screen bg-black-100 items-center">
      <div>
        <div className="flex flex-col w-full">
          <span
            className={`uppercase leading-3 text-gray text-base mt-4 font-bebas`}
          >
            2023-2024
          </span>
          <span className={`uppercase text-white text-3xl mb-4 font-bebas`}>
            Projects
          </span>
        </div>
        <div className="flex flex-col w-full gap-10">
          {projects.map((proj) => (
            <div key={proj.id} className="w-[750px] h-64 bg-black-200 relative">
              <TransitionLink href={`/projects/${proj.id}`} passHref>
                <Image src={proj.img} alt={proj.alt} fill className="object-cover" />
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
