import Link from "next/link"


const BottomNav = () => {
  return (
      <div className="md:hidden fixed right-0 bottom-0 w-full bg-yellow-800 mx-auto shadow-2xl z-50">
       <ul className="flex flex-row justify-center h-[8vh]">
         <li className=" flex-1 flex items-center justify-center bg-white text-4xl brownColor hover:bg-blue-300">         
            <Link href="/">
               <i className="ri-book-read-line"></i>
            </Link>
         </li>
         <li className="flex-1 flex items-center justify-center bg-white text-4xl brownColor hover:bg-blue-300">          
            <Link href="/">
               <i className="ri-map-pin-line"></i>
            </Link>
         </li>
         <li className="flex-1 flex items-center justify-center bg-white text-4xl brownColor hover:bg-blue-300">   
            <Link href="/">
               <i className="ri-mail-line"></i>
            </Link>
         </li>        
         <li className="flex-1 flex items-center justify-center bg-white text-4xl brownColor hover:bg-blue-300">   
            <Link href="/">
               <i className="ri-ancient-gate-line"></i>
            </Link>
         </li>        

         </ul>
      </div>
  )
}

export default BottomNav