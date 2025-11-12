import ProductCard from '@/components/ProductsPage/ProductCard'
import React from 'react'
import { data } from '../productsData'
function page() {
  const speakers = data.Speakers
  return (
   <>
    <div className='max-w-7xl m-auto my-10'>
        <ProductCard items={speakers}/>
      </div>
   </>
  )
}

export default page
