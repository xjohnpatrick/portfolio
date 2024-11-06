"use client";
import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
import { RxDoubleArrowDown } from "react-icons/rx";
import { TransitionLink } from "@/utils/TransitionLink";

export default function SideNavigation() {
  const scrollUp = () => {
    window.scrollBy({ top: -1000, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: 1000, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex flex-col justify-center fixed right-0 top-1/2 -translate-y-1/2 z-50 gap-[1px]">
      {[
        {
          onClick: scrollUp,
          frontIcon: <SlArrowUp size={16} />,
          backIcon: <RxDoubleArrowUp size={24} />,
          className: "boxNav",
        },
        {
          href: "/all-projects",
          frontIcon: <TfiClose size={16} />,
          backIcon: <RxHamburgerMenu size={16} />,
          className: "boxNav3",
          isLink: true,
        },
        {
          onClick: scrollDown,
          frontIcon: <SlArrowDown size={16} />,
          backIcon: <RxDoubleArrowDown size={24} />,
          className: "boxNav2",
        },
      ].map((item, index) =>
        item.isLink ? (
          <TransitionLink key={index} href={item.href}>
            <div className={`${item.className} w-10 h-10`}>
              <div className={`${item.className}-inner w-full h-full relative`}>
                <button
                  className={`flex bg-black w-full h-full absolute text-white items-center justify-center ${item.className}-front`}
                >
                  {item.frontIcon}
                </button>
                <button
                  className={`flex bg-white w-full h-full absolute text-black items-center justify-center ${item.className}-back`}
                >
                  {item.backIcon}
                </button>
              </div>
            </div>
          </TransitionLink>
        ) : (
          <div key={index} className={`${item.className} w-10 h-10`}>
            <div className={`${item.className}-inner relative w-full h-full`}>
              <button
                onClick={item.onClick}
                className={`flex w-full h-full absolute bg-black text-white items-center justify-center ${item.className}-front`}
              >
                {item.frontIcon}
              </button>
              <button
                onClick={item.onClick}
                className={`flex w-full h-full absolute bg-white text-black items-center justify-center ${item.className}-back`}
              >
                {item.backIcon}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
