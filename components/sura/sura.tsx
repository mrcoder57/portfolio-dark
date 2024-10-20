import { dm_Sans, nanum_Pen_Script, space_Mono } from "@/app/fonts/fonts";
import React from "react";
import Image from "next/image";
const SuraComp = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className=" flex flex-row  justify-between gap-x-14">
        <div className=" flex items-center justify-center w-[285.26px] h-[381.05px] relative">
          <Image src={"/sura-curl.png"} alt="portfolio" fill />
        </div>
        <p
          className={`${nanum_Pen_Script.className} mt-20 text-[40px] max-w-[450px] bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
        >
          I'm obsessed with design systems
        </p>
      </div>
      <div className=" flex flex-row items-center justify-between w-full my-14">
        <div className=" flex items-center justify-center relative w-[530px] h-[970px]">
          <Image src={"/sura.png"} alt="portfolio" fill />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <h2
              className={`${space_Mono.className} text-[48px] font-bold bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
            >
              Sura
            </h2>
            <p
              className={`${space_Mono.className} text-[28px] font-bold  bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF] bg-clip-text text-transparent`}
            >
              2021 - Present
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center max-w-[500px] mt-5 ">
            <p className={`${dm_Sans.className} text-[28px] font-bold`}>
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
