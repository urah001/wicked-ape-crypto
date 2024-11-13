import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import InsightWritting from "./insightWritting";
import InsightTwo from "./insightTwo";

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
          {/* <div className="flex space-x-2">
            <Image
              src="/SubHeaderIcon/subHeaderIconTwo.svg"
              alt="icon"
              width={692}
              height={20}
            />
          </div> */}
          <div className="flex space-x-4 w-[442px] h-[30px] cursor-pointer">
            <div className="flex space-x-4">
              {/*-- first  */}
              <div className="flex space-x-1">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/bellIcon.svg"
                    alt="icon"
                    width={21}
                    height={27}
                  />
                </div>
                {/*--first writing */}
                <div className="flex items-center font-bold space-x-1">
                  <span className=" flex items-center justify-center">
                    TRUMP
                  </span>
                  <span className=" flex items-center justify-center"> MC</span>
                  <span className=" flex items-center justify-center">
                    $300K
                  </span>
                  <div className=" flex items-center justify-center">
                    <Image src="/LLL.svg" alt="icon" width={30} height={30} />
                  </div>
                  <div className=" flex items-center justify-center">50%</div>
                </div>
              </div>
              {/* second  */}
              <InsightWritting />
              {/* <InsightTwo /> */}

              {/* third */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
