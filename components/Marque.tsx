import Image from "next/image";
import React from "react";

const ImgUrl = [
  {
    id: 1,
    url: '/wired.jpeg'
},
{
    id: 2,
    url: '/earbuds.png'
},
{
    id: 3,
    url: '/speakerMarquee1.jpg'
  },
  {
      id: 4,
      url: '/headphoneMarquee.png'
  },
  {
      id: 5,
      url: '/moreMarqueeImage.png'
  }
];


function Marque() {
  return (
    <div className="relative h-96 w-[500px]  mr-5  flex pt-30 justify-center mask-r-from-80% mask-l-from-80% max-w-3xl overflow-hidden">
      <div className="flex gap-8 animate-marquee absolute">
            {ImgUrl.map((ele,key)=>(
            <div key={key} className="">
                <Image width={80} height={80} src={ele.url} alt='image' className="rounded-full "/>
            </div>
        ))}
      </div>
      
    </div>
  );
}

export default Marque;
