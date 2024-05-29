import React from 'react';
import { servicesgrid } from '../exports';
import ServicesGrid from '../components/ServicesGrid';
import { SwiperNavButtons } from '../components/SwiperNavButtons';
import Marquee from 'react-fast-marquee';

const Services = () => {
  return (
    <section className='relative w-full flex flex-col bg-black bg-opacity-75 lg:flex-col h-fit px-7 py-4 lg:px-16 lg:py-12' id='discover'>
      <div className="absolute left-0 top-0 w-1/2 h-full bg-left bg-no-repeat bg-cover blur-lg" style={{ backgroundImage: "url('/assets/blueBGleft.png')" }}></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-right bg-no-repeat bg-cover blur-lg" style={{ backgroundImage: "url('/assets/pinkBG.png')" }}></div>
      
      <div className='block sm:items-center w-auto lg:flex lg:justify-center lg:items-center gap-12 lg:w-[1280px]'>
        <div data-aos='zoom-in'> 
          <h1 className='text-white text-center font-nunito lg:text-[55px] text-2xl font-semibold lg:leading-[73.7px] w-auto lg:w-[1105px] lg:h-[256px]'>
            <span className="text-[#F8CE62]">Your One-stop Shop</span><br/> For Secure and Reliable dApps, Tokens, and <br/> Service Providers in the Solana Blockchain.
          </h1>
        </div>
      </div>
      
      <Marquee speed={100} pauseOnHover={true} style={{ width: '100vw', overflow: 'hidden' }}>
        <div className='flex w-full'>
          <div className='flex w-full justify-between items-center border border-white border-opacity-50 bg-gray-800 mt-[4rem]'>
            {servicesgrid.map((grid) => (
              <div key={grid.label} className='flex-1 min-w-0'>
                <ServicesGrid {...grid} />
              </div>
            ))}
          </div>
        </div>
      </Marquee>
      
      <SwiperNavButtons />
    </section>
  );
}

export default Services;
