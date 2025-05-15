import React from "react";
import H1tag from "./H1tag";
import Ptag from "./Ptag";
import H2tag from "./H2tag";



export function Afterrequest() {
  return (

   <div className="max-w-md mx-auto space-y-4 mt-8 flex flex-col items-center justify-center">
      <H1tag className="md:hidden !text-blue-900">貴重なご意見<br/>ありがとうございました。</H1tag>
      <H1tag className="hidden md:block !text-blue-900 !text-xl">貴重なご意見、ありがとうございました。</H1tag>
   <H2tag className="ml-4">お送りいただいたメールアドレスに<br/>3営業日以内に返信いたします</H2tag>
   <Ptag>またのご意見、お待ちしております！<br/>改めまして、ありがとうございます！</Ptag>
   </div>
  );
}

export default Afterrequest