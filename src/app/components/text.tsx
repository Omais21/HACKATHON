import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiPlantThin } from "react-icons/pi";

const text: React.FC = () => { 
  return (  
    <>
    <div className="pt-8 px-16">
      <h1 className="text-center font-medium text-3xl">What makes our brand different</h1>
      <div className="flex flex-wrap justify-between items-center pt-11 gap-10 sm:gap-0">
        
        <div className="flex flex-col items-center text-center">
          <TbTruckDelivery className="text-2xl mb-4" />
          <h3 className="text-xl">Next day as standard</h3>
          <p>Order before 3pm and get your order<br/>the next day as standard</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <IoCheckmarkCircleOutline className="text-2xl mb-4" />
          <h3 className="text-xl">Made by true artisans</h3>
          <p>Handmade crafted goods made with<br/>real passion and craftmanship</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <MdOutlineFeaturedPlayList className="text-2xl mb-4" />
          <h3 className="text-xl">Unbeatable prices</h3>
          <p>For our materials and quality you won’t<br/>find better prices anywhere</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <PiPlantThin className="text-2xl mb-4" />
          <h3 className="text-xl">Recycled packaging</h3>
          <p>We use 100% recycled packaging to<br/>ensure our footprint is manageable</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default text;
