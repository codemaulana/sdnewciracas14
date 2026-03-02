"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosCloseCircle } from "react-icons/io";
export default function SearchBar({
  placeholder,
  handleShow,
  className,
}: {
  placeholder: string;
  handleShow: () => void;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    push(`/artikel?query=${encodeURIComponent(term)}`);
  };

  return (
    <form className="overflow-hidden">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        className={` font-semibold py-1 px-3 text-xs ${className}`}
        aria-label="Search articles"
        defaultValue={searchParams.get("query")?.toString()}
      />
    </form>
  );
}
