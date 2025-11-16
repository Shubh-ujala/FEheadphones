import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface card{
    id: number,
    img : string,
    brand: string,
    price : string,
    name: string,
    category: string
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
             <Link key={key} href={`/product/${ele.category}/${ele.id}`}>
              <div  className='w-70 h-85 rounded-xl transition-all ease-in-out hover:scale-105 bg-neutral-300/50 p-6 cursor-pointer hover:shadow-xl/20 flex justify-center ' >
                  <div><div className={`w-50 h-50 object-contain bg-center bg-no-repeat `}
                  >
                    <Image
                        width={200}
                        height={200}
                        alt='image'
                        src={ele.img}
                        className='rounded-xl content-center'
                    />
                  </div>
                  <div className='text-xl font-semibold'>{ele.brand}</div>
                  <div className=''>{ele.name}</div>
                  <div>{ele.price}</div></div>
             </div>
             </Link>
          ))}
    </div>
  )
}

export default ProductCard
