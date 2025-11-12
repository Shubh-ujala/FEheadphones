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
  console.log(props);
  return (
    <div>
       
    </div>
  )
}

export default ProductCard
