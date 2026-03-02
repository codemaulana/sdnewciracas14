import Image from "next/image";
import Link from "next/link";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString("id-ID", options).replace(".", ":");
}

export default function ArticleList({ data }: any) {
  return (
    <Link href={`/artikel/${data.id}`}>
      <div className="overflow-hidden rounded-lg h-64 mb-4">
        <Image
          src={data.image}
          alt={data.judul}
          width={800}
          height={400}
          className="object-cover hover:opacity-70 transition-all duration-500  w-full h-full"
        />
      </div>
      <div className="text-sm text-gray-500 mb-1 flex items-center gap-2">
        <BsCalendar2DateFill size={15} className="text-primary" />
        {formatDate(data.createdAt.toString())}
        {" · "}
        <IoNewspaperSharp size={15} className="text-orange-500" />
        <span className="text-orange-500">
          {data.kategori || "Artikel Sekolah"}
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-2">{data.judul}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: data.content || "" }}
        className="line-clamp-3 text-sm my-2"
      />
    </Link>
  );
}
