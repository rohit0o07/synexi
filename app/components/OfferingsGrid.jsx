import React from 'react';

const OfferingsGrid = ({ text, text1, text2, heading  , heading1, subheading, subheading1, subheading2, text3, subheading3 , subheading4, text4, text5, subheading5}) => {
  return (
    <div className='w-full lg:w-[350px] lg:h-[565px] mx-auto flex flex-col text-left justify-start items-start gap-5 rounded-lg m-2 p-3 lg:p-7 bg-cover bg-center bg-no-repeat cursor-pointer  transform hover:translate-y-1 transition-transform duration-300 ease-in-out '>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center text-white font-bold'>{heading}</h1>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center   font-bold'>{heading1}</h1>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center  text-[#D3AB5E] font-bold'>{subheading}</h1><p className='text-base sm:text-lg text-white'>{text}</p>
      
      <h1 className='text-lg sm:text-xl lg:text-xl text-center  text-[#D3AB5E] font-bold'>{subheading1}</h1>
      <p className='text-base sm:text-lg text-white'>{text1}</p>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center  text-[#D3AB5E] font-bold'>{subheading2}</h1>
      <p className='text-base sm:text-lg text-white'>{text2}</p>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center  font-bold'>{subheading3}</h1>
      <p className='text-base sm:text-lg '>{text3}</p>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center  font-bold'>{subheading4}</h1>
      <p className='text-base sm:text-lg'>{text4}</p>
      <h1 className='text-lg sm:text-xl lg:text-xl text-center   font-bold'>{subheading5}</h1>
      <p className='text-base sm:text-lg '>{text5}</p>     
    </div>
  );
};

export default OfferingsGrid;
