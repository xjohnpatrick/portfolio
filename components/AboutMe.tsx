import React, { useState } from "react";

import { Tooltip } from "@nextui-org/tooltip";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { AnimatePresence, motion } from "framer-motion";

import { LuDownload } from "react-icons/lu";
import { RiPencilFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data";
import MainSkills from "./my-skills/MainSkills";
import SoftSkills from "./my-skills/SoftSkills";

export function AboutMe() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleTabChange = (key: any) => {
    setHoveredIndex(key === "main-skills" ? 0 : 1);
  };

  const cvBtn = () => {
    const link = document.createElement("a");
    link.href = "/ISIDOROJOHNPATRICK-CV.pdf";
    link.download = "ISIDOROJOHNPATRICK-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full w-full mt-10">
      <div className="flex items-center">
        <div className="flex m-4">
          <Tooltip content="John Patrick Culi Isidoro" placement="bottom">
            <img
              src="/me.jpg"
              alt="John Patrick's Toga Picture"
              className="flex w-48 h-56 rounded-full mb-4"
            />
          </Tooltip>
        </div>
        <div className="text-2xl mx-auto font-normal text-black/80">
          <span>
            a passionate web developer who <br /> loves coding
            <FlipWords words={flipWords} /> <br />
          </span>
        </div>
      </div>

      <div className="flex w-full h-[280px]">
        <div className="flex flex-col w-1/3 p-4 text-sm text-black gap-4">
          <div className="flex items-center gap-2">
            <RiPencilFill />
            Personal Info
          </div>
          <ul className="leading-6">
            <li>
              Name:
              <span className="ml-1 font-normal">John Patrick Isidoro</span>
            </li>
            <li>
              Date of birth:
              <span className="ml-1 font-normal">31.07.2001</span>
            </li>
            <li>
              Email:
              <span className="ml-1 font-normal">jpisidoro04@gmail.com</span>
            </li>
            <li>
              Phone: <span className="ml-1 font-normal">+63 991 978 5885</span>
            </li>
            <li>
              City: <span className="ml-1 font-normal">Taguig</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-2/3 px-2 text-black">
          <Tabs aria-label="Skills" onSelectionChange={handleTabChange}>
            {["main-skills", "soft-skills"].map((tabKey, idx) => (
              <Tab
                key={tabKey}
                title={
                  <div className="flex items-center p-2 rounded-full shadow-xl">
                    <span className="flex items-center gap-2 z-50">
                      <TbStarsFilled />
                      {tabKey === "main-skills" ? "Main Skills" : "Soft Skills"}
                    </span>
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.span
                          className="absolute inset-0 h-full w-full bg-sage rounded-full"
                          layoutId="hoverBackground"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                }
                className="flex items-center mb-4 text-lg"
              >
                <Card className="shadow-xl p-2 rounded-2xl bg-sage">
                  <CardBody>
                    {tabKey === "main-skills" ? <MainSkills /> : <SoftSkills />}
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>

      <Popover placement="left">
        <PopoverTrigger>
          <button
            onClick={cvBtn}
            className="flex absolute bottom-5 right-5 font-normal outline-none text-sm mx-auto p-4 text-beige/70 items-center gap-2 bg-black rounded-full h-12 hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Download CV <LuDownload />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-sm text-beige/80">You've got my CV!</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
