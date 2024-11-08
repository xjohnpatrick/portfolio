import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { RxDoubleArrowUp } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="flex w-full h-40 justify-center items-center relative">
      <div className="flex flex-col gap-2 absolute bottom-5 items-center">
        <div className="flex items-center justify-center gap-2">
          {socialMedia.map((profile) => (
            <div
              className="group w-10 h-10 cursor-pointer flex justify-center items-center bg-black rounded-2xl lg:hover:-translate-y-1 lg:transform lg:transition lg:duration-200"
              key={profile.id}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={profile.link}
              >
                <Image
                  src={profile.img}
                  alt={profile.alt}
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </Link>
              <div className="absolute -top-5 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-all duration-300 text-nowrap">
                <span className="text-white/80 text-xs">{profile.text}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-xs font-sans">© 2024 - John Patrick</p>
      </div>

      <Link href="#hero">
        <div className="boxNav w-10 h-10 absolute right-10 hidden lg:flex animate-bounce">
          <div className="boxNav-inner relative w-full h-full">
            <button className="flex w-full h-full absolute bg-black text-white items-center justify-center boxNav-front">
              <SlArrowUp />
            </button>

            <button className="flex w-full h-full absolute bg-white text-black items-center justify-center boxNav-back">
              <RxDoubleArrowUp />
            </button>
          </div>
        </div>
      </Link>
      <Link href="#hero" className="flex justify-center w-full absolute top-0 lg:hidden">
       <button className="border-white px-4 py-2 border text-xs text-white">Back To Top</button>
      </Link>
    </footer>
  );
}
