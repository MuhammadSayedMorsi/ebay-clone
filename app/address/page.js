"use client";

// https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only

import MainLayout from "../layouts/MainLayout";
import TextInput from "../components/TextInput";
import { useEffect, useState } from "react";
// import { useUser } from "@/app/context/user";
// import useIsLoading from "@/app/hooks/useIsLoading";
// import useCreateAddress from "../hooks/useCreateAddress";
// import useUserAddress from "../hooks/useUserAddress";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const submit = () => {
    console.log("lkjslkdfjs");
  };
  return (
    <>
      <MainLayout>
        <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
          <div className="mx-auto bg-white rounded-lg p-3">
            <div className="text-xl text-bold mb-2">Address Details</div>

            <form onSubmit={submit}>
              <div className="mb-4">
                <TextInput className="w-full" placeholder="Name" />
              </div>

              <div className="mb-4">
                <TextInput className="w-full" placeholder="Address" />
              </div>

              <div className="mb-4">
                <TextInput className="w-full mt-2" placeholder="Zip Code" />
              </div>

              <div className="mb-4">
                <TextInput className="w-full mt-2" placeholder="City" />
              </div>

              <div>
                <TextInput className="w-full mt-2" placeholder="Country" />
              </div>

              <button
                type="submit"
                className="mt-6 w-full text-white text-lg font-semibold  p-3 rounded"
              >
                Update Address
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
