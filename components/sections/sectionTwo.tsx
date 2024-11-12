import React from "react";
import FilterComponentOne from "../filterComponent/filterComponentOne";
import FilterComponentTwo from "../filterComponent/filterComponentTwo";
import FilterComponentThree from "../filterComponent/filterComponentThree";

import ProfileCard from "../profileCard";

function SectionTwo() {
  return (
    <div className="flex flex-col border-[0.5px] space-x-4 w-[379px] p-2 h-100 bg-background">
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
