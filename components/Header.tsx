import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const Header = () => {
  const size = {
    height: 30,
    width: 30,
  };

  return (
    <>
      <div className="flex justify-between w-full h-[50px] items-center bg-custom1 text-foreground">
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
        <div className="flex space-x-4 w-[442px] h-[30px] cursor-pointer">
          <div className="flex space-x-4">
            {/*--fire icon  */}
            <div className="flex space-x-1">
              <div className=" flex items-center justify-center">
                <Image src="/fire.svg" alt="icon" width={21} height={27} />
              </div>

              {/*-- fire badge icon */}
              <div className="flex items-center">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/fireBadge.svg"
                    alt="icon"
                    width={21}
                    height={21}
                  />
                </div>
                {/* fire call text */}
                <div className="w-28 h-28  flex items-center justify-center">
                  <Image
                    src="/fireCall.svg"
                    alt="icon"
                    width={82}
                    height={13}
                  />
                </div>
              </div>
            </div>

            {/*-- wallet */}
            <div className="flex space-x-1">
              <div className=" flex items-center justify-center">
                <Image
                  src="/walletBell.svg"
                  alt="icon"
                  width={25}
                  height={20}
                />
              </div>

              {/*-- walletbell badge  */}
              <div className="  flex items-center justify-center">
                <Image
                  src="/walletBellBadge.svg"
                  alt="icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>

            {/*-- speaker icon */}
            <div className="flex space-x-1">
              <div className="flex items-center justify-center">
                <Image
                  src="/speakerIcon.svg"
                  alt="icon"
                  width={30}
                  height={24}
                />
              </div>

              {/*-- speaker icon badge */}

              <div className="  flex items-center justify-center">
                <Image
                  src="/speakerIconBadge.svg"
                  alt="icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>
            {/*-- messsage icon */}
            <div className="flex space-x-1">
              <div className="  flex items-center justify-center">
                <Image
                  src="/messageIcon.svg"
                  alt="icon"
                  width={30}
                  height={24}
                />
              </div>

              {/*-- message icon badge */}
              <div className="  flex items-center justify-center">
                <Image
                  src="/messageBadge.svg"
                  alt="icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>

            {/*-- profile */}
            <div className="  flex items-center justify-center">
              <Image
                src="/profilePic.svg"
                alt="icon"
                width={size.width}
                height={size.height}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
