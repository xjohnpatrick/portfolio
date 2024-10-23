import React from "react";
import { experience } from "@/data";
import Image from "next/image";

export const Experience = () => {
  return (
    <div className="flex flex-col w-full h-full mt-4 gap-4">
      {experience.map((exp) => (
        <div key={exp.id}>
          <div className="flex w-full gap-4 mb-4">
            <Image
              src={exp.imgLogo}
              alt={exp.altLogo}
              width={160}
              height={50}
            />
            <div className="flex flex-col text-beige/80 justify-center">
              <span>
                <Image
                  src={exp.titleImg}
                  alt={exp.titleAlt}
                  width={100}
                  height={50}
                  className="text-sm"
                />
              </span>
              <span className="text-sm text-beige/80">{exp.title}</span>
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div>
              <Image
                src={exp.taskImg}
                alt={exp.altTask}
                width={250}
                height={50}
                className="rounded-2xl text-sm text-beige/80"
              />
            </div>
            <div className="flex flex-col w-full bg-black rounded-2xl p-4 space-y-2">
              <h1 className="text-2xl text-beige/80">{exp.position}</h1>
              <span className="text-sm text-beige/80 italic">{exp.date}</span>
              {exp.content?.map((item) => (
                <p className="text-lg text-beige font-normal">{item}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
