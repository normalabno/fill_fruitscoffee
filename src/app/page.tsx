import Image from "next/image";
import  H1tag  from "./components/H1tag";
import FeatureCard from "./components/FeatureCard";
import Link from "next/link";


export default function Home() {
  return (
      <main className="bg-white">  
        <section className="flex flex-col">
          <H1tag className="tracking-widest textGorgeousShadow my-8 mx-auto">New Menu</H1tag>
          <Image src="/blueberrycoffee.jpg" alt="ブルーベリーコーヒー" loading="lazy" decoding="async" width={1280} height={720} className="w-full h-auto aspect-video lg-w-1/2" />
          <div className="w-full lg:w-1/2 flex flex-row">
            <Image src="/fruitscurry.jpg" alt="フルーツカレー" width={1280} height={720} className="aspect-auto" />
            <div className="w-1/2 flex flex-wrap">
              <Image src="/fruitscookie.jpg" alt="フルーツクッキー" width={1280} height={720} className="w-1/2" />
              <Image src="/fruitssalada.jpg" alt="フルーツサラダ" width={1280} height={720} className="w-1/2" />
              <Image src="/fruitspaffee.jpg" alt="フルーツパフェ" width={1280} height={720} className="w-1/2" />      
              <Image src="/fruitspizza.jpg" alt="フルーツピザ" width={1280} height={720} className="w-1/2" />
            </div>
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
