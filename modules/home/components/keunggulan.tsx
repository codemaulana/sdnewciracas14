import CardKeunggulan from "@/common/components/card-keunggulan";
import { keunggulan } from "@/common/lib/item";

export default function Keunggulan() {
  const data = keunggulan;
  return (
    <section className="my-8">
      <h1 className="text-center font-semibold text-3xl mb-4">
        Keunggulan Sekolah Kami
      </h1>
      <p className="md-w-[50%] lg:w-[70%] mx-auto text-center font-bold text-lg my-2 text-gray-600">
        Sekolah kami bukan sekadar tempat belajar, tapi tempat tumbuh dan
        berkembangnya potensi terbaik setiap anak. Dengan bimbingan guru yang
        berdedikasi, fasilitas yang mendukung, serta suasana belajar yang
        menyenangkan, kami hadir untuk mencetak generasi yang cerdas,
        berkarakter, dan siap bersaing di masa depan.
      </p>
      <div className="grid md:w-[50%] lg:w-[70%] mx-auto overflow-hidden lg:grid-cols-3 gap-6 p-8">
        {data.map((item, idx) => (
          <div key={idx}>
            <CardKeunggulan isi={item.isi} judul={item.judul} src={item.src} />
          </div>
        ))}
      </div>
    </section>
  );
}
