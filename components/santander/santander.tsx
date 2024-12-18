import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";

const Santander = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className=" flex lg:flex-row flex-col  justify-between gap-x-32">
        <div className=" flex items-center justify-center lg:w-[450px] lg:h-[300px] w-[300px] h-[270px] relative">
          <Image src={"/Santander-curve.png"} alt="portfolio" fill />
        </div>
        <p
          className={`${nanum_Pen_Script.className} mt-20 lg:text-[40px] text-[26px] max-w-[450px] bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent`}
        >
          I'm obsessed with design systems
        </p>
      </div>
      <div className=" flex lg:flex-row-reverse flex-col-reverse gap-y-3 items-center justify-between w-full my-14">
        <div className=" flex items-center justify-center relative lg:w-[530px] lg:h-[970px] w-[330px] h-[570px]">
          <Image src={"/Santander.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} lg:text-[48px] text-[34px] font-bold bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent`}
            >
              Santander
            </h2>
            <p
              className={`${space_Mono.className} lg:text-[28px] text-[14px] font-bold  bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent`}
            >
              2021 - 2025
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center lg:max-w-[500px] max-w-[340px] mt-5 ">
            <p className={`${dm_Sans.className} lg:text-[28px] text-[14px] font-bold`}>
              I worked in digital banking for{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent">
                Santander
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#FF4646] to-[#FF9486] underline-offset-auto"></span>
              </span>
              {" "}creating a Design System for the bank's App and website. <br />{" "}
              <br /> Coordinating with multiple teams and considering the needs
              across a large organisation was challenging but the end result was
              a huge improvement In the handoff process. <br /> <br />
              The best thing was the collaborative work with my teammates, {" "}
              <span className="relative inline-block bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent">
                @Nicole 
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#FF4646] to-[#FF9486] underline-offset-auto"></span>
              </span>
              <span className="relative inline-block bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent">
                @Osman {"   "} 
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#FF4646] to-[#FF9486] underline-offset-auto"></span>
              </span>
              {" "}and{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#FF4646] to-[#FF9486] bg-clip-text text-transparent">
                @Tamara
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#FF4646] to-[#FF9486] underline-offset-auto"></span>
              </span>
            </p>
          </div>
          <div className=" flex flex-row items-center justify-between lg:max-w-[500px] max-w-[340px] mt-5 ">
            <div className=" flex items-center justify-center w-[500px] h-[88px] bg-[#282828] rounded-lg px-4">
              <p className={` ${dm_Sans.className} text-[16px] font-[500] `}>
              The design system started very small but little by little it was implemented in most of the bank's digital products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Santander;
