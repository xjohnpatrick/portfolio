import React from "react";

import {Tooltip} from "@nextui-org/tooltip";
import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardBody} from "@nextui-org/card";
import Rating from '@mui/material/Rating';

import { LuDownload } from "react-icons/lu";
import { RiPencilFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data";
import { HoverEffect } from './ui/card-hover-effect';

export function AboutMe() {

  return (
    <div className="flex flex-col h-full w-full mt-10">
      
      <div className="flex items-center">
        <div className="flex m-4">
          <Tooltip content="John Patrick Culi Isidoro" placement="bottom">
            <img src="/me.jpg" alt="John Patrick's Toga Picture" className="flex w-48 h-56 rounded-full mb-4" />
          </Tooltip>
        </div>
        <div className="text-2xl mx-auto font-normal text-black/80">
          <span>a passionate web developer who <br /> loves coding
            <FlipWords words={flipWords} /> <br />
          </span>
        </div>
      </div>

    <div className="flex w-full h-[280px]">
      <div className="flex flex-col w-1/2 p-4 text-sm text-black gap-4">
        <div className="flex items-center gap-2"><RiPencilFill/>Personal Info</div>
        <ul className="leading-6">
          <li>
            Name: <span className="ml-1 font-normal">John Patrick Isidoro</span>
          </li>
          <li>
            Date of birth: <span className="ml-1 font-normal">31.07.2001</span>
          </li>
          <li>
            Email: <span className="ml-1 font-normal">jpisidoro04@gmail.com</span>
          </li>
          <li>
            Phone: <span className="ml-1 font-normal">+63 991 978 5885</span>
          </li>
          <li>
            City: <span className="ml-1 font-normal">Taguig</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-2/3 p-4 text-black">
      <Tabs aria-label="Skills">
        <Tab
             title={<div className="flex items-center space-x-2 hover:bg-sage/80 p-1">
                      <TbStarsFilled/>
                      <span>Main Skills</span>
                    </div>} 
             className="flex items-center gap-2 mb-4 text-lg">
          <Card className="bg-sage">
            <CardBody>
              <div className="flex w-full gap-4">
                <ul className="text-sm">
                  <li className="flex items-center gap-2">
                    Next.js <Rating sx={{ color: '#3C3D37' }} defaultValue={4.5} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    Tailwind CSS <Rating sx={{ color: '#3C3D37' }} defaultValue={4.5} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    Laravel <Rating sx={{ color: '#3C3D37' }} defaultValue={2} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    MySQL <Rating sx={{ color: '#3C3D37' }} defaultValue={2} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    Sequelize <Rating sx={{ color: '#3C3D37' }} defaultValue={2} precision={0.5} readOnly />
                  </li>
                </ul>
            
                <ul className="text-sm">
                  <li className="flex items-center gap-2">
                    HTML <Rating sx={{ color: '#3C3D37' }} defaultValue={4.5} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    CSS <Rating sx={{ color: '#3C3D37' }} defaultValue={4.5} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    Javascript <Rating sx={{ color: '#3C3D37' }} defaultValue={4} precision={0.5} readOnly />
                  </li>
                  <li className="flex items-center gap-2">
                    Typescript <Rating sx={{ color: '#3C3D37' }} defaultValue={3} precision={0.5} readOnly />
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>  
        </Tab>
        <Tab
             title={<div className="flex items-center space-x-2 hover:bg-sage/80 p-1">
                      <TbStarsFilled/>
                      <span>Soft Skills</span>
                    </div>}  
             className="flex items-center gap-2 mb-4 text-lg">
          <Card>
            <CardBody>
              dfg
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
      </div>
    </div>

      <button className="flex absolute bottom-5 right-5 font-normal text-sm mx-auto p-4 text-beige/70 items-center gap-2 bg-black rounded-full h-12">Download CV <LuDownload/></button>
    </div>
  );
}
