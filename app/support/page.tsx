import Image from "next/image";
import React from "react";
import "@/public/support.png";
import Category from "@/components/Category";
import { arrayFAQ } from "./Faq";
import FaqToggle from "@/components/FaqToggle";

function page() {
  const heaphones : string[] = ['Solo 4','Studio Pro','Solo Pro','Studio3 Wireless','Solo Wireless']

  const Earbuds : string[] = ['Powerbeats Fit','Powerbeats Pro 2','Beats Solo Buds','Beats Studio Buds +','Beats Fit Pro','Beats Studio Buds','Beats Flex','Powerbeats','Powerbeats Pro','BeatsX']
  
  const Speakers : string[] = ['Beats Pill','Beats Pill +']
  
  
  
  // {console.log(arrayFAQ)}
  return (
    <>
      {/* promotion done */}
      <div className="w-full  tracking-tight cursor-pointer  p-3 bg-neutral-900 text-neutral-200 flex gap-1 justify-center">
        <a
          href="https://www.apple.com/applecare/?filter=headphones"
          className="hover:underline"
        >
          Enjoy peace of mind with AppleCare+{" "}
        </a>
        <span>Icon</span>
      </div>

      {/* image comes here */}
      <Image
        src={"/support.png"}
        alt="support image comes here"
        width={1520.8}
        height={316.83}
      />

      {/* main content */}
      <div className="max-w-4xl m-auto mt-10 ">
        <div className="text-7xl font-primary font-bold text-center tracking-tight">
          Beats Support
        </div>
        <div className="flex justify-evenly">
          <Category title="Headphones" items={heaphones}/>
          <Category title="Earbuds" items={Earbuds}/>
          <Category title="Speakers" items={Speakers}/>
        </div>
      </div>

      <div className="w-full  mt-10 py-10 bg-[#ffffff]">
          <div className="max-w-4xl m-auto pl-10 ">
            <div className="text-4xl font-primary font-bold  pt-10 tracking-tighter">Frequently Asked Questions</div>
            <div className="h-px my-2 bg-black"></div>
            <FaqToggle items={arrayFAQ}/>
          </div>
      </div>

      {/* cards comes here */}
    </>
  );
}

export default page;
