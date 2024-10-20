import { space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-auto h-full">
      <div className="flex items-center justify-center">
        <Image src={"/Avatar.png"} alt="portfolio" width={280} height={280} />
      </div>
      <div className="flex items-center justify-center text-center">
        {" "}
        <p
          className={`${space_Mono.className} bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent text-[96px] font-bold `}
        >
          Hi. I'm Aman. A Fullstack developer.
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <Image src={"/spiral.png"} alt="portfolio" width={580} height={280} />
      </div>
    </div>
  );
};

export default Welcome;
