import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { LuFilePlus } from "react-icons/lu";
import { RiDeleteBin2Fill, RiFileEditLine } from "react-icons/ri";

export default function NavbarDashboard() {
  return (
    <nav className="p-2 bg-primary fixed top-0 left-0 right-0 z-30 text-white md:w-96 md:bottom-0 md:grid md:items-center md:justify-center">
      <div className="grid gap-12 w-full">
        <div className="text-lg font-semibold md:flex md:items-center md:justify-center hidden">
          <Image
            src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
            width={800}
            height={800}
            alt="logo"
            className="w-10"
          />
          <h1 className="ml-2">SD NEGERI 14 CIRACAS</h1>
        </div>

        <Link
          href={"/dashboard"}
          className="text-lg font-semibold flex items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
            width={800}
            height={800}
            alt="logo"
            className="w-10 block md:hidden"
          />
          <h1 className="ml-2">DASHBOARD ARTICLE</h1>
        </Link>

        <div className="bg-primary text-white fixed bottom-0 left-0 right-0 px-2 pt-4 grid grid-cols-2 gap-8 justify-around font-bold text-sm md:bg-transparent md:static md:p-0 md:grid-cols-1 md:items-center md:justify-center md:px-4">
          <Link
            href="/dashboard/add-article"
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md"
          >
            <LuFilePlus size={20} className="col-span-1" />
            <div className="flex md:gap-2 md:col-span-2 gap-2">
              <h3>ADD</h3>
              <h3>ARTICLE</h3>
            </div>
          </Link>
          <Link
            href="/dashboard/edit-article"
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md"
          >
            <RiFileEditLine size={20} className="col-span-1" />
            <div className="md:flex md:items-center md:gap-2 md:col-span-2">
              <h3>EDIT & DELETE</h3>
              <h3 className="hidden md:block">ARTICLE</h3>
            </div>
          </Link>
          <Link
            href="/dashboard/upload-file"
            className="hidden md:grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md"
          >
            <FaFilePdf size={20} />
            <div className="md:flex md:items-center md:gap-2 md:col-span-2">
              <h3>UPLOAD</h3>
              <h3 className="hidden md:block">PDF</h3>
            </div>
          </Link>

          <Link
            href="/dashboard/delete-file"
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md"
          >
            <RiDeleteBin2Fill size={20} className="col-span-1" />
            <div className="flex items-center gap-2 md:col-span-2">
              <h3>DELETE</h3>
              <h3>PDF</h3>
            </div>
          </Link>
          <Link
            href="/dashboard/upload-image"
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md"
          >
            <FaImages size={20} className="col-span-1" />
            <div className="flex items-center gap-2 md:col-span-2">
              <h3>U & D</h3>
              <h3>IMAGE</h3>
            </div>
          </Link>

          <Link
            href="/dashboard/upload-file"
            className="p-4 hover:bg-blue-950 rounded-full border-y-4 border-white shadow shadow-white absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center justify-centertext-xs text-white bg-primary md:hidden"
          >
            <FaFilePdf size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
