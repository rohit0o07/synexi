"use client"

import React, { useEffect, useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link  from "next/link";
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle , setIconToggle]= useState(false);
  const [menuClass, setMenuClass] = useState("");
  const closeNavbar = () => setToggle(false);



  const toggleMenu = () =>{
    setToggle(!toggle);
  }

  const toggleIcon = () =>{
    setIconToggle(!iconToggle);
  }

  useEffect(() => {
    setMenuClass(toggle ? "transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100" : "transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0");
  }, [toggle]);
  return (
    <section className='w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40   ' >
     <Link href="/"> <Image src='/assets/Logo.png' alt='' width={200} height={200}/> </Link> 
      <div className='hidden lg:flex justify-between items-center gap-4 mx-auto flex-grow '>
       <ul className='flex justify-center items-center  gap-3 text-white flex-grow bg-black '>
         <ScrollLink to="discover" spy={true} smooth={true} duration={500}>
           <div className='text-lg  cursor-pointer  px-5  py-2   bg-[#393D3E] rounded-full  text-white'>Discover</div>
         </ScrollLink>  
         <ScrollLink to="features" spy={true} smooth={true} duration={500}>
           <div className='text-lg  cursor-pointer rounded-sm px-5 py-2   hover:bg-[#393D3E] hover:rounded-full  hover:text-white'>Features</div>
         </ScrollLink> 
         <ScrollLink to="benefits" spy={true} smooth={true} duration={500}>
           <div className='text-lg  cursor-pointer rounded-sm px-5 py-2   hover:bg-[#393D3E] hover:rounded-full  hover:text-white'>Benefits</div>
         </ScrollLink>   
         <li><a  className='text-lg cursor-pointer rounded-sm px-5 py-2  hover:bg-[#393D3E] hover:rounded-full hover:text-white'>Blog</a></li>

       </ul>
       <div className="space-x-12 hidden lg:flex justify-end items-center font-bold ">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScBhc66ECfitZLmIbx24ys9MquOmDtYZ3HeZ3fu1N6I4rwZww/viewform" > <button className="text-white bg-[#59B7E9] py-2 px-5 transition-all duration-300 rounded-full flex justify-center transform hover:translate-y-1">Join Waitlist <MdOutlineArrowOutward />  </button></Link>
           </div>
        
      </div>
       
      <div className='flex lg:hidden flex-col text-white m-2'>
     {iconToggle ?(
      <RiMenu2Line   className='h-8 w-8  text-[#FFFFFF]' onClick={()=>{toggleMenu(); toggleIcon()}}/>
     ) :(
      <RiMenu2Line  className='h-8 w-8  text-[#FFFFFF]' onClick={()=>{toggleMenu(); toggleIcon()}} />
     )} 

     { toggle && (
      <div id="mob-menu" className={` bg-black text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}> 
      
      <ul className='flex flex-col justify-center items-center gap-2'>
    
        <a  href ="#discover" className='text-xl text-white font-semibold  hover:text-white w-full py-3 px-4 ' onClick={closeNavbar}>Discover</a>
       <a href="#features" className='text-xl text-white font-semibold  hover:text-white w-full py-3 px-4 ' onClick={closeNavbar}>Features</a>
       <a href="#benefits" className='text-xl text-white font-semibold  hover:text-white w-full py-3 px-4 ' onClick={closeNavbar}>Benefits</a>
       <li className='text-xl text-white font-semibold  hover:text-white w-full py-3 px-4 '><Link href="/" onClick={closeNavbar}>Blog</Link></li>

       <button className="text-white bg-[#59B7E9] py-3 px-4 transition-all duration-300 rounded-full  inline-flex w-[80%] text-center justify-center items-center text-xl font-bold mb-5 mt-5 transform hover:translate-y-1 "><Link href=" https://docs.google.com/forms/d/e/1FAIpQLScBhc66ECfitZLmIbx24ys9MquOmDtYZ3HeZ3fu1N6I4rwZww/viewform">Join Waitlist </Link><MdOutlineArrowOutward /></button>

      </ul>

      <div className="space-x-12 hidden lg:flex items-center">
           </div>
      </div>
     

      ) }
      </div>
    </section>
  )
}

export default Header