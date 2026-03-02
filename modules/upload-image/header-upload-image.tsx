import { FiRefreshCw } from "react-icons/fi";

type HeaderProps = {
  title: string;
  onRefresh: () => void;
  loading: boolean;
};

export default function HeaderUploadImage({
  title,
  onRefresh,
  loading,
}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <button
        onClick={onRefresh}
        className="flex cursor-pointer items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        <FiRefreshCw className={`w-4 h-4 mr-2 ${loading && "animate-spin"}`} />
        Refresh
      </button>
    </div>
  );
}
