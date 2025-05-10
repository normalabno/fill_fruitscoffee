import React from "react";
import Image from "next/image";
type FeatureCardProps = {
  className?: string;
  srcimage?: string;
  alt?: string;
  text:string
};

export function FeatureCard({className, srcimage = "",text="何も入ってません", alt = "Feature image" }: FeatureCardProps) {
  return (
    <div className={`flex flex-col justify-between items-center ${className}`}>
      <Image src={srcimage} width={1280} height={720} alt={alt} className="w-32 h-32"></Image>
      <p className=" mt-4 text-sm md:text-base  font-normal leading-relaxed noto-serif-jp">
        {text}
      </p>
    </div>
  );
}

export default FeatureCard