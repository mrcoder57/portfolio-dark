import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";
const Experience = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full my-4 py-auto">
      <div className=" flex flex-row items-center justify-center text-center mt-14 gap-x-1 ">
        <h2 className={`${space_Mono.className} text-[48px] font-bold`}>
          My Coding Journey
        </h2>
        <Image
          src={"/star-props.png"}
          alt="portfolio"
          width={150}
          height={200}
        />
      </div>
      <div className=" flex flex-row items-center justify-between w-full">
        <p
          className={` ${nanum_Pen_Script.className} text-[40px] max-w-[300px] bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
        >
          I started my career studying Coding & development in 2021
        </p>
        <Image
          src={"/journey-line.png"}
          alt="portfolio"
          width={250}
          height={350}
        />
        <p
          className={` ${dm_Sans.className} text-[18px] max-w-[300px] bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
        >
          The first time I really came into contact with design I was around
          five years old. Since I was little I liked to draw Ninja turtles on
          the wall.
        </p>
      </div>
    </div>
  );
};

export default Experience;
