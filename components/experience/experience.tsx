import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";
const Experience = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full my-4 py-auto">
      <div className=" flex flex-row items-center justify-center text-center mt-14 lg:gap-x-1 ">
        <h2 className={`${space_Mono.className} lg:text-[48px] text-[34px]  font-bold`}>
          My Coding Journey
        </h2>
        <div className="flex items-center justify-center lg:h-[200px] lg:w-[150px] h-[80px] w-[80px]">
          <Image
            src={"/star-props.png"}
            alt="portfolio"
            width={150}
            height={200}
          />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-between w-full">
        <p
          className={` ${nanum_Pen_Script.className} lg:text-[40px] text-[26px] max-w-[300px] bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
        >
          I started my career studying Coding & development in 2021
        </p>
        <div className="lg:flex hidden items-center justify-center lg:h-[350px] lg:w-[250px] h-[150px] w-[100px]">
          {" "}
          {/* Flex container to center content */}
          <Image
            src="/journey-line.png"
            alt="portfolio"
            width={250} // Original width
            height={350} // Original height
            layout="responsive" // Maintain aspect ratio and make it responsive
            className="object-contain" // Adjust this if you want a different scaling behavior
          />
        </div>
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
