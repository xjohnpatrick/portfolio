"use client";
import React, { useEffect, useState } from "react";
import SimpleBtn from "./button/SimpleBtn";
import { TransitionLink } from "@/utils/TransitionLink";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/all-projects", title: "Projects" },
  { href: "/info", title: "Info" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="flex w-full sticky top-0 z-50">
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
          {navLinks.map(({ href, title }) => (
            <TransitionLink key={href} href={href}>
              <SimpleBtn
                title={title}
                isActive={
                  href === "/all-projects"
                    ? pathname.startsWith("/projects/") ||
                      pathname === "/all-projects"
                    : pathname === href
                }
              />
            </TransitionLink>
          ))}
        </div>
      </div>
    </header>
  );
}
