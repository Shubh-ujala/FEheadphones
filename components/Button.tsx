import React from "react";
import { cn } from "@/libs/utils";

interface buttonProps {
  name: string;
  icon: React.ElementType;
  color?: string;
  className?: string;
}
function Button({ icon: Icon, name, color, className }: buttonProps) {
  return (
    <div
      className={cn(
        "flex items-center p-2 gap-0 bg-red-700 w-40 rounded-2xl justify-evenly cursor-pointer",
        className
      )}
    >
      <div className="text-white tracking-tighter font-primary font-stretch-50% font-bold ">
        {name}
      </div>
      <Icon color={`${color}`} />
    </div>
  );
}

export default Button;
