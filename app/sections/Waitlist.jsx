import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const Waitlist = () => {
  return (
    <section className="flex items-center justify-center w-full bg-black py-8 px-4">
      <div data-aos='zoom-in'> 
      <div className="bg-[#272727] rounded-lg w-full max-w-[1200px] lg:w-[1280px] h-auto sm:h-[352px] flex flex-col items-center justify-center p-4 lg:p-[60px] lg:px-[162px]">
        <h4 className="mb-2 text-white text-center text-lg sm:text-3xl font-extrabold">JOIN THE WAITLIST</h4>
        <span className="text-center mb-2 text-white text-sm sm:text-xl">Be among the first to experience Synesxi:<br/> Your go-to Solana Gateway!  </span>
        <div className="relative mt-6 w-full max-w-[380px]">
          <form className="flex flex-col items-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScBhc66ECfitZLmIbx24ys9MquOmDtYZ3HeZ3fu1N6I4rwZww/viewform">
              <button
                className="flex items-center justify-center w-full sm:w-[140px] h-[40px] p-2.5 rounded-full bg-[#59B7E9] font-bold text-white shadow-md cursor-pointer transform hover:translate-y-1 transition-transform duration-200"
              >
                Join Now <MdOutlineArrowOutward className="ml-2" />
              </button>
            </Link>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Waitlist;
