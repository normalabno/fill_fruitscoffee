import { Ptag } from "./Ptag"
import Link from "next/link"
const Footer = () => {
  return (
      <footer className="w-full bg-amber-50 pb-20 pt-8 md:pb-4 mb:pt-4">
       <div className="flex flex-row justify-center my-4">
          <div className="w-[90%] h-[3px] bg-amber-100"></div>
       </div>
        <div className="flex flex-col gap-y-8 ml-2 mt-8">
        <div className="flex flex-col gap-y-4 ml-2">
          <Ptag className=""><Link href="/requestform">ご質問・お問い合わせ</Link></Ptag>
          <Ptag><Link href="/siterule">サイト規約</Link></Ptag>
          <Ptag><Link href="/allergie">アレルギー情報</Link></Ptag>
          <Ptag><Link href="/sitemap">サイトマップ</Link></Ptag>
        </div>
        
        <ul className=" w-fit flex flex-row gap-x-4 ml-2">
          <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><img src="/X.svg" alt="Xのリンクロゴ" loading="lazy" decoding="async" className="w-8 h-8 align-baseline"></img></a></li>

          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="instagramのリンクロゴ" loading="lazy" decoding="async" className="w-8 h-8 align-baseline"></img></a></li>

          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="/facebook.svg" alt="facebookのリンクロゴ" loading="lazy" decoding="async" className="w-8 h-8 align-baseline"></img></a></li>

          <li><a href="https://www.line.me/ja/" target="_blank" rel="noopener noreferrer"><img src="/Line.png" alt="Lineのリンクロゴ" loading="lazy" decoding="async" className="w-7 h-7 align-baseline mt-0.5"></img></a></li>

          <li><a href="https://www.tiktok.com/explore" target="_blank" rel="noopener noreferrer"><img src="/tiktok.png" alt="tiktokのリンクロゴ" loading="lazy" decoding="async" className="w-7 h-7 align-baseline mt-0.5 "></img></a></li>
          <li className="overflow-x-auto"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="youtubeのリンクロゴ"
          loading="lazy" decoding="async" className="w-8 h-8 align-baseline object-contain"></img></a></li>
        </ul>
        <small className="block ml-2">© 2025 FiLL Company. All rights reserved.</small>
        </div>
      </footer>
  )
}

export default Footer