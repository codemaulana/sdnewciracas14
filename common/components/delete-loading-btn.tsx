"use client";

import { useFormStatus } from "react-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function DeleteLoadingBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-red-800 text-white p-3 cursor-pointer w-full"
      type="submit"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
