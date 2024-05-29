import React from 'react';
const Offer = () => {
    return (
      <section className="p-6 realative bg-black  " id="features">
        <div className='absolute inset-0 bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat opacity-10 z-10'></div>
       <div className='absolute inset-0 bg-[url("/assets/GIF.png")] bg-cover bg-center bg-no-repeat opacity-100 z-20'></div>
      
      <div className='relative block sm:items-center sm:w-full lg:flex lg:justify-center lg:items-center gap-7 z-10'>
        <div data-aos='zoom-in'> 
        <h1 className=' w-auto lg:w-[1136px] text-white text-center font-nunito-sans lg:text-[55px] text-2xl font-normal font-bold lg:leading-[73.7px]'>
          Interact with confidence, knowing that every <br/>offering has been rigorously evaluated
        </h1>
        </div>
      </div>
        <div className="grid gap-6 md:grid-cols-3 cursor-pointer hover:translate-y-1 mt-[4rem] w-auto ">
        <div data-aos='zoom-out-right'>
          <div className="bg-purple-800 p-6 rounded-lg text-white hover:bg-black hover:text-white transition-colors duration-300 border-2 border-transparent hover:border-purple-500 hover:bg-black">
            <h3 className="font-bold text-lg mb-2">Tailored Benefits</h3>
            <p><span className="font-semibold text-yellow-400">Discover and trade:</span> Explore a curated selection of innovative Dapps and tokens built on the Solana blockchain.</p>
            <p><span className="font-semibold text-yellow-400">Interact with confidence:</span> Our rigorous vetting process mitigates risk and fosters trust within the ecosystem.</p>
            <p><span className="font-semibold text-yellow-400">Seamless user experience:</span> Navigate a user-friendly platform that simplifies your interaction with the Solana ecosystem.</p>
          </div>

          </div>
        <div data-aos='zoom-in'>
          <div className="bg-[#EDFFCF] p-6 rounded-lg text-black  hover:text-white  transition duration-300 border-2 border-transparent hover:border-purple-500 hover:bg-black w-auto h-[400px] lg:h-[300px]">
            <h3 className="font-bold text-lg mb-2 hover:text-white">B2B, B2C and Direct to Consumers</h3>
            <p><span className="font-semibold hover:text-white">Access talent and expertise:</span> Connect with a pool of skilled developers and service providers to fuel your Web3 ambitions.</p>
            <p><span className="font-semibold  hover:text-white">Expand your reach:</span> Leverage the platform to connect with potential customers and partners within the Solana ecosystem.</p>
            <p><span className="font-semibold  hover:text-white">Collaborate and innovate:</span> Foster connections and knowledge sharing to drive innovation and success.</p>
          </div>
          </div>
        <div data-aos='zoom-out-left'>
          <div className="bg-[#FFEACF]  p-6 rounded-lg text-black hover:bg-black hover:text-white transition duration-300 border-2 border-transparent hover:border-purple-500 hover:bg-black ">
            <h3 className="font-bold text-lg mb-2">Partners</h3>
            <p><span className="font-semibold ">Join a leading platform:</span> Collaborate with Synexsi, a prominent player at the forefront of the Web3 revolution.</p>
            <p><span className="font-semibold ">Reach a wider audience:</span> Gain access to a growing and engaged community within the Solana ecosystem.</p>
            <p><span className="font-semibold ">Contribute to the future:</span> Shape the future of Web3 by collaborating with a platform dedicated to building a thriving and collaborative ecosystem.</p>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  export default Offer;
  