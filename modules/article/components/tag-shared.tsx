"use client";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function TagShared() {
  const pathname = usePathname();
  const url = `https://sdnciracas14.sch.id${pathname}`;

  const encodedUrl = encodeURIComponent(url);

  const whatsappUrl = `https://wa.me/?text=Check%20this%20out:%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied! Paste it in your Instagram bio or story.");
  };
  return (
    <div className="col-span-2">
      <div className="grid gap-4 w-full md:w-[30%] lg:w-[20%]">
        <h1 className="bg-primary text-white p-3 rounded font-bold text-center">
          TAG SHARED
        </h1>
        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={30} />
          </a>

          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook size={30} />
          </a>

          <button onClick={copyToClipboard} className="cursor-pointer">
            <PiInstagramLogoFill size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
