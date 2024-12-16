

import React from 'react';
import Image from 'next/image';
import image from '../assets/images/Right Image.png';

const hero: React.FC = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row p-6 md:px-16'>
        <div className='bg-[#2A254B] w-full md:w-[1280px] h-auto md:h-[584px]'>
          <h1 className='text-white text-2xl pt-12 pl-7 pb-16'>
            The furniture brand for the future,<br /> with timeless designs
          </h1>

          <span className='pl-7'>
            <button className='w-[170px] h-[56px] text-white bg-[#534e72]'>
              View Details
            </button>
          </span>

          <p className='pl-7 pt-48 text-xl text-white'>
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand
            <br />
            with nice fonts, tasteful colors, and a beautiful way to display things digitally
            <br />
            using modern web technologies.
          </p>
        </div>

        <div className='flex justify-center md:justify-start'>
          <Image src={image} alt="Right Image" width={520} height={584} />
        </div>
      </div>
    </>
  );
};

export default hero;

