import  H1tag  from "../components/H1tag";
import Ptag from "../components/Ptag";

export default function Allergiehome() {
  return (
      <div>  
        <section className="flex flex-col items-center mt-24">        
         <H1tag>メニューのアレルギー表</H1tag>
         <Ptag className="my-8">更新日　2025/5/12(月)</Ptag>
         <a href="/FiLLメニューアレルギー表.pdf" download="FiLLメニューアレルギー表.pdf" className="text-blue-400 border-b-2"><Ptag>FiLLメニューアレルギー表.pdf[ダウンロード]</Ptag></a>
    
        </section>
    </div>
  );
}
