import React from 'react'
import { data } from '../productsData'
function page() {
  const earbuds = data.Earbuds
  return (
    <>
      {earbuds.map((ele)=>(
        <div key={ele.id} className="p-4 border rounded-xl text-center bg-white shadow">
          <h2 className="font-semibold text-lg">{ele.name}</h2>
          <p className="text-gray-500">{ele.brand}</p>
          <p className="font-bold text-blue-600">{ele.price}</p>
        </div>
      ))}
    </>
  )
}

export default page
