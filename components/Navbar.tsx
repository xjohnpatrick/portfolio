"use client";
import React, { useEffect, useState } from "react";
import SimpleBtn from "./button/SimpleBtn";
import { TransitionLink } from "@/utils/TransitionLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex w-full sticky top-0 z-50">
      <div
        className={`flex w-full transition-all duration-300 ${
          scrolled ? "bg-black h-10" : "bg-transparent h-16"
        }`}
      >
        <div
          className={`font-chokokutai absolute left-4 text-white uppercase transition-all duration-300 ease-in-out text-3xl cursor-default ${
            scrolled ? "top-0 text-2xl" : "top-2.5"
          }`}
        >
          jpi
        </div>
        <div
          className={`flex absolute right-4 text-white gap-6 transition-all duration-300 ease-in-out text-lg font-bebas ${
            scrolled ? "top-2" : "top-4"
          }`}
        >
          <TransitionLink href="/">
            <SimpleBtn title="Home" />
          </TransitionLink>
          <TransitionLink href="/all-projects">
            <SimpleBtn title="Projects" />
          </TransitionLink>
          <TransitionLink href="/info">
            <SimpleBtn title="Info" />
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
