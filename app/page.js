"use client";
import CarouselComp from "./components/Carousel";
import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import Product from "./components/Product";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Brown leather baga",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School Banks",
      discription:
        "has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/8",
      price: 2300,
    },
  ];
  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px]  mx-auto">
        <div className=" text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={products.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
