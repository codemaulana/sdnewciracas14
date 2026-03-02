import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function RunningText() {
  return (
    <main>
      <div className="text-primary p-4 md:px-20">
        <Marquee speed={100} pauseOnHover className="flex">
          <div className="ml-96"></div>
          <div className="text-lg md:text-2xl font-semibold flex gap-3">
            Selamat Datang di Website SD NEGERI 14 CIRACAS.
            <i>
              &quot;Guru bukan sekadar pengajar, tapi juga penumbuh karakter,
              akal sehat, dan kekuatan moral anak bangsa.&quot;
            </i>
            <p>(Mohammad Hatta)</p>
          </div>
        </Marquee>
      </div>

      <div></div>

      <div>
        <Image
          src={
            "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744798430/5eee8cd8-2db4-4480-ada6-06d9e32942a3-removebg-preview_nu2nkw.png"
          }
          width={1000}
          height={1000}
          alt="anak sekolah dasar"
          className=" md:w-navcontainerlg rounded-md mx-auto object-cover"
        />
      </div>
    </main>
  );
}
