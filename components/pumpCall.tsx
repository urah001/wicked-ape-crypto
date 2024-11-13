import Image from "next/image";
import React from "react";
import SectionFourText from "./sectionFourText";

function PumpCall() {
  return (
    <div className="flex flex-col pr-4 border h-full bg-background font-bold p-2 text-base">
      {/* pump call writing */}
      <div className="h-[26px] flex items-center border-b text-foreground text-center space-x-2 mb-2">
        <div className="rounded-full h-[20px] w-[20px]">
          <Image
            src="/sectionIcon/pumpCallIcon.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </div>
        <div>PUMP CALL</div>
      </div>

      {/* other content */}
      <SectionFourText />
    </div>
  );
}

export default PumpCall;
