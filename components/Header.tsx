import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full items-center p-4 bg-custom1 text-foreground">
        {/* First icon positioned at the top left of the page */}
        <div className="flex space-x-4 cursor-pointer">
          <div>
            {/* menu icon  */}
            <Image
              src="/HeaderIcon/menuIcon.svg"
              alt="icon"
              width={30}
              height={30}
            />
          </div>
          {/* sitelogo and nameicon */}
          <div className="flex space-x-2">
            <Image
              src="/HeaderIcon/siteIcon.svg"
              alt="icon"
              width={30}
              height={30}
            />
            <Image
              src="/HeaderIcon/siteNameIcon.svg"
              alt="icon"
              width={98}
              height={13}
            />
          </div>
          {/* search bar icon */}
          <div>
            <Input />
          </div>
        </div>

        {/* Second side positioned at the top right of the page */}
        <div className="flex space-x-4">
          <div className="flex space-x-4 p-4 border ">
            {/*-- Small Container 1 */}
            <div className="w-20 h-20 border flex items-center justify-center">
              1
            </div>

            {/*-- Larger Container 2 with text beside it */}
            <div className="flex items-center space-x-2">
              <div className="w-28 h-28 border flex items-center justify-center">
                2
              </div>
              <div className="text-gray-700 font-semibold">Additional Text</div>
            </div>

            {/*-- Small Container 3 */}
            <div className="w-20 h-20 border flex items-center justify-center">
              3
            </div>

            {/*-- Small Container 4 */}
            <div className="w-20 h-20 border flex items-center justify-center">
              4
            </div>

            {/*-- Small Container 5 */}
            <div className="w-20 h-20 border flex items-center justify-center">
              5
            </div>

            {/*-- Small Container 6 */}
            <div className="w-20 h-20 border flex items-center justify-center">
              6
            </div>
          </div>
          {/* <div>
            <Image
              src="/HeaderIcon/colTwoIcon.svg"
              alt="icon"
              width={441}
              height={30}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
