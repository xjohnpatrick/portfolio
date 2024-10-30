import React from "react";
import ProjectList from "@/components/ProjectList";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center">
      <div className="flex w-full h-40 justify-center">
        <span className="text-7xl lg:text-[150px] text-white">
          John Patrick
        </span>
      </div>

      <div className="flex flex-col w-full p-4 lg:items-center">
        <div>
          <div className="flex flex-col">
            <span className="text-sm text-gray leading-3">In progress</span>
            <span className="text-2xl text-white">Projects</span>
          </div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Hero;
