/**import Image from "next/image";**/
import  H1tag  from "./components/H1tag";
import  Ptag  from "./components/Ptag";


export default function Home() {
  return (
      <main className="bg-white">  
        <section className="flex flex-col">
          <img src="/blueberrycoffee.jpg" className="lg:w-1/2"></img>
          <div className="w-full lg:w-1/2 flex flex-row">
            <img src="/fruitscurry.jpg" className="aspect-auto"></img>
            <div className="w-1/2 flex flex-wrap">
              <img src="/fruitscookie.jpg" className="w-1/2"></img>
              <img src="/fruitssalada.jpg" className="w-1/2"></img>
              <img src="/fruitspaffee.jpg" className="w-1/2"></img>              <img src="/fruitspizza.jpg" className="w-1/2"></img>
            </div>
          </div>
        </section>    
        <section className="flex flex-col justify-center items-center pt-4">
        </section>
        <section className="flex flex-col items-center">
          <H1tag className="tracking-widest">Feature</H1tag>
          <div className="flex flex-row gap-x-2">
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
            <p className="bg-gray-500 w-1/4 h-1/2 max-w-140px">カード</p>
          </div>
        </section>

        <section>
          <H1tag>ああああ</H1tag>
          <Ptag>みんなの幸せを願って</Ptag>
        </section>
        <section>

        </section>
      </main>

  );
}
