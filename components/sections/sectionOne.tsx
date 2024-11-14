import React from "react";
import FilterComponentOne from "../filterComponent/filterSolanaComp";
import FilterComponentThree from "../filterComponent/listOrderComponentThree";
import FilterComponentTwo from "../filterComponent/tokenFilterCompTwo";

import ProfileCard from "../profileCard";
function SectionOne() {
  return (
    <div className="flex flex-col space-x-1 pr-1 w-[379px] bg-background">
      <div className="flex flex-row p-2 ">
        {/* filter component */}
        <FilterComponentOne />
        <FilterComponentTwo />
        <FilterComponentThree />
      </div>
      {/* account / dashboard */}
      <div className="bg-background h-[448px] text-foreground space-y-4">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default SectionOne;
