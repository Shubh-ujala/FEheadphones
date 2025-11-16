"use client";
import Navbar from "@/components/Navbar";
import ProductsNav from "@/components/ProductsPage/ProductsNav";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const [Category, setCategory] = useState("Customer's Favorites");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/products") {
      setCategory("Customer's Favorites");
    } else if (pathname.includes("Headphones")) {
      setCategory("Wireless & Wired Headphones");
    } else if (pathname.includes("Earbuds")) {
      setCategory("Wireless Earbuds");
    } else if (pathname.includes("Speakers")) {
      setCategory("Bluetooth® Speakers");
    }
  }, [pathname]);

  
  return (
    <>
      <Navbar />
      <div className="mb-3 pt-10">
        <div className="flex justify-center text-4xl font-bold font-primary tracking-tight">
          {Category}
        </div>
        <div className="flex justify-center gap-5 mt-10 font-primary font-semibold ">
          <Link
            href={"/products"}
            className={`cursor-pointer hover:underline underline-offset-5 ${
              Category === "Customer's Favorites"
                ? "text-red-600/80 underline underline-offset-4"
                : "text-neutral-900"
            }`}
            onClick={() => {
              setCategory("Customer's Favorites");
            }}
          >
            Featured
          </Link>
          <Link
            href={"/products/Headphones"}
            className={`cursor-pointer hover:underline underline-offset-5 ${
              Category === "Wireless & Wired Headphones"
                ? "text-red-600/80 underline underline-offset-4 "
                : "text-neutral-900"
            }`}
            
            onClick={() => {
              setCategory("Wireless & Wired Headphones");
            }}
          >
            Headphones
          </Link>
          <Link
            href={"/products/Earbuds"}
            className={`cursor-pointer hover:underline underline-offset-5 ${
              Category === "Wireless Earbuds"
                ? "text-red-600/80 underline underline-offset-4"
                : "text-neutral-900"
            }`}
            
            // className="cursor-pointer hover:underline underline-offset-5 text-neutral-700 "
            onClick={() => {
              setCategory("Wireless Earbuds");
            }}
          >
            Earbuds
          </Link>
          <Link
            href={"/products/Speakers"}
             className={`cursor-pointer hover:underline underline-offset-5 ${
              Category === "Bluetooth® Speakers"
                ? "text-red-600/80 underline underline-offset-4"
                : "text-neutral-900"
            }`}
            // className="cursor-pointer hover:underline underline-offset-5 text-neutral-700 "
            onClick={() => {
              setCategory("Bluetooth® Speakers");
            }}
          >
            Speakers
          </Link>
        </div>
        <div className=" w-full bg-neutral-400 h-px"></div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
