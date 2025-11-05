import Image from 'next/image'
import React from 'react'

interface reqProps{
    img : string,
    title : string,
    description : string,
    link : string
}

function ServiceCard(props:reqProps) {
  return (
    <div className='mt-2 p-5'>
        <div className='flex justify-center'><Image width={72} height={72} src={`/${props.img}`} alt='image'/></div>
        <div className='flex justify-center mt-5 text-xl font-primary font-bold'>{props.title}</div>
        <div className='text-center mt-4 font-normal font-primary'>{props.description}</div>
        <div className='flex justify-center underline underline-offset-6 hover:decoration-red-600 cursor-pointer mt-5'>{props.link}</div>
    </div>
  )
}

export default ServiceCard
