import React from "react";
import FilterComponentOne from "../filterComponent/filterSolanaComp";
import Image from "next/image";
import PumpCall from "../pumpCall";
import MoonShotCall from "../moonShotCall";

function SectionFour() {
  return (
    // the whole section four component positioned at the far right of the page
    <div className="flex flex-col w-[241px] ">
      {/* speaker icon, badge and, filter */}
      <div className="flex space-x-[10%] flex-row bg-background mt-[4px] border p-3">
        {/* speaker icon and badge  positioned on the top of section four */}
        <div className="flex flex-row cursor-pointer">
          {/* the speaker icon position at the top left of the section four */}
          <Image
            src="/sectionIcon/speakerIcon.svg"
            alt="icon"
            width={54}
            height={42}
          />
          <div className="w-[21px] h-[21px] bg-cyan-400 rounded-md mt-2 ml-2 text-center text-black">
            <div className="pb-2 p-2 pt-0 cursor-pointer">5</div>
          </div>
        </div>

        <div className="ml-[10%]">
          <FilterComponentOne />
        </div>
      </div>
      {/* pumpcall  */}
      <div className="space-y-4 w-[100%]">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="space-y-2">
              <PumpCall />
              <MoonShotCall />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionFour;
