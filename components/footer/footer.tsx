import React from "react";
import Image from "next/image";
import { dm_Sans } from "@/app/fonts/fonts";
const Footer = () => {
  return (
    <div className=" flex flex-col  items-center justify-center ">
      <div className=" flex items-center justify-center relative w-[800px] h-[250px]">
        <Image src={"/mint-spiral.png"} alt="portfolio" fill />
      </div>
      <div className=" flex flex-row items-center justify-between w-full gap-x-20 my-5">
        <div className=" flex flex-col items-center justify-center max-w-[300px] gap-y-5 text-center">
          <Image src={"/linkedin.svg"} alt="portfolio" width={60} height={60} /> 
          <p className={`${dm_Sans.className} text-[28px] font-[500] ml-10`}>
            You can contact me on linkedin
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center max-w-[300px] gap-y-5 text-center">
          <Image src={"/twitter.svg"} alt="portfolio" width={60} height={60} />
          <p className={`${dm_Sans.className} text-[28px] font-[500] ml-10`}>
            You can contact me on linkedin
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center max-w-[300px] gap-y-5 text-center">
          <Image src={"/github.svg"} alt="portfolio" width={60} height={60} />
          <p className={`${dm_Sans.className} text-[28px] font-[500] ml-10`}>
            You can contact me on linkedin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
