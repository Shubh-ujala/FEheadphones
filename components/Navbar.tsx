import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-8 max-w-7xl m-auto text-black ">
      <Link href={"/"} className="">
        Icon
      </Link>
      <div className="flex gap-15 pl-10">
        <Link
          href={"/products"}
          className="font-bold font-primary hover:underline underline-offset-8 decoration-red-400 decoration-solid"
        >
          Shop
        </Link>
        <Link
          href={"/support"}
          className="font-bold font-primary hover:underline underline-offset-8 decoration-red-400 decoration-solid"
        >
          Support
        </Link>
        <Link
          href={"/promotions"}
          className="text-[rgb(277,24,55)] font-primary font-semibold hover:underline underline-offset-8 decoration-red-400 decoration-solid"
        >
          Gift Guide
        </Link>
      </div>
      <div className="">Search Icon</div>
    </div>
  );
}

export default Navbar;
