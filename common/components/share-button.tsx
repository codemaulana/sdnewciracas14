// components/share-buttons.tsx
"use client";

import { useState } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Create full URL for sharing
  const fullUrl = `https://sdnciracas14.sch.id${url}`;

  // Handle share on social media
  const handleShare = (platform: string) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        fullUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(fullUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        fullUrl
      )}&title=${encodeURIComponent(title)}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
  };

  // Handle copy link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <p className="text-gray-700 font-medium mb-3">Bagikan artikel ini:</p>
      <div className="flex gap-3">
        <button
          onClick={() => handleShare("facebook")}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Bagikan ke Facebook"
        >
          <FaFacebook size={20} />
        </button>
        <button
          onClick={() => handleShare("twitter")}
          className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          aria-label="Bagikan ke Twitter"
        >
          <BsTwitter size={20} />
        </button>
        <button
          onClick={() => handleShare("linkedin")}
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
          aria-label="Bagikan ke LinkedIn"
        >
          <BsLinkedin size={20} />
        </button>
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors relative"
          aria-label="Salin tautan"
        >
          <FiShare2 size={20} />
          {copied && (
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
              Tersalin!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
