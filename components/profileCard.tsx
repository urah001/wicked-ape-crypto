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
          <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-gray-300 relative"></div>
          </div>

          {/* Small circles positioned at the bottom edge of the profile picture */}
          <div className="absolute -bottom-4 -right-1 flex space-x-1">
            <div className="w-12 h-12 rounded-full border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full border border-gray-300"></div>
          </div>

          {/* Independent small containers at the bottom-left and bottom-right of profile circle */}
          <div className="absolute -bottom-10 -left-0.5 w-8 h-8 rounded-full border border-gray-300"></div>
          <div className="absolute -bottom-10 -right-2 w-8 h-8 rounded-full border border-gray-300"></div>
        </div>
        {/* Words section, positioned slightly higher */}
        <div className="w-1/3 ml-4 mt-2 space-y-2">
          <div className="h-6 rounded-md border border-gray-300"></div>
          <div className="h-6 rounded-md border border-gray-300"></div>
          <div className="h-6 rounded-md border border-gray-300"></div>
        </div>
      </div>

      {/* Floating larger square div in the top-right corner */}
      <div className="absolute top-14 right-4 w-20 h-8 rounded-md border border-gray-300"></div>

      {/* Bottom section: Smaller square divs with spacing adjustments */}
      <div className="w-full mt-10 flex justify-between ml-4">
        <div className="w-16 h-10 rounded-md border border-gray-300"></div>
        <div className="w-16 h-10 rounded-md border border-gray-300"></div>
        <div className="w-16 h-10 rounded-md border border-gray-300"></div>
        <div className="w-16 h-10 rounded-md border border-gray-300"></div>
        {/* Added spacing */}
        <div className="w-16 h-10 rounded-md border border-gray-300 ml-4"></div>
        <div className="w-16 h-10 rounded-md border border-gray-300 "></div>
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
