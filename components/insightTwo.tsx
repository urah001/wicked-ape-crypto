import Image from "next/image";
import React from "react";

const InsightTwo = () => {
  return (
    <div className="flex space-x-1">
      <div className=" flex items-center justify-center">
        <Image src="/bellTwo.svg" alt="icon" width={21} height={27} />
      </div>

      {/*-- writing */}
      <div className="flex items-center font-bold space-x-1">
        <span className=" flex items-center justify-center">TRUMP</span>
        <span className=" flex items-center justify-center"> MC</span>
        <span className=" flex items-center justify-center">$300K</span>
        <div className=" flex items-center justify-center">
          <Image src="/777.svg" alt="icon" width={30} height={30} />
        </div>
        <div className=" flex items-center justify-center">50%</div>
      </div>
    </div>
  );
};

export default InsightTwo;
