import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className='relative flex justify-center items-center w-full bg-black bg-cover bg-center bg-no-repeat '>
  <div className='absolute inset-0 bg-[url("/assets/GIF.gif")] bg-cover bg-center bg-no-repeat opacity-10 z-10'></div>
  <div className='absolute inset-0 bg-[url("/assets/GIF.png")] bg-cover bg-center bg-no-repeat opacity-100 z-20'></div>
  
  <div className='relative flex flex-col justify-center items-center gap-6 max-w-3xl px-10 py-10 lg:px-20 lg:py-20'>
    <h1 className='text-white text-center font-sans md:text-6xl font-normal leading-normal md:w-[1083px] w-auto text-4xl'>
      Your Gateway <br/> to the Solana Ecosystem
    </h1>
    <p className='text-white text-center font-sans text-2xl font-normal leading-[39px] md:w-[623px] w-auto'>
      Discover, Collaborate, & Own Your Solana Journey.
    </p>
    
    <div className='flex justify-center gap-7' data-aos='zoom-in'>
      <button className='inline-flex items-center font-bold gap-2.5 bg-[#59B7E9] text-white px-4 lg:px-8 py-3 rounded-lg text-[18px] cursor-pointer transform hover:translate-y-1'>
        Learn More <FaArrowRight />
      </button> 
    </div>
  </div>
</section>

  );
};

export default Hero;
