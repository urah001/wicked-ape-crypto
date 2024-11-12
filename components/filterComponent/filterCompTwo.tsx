import Image from "next/image";
import React from "react";
{
  /*
  the second filter comp positioned at center of btween three icons 
  */
}
function FilterComponentTwo() {
  const data = 3;
  return (
    <>
      <div className="flex flex-row  rounded-md h-[42px] w-[123px]  border justify-center ml-4 bg-custom1 ">
        {/* two column position at left side*/}
        <div className="flex space-x-2 p-2 ml-0 cursor-pointer w-53 h-20">
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
    </>
  );
}

export default FilterComponentTwo;
