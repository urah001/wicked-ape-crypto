import React from "react";
import FilterComponentThree from "../filterComponent/filterComponentThree";
import FilterComponentTwo from "../filterComponent/filterComponentTwo";
import FilterComponentOne from "../filterComponent/filterComponentOne";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileCard from "../profileCard";

function SectionThree() {
  return (
    <div className="flex flex-col p-2 space-x-4 w-[379px] h-100 border-[0.5px] bg-background">
      <div className="flex flex-row p-2">
        {/* filter component */}
        <FilterComponentOne />
        <FilterComponentTwo />
        <FilterComponentThree />
      </div>
      {/* account / dashboard */}
      <div className=" h-[448px] bg-background text-foreground p-0 ml-0">
        <ProfileCard />
      </div>
    </div>
  );
}

export default SectionThree;
