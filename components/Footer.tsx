import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import Link from "next/link";
import SimpleBtn from "./button/SimpleBtn";

const Footer = () => {
  return (
    <footer
      className="w-full h-screen flex flex-col justify-center items-center relative md:mt-96 2xl:mt-0"
      id="contact"
    >
      <div className="flex flex-col items-center gap-6 my-24">
        <h1 className="text-sage text-2xl md:text-4xl text-center">
          Ready to{" "}
          <span className="text-beige/80">
            {" "}
            create something amazing together?
          </span>
        </h1>
        <p className="text-beige/80 text-center mx-10 md:mx-0">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:jpisidoro04@gmail.com">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-beige/50 text-beige/80 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Let&apos;s get in touch
            <FaLocationArrow />
          </button>
        </a>
      </div>

      <div className="flex">
        <Link href="#hero">
          <SimpleBtn
            Icon={FaAnglesUp}
            className="bg-beige rounded-full w-12 h-12 flex items-center justify-center absolute right-20 bottom-28 animate-bounce"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-beige/80 absolute bottom-5 left-5">
          Copyright © 2024 John Patrick
        </p>

        <div className="flex items-center gap-6 mt-12 absolute bottom-5 right-5">
          {socialMedia.map((profile) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg"
              key={profile.id}
            >
              <a href={profile.link}>
                <img
                  src={profile.img}
                  alt={profile.alt}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
