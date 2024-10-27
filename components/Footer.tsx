import { socialMedia } from "@/data";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full h-40 justify-center relative">
      <div className="flex flex-col gap-2 absolute bottom-5 items-center">
        <div className="flex items-center gap-2">
          {socialMedia.map((profile) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center bg-black rounded-2xl hover:-translate-y-1 transform transition duration-200"
              key={profile.id}
            >
              <a href={profile.link}>
                <Image
                  src={profile.img}
                  alt={profile.alt}
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </a>
            </div>
          ))}
        </div>
        <p className="text-white text-xs font-sans">
          © 2024 - John Patrick
        </p>
      </div>
    </footer>
  );
}
