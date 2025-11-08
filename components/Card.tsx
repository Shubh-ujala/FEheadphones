import Image from "next/image";
import React from "react";

interface cardProps {
  title: string;
  description: string;
  img: string;
  width: number;
  height: number;
}

function Card(props: cardProps) {
  return (
    <div className="p-5 bg-white border-white rounded-2xl shadow-2xl max-w-xl w-[350px] h-[470px] transition-all duration-200 hover:scale-105 cursor-pointer">
      <div className="font-primary text-2xl font-semibold tracking-tighter ">
        {props.title}
      </div>
      <div className="text-md mt-2 font-medium max-w-64">
        {props.description}
      </div>
      <div className="mt-5 flex justify-center">
        <Image
          width={props.width}
          height={props.height}
          src={`/${props.img}`}
          alt="image comes here"
        />
      </div>
    </div>
  );
}

export default Card;
