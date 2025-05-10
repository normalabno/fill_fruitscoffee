import React from "react";


type H1tagProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1tag({ children, className = "" }: H1tagProps) {
  return (
    <h1 className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed noto-serif-jp bebas-neue-regular ${className}`}>
      {children}
    </h1>
  );
}

export default H1tag
