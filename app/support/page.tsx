import Image from "next/image";
import React from "react";
import "@/public/support.png";
import Category from "@/components/Category";
import { arrayFAQ } from "./Faq";
import FaqToggle from "@/components/FaqToggle";
import Card from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";
import { FaApple } from "react-icons/fa";
import Button from "@/components/Button";
import {cn} from '@/libs/utils'


function page() {
  const heaphones: string[] = [
    "Solo 4",
    "Studio Pro",
    "Solo Pro",
    "Studio3 Wireless",
    "Solo Wireless",
  ];

  const Earbuds: string[] = [
    "Powerbeats Fit",
    "Powerbeats Pro 2",
    "Beats Solo Buds",
    "Beats Studio Buds +",
    "Beats Fit Pro",
    "Beats Studio Buds",
    "Beats Flex",
    "Powerbeats",
    "Powerbeats Pro",
    "BeatsX",
  ];

  const Speakers: string[] = ["Beats Pill", "Beats Pill +"];

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
          <Category title="Headphones" items={heaphones} />
          <Category title="Earbuds" items={Earbuds} />
          <Category title="Speakers" items={Speakers} />
        </div>
      </div>

      <div className="w-full  mt-10 py-10 bg-[#ffffff]">
        <div className="max-w-4xl m-auto pl-10 ">
          <div className="text-4xl font-primary font-bold  pt-10 tracking-tighter">
            Frequently Asked Questions
          </div>
          <div className="h-px my-2 bg-black"></div>
          <FaqToggle items={arrayFAQ} />
        </div>
      </div>

      {/* cards comes here */}
      <div className="max-w-7xl m-auto my-15 mb-20 flex justify-evenly gap-5">
        <Card
          title="Beats User Guide"
          description="Discover useful tips and information to enhance your listening experience."
          img={"speakers.png"}
          width={295}
          height={295}
        />
        <Card
          title="Beats App for Android"
          description="Download the Beats app to unlock additional features."
          img={"mobileSupport.png"}
          width={138.45}
          height={295}
        />
        <Card
          title="Set Up Find My"
          description="If your Beats are missing, track them down with the Find My app."
          img={"headphonewithmobile.png"}
          width={295}
          height={295}
        />
        <Card
          title="Beats User Guide"
          description="Get the most out of your Beats with the latest software updates and more."
          img={"headphoneBrown.png"}
          width={295}
          height={295}
        />
      </div>

      {/* Service and repair section */}
      <div className="w-full pt-5 m-auto bg-white pb-10">
        <div className="text-4xl flex justify-center tracking-tight font-bold font-primary mt-10">
          Service And Repair
        </div>
        <div className="flex justify-evenly gap-10 max-w-5xl m-auto mt-10">
          <ServiceCard
            title="Check Your Coverage"
            description="Sign in with your Apple Account to check the coverage status on your Beats."
            img="check.png"
            link="Learn More"
          />
          <ServiceCard
            title="Find Your Serial Number"
            description="Learn where to look for the serial number on your Beats."
            img="search.png"
            link="Find Serial Number"
          />
          <ServiceCard
            title="Service Options"
            description="Learn about your options for Apple-certified service and repair."
            img="service.png"
            link="Find Out More"
          />
        </div>

        
      </div>
      {/* AppleCare + headphones */}
      <div className="my-10 flex justify-evenly max-w-4xl m-auto items-center px-10">
        <div><Image width={100} height={100} src={'/appleCare.png'} alt="apple care"/></div>
        <div className="text-4xl tracking-tighter font-primary font-semibold">AppleCare+ for Headphones</div>
        <Button name="LEARN MORE" icon={FaApple} color="white"/>
      </div>
      
      <div className="bg-black">
        <div className=" max-w-7xl m-auto text-white mt-10 flex justify-evenly items-center p-20 ">
        <div className="text-4xl font-primary font-semibold">Get support for your Beats</div>
        <Button className={cn('border border-white bg-black')} color="white" icon={FaApple} name="CONTACT US"/>
      </div>
      </div>
    </>
  );
}

export default page;
