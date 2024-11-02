import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const Faisandu = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-14">
      <div className=" flex lg:flex-row flex-col items-around justify-around">
        <div className=" flex flex-col relative">
          <Image
            src={"/Faisandu.png"}
            alt="portfolio"
            width={80}
            height={80}
            className="relative lg:left-72 left-32 bottom-5"
          />
          <p
            className={`${dm_Sans.className} text-[15px] mt-5  lg:max-w-[400px] md:max-w-[400px] max-w-[300px] bg-gradient-to-r from-[#81B3FE] to-[#E0A6F4] bg-clip-text text-transparent`}
          >
            We designed a lot of things for Gepe, Pedro Piedra, Dënver,
            Prehistoricos, Congelador and all musicians of Quemasucabeza.
          </p>
        </div>
        <div className=" flex items-center justify-center lg:w-[450px] lg:h-[450px] w-[310px] h-[270px] relative">
          <Image src={"/faisandu-line.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col lg:mt-52">
          <Image
            src={"/Faisandu.png"}
            alt="portfolio"
            width={80}
            height={80}
            className="relative hidden lg:block md:block  bottom-5 lg:left-[-50px]"
          />
          <p
            className={`${nanum_Pen_Script.className} lg:text-[40px] text-[26px] max-w-[450px] bg-gradient-to-r from-[#81B3FE] to-[#E0A6F4] bg-clip-text text-transparent`}
          >
            I started my design studio with Jorlo.
          </p>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-between w-full my-14 h-full">
        <div className=" flex items-center justify-center relative lg:w-[500px] lg:h-[1050px] w-[330px] h-[570px]"> 
          <Image src={"/faisandu-group.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} lg:text-[48px] text-[34px] font-bold bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
            >
              Mediastream
            </h2>
            <p
              className={`${space_Mono.className} lg:text-[28px] text-[14px] font-bold  bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
            >
              2021 - 2025
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center lg:max-w-[500px] max-w-[340px] mt-5 ">
            <p className={`${dm_Sans.className} lg:text-[28px] text-[14px] font-bold`}>
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
