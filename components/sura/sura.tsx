import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";
const SuraComp = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className=" flex lg:flex-row flex-col  justify-between gap-x-14">
        <div className=" flex items-center justify-center w-[285.26px] lg:h-[381.05px] h-[281px] relative">
          <Image src={"/sura-curl.png"} alt="portfolio" fill />
        </div>
        <p
          className={`${nanum_Pen_Script.className} mt-20 lg:text-[40px] text-[26px] lg:max-w-[450px] max-w-[350px] bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
        >
          I'm obsessed with design systems
        </p>
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-between w-full my-14">
        <div className=" flex items-center justify-center relative lg:w-[530px] lg:h-[970px] w-[330px] h-[570px]">
          <Image src={"/sura.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} lg:text-[48px] text-[34px] font-bold bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
            >
              Sura
            </h2>
            <p
              className={`${space_Mono.className} lg:text-[28px] text-[14px] font-bold  bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
            >
              2021 - Present
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center lg:max-w-[500px] max-w-[340px] mt-5 ">
            <p className={`${dm_Sans.className} lg:text-[28px] text-[14px] font-bold`}>
              I joined the Digital Transformation area working in a team focused
              on creating an online sales system for transforming the company's
              current business model.
              <br /> <br /> I met great professionals and led a lot of strategic
              projects for the company together with
              <span className="relative inline-block bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent">
                @Claudio
              </span>
              <span className="relative inline-block bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent">
                @Majo @Ally
              </span>{" "}
              and{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent">
                @Vivi.
              </span> <br /> <br />
              With{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent">
                Italio
              </span>{" "}
              as frontend developer, we implemented a design system that allowed
              us to improve the time to market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuraComp;
