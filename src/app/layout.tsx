import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import Breadcrumbs from "./components/Breadcrumbs";




export const metadata: Metadata = {
 title: 'FiLL　日本唯一の焙煎搾りフルーツカフェ',
 description: '焙煎技術の特許を取得しており、焙煎搾りを実現した、果物とコーヒーをかけあわせたカフェ。果物に合うコーヒーの独自開発に成功。果物だけでなく野菜もすべて国産にこだわり、現地の農家さんから新鮮なものを直接仕入れさせていただいております',
 keywords: ['フルーツカフェ', '日本で唯一', '果物コーヒー','特許焙煎'],
 openGraph: {
   title: 'FiLL 日本唯一の焙煎搾りカフェ',
   description: '焙煎技術の特許を取得しており、焙煎搾りを実現した、果物とコーヒーをかけあわせたカフェ。果物に合うコーヒーの独自開発に成功。果物だけでなく野菜もすべて国産にこだわり、現地の農家さんから新鮮なものを直接仕入れさせていただいております',
   url: 'https://fill-fruitscoffee.vercel.app',
   siteName: 'FiLL 日本唯一の焙煎搾りカフェ',
   images: [
     {
       url: '/top_strawberrycoffee.png',
       width: 1200,
       height: 630,
       alt: 'OG画像の代替テキスト',
     },
   ],
   locale: 'ja_JP',
   type: 'website',
 },
 metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://fill-fruitscoffee.vercel.app/'
      : 'http://localhost:3000'
  ),
 twitter: {
   card: 'summary_large_image',
   title: 'FiLL 日本唯一の焙煎搾りカフェ',
   description: '特許技術を用いた焙煎搾り、果物とコーヒーをかけあわせたカフェ。「コーヒーと果物は合わない」といった偏見を覆す。果物に合うコーヒーの独自開発に成功。',
   images: ['/top_strawberrycoffee.png'],
 }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
          <Header/>
          <Breadcrumbs/>
          <main className="mb-16 pb-8 pt-[80px] md:pt-[80px]">
          {children}
          </main>
          <Footer />
          <BottomNav/>
      </body>
    </html>
  );
}
