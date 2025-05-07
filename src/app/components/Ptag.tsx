import React from "react";

type PtagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Ptag({ children, className = "" }: PtagProps) {
  return (
    <p className={`text-base md:text-lg leading-relaxed noto-serif-jp ${className}`}>
      {children}
    </p>
  );
}


export default Ptag
