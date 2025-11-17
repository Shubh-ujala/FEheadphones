import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiPeerlist } from "react-icons/si";




function Footer() {
  return (
    <div className='w-full bg-neutral-900 text-sm text-white p-5 flex justify-between font-mono'>
         <div className='pl-2 flex justify-evenly gap-5 '> 
            <div className='transition-all ease-in-out hover:scale-120'>
              <Link href={'https://x.com/shubhXc0de'}>
              <FaXTwitter color='white' size={20}/>
              </Link>
            </div>
            <div className='transition-all ease-in-out hover:scale-120'>
              <Link href={'https://www.linkedin.com/in/shubhujala/'}>
              <IoLogoLinkedin color='white' size={20}/>
              </Link>
            </div>
            <div className='transition-all ease-in-out hover:scale-120'>
              <Link href={'https://peerlist.io/user'}>
              <SiPeerlist color='white' size={20}/>
              </Link>
            </div>
         </div>
         <div  className='pl-2 '> ~Shubh ujala</div>
    </div>
  )
}

export default Footer
