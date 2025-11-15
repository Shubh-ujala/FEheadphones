import React from "react";
import Marque from "../Marque";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import Navbar from "../Navbar";
function Hero() {
  return (
    <>
     <Navbar/>
      <div className=" text-black max-w-7xl m-auto flex justify-evenly ">
        <div className="pt-[8%] max-w-3xl">
          <div className="tracking-tighter font-bold text-6xl leading-17 text-center">
            Explore. Experience. Elevate Your Sound.
          </div>
          <p className="text-sm font-normal text-center max-w-3xl">
            Discover premium headphones, earbuds, and speakers designed to
            deliver pure sound, comfort, and style. Experience music the way
            it’s meant to be — clear, powerful, and immersive.
          </p>
        </div>
      </div>
      <div className="flex justify-center max-w-4xl m-auto ">
        <Marque />
      </div>

      <div className="flex justify-center items-center mb-4"> 
            <Link href={'/products'}>
            <div className="">Explore more</div>
            </Link>
            <Link href={'/products'} className="mt-1"><MdOutlineArrowRightAlt size={25}/>
            </Link>
      </div>
    </>
  );
}

export default Hero;
