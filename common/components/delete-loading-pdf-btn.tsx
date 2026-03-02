"use client";

import { useFormStatus } from "react-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function DeleteLoadingBtnPdf() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-red-800 text-white p-1 cursor-pointer rounded text-center px-5 py-2"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <RiDeleteBin2Fill
          size={20}
          className="col-span-1 animate-bounce transition-all"
        />
      ) : (
        <RiDeleteBin2Fill size={20} className="col-span-1" />
      )}
    </button>
  );
}
