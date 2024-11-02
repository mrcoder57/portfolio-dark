import React from "react";
import Image from "next/image";
import { dm_Sans } from "@/app/fonts/fonts";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:p-5">
      <div className="relative w-full h-[250px] max-w-[800px]">
        <Image src="/mint-spiral.png" alt="portfolio" fill />
      </div>
      <div className="flex flex-row items-center justify-between w-full lg:gap-5 gap-x-3 my-5">
        <div className="flex flex-col items-center justify-center lg:max-w-[300px] max-w-[120px] gap-y-5 text-center">
          <Image src="/linkedin.svg" alt="LinkedIn" width={60} height={60} className=" lg:w-[60px] lg:h-[60px] h-[30px] w-[30px]" />
          <p className={`${dm_Sans.className} lg:text-[20px] text-[12px]  font-medium`}>
            You can contact me on LinkedIn
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:max-w-[300px] max-w-[120px] gap-y-5 text-center">
          <Image src="/twitter.svg" alt="Twitter" width={60} height={60} className=" lg:w-[60px] lg:h-[60px] h-[30px] w-[30px]" />
          <p className={`${dm_Sans.className} lg:text-[20px] text-[12px] font-medium`}>
            You can contact me on Twitter
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:max-w-[300px] max-w-[120px] gap-y-5 text-center">
          <Image src="/github.svg" alt="GitHub" width={60} height={60} className=" lg:w-[60px] lg:h-[60px] h-[30px] w-[30px]" />
          <p className={`${dm_Sans.className} lg:text-[20px] text-[12px] font-medium`}>
            You can contact me on GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
