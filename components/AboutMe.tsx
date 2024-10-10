import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data";

export function AboutMe() {
  return (
    <div className="h-full w-full flex mt-10">
      <div className="text-4xl mx-auto font-normal text-black/80">
        <span className="mt-8">a passionate web developer who <br /> loves coding
          <FlipWords words={flipWords} /> <br />
        </span>
        <div className="flex mt-24">Let's connect! Feel free to check out my work or reach out to me for collaboration.</div>
      </div>
    </div>
  );
}
