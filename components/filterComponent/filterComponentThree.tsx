import Image from "next/image";
import React from "react";
{
  /*fix the bagde*/
}
function FilterComponentThree() {
  return (
    <div className="flex flex-row  rounded-md h-[42px] w-[123px]  border justify-center ml-4 bg-custom1 ">
      {/* two column position at left side*/}
      <div className="flex space-x-2 p-2 ml-0 cursor-pointer ">
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
        <div></div>
      </div>
    </div>
  );
}

export default FilterComponentThree;
