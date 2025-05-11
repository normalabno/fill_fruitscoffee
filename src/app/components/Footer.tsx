import { Ptag } from "./Ptag"
import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
      <footer className="w-full bg-gray-200 pb-20 pt-8 mt-16 md:pb-4">
       <div className="flex flex-row justify-center my-2">
          <div className="w-[90%] h-[3px]"></div>
       </div>
        <div className="flex flex-col gap-y-8 ml-2 mt-2">
        <div className="flex flex-col gap-y-4 ml-2">
          <Ptag className=""><Link href="/requestform">ご質問・お問い合わせ</Link></Ptag>
          <Ptag><Link href="/siterule">利用規約</Link></Ptag>
          <Ptag><Link href="/allergie">アレルギー情報</Link></Ptag>
          <Ptag><Link href="/pagelinkbook">サイト内リンク集</Link></Ptag>
        </div>
        
        <ul className=" w-fit flex flex-row gap-x-4 ml-2">
          <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><Image src="/X.svg" alt="Xのリンクロゴ" width={128} height={128} loading="lazy" decoding="async" className="w-8 h-8 align-baseline" /></a></li>

          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/instagram.svg" alt="instagramのリンクロゴ" loading="lazy" decoding="async" width={128} height={128} className="w-8 h-8 align-baseline" /></a></li>

          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Image src="/facebook.svg" alt="facebookのリンクロゴ" loading="lazy" decoding="async" width={128} height={128} className="w-8 h-8 align-baseline" /></a></li>

          <li><a href="https://www.line.me/ja/" target="_blank" rel="noopener noreferrer"><Image src="/Line.png" alt="Lineのリンクロゴ" loading="lazy" decoding="async" width={128} height={128} className="w-7 h-7 align-baseline mt-0.5" /></a></li>

          <li><a href="https://www.tiktok.com/explore" target="_blank" rel="noopener noreferrer"><Image src="/tiktok.png" alt="tiktokのリンクロゴ" loading="lazy" decoding="async" width={128} height={128} className="w-7 h-7 align-baseline mt-0.5 " /></a></li>
          <li className="overflow-x-auto"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="youtubeのリンクロゴ"
          loading="lazy" decoding="async"width={128} height={128} className="w-8 h-8 align-baseline object-contain" /></a></li>
        </ul>
        <small className="block ml-2">© 2025 FiLL Company. All rights reserved.</small>
        </div>
      </footer>
  )
}

export default Footer