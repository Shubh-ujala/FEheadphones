import { url } from 'inspector';
import Image from 'next/image';
import React from 'react'

interface card{
    id: number,
    img : string,
    brand: string,
    price : string,
    name: string
}
interface jsonData{
    items : card[]
}


function ProductCard(props:jsonData) {
  // console.log(props.items);
  const content = props.items;
  return (
    <div className='flex justify-evenly flex-wrap gap-10'>
          {content.map((ele,key)=>(
             <div key={key} className='w-70 h-90 rounded-xl transition-all ease-in-out hover:scale-105 bg-neutral-300/50 p-5 cursor-pointer hover:shadow-xl/20'>
                  <div className={`w-50 h-50 object-contain bg-no-repeat`}
                  style={{ backgroundImage: `url(${ele.img})` }}>
                  </div>
                  <div className='text-xl font-semibold'>{ele.brand}</div>
                  <div>{ele.name}</div>
                  <div>{ele.price}</div>
             </div>
          ))}
    </div>
  )
}

export default ProductCard
