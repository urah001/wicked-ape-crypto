"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
{
  /*fix the bagde*/
}
function FilterComponentThree() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className="flex flex-row  rounded-md h-[42px] w-[123px]  border justify-center ml-4 bg-custom1 ">
        {/* two column position at left side*/}
        <div
          onClick={togglePopup}
          className="flex space-x-2 p-2 ml-0 cursor-pointer "
        >
          {/* filter icon / funnel icon */}
          <div>
            <Image
              src="/filterIcon/insight.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </div>
          {/* polygon icon */}
          <div>
            <Image
              src="/filterIcon/halfMenu.svg"
              alt="icon"
              width={21}
              height={20}
            />
          </div>
        </div>
        {/* yellow badge positioned right side of the second filter component  */}
        <div className="w-[21px] h-[21px] bg-yellow-400 rounded-md mt-2 ml-2 text-center text-black">
          <div>5</div>
        </div>
      </div>
      {/* Popup container */}
      {isPopupOpen && (
        <div className="absolute top-[123px] right-0 w-[390px] h-screen max-h-[90vh] rounded-md bg-custom1 text-foreground shadow-lg p-4 z-50 transition-transform duration-300 ease-in-out text-sm overflow-y-auto">
          <div className="font-semibold mt-4">
            {/* Popup Content */}
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h2 className="text-xl">List order</h2>

              {/* Option Selection */}
              <div className="flex space-x-6">
                <button onClick={togglePopup}>Cancel</button>
                <button className="px-4 py-2 rounded-md bg-green-700 font-bold">
                  Apply
                </button>
              </div>
            </div>

            {/* all control with unique styling */}
            <div className="flex justify-center mt-4 flex-col pl-20 space-y-10">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex flex-col space-y-2">
                  <div className="text-md font-semibold">Volume</div>
                  <div className="flex flex-row items-center space-x-2">
                    <CustomCheckMark
                      bgColor="#44E19F"
                      checkColor="#E8EAED"
                      strokeColor="#292828"
                    />
                    <CustomPolygon color="#D16D82" rotate={true} />
                    <div className="ml-2 p-2 rounded text-foreground text-sm">
                      Descending
                    </div>
                  </div>
                </div>
              </div>

              {/* Other volume controls with ascending label */}
              {[
                "Buy volume",
                "Sell volume",
                "TXNS",
                "Market Cap",
                "Liquidity",
                "Bond Cure %",
                "Dev Holding",
                "Holders",
              ].map((label) => (
                <div
                  key={label}
                  className="flex flex-col items-start space-y-2 last:pb-[8rem]"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="text-md font-semibold">{label}</div>
                    <div className="flex flex-row items-center space-x-2">
                      <CustomCheckMark
                        bgColor="#292828"
                        checkColor="#FFFFFF"
                        strokeColor="#292828"
                      />
                      <CustomPolygon color="#44E19F" />
                      <div className="ml-2 p-2 rounded text-foreground text-sm">
                        Ascending
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterComponentThree;

// CustomCheckMark to add the color change to the check btn
export const CustomCheckMark = ({
  bgColor = "#292828",
  checkColor = "#E8EAED",
  strokeColor = "#292828",
}) => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="42" height="42" rx="5" fill={bgColor} />
    <rect
      x="0.5"
      y="0.5"
      width="41"
      height="41"
      rx="4.5"
      stroke={strokeColor}
      strokeOpacity="0.2"
    />
    <path
      d="M17.281 33.5999L7 21.6548L9.57025 18.6685L17.281 27.6273L33.8298 8.3999L36.4 11.3862L17.281 33.5999Z"
      fill={checkColor}
    />
  </svg>
);

// CustomPolygon.js
export const CustomPolygon = ({ color = "#D9D9D9", rotate = false }) => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={rotate ? "rotate-180" : ""}
  >
    <rect width="42" height="42" rx="5" fill={color} />
    <rect
      x="0.5"
      y="0.5"
      width="41"
      height="41"
      rx="4.5"
      stroke="#292828"
      strokeOpacity="0.2"
    />
    <path
      d="M20.3002 8.3999L34.2432 32.5499H6.35719L20.3002 8.3999Z"
      fill="#D9D9D9"
    />
  </svg>
);
