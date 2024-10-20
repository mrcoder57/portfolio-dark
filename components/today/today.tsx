import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";
const Today = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <div className=" flex flex-row items-around justify-around">
        <div className=" flex flex-col relative w-[520px] h-[460px]">
          <Image src={"/Mada.png"} alt="portfolio" fill />
        </div>
        <div className=" flex items-center justify-center w-[250px] h-[550px] relative mt-[-100px] ml-[-100px]">
          <Image src={"/today-curve.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col items-center justify-center lg:mt-48 ml-28">
          <Image
            src={"/Usa.png"}
            alt="portfolio"
            width={80}
            height={80}
            className="relative rounded-full "
          />
          <p
            className={`${nanum_Pen_Script.className} text-[40px] max-w-[450px] bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
          >
            I am improving my English skills
          </p>
        </div>
      </div>
      <div className=" flex flex-row-reverse items-center justify-between w-full my-14 h-full">
        <div className=" flex items-center justify-center relative w-[470px] h-[685px]">
          <Image src={"/potraits.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} text-[48px] font-bold bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent`}
            >
              Today
            </h2>
          </div>
          <div className=" flex flex-col items-center justify-center max-w-[500px] mt-5 ">
            <p className={`${dm_Sans.className} text-[28px] font-bold`}>
              I want to lead ux projects remotely and move to the south of Chile
              with my Family and our kittens.
            </p>
          </div>
          <div className=" flex items-center justify-center relative w-[610px] h-[350px]">
          <Image src={"/cats.png"} alt="portfolio" fill />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
