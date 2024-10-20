import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const WorkExperience = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-14">
      <div className=" flex flex-row items-around">
        <p
          className={`${nanum_Pen_Script.className} text-[40px] max-w-[450px] bg-gradient-to-r from-[#A9FE81] to-[#C0F0FF] bg-clip-text text-transparent`}
        >
          I arrived to do my internship and stayed a couple of years as a web
          designer
        </p>
        <div className=" flex items-center justify-center w-[450px] h-[300px] relative">
          <Image src={"/internship-curl.png"} alt="portfolio" fill />
        </div>
      </div>
      <div className=" flex flex-row-reverse items-center justify-between w-full my-14">
        <div className=" flex items-center justify-center relative w-[500px] h-[570px]">
          <Image src={"/mediastream.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} text-[48px] font-bold bg-gradient-to-r from-[#A9FE81] to-[#C0F0FF] bg-clip-text text-transparent`}
            >
              Mediastream
            </h2>
            <p
              className={`${space_Mono.className} text-[28px] font-bold  bg-gradient-to-r from-[#A9FE81] to-[#C0F0FF] bg-clip-text text-transparent`}
            >
              2021 - 2025
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center max-w-[500px] mt-5 ">
            <p className={`${dm_Sans.className} text-[28px] font-bold`}>
              While I was finishing my studies, Mediastream gave me the
              opportunity to work in a great team, with projects for big{" "}
              <span className=" bg-gradient-to-r from-[#A9FE81] to-[#C0F0FF] bg-clip-text text-transparent">
                brands.
              </span>
              <br /> <br />I was lucky to work with{" "}
              <span className=" bg-gradient-to-r from-[#A9FE81] to-[#C0F0FF] bg-clip-text text-transparent">
              @jorlo
              </span>
              , one of the best designers I know and he was a great mentor
              and best friend.
            </p>
          </div>
          <div className=" flex flex-row items-center justify-between max-w-[500px] mt-5 ">
            <div className=" flex items-center justify-center w-[230px] h-[136px] bg-[#282828] rounded-lg px-4">
              <p className={` ${dm_Sans.className} text-[18px] font-[500] `}>
                I was very good at the interaction and web design courses
              </p>
            </div>
            <div className=" flex items-center justify-center w-[230px] h-[136px] bg-[#282828] rounded-lg px-4">
              <p className={` ${dm_Sans.className} text-[18px] font-[500] `}>
                I was very good at the interaction and web design courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
