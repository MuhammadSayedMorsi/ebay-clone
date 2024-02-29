"use client";
import Link from "next/link";
export default function Product({ product }) {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="max-w-[1200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
      >
        {product.url ? (
          // by adding '/190' at the end of the src, i just specify the size because its maybe the image come too big
          <img src={product.url + "/190"} className="rounded cursor-pointer" />
        ) : null}

        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">
            {product.title}
          </div>
          <div className="font-extrabold">
            ${(product.price / 100).toFixed(2)}
          </div>
          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">
              {/* We just copy the same price but fake it with multiplay in 1.2 */}
              ${((product.price * 1.2) / 100).toFixed()}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">$20</div>
          </div>
        </div>
      </Link>
    </>
  );
}
