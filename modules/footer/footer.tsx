import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { ImYoutube2 } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white font-semibold  text-sm">
      <div className="grid md:grid-cols-2  lg:grid-cols-4 py-20 px-8 md:px-28 gap-y-16 md:gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl mb-3">Kontak Kami </h1>
          <a
            href="mailto:sdnciracas14pagii@gmail.com"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <FaMailBulk size={20} />
            sdnciracas14pagii@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/dir//Gg.+Asem+No.6,+RT.8%2FRW.9,+Ciracas,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13740/@-6.3217172,106.7887897,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69f3310b371607:0xe7211f5aff51a843!2m2!1d106.8711916!2d-6.3217237?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <FaMapLocationDot size={20} />
            Ciracas
          </a>
          <a
            href="https://wa.me/6281111806680"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <BsPhoneVibrateFill size={20} />
            +62 811 1180 6680
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl mb-3">Sosial Media</h1>
          <a
            href="https://www.instagram.com/sdnciracas_14/"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <PiInstagramLogoFill size={20} />
            sdnciracas_14
          </a>
          <a
            href="https://www.youtube.com/@SDNCIRACAS14"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <ImYoutube2 size={20} />
            SDN CIRACAS 14
          </a>
          <a
            href="https://www.facebook.com/SDNCiracas14/about_life_events"
            target="_blank"
            className="max-w-max flex items-center gap-2"
          >
            <IoLogoFacebook size={20} />
            Esdeen Cirpatlas
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl mb-3">Lokasi</h1>
          <div className="w-full border rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.557386190531!2d106.86861667453249!3d-6.321718361859226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3310b371607%3A0xe7211f5aff51a843!2sSD%20NEGERI%20CIRACAS%2014!5e0!3m2!1sid!2sid!4v1745202299974!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl mb-3">Halaman Kami</h1>
          <Link href={"/"} className="max-w-max">
            Home
          </Link>
          <Link href={"/login"} className="max-w-max">
            Login
          </Link>
          <Link href={"/profil"} className="max-w-max">
            Profil
          </Link>
          <Link href={"/information"} className="max-w-max">
            Informasi
          </Link>
          <Link href={"/artikel"} className="max-w-max">
            Artikel
          </Link>
          <Link href={"/file"} className="max-w-max">
            File
          </Link>
          <Link href={"/galeri"} className="max-w-max">
            Galeri
          </Link>
        </div>
      </div>
      <div className="p-5 pb-28 md:pb-3 bg-primary text-center text-white font-semibold">
        <h1>&copy;2025 SDN CIRACAS 14</h1>
      </div>
    </footer>
  );
}
