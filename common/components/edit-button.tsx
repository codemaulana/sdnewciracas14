import Link from "next/link";
import React from "react";

export default function EditButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/edit-article/${id}`}
      className="bg-primary text-white p-3"
    >
      Edit
    </Link>
  );
}
