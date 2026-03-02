import { FaRegFilePdf } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import DeleteButtonPdf from "../components/delete-pdf-btn";

export default function PdfList({ pdfData }: any) {
  const formattedSize = pdfData.fileSize
    ? pdfData.fileSize < 1024
      ? `${pdfData.fileSize} KB`
      : `${(pdfData.fileSize / 1024).toFixed(2)} MB`
    : null;

  const formattedDate = pdfData.createdAt
    ? formatDate(new Date(pdfData.createdAt))
    : null;

  function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className="grid grid-cols-5 justify-items-start gap-3 bg-white rounded p-8">
      <FaRegFilePdf size={50} className="text-red-800 col-span-1" />

      <div className="col-span-3">
        <h3 className="font-medium text-gray-900 text-lg">
          {pdfData.title || `Dokumen ${pdfData.id}`}
        </h3>

        {pdfData.description && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {pdfData.description}
          </p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
          {formattedDate && (
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          )}

          {formattedSize && (
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{formattedSize}</span>
            </div>
          )}
        </div>
      </div>

      <DeleteButtonPdf id={pdfData.id} />
    </div>
  );
}
