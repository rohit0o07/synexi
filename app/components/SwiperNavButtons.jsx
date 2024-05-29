import React from 'react';
import { useSwiper } from 'swiper/react';
import { LiaArrowAltCircleLeftSolid } from "react-icons/lia";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4 items-center w-auto h-12 rounded-full border-none outline-none text-white mx-2 shadow-md transition-all cursor-pointer">
        <button onClick={() => swiper.slidePrev()} className="p-4 text-5xl"><LiaArrowAltCircleLeftSolid /></button>
        <button onClick={() => swiper.slideNext()} className="p-4 text-5xl"><BsFillArrowRightCircleFill /></button>   
      </div>
    </div>
  );
};
