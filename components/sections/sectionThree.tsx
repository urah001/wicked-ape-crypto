import React from "react";
import FilterComponentThree from "../filterComponent/filterComponentThree";
import FilterComponentTwo from "../filterComponent/filterCompTwo";
import FilterComponentOne from "../filterComponent/filterSolanaComp";

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
    <div className="flex flex-col space-x-1 pr-1 w-[379px] bg-background">
      <div className="flex flex-row p-2">
        {/* filter component */}
        <FilterComponentOne />
        <FilterComponentTwo />
        <FilterComponentThree />
      </div>
      {/* account / dashboard */}
      <div className="bg-background h-[448px] text-foreground space-y-4">
        <ProfileCard />
      </div>
    </div>
  );
}

export default SectionThree;
