import React from 'react'
import Marque from '../Marque'

function Hero() {
  return (
    <div className=" text-black max-w-7xl m-auto h-150 flex justify-evenly ">
      <div className="pt-[15%] max-w-3xl">
        <div className="tracking-tighter font-bold text-6xl leading-17">
        Explore. Experience. Elevate Your Sound.
        </div>
        <p className="text-sm font-normal ml-2 max-w-3xl">Discover premium headphones, earbuds, and speakers designed to deliver pure sound, comfort, and style. Experience music the way it’s meant to be — clear, powerful, and immersive.</p>
      </div>
      <div className="flex flex-col justify-center ">
        <Marque/>
      </div>
    </div> 
  )
}

export default Hero
