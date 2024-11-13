import React from "react";
import FilterComponentOne from "../filterComponent/filterSolanaComp";
import FilterComponentTwo from "../filterComponent/filterCompTwo";
import FilterComponentThree from "../filterComponent/filterComponentThree";

import ProfileCard from "../profileCard";

function SectionTwo() {
  return (
    <div className="flex flex-col space-x-1 pr-1 w-[379px] bg-background border">
      <div className="flex flex-row p-2">
        {/* filter component */}
        <FilterComponentOne />
        <FilterComponentTwo />
        <FilterComponentThree />
      </div>
      {/* account / dashboard */}
      <div className=" h-[448px] bg-background text-foreground ">
        <ProfileCard />
      </div>
    </div>
  );
}

export default SectionTwo;
