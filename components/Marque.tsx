import Image from "next/image";
import React from "react";


const ImgUrl = [
  {
    id: 1,
    url: '/productsImg/earbuds/Nothing/Nothing3.png'
},
{
    id: 2,
    url: '/earbuds.png'
},
{
    id: 3,
    url: '/speakers.png'
  },
  {
      id: 4,
      url: '/headphoneMarquee.png'
  },
  {
      id: 5,
      url: '/headphoneBrown.png'
  },
  {
      id: 6,
      url: '/boatMarquee.png'
  }
];


function Marque() {
  return (
    <div className="relative p-5 w-full  mr-5  flex pt-30 justify-center max-w-3xl overflow-hidden  mask-l-from-80% mask-r-from-80%">
      <div className="flex gap-8 animate-marquee ">
            {ImgUrl.map((ele,key)=>(
            // <div key={key} className="">
                <Image key={key} width={100} height={100} src={ele.url} alt='image' className="mx-4 object-contain" />
            // </div>
        ))}
      </div>
      
    </div>
  );
}

export default Marque;
