import React from "react";
import ProjectList from "@/components/ProjectList";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center">
      <div className="flex flex-col w-full h-96 justify-center items-center">
        <span className="text-7xl lg:text-[150px] text-white font-bebas">
          John Patrick
        </span>
        <span className="text-4xl text-white font-bebas">
          Front-End Developer
        </span>
      </div>

      <div className="flex flex-col w-full p-4 lg:items-center">
        <div>
          <div className="flex flex-col">
            <span className="text-sm text-gray leading-3 font-bebas">In progress</span>
            <span className="text-2xl text-white font-bebas">Projects</span>
          </div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Hero;
