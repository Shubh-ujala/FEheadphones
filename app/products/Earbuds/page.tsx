import React from 'react'
import ProductCard from '@/components/ProductsPage/ProductCard'
import { data } from '../productsData'
function page() {
  const earbuds = data.Earbuds  
  return (
    <>
      <div className='max-w-7xl m-auto my-10'>
        <ProductCard items={earbuds}/>
      </div>
      
    </>
  )
}

export default page
