import React from "react";

type PtagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Ptag({ children, className = "" }: PtagProps) {
  return (
    <p className={`text-sm md:text-base leading-relaxed noto-serif-jp ${className}`}>
      {children}
    </p>
  );
}


export default Ptag
