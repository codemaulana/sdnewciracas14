// components/UploadForm.tsx
import { BsPlusCircle } from "react-icons/bs";

type UploadFormProps = {
  formAction: (formData: FormData) => void;
  uploadState: any;
};

export default function UploadFormImage({
  formAction,
  uploadState,
}: UploadFormProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Upload New Image</h2>

      <form action={formAction} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
            required
          />
          <p className="mt-2 text-xs text-gray-500">
            Supported formats: JPG, PNG, GIF, WebP
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex cursor-pointer items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            <BsPlusCircle className="w-4 h-4 mr-2" />
            Upload Image
          </button>
        </div>
      </form>

      {uploadState && uploadState.error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
          {Object.values(uploadState.error).map((err: any, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
      )}

      {uploadState && uploadState.message && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
          {uploadState.message}
        </div>
      )}
    </div>
  );
}
