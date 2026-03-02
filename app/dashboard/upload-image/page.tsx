"use client";

import { useState, useEffect, useActionState } from "react";
import { deleteImage, uploadImage } from "@/common/lib/action";
import HeaderUploadImage from "@/modules/upload-image/header-upload-image";
import UploadFormImage from "@/modules/upload-image/upload-form-image";
import ImageGrid from "@/modules/upload-image/image-grid";

type GalleryImage = {
  id: string;
  image: string;
  createdAt: Date;
};

export default function GalleryDashboard() {
  // State for managing images
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Form state for upload
  const [uploadState, formAction] = useActionState(uploadImage, null);

  // Function to fetch all images
  const fetchImages = async () => {
    setLoading(true);
    setFetchError(null);

    try {
      const response = await fetch("/api/gallery");
      if (!response.ok) throw new Error("Failed to fetch images");

      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
      setFetchError("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Load images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Refresh images after successful upload
  useEffect(() => {
    if (uploadState) {
      if (uploadState.error) {
        // Show error notification
      } else if (uploadState.message) {
        fetchImages();
      }
    }
  }, [uploadState]);

  // Handle image deletion
  const handleDelete = async (id: string) => {
    setDeleteLoading(id);

    try {
      await deleteImage(id);
      setImages(images.filter((img) => img.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mb-28">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <HeaderUploadImage
          title="Image Gallery Dashboard"
          onRefresh={fetchImages}
          loading={loading}
        />

        <UploadFormImage formAction={formAction} uploadState={uploadState} />

        <ImageGrid
          images={images}
          loading={loading}
          fetchError={fetchError}
          deleteLoading={deleteLoading}
          onDelete={handleDelete}
          onRefresh={fetchImages}
        />
      </div>
    </div>
  );
}
