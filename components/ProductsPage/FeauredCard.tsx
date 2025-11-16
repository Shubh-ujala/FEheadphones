import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductInfo {
  name: string;
  price: string;
  img: string;
  category: string;
  id: string;
}

function FeauredCard({ name, price, img, category, id }: ProductInfo) {
  return (
    <div className="mt-10 ">
      <Link href={`/product/${category}/${id}`}>
        <div className="relative w-90 h-110 rounded-xl transition-all ease-in-out hover:scale-105 bg-neutral-300/50 p-6 cursor-pointer hover:shadow-xl/20 flex justify-center">
          <div className="absolute top-2 left-2 bg-red-500/80 text-white text-xs px-3 py-1 rounded-lg shadow-md">
            Bestseller
          </div> 

          <div>
            <div className="w-70 h-70 object-contain bg-center bg-no-repeat">
              <Image
                width={250}
                height={250}
                alt="image"
                src={img}
                className="rounded-xl content-center"
              />
            </div>

            <div className="mb-2">
                <div className="text-xl font-semibold">{name}</div>
                <div>{price}</div>
                <div className="font-semibold text-neutral-900/60">{category}</div>
            </div>

            <div className="font-primary  tracking-tight hover:underline underline-offset-2">Click Me to Explore more!</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeauredCard;
