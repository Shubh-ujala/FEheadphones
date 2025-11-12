import ProductCard from '@/components/ProductsPage/ProductCard'
import React from 'react'
import { data } from '../productsData'

function page() {
  const headphones = data.Headphones
  return (
    <>
      <div className='max-w-7xl m-auto my-10'>
        <ProductCard items={headphones}/>
      </div>
    </>
  )
}

export default page
