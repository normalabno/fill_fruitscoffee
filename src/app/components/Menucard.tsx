import React from "react";
import Image from "next/image";
import Ptag from "./Ptag";
type MenucardProps = {
  className?: string;
  srcimage?: string;
  name?: string;
  price?:string,
  allergie?:string
};


export function Menucard({className, srcimage = "", name = "Feature image",allergie="",price="free" }: MenucardProps) {
  return (

   <div className="w-[140px] h-[280px] bg-amber-200 rounded-2xl flex flex-col items-start">
      <Image src={srcimage} width={1280} height={720} alt={name} className="w-100 h-24 rounded-t-2xl"></Image>
      <Ptag className="text-sm mt-4 ml-2 leading-relaxed noto-serif-jp textGorgeousShadow">{name}</Ptag>
      <Ptag className="text-sm mt-4 ml-2 leading-relaxed noto-serif-jp textGorgeousShadow">{price}円</Ptag>
      <Ptag className="!text-xs mx-auto">-----アレルギー情報-----</Ptag>
      <small className="text-xs">{allergie}</small>
   </div>
  );
}

export default Menucard