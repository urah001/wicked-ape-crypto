import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full items-center p-4 bg-custom1 text-foreground">
        {/* First side */}
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

        {/* Second side */}
        <div className="flex space-x-4">
          {/* reminder : add icons and remove the img late  */}
          {/* <div>icon 1</div>
          <div>icon 2</div>
          <div>icon 3</div>
          <div>icon 4</div> */}
          <div>
            <Image
              src="/HeaderIcon/colTwoIcon.svg"
              alt="icon"
              width={441}
              height={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
