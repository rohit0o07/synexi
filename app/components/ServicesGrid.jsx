import React from 'react';
import Image from 'next/image'

const ServicesGrid = ({ icon, text, heading }) => {
  return (
    <div className='w-[400px] h-[400px] cursor-pointer border border-white mx-auto border-white flex justify-start items-start gap-0 bg-[#393D3E] flex-col border-white p-3 lg:p-7 bg-cover bg-center bg-no-repeat'>
      <Image src={icon} alt={heading} width={80} height={80} className='p-3 rounded-full cursor-pointer'  />
      <h1 className='text-xl lg:text-xl text-center text-white font-semibold'>{heading}</h1>
      <p className='text-[18px] text-white'>{text}</p>
    </div>
  );
}

export default ServicesGrid;
