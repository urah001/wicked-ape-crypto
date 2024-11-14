"use client";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Slider } from "@radix-ui/react-slider";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function ProfileCard() {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };
  return (
    <>
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
                <Image
                  src="/chatIcon.svg"
                  alt="icon"
                  width={540}
                  height={420}
                />
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
          <div
            onClick={togglePopup}
            className="w-10 h-10 rounded-md border border-gray-300 ml-4"
          >
            <Image src="/alarmBell.svg" alt="icon" width={54} height={42} />
          </div>
          <div className="w-10 h-10 rounded-md border border-gray-300 ">
            <Image src="/velocityIcon.svg" alt="icon" width={54} height={42} />
          </div>
        </div>
      </div>
      {/* Popup container for onclick alarm icon */}
      {isPopupOpen && (
        <div className="absolute top-[108px] right-0 w-[390px] h-screen max-h-[90vh] rounded-md bg-custom1 text-foreground shadow-lg p-4 z-50 transition-transform duration-300 ease-in-out text-sm overflow-y-auto">
          <div className="font-semibold">
            {/* Popup Content */}
            <div className="flex items-center justify-between border-b pb-1 mb-4 h-12">
              <div className="flex space-x-2 pt-6 pb-1.5 bg-cyan-600/45 pl-4 pr-16 left-0 top-0 absolute ">
                <h2 className="text-2xl">Alarms</h2>
                <AlarmBell />
              </div>
              {/* Option Selection */}
              <div className="flex space-x-6 ml-[13rem]">
                <button onClick={togglePopup}>Cancel</button>
                <button className="px-4 py-2 rounded-md bg-green-700 font-bold">
                  Apply
                </button>
              </div>
            </div>

            {/* type = market cap . movement , amount */}
            <div className="flex flex-col justify-center border-b">
              <div className="flex flex-col">
                <div className="ml-4">Type</div>
                <div className="bg-custom1/95 border flex justify-evenly text-foreground rounded-sm px-2 ml-4 py-1 w-[10rem]">
                  <select className="bg-transparent text-foreground text-sm">
                    <option>Market Cap</option>
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                  </select>
                  <div className="bg-gray-500 rounded-sm h-6 pt-[6px] pl-1.5 cursor-pointer w-6">
                    <Image
                      src="/filterIcon/polygon.svg"
                      alt="icon"
                      width={14}
                      height={14}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other content */}
            <div className="flex justify-center mt-4 flex-col pl-20 space-y-6">
              {/* Volume controls */}
              {[
                "volume",
                "Buy volume",
                "Sell volume",
                "TXNS",
                "Market Cap",
                "Liquidity",
                "Bond Cure %",
                "Dev Holding",
                "Holders",
              ].map((label) => (
                <div key={label} className="last:pb-[8rem]">
                  <div>{label}</div>
                  <Button variant="default" className="px-10 mr-5">
                    100
                  </Button>
                  <Button variant="default" className="px-10 mr-5">
                    100
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const AlarmBell = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10.0374C0 7.95927 0.463542 6.05258 1.39062 4.31733C2.31771 2.58209 3.5625 1.14298 5.125 0L6.59375 1.99501C5.34375 2.90939 4.34896 4.06276 3.60938 5.45511C2.86979 6.84747 2.5 8.3749 2.5 10.0374H0ZM22.5 10.0374C22.5 8.3749 22.1302 6.84747 21.3906 5.45511C20.651 4.06276 19.6562 2.90939 18.4062 1.99501L19.875 0C21.4375 1.14298 22.6823 2.58209 23.6094 4.31733C24.5365 6.05258 25 7.95927 25 10.0374H22.5ZM2.5 21.2594V18.7656H5V10.0374C5 8.31255 5.52083 6.77993 6.5625 5.43953C7.60417 4.09913 8.95833 3.22111 10.625 2.80549V1.93267C10.625 1.41313 10.8073 0.97153 11.1719 0.607855C11.5365 0.244181 11.9792 0.0623441 12.5 0.0623441C13.0208 0.0623441 13.4635 0.244181 13.8281 0.607855C14.1927 0.97153 14.375 1.41313 14.375 1.93267V2.80549C16.0417 3.22111 17.3958 4.09913 18.4375 5.43953C19.4792 6.77993 20 8.31255 20 10.0374V18.7656H22.5V21.2594H2.5ZM12.5 25C11.8125 25 11.224 24.7558 10.7344 24.2675C10.2448 23.7791 10 23.192 10 22.5062H15C15 23.192 14.7552 23.7791 14.2656 24.2675C13.776 24.7558 13.1875 25 12.5 25ZM7.5 18.7656H17.5V10.0374C17.5 8.66584 17.0104 7.49169 16.0312 6.51496C15.0521 5.53824 13.875 5.04988 12.5 5.04988C11.125 5.04988 9.94792 5.53824 8.96875 6.51496C7.98958 7.49169 7.5 8.66584 7.5 10.0374V18.7656Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
      />
    </svg>
  );
};
