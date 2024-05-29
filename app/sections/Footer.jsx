import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'


const Footer = () => {

  return (
    <>
      <section className='w-full bg-black px-10 py-14 lg:px-20 lg:py-28' id='footer'> 
        <div className='text-white flex flex-col items-center py-5'>  
          <div className='flex flex-col justify-center items-center w-full lg:w-[20%]'> 
          <Link href="/"> < Image src='/assets/footer-Logo.png' alt='' width={600} height={600}/> </Link> 
            <ul className='flex  justify-center items-center gap-10 cursor-pointer text-white mt-5'> 
                 <Link href="/faq"> <li>FAQ</li></Link>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScGVO2NmdZvDGPAhdQzFvSnVksIhtysa-ZeyiGkTloOmVpkPw/viewform "> <li>Careers</li></Link>
                <Link href="/policy"> <li> Policy</li></Link> 
                <Link href=" /terms"><li>Terms </li></Link>
            </ul>
            <div className='flex justify-center items-center gap-2 mt-5 ' id="logos">
              <Link href="https://www.linkedin.com/company/synesxi"><span className='p-2 rounded-full cursor-pointer '>< Image src='/assets/linkedin.png' alt='' width={400} height={400}/></span></Link>
              <Link href="https://x.com/synesxi_hub"><span className='p-2 rounded-full cursor-pointer'>< Image src='/assets/twitter.png' alt='' width={400} height={400}/></span></Link>
              <Link href="https://instagram.com/@synesxi"><span className='p-2 rounded-full cursor-pointer'>< Image src='/assets/instagram.png' alt='' width={400} height={400}/></span></Link>
              <Link href="https://facebook.com/@synesxi"><span className='p-2 rounded-full cursor-pointer'>< Image src='/assets/facebook.png' alt='' width={400} height={400}/></span></Link>
              <Link href="https://telegram.com/@synesxi"><span className='p-2 rounded-full cursor-pointer'>< Image src='/assets/telegram.png' alt='' width={400} height={400}/></span></Link>
              <Link href="https://medium.com/@synesxi"><span className='p-2 rounded-full cursor-pointer'>< Image src='/assets/medium.png' alt='' width={400} height={400}/></span></Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-white"> © 2024 Synesxi Technologies</h1>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;
