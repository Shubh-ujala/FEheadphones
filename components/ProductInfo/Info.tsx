'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import ImageSlider from "./ImageSldier";
import { useRouter } from "next/navigation";

interface propsInfo {
  id: string;
  name: string;
  brand: string;
  price: string;
  img: string;
  images:string[];
  description: string;
  features: Array<String>;
  rating: number;
  reviews: number;
  category: string;
  colors: Array<String>;
  option?: string;
  specialProperties?: Array<String>;
}
interface reqProp {
  product: propsInfo;
}

function Info(props: reqProp) {
  const item = props.product;
  const router = useRouter();
  return (
    <div className="max-w-7xl m-auto min-h-screen flex flex-col pt-5">
      <button
        className="py-4 flex items-center cursor-pointer"
        // href={`/products/${item.category}`}
        onClick={()=>{
            router.back();
        }}
      >
        <IoMdArrowRoundBack size={20} /> Back
      </button>
      <div className="flex flex-1 justify-evenly w-full py-10 min-w-0">
        <div className=" w-1/2 flex justify-center items-center min-w-0">
          <div className="bg-neutral-300/50 p-10 rounded-3xl ">
            <ImageSlider images={item.images}/>
          </div>
        </div>

        <div className=" w-1/2 p-10 ">
          <div className="text-5xl tracking-tighter font-primary font-semibold flex gap-2 ">
            {item.brand}
          </div>
          <div className="font-normal text-lg">{item.name}</div>
          <div className="my-3 text-xl">{item.price}</div>
          <div className="text-md mt-7 mb-4 text-neutral-800">
            {item.description}
          </div>
          <div className="mt-10">
            <div className="flex ">
            <div className="font-primary font-semibold">Features</div> :{" "}
            {item.features.join(" , ")}
          </div>
          <div>
            <div className="font-primary font-semibold mb-1 flex items-center gap-2">
              Special Properties <FaArrowRight size={12} />
            </div>

            <ul className="list-disc ml-15">
              {item.specialProperties?.map((prop, index) => (
                <li key={index}>{prop}</li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <div className="font-primary font-semibold">Available Colors</div> :{" "}
            {item.colors.join(" and ")}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 font-primary font-semibold">
              Special feature
              <FaArrowRight size={12} />
            </div>
            <div>{item.option}</div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 font-primary font-semibold">
              Total Reviews
              <FaArrowRight size={12} />
            </div>{" "}
            {item.reviews}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 font-primary font-semibold">
              Rating
              <FaArrowRight size={12} />
            </div>{" "}
            {item.rating} / 5
          </div>
        </div>
          </div>
      </div>
    </div>
  );
}

export default Info;
