import React from "react";
import { data, CategoryType } from "@/app/products/productsData";
import Info from "@/components/ProductInfo/Info";
export default async function ProductPage({
  params,
}: {
  params: { category: CategoryType; id: string };
}) {
  const { category, id } = await params;

  const list = data[category];

  const item = list.find((ele) => ele.id === id);

  return (
    <div className="bg-neutral-200">
      {item && <Info product={item} />}
    </div>
  );
}
