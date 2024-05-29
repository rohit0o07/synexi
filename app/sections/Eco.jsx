import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { A11y } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../components/SwiperNavButtons';

const data = [
  {
    icon: BsArrowUpRight,
    heading: 'Talent Pool',
    text: 'Assemble your dream team from a pool of pre-vetted developers, marketers, community managers, graphics designers, and more.',
  },
  {
    icon: BsArrowUpRight,
    heading: 'Swap/Trade',
    text: 'As the market shifts, your strategy evolves! Buy, sell, or hodl any Solana token in an instant. Never miss a market move - seize the moment and stay ahead of the game.',
  },
  {
    icon: BsArrowUpRight,
    heading: 'Launchpad',
    text: "Secure funding and community support for your innovative project.",
  },
  {
    icon: BsArrowUpRight,
    heading: 'Incubator',
    text: "Get expert guidance and resources to accelerate your journey.",
  }
];

const Eco = () => {
  return (
    <section className='w-full bg-black h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6' id="benefits">
      <div data-aos='zoom-in '> 
       <h1 className='text-white text-center font-nunito text-[55px] not-italic font-bold leading-[73.7px] w-auto  lg:w-[1136px]'>Complete Ecosystem</h1>
      </div>
      <p className='text-white text-center font-sans text-2xl font-normal leading-[39px] lg:w-[1061px] w-auto'>Access a comprehensive suite of services, including a swap/bridge, launchpad, and <br/> incubator. Scale your project from ideation to reality.</p>
      
      <div className='w-full h-fit p-8'>
        <Swiper
          modules={[A11y]}
          spaceBetween={30}
          slidesPerView="auto"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map((item, index) => (
            <SwiperSlide
            key={index}
            className={`w-full min-w-[250px] max-w-[300px] min-h-[300px] cursor-pointer rounded-2xl bg-center bg-cover bg-no-repeat ${
              index === 0 || index === 3 ? 'bg-primary-gradient' : 'bg-[#272727]'
            }`}
          >
            <div className='w-[300px] h-[350px] p-10 rounded-xl relative flex flex-col justify-start items-start'>
              <div className='flex flex-col justify-start items-start gap-6 mt-6'>
                <h1 className='text-2xl text-white font-bold text-left'>{item.heading}</h1>
                <p className='text-[17px] text-white text-left'>{item.text}</p>
              </div>
              <div className='absolute bottom-8 left-6 p-2 rounded-full cursor-pointer'>
                {item.icon && <item.icon className="w-[20px] h-[20px] text-white" />}
              </div>
            </div>
          </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
}

export default Eco;
