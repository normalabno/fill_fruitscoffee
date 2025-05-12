import Image from "next/image";
import  H1tag  from "./components/H1tag";
import FeatureCard from "./components/FeatureCard";
import Link from "next/link";


export default function Home() {
  return (
      <main className="bg-white">  
        <section className="flex flex-col">
          <H1tag className="tracking-widest textGorgeousShadow my-8 mx-auto">New Menu</H1tag>   
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-2">
              <Image src="/menu_fruitsfitcoffee.jpg" alt="フィットコーヒー" width={1280} height={720} className="transition-all duration-200 hover:scale-125 md:hover:translate-x-16 shadow-2xl border-2 rounded-2xl" />
              <Image src="/menu_pizza.jpg" alt="フルーツピザ" width={1280} height={720} className="transition-all duration-200 hover:scale-125 md:hover:-translate-x-16 shadow-2xl border-2 rounded-2xl"/>
              <Image src="/top_Orangecoffee.png" alt="オレンジコーヒー" width={1280} height={720} className="transition-all duration-200 hover:scale-125 md:hover:translate-x-16 shadow-2xl border-2 rounded-2xl"/>
              <Image src="/top_strawberrycoffee.png" alt="レッドコーヒー" width={1280} height={720} className="transition-all duration-200 hover:scale-125 hmd:over:-translate-x-16 shadow-2xl border-2 rounded-2xl"/>
              <Image src="/top_greenapple.png" alt="グリーンコーヒー" width={1280} height={720} className="transition-all duration-200 hover:scale-125 md:hover:translate-x-16 shadow-2xl border-2 rounded-2xl"/>      
              <Image src="/top_blueberrycoffee.png" alt="ブルーコーヒー" width={1280} height={720} className="transition-all duration-200 hover:scale-125 md:hover:-translate-x-16 shadow-2xl border-2 rounded-2xl"/>
            </div>
        </section>    
        <section className="flex flex-col justify-center items-center pt-4">
        </section>
        <section className="flex flex-col items-center mt-24 pb-24">
          <H1tag className="tracking-widest textGorgeousShadow">Feature</H1tag>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 mt-12">
            <FeatureCard 
              srcimage="/wifigood.png" 
              alt="Wi-Fi利用可能" 
              text="店内フリーWi-Fi" 
            />
            <Link href="/deal" className="flex-1 bg-cyan-100 rounded-2xl border-2 hover:bg-cyan-400">
            <FeatureCard 
              srcimage="/creditgood.png" 
              alt="電子決済" 
              text="多くの決済方法" 
            />
            </Link>
            <FeatureCard 
              srcimage="/garbagegood.png" 
              alt="" 
              text="店内ゴミ捨ててOK！" 
            />
            <FeatureCard 
              srcimage="/policegood.png" 
              alt="警察署の近くの立地" 
              text="警察署近くで安心" 
            />
          </div>
        </section>
        {/*<section>
           <H1tag>ああああ</H1tag>
          <Ptag>みんなの幸せを願って</Ptag>



        </section>*/}
    
        <section>

        </section>
      </main>

  );
}
