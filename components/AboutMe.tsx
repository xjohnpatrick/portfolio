import React, { useState } from "react";

import { Tooltip } from "@nextui-org/tooltip";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";

import { LuDownload } from "react-icons/lu";
import { RiPencilFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data";
import MainSkills from "./my-skills/MainSkills";
import SoftSkills from "./my-skills/SoftSkills";

export function AboutMe() {
  const [activeTab, setActiveTab] = useState("main-skills");

  const handleTabChange = (key: any) => {
    setActiveTab(key);
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
          <Tabs
            aria-label="Skills"
            selectedKey={activeTab}
            onSelectionChange={handleTabChange}
          >
            <Tab
              key="main-skills"
              title={
                <div
                  className={`flex items-center space-x-2 p-2 rounded-full ${
                    activeTab === "main-skills" ? "bg-sage" : ""
                  }`}
                >
                  <TbStarsFilled />
                  <span>Main Skills</span>
                </div>
              }
              className="flex items-center gap-2 mb-4 text-lg"
            >
              <Card className="bg-sage shadow-xl p-2 rounded-2xl">
                <CardBody>
                  <MainSkills />
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="soft-skills"
              title={
                <div
                  className={`flex items-center space-x-2 p-2 rounded-full ${
                    activeTab === "soft-skills" ? "bg-sage" : ""
                  }`}
                >
                  <TbStarsFilled />
                  <span>Soft Skills</span>
                </div>
              }
              className="flex items-center gap-2 mb-4 text-lg"
            >
              <Card className="bg-sage p-2 rounded-2xl shadow-xl">
                <CardBody>
                  <SoftSkills />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>

      <a
        className="flex absolute bottom-5 right-5 font-normal text-sm mx-auto p-4 text-beige/70 items-center gap-2 bg-black rounded-full h-12"
        href="/ISIDOROJOHNPATRICK-CV.pdf"
        download
      >
        Download CV <LuDownload />
      </a>
    </div>
  );
}
