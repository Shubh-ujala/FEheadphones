import React from 'react'

interface propsSyntax{
    title : string,
    items : Array<string>;
}
function Category(props:propsSyntax) {
  return (
    <div className='mt-10 w-60'>
        <div className='text-2xl tracking-tighter font-bold font-primary'>{props.title}</div>
        <div className="h-px bg-gray-400 my-2"></div>
        <div className='flex flex-col gap-2 font-primary font-medium '>
            {props.items.map((ele,idx)=> (
                <div key={idx} className='hover:underline underline-offset-4 decoration-red-700 cursor-pointer'>{ele}</div>
            ))}
        </div>

    </div>
  )
}

export default Category
