import Image from "next/image";
import  H1tag  from "../components/H1tag";
import Ptag from "../components/Ptag";
//import Link from "next/link";


export default function Historyhome() {
  return (
      <div className="bg-white flex flex-col items-center gap-y-4">  
         <H1tag className="mx-auto mt-12">歴史</H1tag>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/history_1_outofproduce.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">規格外の青果</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">昨今、世界的に食品ロスが問題となっています。
                  日本でもおいしいのに形や色が悪くて商品にできない野菜と果物が少なくありません。
                  お客様の口、どころかお手元にすら届かないのです。</Ptag>
               </div>
               <Image src="/history_1_outofproduce.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <div>
                  <H1tag className="!text-black border-b-4">青果に合う焙煎技法</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">「サンドウィッチに合う」、「スイーツに合う」、それがコーヒーのよさ。
                  私たちはさらに、「果物に合う」、「願わくば他の、脂っこい料理にも合う」、そういった、他を引き立てるコーヒーの焙煎技法を開発しました。しかし、肝心の食材。国産の野菜、果物の仕入れに困っているという課題に直面していたのです。そんな折、知人の農家さんから「よかったらこれいらない？」と
                  </Ptag>
               </div>
               <Image src="/history_2_coffeebeans.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <Image src="/history_2_coffeebeans.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/filllogo.png" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">ロゴ</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">一番最初に「うちのでよければ」と規格外食品を下さった知人の農家さんこそ、みかん農家さんでした。数ある青果の中で、私たちの会社のロゴがみかんなのもそういった縁からなのです。</Ptag>
               </div>
               <Image src="/filllogo.png" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <div>
                  <H1tag className="!text-black border-b-4">奇跡のブレンド</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">みかん農家さんをはじめ、多くの農家さんに連絡を取らせて頂き、多くの同様の声を聞きました。「規格外の商品でも食べてほしい」。私どもも「奥の人に日本産の野菜や果物をめいっぱい届けたい」。ここに奇跡のブレンドが成立したのです。</Ptag>
               </div>
               <Image src="/oragecoffee.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <Image src="/oragecoffee.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
         <section className="mx-4 mb-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
               <Image src="/fruitspizza.jpg" width={1280} height={720} alt="フルーツカレー" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl"/>
               <div>
                  <H1tag className="!text-black border-b-4">Fill~身も心も満たされる</H1tag>
                  <Ptag className="mt-4 whitespace-pre-line">多くの新鮮な青果を、私共は仕入れさせていただいております。
                  そのため、多くの商品の価格を安定させて提供することが可能です。
                  少量ではなく、たくさんの商品をよりいただいてもらえる仕組みにより、身も心も満たしてほしい。
                  ぜひ、お気軽にお立ち寄りください
                  </Ptag>
               </div>
               <Image src="/fruitspizza.jpg" width={1280} height={720} alt="フルーツカレー" className="md:hidden w-full h-auto rounded-2xl shadow-2xl"/>
            </div>
         </section>
      </div>

  );
}
