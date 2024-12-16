
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Banner: React.FC = () => {
  return (  
    <div className='flex justify-between items-center p-4 border-b-2 flex-col sm:flex-row'>
      <CiSearch className='text-2xl mb-2 sm:mb-0'/>
      <h1 className="text-2xl mb-2 sm:mb-0">Avion</h1>
      <span className='flex gap-4 sm:gap-6'>
        <MdOutlineShoppingCart className='text-2xl' />
        <RxAvatar className='text-2xl' />
      </span>
    </div>
  );
};

export default Banner;
