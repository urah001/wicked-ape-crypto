import React from "react";
import FilterComponentOne from "../filterComponent/filterComponentOne";
import FilterComponentThree from "../filterComponent/filterComponentThree";
import FilterComponentTwo from "../filterComponent/filterComponentTwo";

import ProfileCard from "../profileCard";
function SectionOne() {
  return (
    <div className="flex flex-col space-x-4 w-[379px] p-2 h-[100%] bg-background">
      <div className="flex flex-row p-2 ">
        {/* filter component */}
        <FilterComponentOne />
        <FilterComponentTwo />
        <FilterComponentThree />
      </div>
      {/* account / dashboard */}
      <div className="bg-background text-foreground space-y-4">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default SectionOne;
