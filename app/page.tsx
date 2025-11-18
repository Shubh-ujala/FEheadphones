import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Marque from "@/components/Marque";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero section comes here */}
        <div className="max-w-7xl m-auto  ">
        <Hero />
        </div>
       <div className="absolute bottom-0 left-0 right-0 flex-1">
        <Footer/>
       </div>
    
    </>
  );
}
