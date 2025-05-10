import Image from "next/image";
import  H1tag  from "../components/H1tag";
import Link from "next/link";


export default function PageLink() {
  return (
      <div>  
        <section className="flex flex-col">        
         <H1tag>ddddd</H1tag>
         <Link href="/Home"><Image src="/icon.png" width={1280} height={720} alt="icon"></Image></Link>
        </section>
    </div>
  );
}
