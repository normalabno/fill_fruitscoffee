import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
      <header className="md:top-0 md:left-0 md:fixed max-w-[100vw] h-[60px] md:h-[80px] flex justify-around items-center bg-amber-300 z-50 shadow-xl md:w-full">
        <div className="mr-16">
          <Link href="/">
            <Image src="/filllogo.png" alt="会社Fillのlogo" width={64} height={64} className="w-[64px] h-[64px] object-contain"/>
          </Link>
        </div>
        <div className="mt-5 md:mt-4 lg:mt-1 font-medium ">
          <p className="brownColor text-xs md:text-lg leading-relaxed noto-serif-jp ">焙煎搾り。こだわり国産青果カフェ</p>
        </div>
        <div className="h-100% hidden md:flex flex-row justify-between gap-x-2 mt-2 ">
          <Link href="/menu" className="hover:-rotate-45"><p className="ri-book-read-line text-4xl brownColor"></p></Link>
          <Link href="/map" className="hover:-rotate-45"><p className="ri-map-pin-line text-4xl brownColor"></p></Link>
          <Link href="/requestform" className="hover:-rotate-45"><p className="ri-mail-line text-4xl brownColor"></p></Link>
          <Link href="/history" className="hover:-rotate-45"><p className="ri-ancient-gate-line text-4xl brownColor"></p></Link>
        </div>
      </header>

  )
}

export default Header