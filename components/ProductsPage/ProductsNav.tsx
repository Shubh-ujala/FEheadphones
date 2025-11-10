import Link from 'next/link'
import React from 'react'

function ProductsNav() {
  return (
  
       <div className="flex justify-center gap-5 mt-4 font-primary font-semibold ">
        <Link href={'/products/Headphones'}className="cursor-pointer">Headphones</Link>
        <Link href={'/products/Earbuds'}className="cursor-pointer">Earbuds</Link>
        <Link href={'/products/Speakers'}className="cursor-pointer">Speakers</Link>
      </div>
    
  )
}

export default ProductsNav
