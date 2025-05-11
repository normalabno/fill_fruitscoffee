import React from "react";

type H2tagProps = {
  children: React.ReactNode;
  className?: string;
};

export function H2tag({ children, className = "" }: H2tagProps) {
  return (
    <h2 className={`text-base md:text-lg font-semibold leading-relaxed noto-serif-jp ${className}`}>
      {children}
    </h2>
  );
}

export default H2tag
