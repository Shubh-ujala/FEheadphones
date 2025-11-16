import Link from "next/link";
import React from "react";
import { data } from "./productsData";
import FeauredCard from "@/components/ProductsPage/FeauredCard";

function page() {
  // console.log(data.Headphones[0]);
  const headphone = data.Headphones[0];
  const earbud = data.Earbuds[0];
  const speaker = data.Speakers[0];

  return (
    // <div className="flex flex-col justify-center">
    //   here comes the products
    // </div>
    <div className="max-w-7xl m-auto flex justify-evenly">
      <FeauredCard
        id={headphone.id}
        category={headphone.category}
        name={headphone.name}
        price={headphone.price}
        img={headphone.img}
      />
      <FeauredCard
        id={earbud.id}
        category={earbud.category}
        name={earbud.name}
        price={earbud.price}
        img={earbud.img}
      />
      <FeauredCard
        id={speaker.id}
        category={speaker.category}
        name={speaker.name}
        price={speaker.price}
        img={speaker.img}
      />
    </div>
  );
}

export default page;
