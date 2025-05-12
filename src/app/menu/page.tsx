import  H1tag  from "../components/H1tag";
import Menucard from "../components/Menucard";
/**
  className?: string;
  srcimage?: string;
  name?: string;
  price?:string,
  allergie?:string
  **/

export default function Menuhome() {
  return (
      <div className="flex flex-col items-center justify-center">
        <H1tag className="mt-8"><i className="ri-book-read-line brownColor"></i>メニュー</H1tag>  
        <section className="flex flex-row items-center gap-x-4  gap-y-4 flex-wrap mt-8 pb-16 mb-8">
            <Menucard srcimage="/menu_fruitsfitcoffee.jpg" name="FiLLコーヒー" allergie="乳,大豆,りんご,バナナ,オレンジ" price="110"/>        
            <Menucard srcimage="/menu_orangecoffee_0.jpg" name="オレンジコーヒー" allergie="乳,大豆,りんご,バナナ,オレンジ" price="330"/>
            <Menucard srcimage="/menu_greenapplecoffee_0.jpg" name="グリーンコーヒー" allergie="乳,大豆,りんご,バナナ,オレンジ" price="330"/>    
            <Menucard srcimage="/menu_strawberrycoffee_0.jpg" name="レッドコーヒー" allergie="乳,大豆,りんご,バナナ,ごま" price="330"/>    
            <Menucard srcimage="/menu_bluecoffee_0.jpg" name="ブルーコーヒー" allergie="乳,大豆,りんご,バナナ,ごま" price="330"/>
            <Menucard srcimage="/menu_fruitscookie.jpg" name="日替わりクッキー" allergie="卵,小麦,乳,大豆,鶏肉,りんご,バナナ,オレンジ,もも,キウイフルーツ,ごま,落花生,カシューナッツ,アーモンド,くるみ" price="110"/>        
            <Menucard srcimage="/menu_fruitscurry.jpg" name="フルーツカレー" allergie="小麦,乳,大豆,鶏肉,りんご,バナナ,オレンジ,もも,ゼラチン,ごま,カシューナッツ/アーモンド" price="330"/>
            <Menucard srcimage="/menu_pizza.jpg" name="フルーツピザ" allergie="卵,小麦,乳,大豆,鶏肉,りんご,バナナ,オレンジ,ごま" price="550"/>        
            <Menucard srcimage="/menu_fruitssalada.jpg" name="日替わりサラダ" allergie="卵,小麦,乳,大豆,鶏肉,えび,落花生,りんご,バナナ,オレンジ,もも,キウイフルーツ,ごま,カシューナッツ,アーモンド,くるみ" price="110"/>
            <Menucard srcimage="/menu_icecream.jpg" name="アイスクリーム" allergie="卵,乳,大豆,りんご,バナナ,オレンジ,もも" price="110"/>
        </section>
    </div>
  );
}

