import Link from "next/link";
import Image from "next/image";
import { getBestArticle } from "@/common/lib/data";
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

export default async function Kegiatan() {
  const data = await getBestArticle();
  if (!data || data.length === 0) return <p>Tidak ada artikel</p>;

  const [featured, ...others] = data;

  return (
    <section className="border-y-2 py-8 border-primary">
      <h1 className="text-primary font-semibold text-3xl text-center">
        Artikel Sekolah
      </h1>
      <h3 className="text-center font-bold text-lg my-2 text-gray-600">
        Jelajahi Aktivitas & Cerita Inspiratif di Sekolah Kami.
      </h3>
      <div className="grid md:grid-cols-2 md:w-[80%] mx-auto gap-6 px-4 py-8">
        <div className="">
          <Link href={`/artikel/${featured.id}`}>
            <div className="overflow-hidden rounded-lg h-64 mb-4">
              <Image
                src={featured.image}
                alt={featured.judul}
                width={800}
                height={400}
                className="object-cover object-center hover:opacity-70 transition-all duration-500  w-full h-full"
              />
            </div>
            <div className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <BsCalendar2DateFill size={15} className="text-primary" />
              {formatDate(featured.createdAt.toString())}
              {" · "}
              <IoNewspaperSharp size={15} className="text-orange-500" />
              <span className="text-orange-500">Berita Sekolah</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{featured.judul}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: featured.content || "" }}
              className="line-clamp-3 text-sm my-2"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {others.map((item : any) => (
            <Link
              key={item.id}
              href={`/article/${item.id}`}
              className=" hover:bg-gray-50 transition"
            >
              <div className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                <BsCalendar2DateFill size={15} className="text-primary" />
                {formatDate(featured.createdAt.toString())}
                {" · "}
                <IoNewspaperSharp size={15} className="text-orange-500" />
                <span className="text-orange-500">Berita Sekolah</span>
              </div>
              <h3 className="text-lg font-semibold">{item.judul}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: item.content || "" }}
                className="line-clamp-3 text-sm my-2"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
