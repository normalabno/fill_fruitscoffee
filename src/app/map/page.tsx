import  H1tag  from "../components/H1tag";
import GoogleMap_coffee from "../components/GoogleMap_coffee";


export default function Maphome() {
  return (
    <div>  
      <section className="flex flex-col items-center mt-8 pb-16 mb-8">        
        <H1tag><i className="ri-map-pin-line brownColor"></i>場所</H1tag>
        <GoogleMap_coffee/>
      </section>
    </div>
  );
}
