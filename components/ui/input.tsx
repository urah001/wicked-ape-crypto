import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center border-2 rounded-lg bg-black w-full max-w-sm">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:outline-none focus:ring-0 focus:border-none",
            className
          )}
          ref={ref}
          {...props}
          placeholder="Search....."
        />
        <SearchIcon className="h-8 w-8 rounded-md  bg-custom1" />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
