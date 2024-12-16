


import React from 'react';
import Image from 'next/image';
import image from '../assets/images/Image.png';

const hero: React.FC = () => {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-[1280px] md:h-[584px] px-4 md:px-16'>
          <h1 className='text text-2xl pt-12 pl-7 pb-1'>
            From a studio in London to a global brand with<br />
            over 400 outlets
          </h1>

          <p className='pl-7 pt-4 text-xl text'>
            When we started Avion, the idea was simple. Make high quality furniture
          </p>

          <p className='pl-7 pt-4 text-xl text pb-40'>
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe.
          </p>

          <span className='pl-7'>
            <button className='w-[170px] h-[56px] text buttonbg'>
              Get In Touch
            </button>
          </span>
        </div>

        <div className='flex justify-center md:justify-start'>
          <Image src={image} alt="Right Image" width={690} height={420} />
        </div>
      </div>
    </>
  );
};

export default hero;
