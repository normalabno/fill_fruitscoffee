import Image from "next/image";
import  H1tag  from "./components/H1tag";


export default function Home() {
  return (
      <main className="bg-white">  
        <section className="flex flex-col">

          <Image src="/blueberrycoffee.jpg" alt="ブルーベリーコーヒー" loading="lazy" decoding="async" width={1920} height={1080} className="w-full h-auto aspect-video lg-w-1/2" />
          <div className="w-full lg:w-1/2 flex flex-row">
            <Image src="/fruitscurry.jpg" alt="フルーツカレー" width={1920} height={1080} className="aspect-auto" />
            <div className="w-1/2 flex flex-wrap">
              <Image src="/fruitscookie.jpg" alt="フルーツクッキー" width={1920} height={1080} className="w-1/2" />
              <Image src="/fruitssalada.jpg" alt="フルーツサラダ" width={1920} height={1080} className="w-1/2" />
              <Image src="/fruitspaffee.jpg" alt="フルーツパフェ" width={1920} height={1080} className="w-1/2" />      
              <Image src="/fruitspizza.jpg" alt="フルーツピザ" width={1920} height={1080} className="w-1/2" />
            </div>
          </div>
        </section>    
        <section className="flex flex-col justify-center items-center pt-4">
        </section>
        <section className="flex flex-col items-center">
          <H1tag className="tracking-widest textGorgeousShadow">Feature</H1tag>
          <div className="flex flex-row gap-x-2">
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
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
