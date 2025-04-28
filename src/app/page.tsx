import Image from "next/image";
import { Metadata } from 'next'
import Hero from "./components/Hero";



export const metadata: Metadata = {
 title: 'Fill　日本初のフルーツカフェ',
 description: '日本で一番最初にできた、果物とコーヒーをかけあわせたカフェ。「コーヒーと果物は合わない」といった偏見を覆す。果物に合うコーヒーの独自開発に成功。さらに果物は自家栽培、農地直送、高級ブランド品まで、こだわったものを取り扱っております。',
 keywords: ['フルーツカフェ', '日本初', '果物コーヒー'],
 openGraph: {
   title: 'OGタイトル',
   description: 'SNS用の説明文',
   url: 'https://example.com',
   siteName: 'Fill 日本初のフルーツカフェ',
   images: [
     {
       url: 'https://example.com/og-image.jpg',
       width: 1200,
       height: 630,
       alt: 'OG画像の代替テキスト',
     },
   ],
   locale: 'ja_JP',
   type: 'website',
 },
 twitter: {
   card: 'summary_large_image',
   title: 'Fill 日本初のフルーツカフェ',
   description: '日本で一番最初にできた、果物とコーヒーをかけあわせたカフェ。「コーヒーと果物は合わない」といった偏見を覆す。果物に合うコーヒーの独自開発に成功。',
   images: ['https://example.com/twitter-image.jpg'],
 },
}


export default function Home() {
  return (
    <div className="h-screen w-full">

      <main className="bg-green-500 h-screen w-full block">      
        <Hero />
 
 
       

      </main>
      <footer className="bg-blue-700 h-screen w-full h-1/5">
       
       
      </footer>
    </div>
  );
}
