import Image from "next/image";

export default function VisiMisi() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <Image
        src={"/images/akreditasi.jpg"}
        alt="akreditasi"
        width={800}
        height={400}
        className="w-full md:w-1/2 mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-center mb-6">
        Visi dan Misi SDN Ciracas 14
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Visi</h2>
        <p className="mb-4 font-medium italic">
          "MEWUJUDKAN PESERTA DIDIK YANG BERKARAKTER PROFIL PELAJAR PANCASILA,
          BERPRESTASI, DAN BERWAWASAN LINGKUNGAN"
        </p>
        <p className="text-justify">
          Visi ini mencerminkan semangat SDN Ciracas 14 untuk menjadi sekolah
          dasar yang unggul dalam prestasi akademik dan non-akademik, membentuk
          generasi yang berkarakter, serta memiliki kepedulian terhadap
          kelestarian lingkungan sekitar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Misi</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Membentuk peserta didik berkarakter profil pelajar pancasila.</li>
          <li>
            Menghasilkan lulusan peserta didik yang mampu berkompetisi jenjang
            sekolah berikutnya.
          </li>
          <li>
            Mengimplementasikan kurikulum merdeka dengan memfasilitasi
            lingkungan pembelajaran dalam bbidang akademik dan non-akademik.
          </li>
          <li>Mengembangkan wawasan lingkungan menuju sekolah adiwiyata.</li>
          <li>
            Mendorong profesionalisme guru dan tenaga kependidikan melalui
            pelatihan dan pengembangan diri secara berkala.
          </li>
          <li>
            Menciptakan lingkungan sekolah yang aman, nyaman, bersih, sehat, dan
            mendukung proses belajar mengajar yang optimal.
          </li>
        </ul>
      </section>

      <section className="mb-10 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Tujuan Lulusan</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm mb-6">
          <thead className="bg-primary text-white">
            <tr>
              <th className="border border-gray-400 px-4 py-2">No.</th>
              <th className="border border-gray-400 px-4 py-2">Kompetensi</th>
              <th className="border border-gray-400 px-4 py-2">Indikator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                1
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Sikap Spiritual
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Menerima dan mensyukuri kehidupan sebagai anugerah Tuhan,
                menjalankan ibadah sesuai agama masing-masing, bersikap baik
                terhadap sesama, dan menjauhi perbuatan tercela.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                2
              </td>
              <td className="border border-gray-400 px-4 py-2">Sikap Sosial</td>
              <td className="border border-gray-400 px-4 py-2">
                Memiliki sikap jujur, disiplin, tanggung jawab, gotong royong,
                toleran, santun, serta peduli terhadap sesama dan lingkungan.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                3
              </td>
              <td className="border border-gray-400 px-4 py-2">Pengetahuan</td>
              <td className="border border-gray-400 px-4 py-2">
                Menguasai pengetahuan dasar secara faktual dan konseptual di
                bidang IPA, IPS, matematika, bahasa, seni, dan budaya lokal.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                4
              </td>
              <td className="border border-gray-400 px-4 py-2">Keterampilan</td>
              <td className="border border-gray-400 px-4 py-2">
                Terampil dalam berpikir kritis, kreatif, dan kolaboratif untuk
                menyelesaikan masalah sederhana dalam kehidupan sehari-hari.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mb-4">Tujuan Khusus</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="border border-gray-400 px-4 py-2">No.</th>
              <th className="border border-gray-400 px-4 py-2">
                Tujuan Khusus
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                1
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Membiasakan siswa berdoa sebelum dan sesudah kegiatan
                pembelajaran.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                2
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Melatih siswa untuk bersikap sopan santun dalam berinteraksi di
                lingkungan sekolah dan masyarakat.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                3
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Mengembangkan kemampuan literasi dan numerasi secara menyeluruh.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                4
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Menanamkan budaya hidup bersih dan sehat melalui kegiatan
                kebersihan harian dan UKS.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                5
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Mendorong siswa untuk berpartisipasi aktif dalam kegiatan
                ekstrakurikuler dan lomba.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                6
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Menanamkan sikap toleransi dan saling menghargai antar siswa
                yang memiliki latar belakang budaya dan agama yang berbeda.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                7
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Meningkatkan kemampuan siswa dalam penggunaan teknologi secara
                bijak dan bertanggung jawab.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                8
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Mendorong terciptanya semangat kewirausahaan sejak dini melalui
                kegiatan prakarya dan projek berbasis lingkungan.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                9
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Mengembangkan kemampuan komunikasi siswa secara lisan dan
                tulisan dalam bahasa Indonesia yang baik dan benar.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                10
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Menumbuhkan sikap cinta tanah air dan nasionalisme melalui
                kegiatan upacara, hari besar nasional, dan muatan lokal.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
