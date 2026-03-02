import Image from "next/image";
import { FiRefreshCw } from "react-icons/fi";
import { BsTrash2 } from "react-icons/bs";

type GalleryImage = {
  id: string;
  image: string;
  createdAt: Date;
};

type ImageGridProps = {
  images: GalleryImage[];
  loading: boolean;
  fetchError: string | null;
  deleteLoading: string | null;
  onDelete: (id: string) => void;
  onRefresh: () => void;
};

export default function ImageGrid({
  images,
  loading,
  fetchError,
  deleteLoading,
  onDelete,
  onRefresh,
}: ImageGridProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Image Gallery</h2>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <FiRefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
        </div>
      ) : fetchError ? (
        <div className="text-center py-12 text-red-500">
          <p>{fetchError}</p>
          <button
            onClick={onRefresh}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Try Again
          </button>
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-500">
            No images found. Upload some images to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                <Image
                  src={image.image}
                  alt="Gallery image"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-3 flex justify-between items-center bg-white">
                <span className="text-xs text-gray-500">
                  {new Date(image.createdAt).toLocaleDateString()}
                </span>

                <button
                  onClick={() => onDelete(image.id)}
                  disabled={deleteLoading === image.id}
                  className="p-1 cursor-pointer text-red-500 hover:text-red-700 focus:outline-none transition"
                >
                  {deleteLoading === image.id ? (
                    <FiRefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <BsTrash2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
