"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function SambutanKepsek() {
  return (
    <motion.section
      animate={{ y: "0%", opacity: 1 }}
      initial={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className=" px-4 py-8 md:px-20 md:py-14 bg-primary text-white text-center"
    >
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-3xl font-bold my-8"
      >
        Sambutan Kepala Sekolah
      </motion.h1>
      <motion.div
        animate={{ y: "0%", opacity: 1 }}
        initial={{ y: "100%", opacity: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="w-56 h-56 rounded-full overflow-hidden mx-auto"
        >
          <Image
            src={
              "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744821675/Gambar_WhatsApp_2025-04-16_pukul_07.40.00_141c4b23_dthowy.jpg"
            }
            width={800}
            height={800}
            alt="sambutan kepsek"
            className="object-cover object-center"
          />
        </motion.div>
        <h1 className="font-bold my-2 text-lg">Agus Timorwoko, S.Pd</h1>
        <div className="grid gap-2 text-justify px-3 mt-12 md:mt-16 md:px-12 text-sm font-semibold overflow-hidden">
          <p className="my-2">
            Assalamu&rsquo;alaikum Warahmatullahi Wabarakatuh,
          </p>
          <div>
            <motion.p
              animate={{ x: "0%", opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              &emsp;&emsp;Puji syukur ke hadirat Allah SWT, Tuhan Yang Maha Esa,
              atas rahmat dan karunia-Nya sehingga website resmi SDN Ciracas 14
              ini dapat hadir sebagai media informasi dan komunikasi antara
              sekolah dengan seluruh lapisan masyarakat, baik internal maupun
              eksternal.
            </motion.p>
            <motion.p
              animate={{ x: "0%", opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              &emsp;&emsp;Website ini kami kembangkan sebagai upaya untuk
              memberikan informasi yang akurat, transparan, dan bermanfaat
              mengenai kegiatan, program, serta prestasi yang telah diraih oleh
              sekolah kami. Dengan dukungan kemajuan teknologi informasi, kami
              berharap website ini dapat menjadi jembatan penghubung yang
              mempererat hubungan antara sekolah, orang tua siswa, alumni, dan
              masyarakat luas.
            </motion.p>
            <motion.p
              animate={{ x: "0%", opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              &emsp;&emsp;Kami menyadari pentingnya peran teknologi dalam dunia
              pendidikan masa kini. Oleh karena itu, kami terus berusaha
              melakukan inovasi dan pembaruan, baik dalam bidang akademik maupun
              non-akademik, demi meningkatkan kualitas layanan pendidikan di
              sekolah ini. Kehadiran website ini diharapkan mampu memberikan
              kontribusi positif terhadap perkembangan pendidikan yang lebih
              modern, terbuka, dan kolaboratif.
            </motion.p>
            <motion.p
              animate={{ x: "0%", opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              &emsp;&emsp;Akhir kata, kami mengucapkan terima kasih kepada
              seluruh pihak yang telah berkontribusi dalam pengembangan website
              ini. Semoga keberadaannya dapat memberi manfaat nyata dan menjadi
              sarana untuk terus melangkah maju dalam mewujudkan visi dan misi
              sekolah kita tercinta.
            </motion.p>
          </div>
          <p>Wassalamu&rsquo;alaikum Warahmatullahi Wabarakatuh.</p>
          <p className="font-bold">Kepala Sekolah SD Negeri Ciracas 14</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
