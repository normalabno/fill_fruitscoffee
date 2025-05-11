import Image from "next/image";
import  H1tag  from "../components/H1tag";
import H2tag from "../components/H2tag";
import Ptag from "../components/Ptag";

export default function Dealhome() {
  return (
      <section className="flex flex-col items-center my-8 mx-auto">
         <H1tag>決済方法</H1tag>
         <Image src="/creditgood.png" width={128} height={128} alt="電子決済" className="mt-8"/>
         <H2tag className="mt-4">交通系電子マネー</H2tag>
        <div className="flex flex-row justify-center flex-wrap mt-4">        
            <Ptag>・Suica</Ptag>
            <Ptag>・PASUMO</Ptag>
            <Ptag>・Kitaca</Ptag>
            <Ptag>・TOICA</Ptag>
            <Ptag>・ICOCA</Ptag>
            <Ptag>・PiTaPa</Ptag>
            <Ptag>・manaca</Ptag>
            <Ptag>・SUGOCA</Ptag>
        </div>
        <H2tag className="mt-4">クレジットカード</H2tag>
        <div className="flex flex-row justify-center flex-wrap mt-4">        
            <Ptag>・VISA</Ptag>
            <Ptag>・Mastercard</Ptag>
            <Ptag>・JCB</Ptag>
            <Ptag>・American Express</Ptag>
            <Ptag>・iD</Ptag>
            <Ptag>・QUICPay</Ptag>
        </div>
        <H2tag className="mt-4">QR/その他キャッシュレス</H2tag>
        <div className="flex flex-row justify-center flex-wrap mt-4">        
            <Ptag>・PayPay</Ptag>
            <Ptag>・楽天Pay</Ptag>
            <Ptag>・auPay</Ptag>
            <Ptag>・d払い</Ptag>
            <Ptag>・メルペイ</Ptag>
            <Ptag>・Apple Pay</Ptag>
        </div>
      </section>
  );
}
