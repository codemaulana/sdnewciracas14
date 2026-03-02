"use client";
import { useRouter } from "next/navigation";
import { deletePdf } from "../lib/action";
import DeleteLoadingBtnPdf from "./delete-loading-pdf-btn";

export default function DeleteButtonPdf({ id }: { id: string }) {
  const router = useRouter();

  const deletePdfById = async (formData: FormData) => {
    await deletePdf(id);
    router.refresh();
  };
  return (
    <form action={deletePdfById} className="col-span-1">
      <DeleteLoadingBtnPdf />
    </form>
  );
}
