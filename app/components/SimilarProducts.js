"use client";

import { BiLoader } from "react-icons/bi";
import Product from "./Product";

export default function SimilarProducts() {
  const products = [
    {
      id: 1,
      title: "leather baga",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/7",
      price: 2900,
    },
    {
      id: 2,
      title: "School Banks",
      discription:
        "has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/8",
      price: 2100,
    },
  ];
  return (
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-bold text-2xl py-2 mt-4">
              Similar sponsored items
            </h2>
            {products.length > 0 ? (
              <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center gap-4 font-semibold ">
                  <BiLoader />
                  Loading Products...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
