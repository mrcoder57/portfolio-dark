import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const Faisandu = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-14">
      <div className=" flex flex-row items-around justify-around">
        <div className=" flex flex-col relative">
          <Image
            src={"/Faisandu.png"}
            alt="portfolio"
            width={80}
            height={80}
            className="relative left-72 bottom-5"
          />
          <p
            className={`${dm_Sans.className} text-[15px] mt-5 max-w-[400px] bg-gradient-to-r from-[#81B3FE] to-[#E0A6F4] bg-clip-text text-transparent`}
          >
            We designed a lot of things for Gepe, Pedro Piedra, Dënver,
            Prehistoricos, Congelador and all musicians of Quemasucabeza.
          </p>
        </div>
        <div className=" flex items-center justify-center w-[450px] h-[450px] relative">
          <Image src={"/faisandu-line.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col lg:mt-52">
          <Image
            src={"/Faisandu.png"}
            alt="portfolio"
            width={80}
            height={80}
            className="relative  bottom-5 left-[-50px]"
          />
          <p
            className={`${nanum_Pen_Script.className} text-[40px] max-w-[450px] bg-gradient-to-r from-[#81B3FE] to-[#E0A6F4] bg-clip-text text-transparent`}
          >
            I started my design studio with Jorlo.
          </p>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-between w-full my-14 h-full">
        <div className=" flex items-center justify-center relative w-[500px] h-[1050px]">
          <Image src={"/faisandu-group.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} text-[48px] font-bold bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
            >
              Mediastream
            </h2>
            <p
              className={`${space_Mono.className} text-[28px] font-bold  bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
            >
              2021 - 2025
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center max-w-[500px] mt-5 ">
            <p className={`${dm_Sans.className} text-[28px] font-bold`}>
              I left my comfort zone and saw an opportunity to start my own
              project. It was a really good time. <br /> <br /> It was a time of constant
              experimentation and a lot of work in different areas of design. <br /> <br /> I
              learned a lot about software development, marketing, and
              self-management. In collaboration with talented people we designed
              beautiful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faisandu;
