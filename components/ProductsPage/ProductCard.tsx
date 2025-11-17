import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Card {
  id: string;
  img: string;
  images: string[];
  brand: string;
  price: string;
  name: string;
  category: string;
}

interface JsonData {
  items: Card[];
}

function ProductCard({ items }: JsonData) {
  return (
    <div className="flex justify-evenly flex-wrap gap-10">
      {items.map((ele, key) => (
        <Link key={key} href={`/product/${ele.category}/${ele.id}`}>
          <div className="w-72 rounded-xl bg-neutral-300/50 p-6 cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
        
            <div className="relative w-full h-56 flex justify-center items-center">
              <Image
                src={ele.images[0]}
                alt={ele.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <div className="mt-4 text-xl font-semibold">{ele.brand}</div>
            <div className="text-sm">{ele.name}</div>
            <div className="font-medium">{ele.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
