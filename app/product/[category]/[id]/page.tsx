import React from 'react'

export default function ProductPage({ params}: { params: { category: string, id: string } } ) {
  const { category, id } = params;

  // const item = data[category].find((p) => p.id == id);

  return (
    <div>
      {/* <h1>{item.name}</h1>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      <img src={item.img} /> */}
      hiii
    </div>
  );
}
