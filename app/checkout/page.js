"use client";

import MainLayout from "../layouts/MainLayout";
import CheckoutItem from "../components/CheckoutItem";

export default function checkout() {
  const product = {
    id: 1,
    title: "leather baga",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: "https://picsum.photos/id/7",
    price: 2900,
  };
  return (
    <>
      <MainLayout>
        <div className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[64%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">
                  Shipping Address
                </div>
                <div>
                  <ul className="text-sm mt-2">
                    <li>Name: test</li>
                    <li>Address: jlksjfds</li>
                    <li>Zipcode: ljsd</li>
                    <li>City: jlksdj</li>
                    <li>Counrty: ;jlkjsf</li>
                  </ul>
                </div>
              </div>

              <div id="items" className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>

            <div
              id="PlaceOrder"
              className="relative -top-[6px] w-[35%] border rounded-lg"
            >
              <div className="p-4">
                <di
                  v
                  className="flex items-baseline justify-between text-sm mb-1"
                >
                  <div>Items (3)</div>
                  <div>£19.99</div>
                </di>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div className="border-t" />

                <div className="flex items-center justify-between my-4">
                  <div className="font-semibold">Order total</div>
                  <div className="text-2xl font-semibold">$98.09</div>
                </div>

                <form>
                  <div
                    className="border border-gray-500 p-2 rounded-sm"
                    id="card-element"
                  />

                  <p
                    id="card-error"
                    role="alert"
                    className="text-red-700 text-center font-semibold relative top-2"
                  />

                  <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                  >
                    <div>Confirm and pay</div>
                  </button>
                </form>
              </div>

              <div className="flex items-center p-4 justify-center gap-2 border-t">
                <img width={50} src="/images/1200px-EBay_logo.svg.png" />
                <div className=" font-light mb-2 mt-2">
                  MONEY BACK GUARANTEE
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
