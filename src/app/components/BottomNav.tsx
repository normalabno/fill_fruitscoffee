import Link from "next/link"


const BottomNav = () => {
  return (
      <div className="md:hidden fixed right-0 bottom-0 w-full mx-auto shadow-2xl z-50 bg-amber-400">
       <ul className="flex flex-row justify-center h-[8vh]">
         <li className=" flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300 shadow-2xl">         
            <Link href="/">
               <i className="ri-book-read-line brownColor"></i>
            </Link>
         </li>
         <li className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">          
            <Link href="/">
               <i className="ri-map-pin-line brownColor"></i>
            </Link>
         </li>
         <li className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">   
            <Link href="/">
               <i className="ri-mail-line brownColor"></i>
            </Link>
         </li>        
         <li className="flex-1 flex items-center justify-center text-4xl brownColor hover:bg-blue-300">   
            <Link href="/">
               <i className="ri-ancient-gate-line brownColor"></i>
            </Link>
         </li>        

         </ul>
      </div>
  )
}

export default BottomNav