import Image from "next/image";
import React from "react";

export default function ProfileCard() {
  return (
    <div className="relative h-[45%] rounded-md border bg-custom1 border-gray-300 p-4">
      {/* Top section: Profile and words */}
      <div className="flex ">
        {" "}
        {/* Moved profile section down */}
        {/* Profile picture and small circles */}
        <div className="flex flex-col w-1/3 items-center relative">
          <div className="w-24 h-24 rounded-full border border-gray-300 bg-cyan-400 flex items-center justify-center">
            {/* profile */}
            <div className="w-20 h-20 rounded-full border border-gray-300 bg-gray-500 relative">
              <Image
                src="/trumpProfile.svg"
                alt="icon"
                width={540}
                height={420}
              />
            </div>
          </div>

          {/* Small circles positioned at the bottom edge of the profile picture */}
          <div className="absolute -bottom-4 -right-1 flex space-x-0.5">
            <div className="w-14 h-14 rounded-full border border-gray-300 bg-black text-foreground font-bold p-3 text-xl">
              55%
            </div>
            <div className="w-6 h-6 rounded-full border border-gray-300 bg-blue-600">
              <Image
                src="/sectionIcon/pumpCallIcon.svg"
                alt="icon"
                width={54}
                height={42}
              />
            </div>
          </div>

          {/* Independent small containers at the bottom-left and bottom-right of profile circle */}
          <div className="absolute -bottom-10 -left-0.5 w-8 h-8 border-gray-300">
            <Image
              src="/filterIcon/solanaIcon.svg"
              alt="icon"
              width={54}
              height={42}
            />
          </div>
          <div className="absolute -bottom-10 -right-2 w-8 h-8 border-gray-300">
            <Image src="/yellowTick.svg" alt="icon" width={54} height={42} />
          </div>
        </div>
        {/* Words section, positioned slightly higher */}
        <div className=" ml-4 mt-2 space-y-2">
          <div className="h-6 p-1 space-x-1 rounded-md ml-0 border-gray-300 font-bold flex flex-row text-xs">
            <span>TRUMP</span>
            <span className="text-opacity-70 text-gray-400">
              TRUMP RAVE....
            </span>{" "}
            <div className="w-[1rem] h-[10px]">
              <Image src="/chatIcon.svg" alt="icon" width={540} height={420} />
            </div>
          </div>
          <div className="h-6 font-bold rounded-md flex flex-row space-x-1">
            <div className="text-yellow-300 text-xl">1s</div>
            {/* profile avatar */}
            <div className="flex">
              <Image
                src="/profileCdAvt.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <div className="text-pink-500">32%</div>
            </div>
            <div className="flex ">
              <Image src="/chefIcon.svg" alt="icon" width={20} height={20} />
              <div className="text-green-300">32%</div>
            </div>
          </div>
          <div className="h-6 rounded-md border border-gray-300"></div>
        </div>
      </div>

      {/* Floating larger square div in the top-right corner */}
      <div className="absolute top-14 right-4 w-20 h-8 rounded-md bg-black border-blue-400 border-2 ">
        <div className="font-bold flex space-x-4 text-xl">
          <div>V</div>
          <span className="border-2 rounded-lg border-blue-500 text-yellow-300 ">
            220k
          </span>
        </div>
      </div>

      {/* Bottom section: Smaller square divs with spacing adjustments */}
      <div className="w-full mt-10 flex justify-between ml-4 cursor-pointer">
        <div className="w-10 h-10 rounded-md border border-gray-300">
          <Image src="/xIcon.svg" alt="icon" width={54} height={42} />
        </div>
        <div className="w-12 h-10 rounded-md border border-gray-300">
          <Image src="/telegramIcon.svg" alt="icon" width={54} height={42} />
        </div>
        <div className="w-10 h-10 rounded-md border border-gray-300">
          <Image src="/planetIcon.svg" alt="icon" width={54} height={42} />
        </div>
        <div className="w-10 h-10 rounded-md border border-gray-300">
          <Image src="/linkIcon.svg" alt="icon" width={54} height={42} />
        </div>
        {/* Added spacing */}
        <div className="w-10 h-10 rounded-md border border-gray-300 ml-4">
          <Image src="/profileBell.svg" alt="icon" width={54} height={42} />
        </div>
        <div className="w-10 h-10 rounded-md border border-gray-300 ">
          <Image src="/velocityIcon.svg" alt="icon" width={54} height={42} />
        </div>
      </div>
    </div>
  );
}

{
  /*<div classNameName="flex items-center p-4 rounded-lg shadow-lg bg-custom1">
      {/* Profile Section */
}
{
  /*<div classNameName="flex-shrink-0 space-y-8">
        <img
          src="/path/to/your/profile.jpg"
          alt="Profile"
          classNameName="w-16 h-16 rounded-full object-cover border"
        />
      </div>

      {/* Right Section with 3 Vertical Containers */
}
{
  /*<div classNameName="flex flex-col ml-4 space-y-2">
        <div classNameName="h-[50px] w-[14px] bg-red-500"></div>
        <div classNameName="h-[50px] w-[14px] bg-blue-500"></div>
        <div classNameName="h-[50px] w-[14px] bg-green-500"></div>
      </div>
    </div>*/
}
