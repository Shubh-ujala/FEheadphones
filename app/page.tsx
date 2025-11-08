import Marque from "@/components/Marque";
import Image from "next/image";

export default function Home() {
  return <>
    <div className=" text-black max-w-7xl m-auto h-150 flex justify-evenly ">
      <div className="pt-[15%] max-w-xl">
        <div className="tracking-tighter font-bold text-5xl">
          Explore. Experience. Elevate Your Sound.
        </div>
        <p>Discover top headphones, earbuds, and speakers — all in one place.</p>
      </div>
      <div className="flex flex-col justify-center ">
        <Marque/>
      </div>
    </div> 
  </>
}
