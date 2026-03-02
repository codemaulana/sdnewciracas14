"use client";
import SearchBar from "@/common/components/search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChalkboardTeacher,
  FaCloudDownloadAlt,
  FaInfoCircle,
  FaNewspaper,
  FaRegFilePdf,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { IoHomeOutline, IoImages } from "react-icons/io5";
import { motion as m } from "motion/react";
import { MdInfo } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa6";

export default function NavbarPage() {
  const [handleSearch, setHandleSearch] = useState(false);

  const handleToggle = () => setHandleSearch(!handleSearch);

  return (
    <nav
      className={`p-2 bg-primary fixed top-0 left-0 right-0 z-30 md:text-white md:flex md:justify-around md:items-center `}
    >
      <m.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid grid-cols-2 justify-around items-center"
      >
        <Link
          href={"/"}
          className="text-[16px] md:text-[10px] lg:text-lg font-bold text-white flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={800}
            height={800}
            className="w-11"
          />
          <div className="leading-none">
            <h1>SDN</h1>
            <h1>Ciracas 14</h1>
          </div>
        </Link>
        <SearchBar
          placeholder="Cari artikel"
          handleShow={handleToggle}
          className="w-full bg-white rounded-lg text-primary md:hidden focus:outline-none"
        />
      </m.div>

      <div className="bg-primary text-white lg:gap-6 fixed bottom-0 left-0 right-0 px-2 pt-4 grid grid-cols-6 items-center  justify-around font-bold text-sm md:bg-transparent md:static md:p-0">
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          <Link href={"/"} className="grid justify-items-center">
            <IoHomeOutline size={25} className="md:hidden" />
            <h3 className="">Home</h3>
          </Link>
        </m.div>
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          <Link href={"/profil"} className="grid justify-items-center">
            <FaUserCircle size={25} className="md:hidden" />
            <h3 className="">Profil</h3>
          </Link>
        </m.div>
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
        >
          <Link href={"/information"} className="grid justify-items-center">
            <FaBullhorn size={25} className="md:hidden" />
            <h3>Info</h3>
          </Link>
        </m.div>
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
        >
          <Link href={"/artikel"} className="grid justify-items-center">
            <FaNewspaper size={25} className="md:hidden" />
            <h3 className="">Artikel</h3>
          </Link>
        </m.div>
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 2.5 }}
        >
          <Link href={"/file"} className="grid justify-items-center">
            <FaRegFilePdf size={25} className="md:hidden" />
            <h3 className="">File</h3>
          </Link>
        </m.div>
        <m.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
        >
          <Link href={"/galeri"} className="grid justify-items-center">
            <IoImages size={25} className="md:hidden" />
            <h3 className="">Galeri</h3>
          </Link>
        </m.div>
      </div>
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
        className="w-[20%]"
      >
        <SearchBar
          placeholder="Cari artikel"
          handleShow={handleToggle}
          className="w-full bg-white rounded-lg text-primary hidden md:block focus:outline-none"
        />
      </m.div>
    </nav>
  );
}
