import Link from "next/link"


const BottomNav = () => {
  return (
      <div className="md:hidden fixed right-0 bottom-0 w-full mx-auto shadow-2xl z-50 bg-amber-400">
       <div className="flex flex-row justify-center h-[8vh]">
         <Link href="/menu"  className=" flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300 shadow-2xl">
               <i className="ri-book-read-line brownColor"></i>
         </Link>
         <Link href="/map" className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">
               <i className="ri-map-pin-line brownColor"></i>
         </Link>
         <Link href="/requestform" className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">
               <i className="ri-mail-line brownColor"></i>
         </Link>
         <Link href="/history" className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">        
               <i className="ri-ancient-gate-line brownColor"></i>
         </Link>       

         </div>
      </div>
  )
}

export default BottomNav