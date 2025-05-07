import Link from "next/link"
import { Ptag } from "./Ptag"

const Header = () => {
  return (
      <header className="max-w-[100vw] h-[60px] md:h-[96px] mb-4 flex justify-around items-center bg-white z-50 shadow-xl">
        <div className="mr-16">
          <Link href="/">
            <img src="/filllogo.png" alt="logo" className="w-[64px] h-[64px] object-contain"/>
          </Link>
        </div>
        <div className="mt-5 md:mt-4 lg:mt-1 font-medium ">
          <Ptag className="brownColor md:text-3xl lg:text-4xl">日本初のフルーツカフェ</Ptag>
        </div>
        <div className="h-100% hidden md:flex flex-row justify-between gap-x-2 mt-2 ">
          <Link href="/menu"><p className="ri-book-read-line text-4xl brownColor"></p></Link>
          <Link href="/map"><p className="ri-map-pin-line text-4xl brownColor"></p></Link>
          <Link href="/requestform"><p className="ri-mail-line text-4xl brownColor"></p></Link>
          <Link href="/history"><p className="ri-ancient-gate-line text-4xl brownColor"></p></Link>
        </div>






      </header>

  )
}

export default Header