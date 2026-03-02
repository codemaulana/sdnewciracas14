import { incrementViewCount } from "@/common/lib/data";
import { Articles } from "@/common/service/interface";
import Image from "next/image";
import { BsCalendarWeekFill, BsFillTagsFill } from "react-icons/bs";
import { FaEye, FaRegUserCircle } from "react-icons/fa";

export default async function ContentArticle({ data }: Articles) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("id-ID", options).replace(".", ":");
  };

  await incrementViewCount(data.id);

  const contentWithLinks = data.content.replace(
    /(https?:\/\/[^\s"'<>]+)/g,
    `<a 
     href="$1" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="text-blue-500 italic"
   >$1</a>`
  );

  return (
    <div className="col-span-2">
      <Image
        src={data.image}
        alt={data.judul}
        width={800}
        height={600}
        className="object-cover w-full rounded-md"
      />
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center my-3">
        <div className="grid lg:flex lg:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 ">
              <BsCalendarWeekFill size={15} className="text-red-800" />
              <p>{formatDate(data.createdAt.toString())}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 ">
              <BsFillTagsFill size={17} className="text-red-800" />
              <p>{data.kategori || "Berita Sekolah"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-600 ">
            <FaEye size={17} className="text-red-800" />
            <p>Dilihat sebanyak {data.viewCount}x</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <FaRegUserCircle size={15} className="text-red-600" />
            <h4 className="font-bold">{data.author}</h4>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{data.judul}</h1>
      <div
        className="prose prose-lg max-w-none grid gap-3 my-8 text-justify"
        dangerouslySetInnerHTML={{ __html: contentWithLinks }}
      />
    </div>
  );
}
