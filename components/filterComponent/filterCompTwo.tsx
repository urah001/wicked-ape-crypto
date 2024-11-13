"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
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
        <div className="absolute top-[123px] right-0 w-[390px] h-screen max-h-[90vh] rounded-md bg-custom1 text-foreground shadow-lg p-4 z-50 transition-transform duration-300 ease-in-out text-sm overflow-y-auto">
          <div className="font-semibold mt-4">
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

            {/* Option checkbox below filter */}
            <div className="border-b flex flex-col pt-2">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  {/* pumpfun token */}
                  <div className="flex">
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
                    <Image
                      src="/moonIcon.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <div>Moonshot Token</div>
                    <Checkbox className="h-6 w-6 rounded-md bg-black" />
                  </div>
                </div>

                {/* Top 10 holders and 1+ social */}
                <div className="flex flex-row space-x-4 justify-between">
                  <div className="flex">
                    <div>Top 10 Holders</div>
                    <Checkbox className="h-6 w-6 rounded-md bg-black" />
                  </div>
                  <div className="flex flex-row space-x-1">
                    <div>1+ social</div>
                    <Checkbox className="h-6 w-6 rounded-md bg-black mt-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Real time refresh rate */}
            <div className="flex flex-col justify-center">
              <div className="p-4 ml-24">Real Time Refresh Rate</div>
              <div className="p-4">
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  className="bg-black border-double border-2 border-green-500 rounded-sm"
                />
              </div>
              <div className="flex space-x-3 ml-2 p-4 border-b">
                <div>15m</div>
                <div>5m</div>
                <div>3m</div>
                <div>1m</div>
                <div>30s</div>
                <div>1s</div>
                <div>30m</div>
                <div>1h</div>
                <div>2h</div>
                <div>4h</div>
                <div>24h</div>
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
                <div key={label}>
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

export default FilterComponentTwo;
