'use client'
import React, { useState } from 'react'

interface Items{
    id:number,
    que:string,
    ans:string
}

interface propsSyntax{
    items: Items[];
}


function FaqToggle(props:propsSyntax) {
  const [isOpen , setIsOpen] = useState(null);
  const toggle = (idx:any)=>{
    console.log(isOpen);
    setIsOpen(isOpen === idx ? null : idx);
  } 
  return (
    <div>
        {props.items.map((data,idx)=>(
            <div key={idx} className='text-md font-bold font-primary  ' onClick={()=>{toggle(idx)}}>       
                <div className='flex justify-between items-center p-1'>
                    <span>{data.que}</span>
                    <span className='flex justify-end pt-2 cursor-pointer'>{isOpen== idx? '▲' : '▼'}</span> 
                </div>
                <div className='pl-2 text-sm'>
                    {isOpen === idx && (
                    <div className='my-2 py-2 font-primary font-light'>
                        {data.ans}
                    </div>
                )}
                </div>
                <div className='h-px bg-gray-400 my-2'></div>
            </div>
        ))}

    </div>
  )
}


export default FaqToggle
