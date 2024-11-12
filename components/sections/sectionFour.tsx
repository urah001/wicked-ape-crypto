import React from "react";
import FilterComponentOne from "../filterComponent/filterSolanaComp";
import Image from "next/image";
import PumpCall from "../pumpCall";

function SectionFour() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-2 bg-background mt-2">
        <Image
          src="/sectionIcon/speakerIcon.svg"
          alt="icon"
          width={54}
          height={42}
        />
        <div className="w-[21px] h-[21px] bg-cyan-400 rounded-md mt-2 ml-2 text-center text-black">
          <div className="pb-2 p-2 pt-0">5</div>
        </div>

        <div className="ml-[10%]">
          <FilterComponentOne />
        </div>
      </div>
      {/* pumpcall  */}
      <div>
        <PumpCall />
      </div>
    </div>
  );
}

export default SectionFour;
