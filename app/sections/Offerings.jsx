import React from 'react';
import { Offeringsgrid } from '../exports';
import OFFERINGSGRID from '../components/OfferingsGrid';

const Offerings = () => {

  const colors = [
    'bg-purple-800 text-white', 
    'bg-[#EDFFCF] text-black', 
    'bg-[#FFEACF] text-black'
  ];

  return (
    <section className='relative w-full flex flex-col lg:flex-col gap-1 lg:gap-2 h-fit px-7 py-4 lg:px-16 lg:py-12 bg-black' id="features">
      <div className='absolute inset-0 bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat opacity-10 z-10'></div>
      <div className='absolute inset-0 bg-[url("/assets/GIF.png")] bg-cover bg-center bg-no-repeat opacity-100 z-20'></div>
      
      <div className='relative block sm:items-center sm:w-full lg:flex lg:justify-center lg:items-center gap-7 z-10'>
        <div data-aos='zoom-in'> 
        <h1 className=' w-auto lg:w-[1136px] text-white text-center font-nunito-sans lg:text-[55px] text-2xl font-normal font-bold lg:leading-[73.7px]'>
          Interact with confidence, knowing that every <br/>offering has been rigorously evaluated
        </h1>
        </div>
      </div>

      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto mx-auto items-center gap-[2rem] mt-[4rem] z-10'>
      {Offeringsgrid.map((grid, index) => (
        <div
          key={grid.label}
          className={`${colors[index % colors.length]} group p-4 transition duration-300 border-2 border-transparent hover:border-purple-500 hover:bg-black`}
          data-aos={
            index === 0 ? 'zoom-out-right' : index === 1 ? 'zoom-in' : 'zoom-out-left'
          }
        >
          <div className='text-current group-hover:text-white'>
            <OFFERINGSGRID {...grid} />
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Offerings;
