import { dm_Sans, space_Mono } from "@/app/fonts/fonts";
import { skills } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full lg:my-10 lg:py-auto">
      <div className=" flex items-center justify-center text-center mt-14 ">
        <h2 className={`${space_Mono.className} text-[48px] font-bold`}>
          Skills
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 my-8">
        {skills.map((skill, index) => (
         <div className="relative w-[200px] h-[46px]">
         <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DBA6F4] to-[#A981FE]"></div>
         <div className="absolute inset-[2px] rounded-full bg-black"></div>
         <div className="relative flex items-center justify-center w-full h-full rounded-full">
           {/* Your content goes here */}
           <span
           key={index}
             className={`${dm_Sans.className} bg-gradient-to-r from-[#FFE597] to-[#AAFF82] bg-clip-text text-transparent text-[16px] font-bold `}
           >
             {skill.name}
           </span>
         </div>
       </div>
        ))}
        
      </div>
      <div className=" flex items-center justify-center my-6 w-[250px] h-[280px]">
        <Image src={"/curved-skillline.png"} alt="portfolio" width={200} height={280} />
      </div>
    </div>
  );
};

export default Skills;
