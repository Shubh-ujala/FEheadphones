"use client";
import ProductsNav from "@/components/ProductsPage/ProductsNav";
import Link from "next/link";
import React, { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [Category, setCategory] = useState("Headphones");
  return (
    <div className="mt-7 mb-3">
      <div className="flex justify-center text-4xl font-bold font-primary tracking-tight">
        {Category}
      </div>
      <div className="flex justify-center gap-5 mt-10 font-primary font-semibold ">
        <Link
          href={"/products"}
          className="cursor-pointer hover:underline underline-offset-5 text-neutral-900"
          onClick={() => {
            setCategory("Customer's Favorites");
          }}
        >
          Featured
        </Link>
        <Link
          href={"/products/Headphones"}
          className="cursor-pointer hover:underline underline-offset-5 text-neutral-700  "
          onClick={() => {
            setCategory("Wireless & Wired Headphones");
          }}
        >
          Headphones
        
        </Link>
        <Link
          href={"/products/Earbuds"}
          className="cursor-pointer hover:underline underline-offset-5 text-neutral-700 "
          onClick={() => {
            setCategory("Wireless Earbuds");
          }}
        >
          Earbuds
        </Link>
        <Link
          href={"/products/Speakers"}
          className="cursor-pointer hover:underline underline-offset-5 text-neutral-700 "
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
  );
}

export default Layout;
