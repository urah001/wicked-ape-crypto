import Image from "next/image";
import React from "react";
import SectionFourText from "./sectionFourText";

function MoonShotCall() {
  return (
    <div className="flex flex-col border h-full bg-background font-bold p-2">
      {/* moonshot call writing */}
      <div className="w-full h-[26px] flex items-center border-b text-foreground text-center space-x-2 mb-2">
        <div className="rounded-full h-[20px] w-[20px] ">
          <Image
            src="/sectionIcon/moonCallShotIcon.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </div>
        <div>MOON SHOT CALL</div>
      </div>
      {/* other content */}
      <SectionFourText />
    </div>
  );
}

export default MoonShotCall;
