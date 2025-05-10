import Image from "next/image";
import  H1tag  from "../components/H1tag";
import Ptag from "../components/Ptag";
//import Link from "next/link";


export default function Home() {
  return (
      <div className="bg-white flex flex-col items-center gap-y-4">  
         <H1tag className="mx-auto mt-12">歴史</H1tag>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">もったいない!</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">昨今、世界的に食品ロスが問題となっています。
                  日本でもおいしいのに形や色が悪くて商品にできない野菜と果物が少なくありません。
                  お客様の口、どころかお手元にすら届かないのです。</Ptag>
               </div>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <div>
                  <H1tag className="!text-black border-b-4">青果に合う焙煎技法</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">「サンドウィッチに合う」、「スイーツに合う」、それがコーヒーのよさ。
                  私たちはさらに、「果物に合う」、「願わくば他の、脂っこい料理にも合う」、そういった常識を覆す焙煎技法を模索しており、開発に成功しました。
                  </Ptag>
               </div>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">カフェ✖︎青果</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">一番最初に「うちのでよければ」と規格外食品を下さった方は、みかん農家さんでした。数ある青果の中で、私たちの会社のロゴがみかんなのもそういった縁からなのです。</Ptag>
               </div>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <div>
                  <H1tag className="!text-black border-b-4">FiLL~身も心も満たされる</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">一番最初のお客さまは、農家の方々。
日本でも形や色が悪く、商品にできず、お客様の口、どころかお手元にすら届かない野菜や果物が少なくありません。</Ptag>
               </div>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4 mb-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">Fill~身も心も満たされる</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">多くの新鮮な青果を、私共は仕入れさせていただいております。
                  そのため、非常に多くの商品の価格を比較的安定させて提供することが可能になっております。
                  私共は農家の方々が命をかけてつくった食材をより洗練させ、多くのお客様の身も、心も満たすことを、この場に誓います。
                  ぜひ、お気軽にお立ち寄りください
                  </Ptag>
               </div>
               <Image src="/fruitscurry.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
      </div>

  );
}
