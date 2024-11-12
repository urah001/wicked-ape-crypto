import Image from "next/image";
import React from "react";

{
  /*solana icon positioned at top with 3 icons */
}
function FilterComponentOne() {
  return (
    <div className="h-[42px] w-[84px] border justify-center ml-4 rounded-md bg-custom1">
      <div className="flex space-x-2 p-2 cursor-pointer">
        <Image
          src="/filterIcon/solanaIcon.svg"
          alt="icon"
          width={28}
          height={24}
        />
        <Image
          src="/filterIcon/polygon.svg"
          alt="icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

export default FilterComponentOne;
