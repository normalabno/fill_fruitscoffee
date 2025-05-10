import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";




export const metadata: Metadata = {
 title: 'Fill　日本初のフルーツカフェ',
 description: '日本で一番最初にできた、果物とコーヒーをかけあわせたカフェ。「コーヒーと果物は合わない」といった偏見を覆す。果物に合うコーヒーの独自開発に成功。さらに果物は自家栽培、農地直送、高級ブランド品まで、こだわったものを取り扱っております。',
 keywords: ['フルーツカフェ', '日本初', '果物コーヒー'],
 openGraph: {
   title: 'Fill 日本初のフルーツカフェ',
   description: '日本で一番最初にできた、果物とコーヒーをかけあわせたカフェ。「コーヒーと果物は合わない」といった偏見を覆す。果物に合うコーヒーの独自開発に成功。さらに果物は自家栽培、農地直送、高級ブランド品まで、こだわったものを取り扱っております。',
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
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
          <Header/>
          <main className="mb-16 pb-8 md:pt-24">
          {children}
          </main>
          <Footer />
          <BottomNav/>
      </body>
    </html>
  );
}
