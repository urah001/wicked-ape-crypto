"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
{
  /*
  the second filter comp positioned at center of btween three icons 
  */
}
function FilterComponentTwo() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const data = 3;
  return (
    <>
      <div className="flex flex-row  rounded-md h-[42px] w-[123px]  border justify-center ml-4 bg-custom1 ">
        {/* two column position at left side*/}
        <div
          onClick={togglePopup}
          className="flex space-x-2 p-2 ml-0 cursor-pointer w-53 h-20"
        >
          {/* filter icon / funnel icon */}
          <div>
            <Image
              src="/filterIcon/filter.svg"
              alt="icon"
              width={28}
              height={24}
            />
          </div>
          {/* polygon icon */}
          <div>
            <Image
              src="/filterIcon/sort.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* yellow badge positioned right side of the second filter component  */}
        <div className="w-[21px] h-[21px] bg-yellow-400 rounded-md mt-2 ml-2 text-center text-black">
          <div>{data}</div>
        </div>
      </div>
      {/* Popup container */}
      {isPopupOpen && (
        <div className="absolute top-[123px] right-0 w-[390px] bg-custom1 text-foreground shadow-lg p-4 z-50 transition-transform duration-300 ease-in-out">
          <div className="font-semibold">
            {/* Popup Content */}
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h2 className="text-xl">Token Filter</h2>

              {/* Option Selection */}
              <div className="flex space-x-6">
                <button onClick={togglePopup}>Cancel</button>
                <button className="px-4 py-2 rounded-md bg-green-700 font-bold">
                  Apply
                </button>
              </div>
            </div>
            {/* option checkbox below filter */}
            <div className="border-b flex">
              {/* pumpfun token */}
              <div className="flex flex-row">
                <Image
                  src="/sectionIcon/pumpCallIcon.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <div>Pump.Fun Tokens</div>
                <div className="bg-custom1 mt-0">
                  <Checkbox className="h-6 w-6 rounded-md bg-black" />
                </div>
              </div>
              {/* moonshot token */}
              <div className="flex">
                <Image src="/moonIcon.svg" alt="icon" width={20} height={20} />
                <div>Moonshot Token</div>
                <Checkbox className="h-6 w-6 rounded-md bg-black" />
              </div>
            </div>
            <div>Content goes here...</div>
            <div>Content goes here...</div>
            <div>Content goes here...</div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterComponentTwo;
