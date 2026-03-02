import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload, FiFile, FiCalendar, FiClock } from "react-icons/fi";

export default function PdfDownload({ pdfData }: any) {
  if (!pdfData || !pdfData.file) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-red-600 font-medium flex items-center">
          <FiFile className="mr-2" /> Data PDF tidak lengkap
        </h3>
      </div>
    );
  }

  const fileName =
    pdfData.fileName || pdfData.title || `dokumen-${pdfData.id}.pdf`;

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
    <div className="grid gap-3 bg-white rounded p-8">
      <div className="grid justify-items-center">
        <FaRegFilePdf size={100} className="text-red-800" />
      </div>

      <div className="">
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

      <a
        href={pdfData.file}
        download={fileName}
        target="_blank"
        className="bg-primary hover:bg-blue-950 text-white px-4 py-2 rounded-md transition flex items-center space-x-2 mt-3 sm:mt-0 w-full sm:w-auto justify-center"
      >
        <FiDownload />
        <span>Download</span>
      </a>
    </div>
  );
}
