import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data";

export function AboutMe() {
  return (
    <div className="h-full flex mt-36 px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I love coding
        <FlipWords words={flipWords} /> <br />
      </div>
    </div>
  );
}
