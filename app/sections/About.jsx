import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className='relative grid grid-cols-1 md:grid-cols-2 w-[100vw] mx-0 gap-[1rem] items-center bg-black bg-cover bg-center bg-no-repeat '>
      
      <div className='absolute top-0 left-0 w-1/2 h-full bg-left bg-no-repeat bg-cover blur-lg' style={{ backgroundImage: 'url(/assets/yellowBG.png)' }}></div>

      
      <div className='absolute top-0 right-0 w-1/2 h-full bg-right bg-no-repeat bg-cover blur-lg' style={{ backgroundImage: 'url(/assets/blueBGright.png)' }}></div>

      <div data-aos="fade-left"> 
      <div  className='hidden lg:block lg:w-[600px] md:mx-0 mt-[2rem] lg:mt-[0] lg:h-[400px] w-[400px] h-[400px] relative z-10'>
        <Image src="/assets/About.png" alt="Synesxi Image" width={800} height={800} objectFit='contain' className="relative z-[11] object-contain mx-6" />
      </div>
      </div>
      <div className='relative z-10'>
        <div data-aos="fade-right">
          <h1 className=' md:w-[524px] text-[#F8CE62] font-nunito-sans md:text-5xl font-bold w-[90%] mx-auto md:mx-0 text-2xl text-center md:text-left'>
            Synesxi’s <span className='text-white font-nunito-sans md:text-5xl text-2xl font-bold'>Leading the Solana Revolution</span>
          </h1>
        </div>
        <div data-aos="fade-left"> 
        <div  className='lg:hidden lg:w-[400px] md:mx-0 mt-[2rem] lg:mt-[0] lg:h-[400px] w-[400px] h-[300px] relative z-10'>
          <Image src="/assets/About.png" alt="" layout='fill' objectFit='contain' className="relative z-[11] object-contain mx-10" />
        </div>
        </div>
        <div data-aos="fade-right">
          <div className='flex flex-col justify-center flex-shrink-0 md:w-[467px] md:h-[418px] w-[90%] mx-auto md:mx-0'>
            <p className='text-white font-nunito-sans text-2xl font-normal'>
              <span className="text-[#EBC3FF]"> Synesxi </span> isn't just a marketplace, it's your gateway to the vibrant Solana blockchain. We connect a global community of key players on the Solana blockchain, from curious newcomers to seasoned veterans to harness the full potential of this revolutionary technology. Synesxi provides seamless, end-to-end services that cater to every participant within the Solana network, empowering individuals and businesses (B2B/B2C) to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
