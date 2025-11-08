import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";


function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-between px-2 py-2 max-w-5xl m-auto bg-neutral-300/50 rounded-3xl text-black items-center border border-neutral-200 backdrop-blur-sm">
      <Link href={"/"}>
        <Image width={45} height={45} alt="logo" src={'/logo.jpg'} className=" rounded-full"/>
      </Link>
      <div className="flex gap-15 pl-10">
        <Link
          href={"/products"}
          className="font-bold font-primary hover:underline underline-offset-8 decoration-neutral-600 decoration-solid"
        >
          Shop
        </Link>
        <Link
          href={"/support"}
          className="font-bold font-primary hover:underline underline-offset-8 decoration-neutral-600 decoration-solid"
        >
          Support
        </Link>
        
      </div>
      <div className="pr-2">
        <Link href={'https://github.com/Shubh-ujala/FEheadphones'}>
          <FaGithub size={25} className="cursor-pointer"/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
