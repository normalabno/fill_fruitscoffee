/**import Image from "next/image";**/
import Hero from "./components/Hero";
import  H1tag  from "./components/H1tag";
import  H2tag  from "./components/H2tag";
import  Ptag  from "./components/Ptag";


export default function Home() {
  return (
      <main className="flex flex-col justify-center gap-y-8">  
        <section>
          <img src="/icecream.jpg"></img>
        </section>    
        <section className="flex justify-center">
          <H1tag>Feature</H1tag>

        </section>
        <section className="flex flex-col justify-center items-center pt-4 bg-amber-100">
          <H1tag>New Menu</H1tag>
          <H2tag>ああああ</H2tag>
          <Ptag>みんなの幸せを願って</Ptag>
        </section>
        <section>

        </section>
        <section></section>
        <Hero />
        <Hero />
      </main>

  );
}
