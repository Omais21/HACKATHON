import ProductCard from "./productcard";
import controller1_img from "../assets/images/Large.png";
import keyboard_img from "../assets/images/Photo.png";
import screen_img from "../assets/images/Photo1.png";
import chair_img from "../assets/images/photo2.png";

export default function secondproduct() {
  return (
    <>
      <div>
        <h1 className="text-3xl pt-20 px-16">Our popular products</h1>
      </div>
      <div className="flex container-x gap-7 flex-wrap pt-7 items-center justify-between px-16">
        <ProductCard
          cardImage={controller1_img}
          cardDiscount="40%"
          cardName="The Poplar suede sofa"
          discountedRate="$120"
          oldRate="$160"
          percent="88"
        />
        <ProductCard
          cardImage={keyboard_img}
          cardDiscount="35%"
          cardName="Rustic Vase Set"
          discountedRate="$960"
          oldRate="$1160"
          percent="75"
        />
        <ProductCard
          cardImage={screen_img}
          cardDiscount="30%"
          cardName="The Silky Vase"
          discountedRate="$370"
          oldRate="$400"
          percent="99"
        />
        <ProductCard
          cardImage={chair_img}
          cardDiscount="25%"
          cardName="The Lucy Lamp"
          discountedRate="$222"
          oldRate="$400"
          percent="99"
        />
      </div>
      <div className="buttonbg text w-44 h-11 rounded my-8 mx-auto flex justify-center items-center p-[18px] hover:cursor-pointer">
        <button>View Collection</button>
      </div>
      <div className="border-b border-y-gray-300 -mb-12 container-x pt-5 pb-16"></div>
    </>
  );
}
