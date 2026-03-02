import PdfList from "@/common/layouts/pdf-list";
import { getPdf } from "@/common/lib/action";
export const dynamic = "force-dynamic";

export default async function DeleteFile() {
  const data = await getPdf();
  return (
    <div className="grid  lg:px-10 mx-auto gap-8 mb-20">
      <h1 className="text-2xl text-center font-semibold">
        Delete File Unduhan
      </h1>
      {data.length === 0 ? (
        <p className="text-center text-white">Tidak ada file unduhan</p>
      ) : (
        data.map((item :any) => <PdfList pdfData={item} key={item.id} />)
      )}
    </div>
  );
}
