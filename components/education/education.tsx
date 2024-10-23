import { dm_Sans, space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className=" flex lg:flex-row flex-col items-center justify-between w-full my-14">
      <div className=" flex items-center justify-center relative lg:w-[500px] lg:h-[420px] w-[300px] h-[250px]">
        <Image src={"/school.png"} alt="portfolio" fill />
      </div>
      <div className=" flex flex-col justify-center px-2 lg:px-0">
        <div className=" flex flex-col justify-center ">
          <h2
            className={`${space_Mono.className} lg:text-[48px] text-[34px] font-bold bg-gradient-to-r lg:text-left from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
          >
            Education
          </h2>
          <p
            className={`${space_Mono.className} lg:text-[28px] text-[14px] font-bold bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
          >
            2021 - 2025
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center lg:max-w-[500px] max-w-[300px] mt-5  ">
          <p className={`${dm_Sans.className} lg:text-[28px] text-[14px] font-bold`}>
            I started studying at the design school of Duoc UC in Santiago{" "}
            <br /> <br /> In my early years, I explored different styles and met
            great designers.
          </p>
        </div>
        <div className=" flex lg:flex-row flex-col gap-y-3 items-center justify-between lg:max-w-[500px] max-w-[300px] mt-5 ">
          <div className=" flex items-center justify-center w-[230px] h-[136px] bg-[#282828] rounded-lg px-4">
            <p className={` ${dm_Sans.className} text-[18px] font-[500] `}>I was very good at the interaction and web design courses</p>
          </div>
          <div className=" flex items-center justify-center w-[230px] h-[136px] bg-[#282828] rounded-lg px-4">
            <p className={` ${dm_Sans.className} text-[18px] font-[500] `}>I was very good at the interaction and web design courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
