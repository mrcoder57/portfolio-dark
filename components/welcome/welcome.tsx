import { space_Mono } from "@/app/fonts/fonts";
import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-auto h-full">
      <div className="flex items-center justify-center lg:w-[280px] lg:h-[280px]  w-[100px] h-[100px]">
        <Image
          src="/Avatar.png"
          alt="portfolio"
          layout="responsive" // Ensure the image maintains its aspect ratio
          width={280} // Original width of the image
          height={280} // Original height of the image
          className="object-cover" // Ensures the image covers the div without distortion
        />
      </div>
      <div className="flex items-center justify-center text-center">
        {" "}
        <p
          className={`${space_Mono.className} bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent lg:text-[96px] text-[24px] font-bold `}
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
