import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";

function SubHeader() {
  return (
    <div>
      <div className="flex justify-between w-full items-center  p-4 bg-background text-foreground">
        <div className="flex space-x-4">
          <div className="cursor-pointer">
            {/* sub header first icon  */}
            <Image
              src="/SubHeaderIcon/subHeadIconOne.svg"
              alt="icon"
              width={41}
              height={40}
            />
          </div>
          {/* sub header second icon */}
          <div className="flex space-x-2">
            <Image
              src="/SubHeaderIcon/subHeaderIconTwo.svg"
              alt="icon"
              width={692}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
