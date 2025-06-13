import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const organisasi = {
  atas: [
  { nama: "Pembina", keterangan: "BPO", foto: "/img/pembina.jpg" },
  { nama: "MUHAMAD HALIMUDIN NOVA, S.Kom.", keterangan: "Badan Pertimbangan Organisasi", foto: "/foto/Muhamad Halimudin Nova.webp" },
],

  tengah: { nama: "Ketua Umum", foto: "/img/ketua-umum.jpg" },
  sejajarBawah: [
    { nama: "Sekretaris Umum", foto: "/img/sekum.jpg" },
    { nama: "Bendahara Umum", keterangan : "Badan Pertimbangan Organisasi (BPO)",foto: "/foto/elma.webp" },
  ],
  departemen: [
    { nama: "INDRIANI SAFITRI", kadep: "Kepala Departemen Pengembangan Sumber Daya Manusia (PSDM)", foto: "/foto/indri.webp" },
    { nama: "M. ROBI ASLAMI", kadep: "Kepala Departemen Sosial Masyarakat (SOSMAS)", foto: "/foto/robi.webp" },
    { nama: "JINAWANG ABDUL ZANI", kadep: "Kepala Departemen Kesehatan Lingkungan (KESLING)", foto: "/foto/jinawang.webp" },
    { nama: "ABIB TANTOWI", kadep: "Kepala Departemen Luar Negeri (DEPLU)", foto: "/foto/abib.webp" },
    { nama: "MILA HIDAYATUNNUPUS", kadep: "Kepala Departemen Media Komunikasi dan Informasi (MEDKOMINFO)", foto: "/img/medkominfo.jpg" },
    { nama: "RAMDANI", kadep: "Kepala Departemen Sosial Keagamaan (SKA)", foto: "/foto/ramdani.webp" },
  ],
};

const Card = ({ title, subtitle, foto, bg = "bg-white", border = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`p-4 shadow-md text-center ${bg} ${border ? "border" : ""}`}
  >
    {foto && (
      <img
  src={foto}
  alt={title}
  className="w-80 h-80 object-contain mx-auto mb-3 rounded-md"
/>


    )}
    <h4 className="font-bold text-lg">{title}</h4>
    {subtitle && <p className="text-sm text-blue-950 mt-1">{subtitle}</p>}
  </motion.div>
);

const StrukturOrganisasi = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
      <div className="mt-24">
        {/* Header Section */}
        <div
          className="relative h-64 w-full bg-cover bg-center flex items-center opacity-80 justify-center"
          style={{ backgroundImage: "url('/foto/bag.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
              PROFILE
            </h1>
            <p className="text-lg mt-2">Struktural Formapsi Lotim</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3" />
          </div>
        </div>

        {/* Struktur Organisasi */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-blue-950">
            Struktur Organisasi
          </h2>

          {/* Baris atas: Pembina & BPO */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            {organisasi.atas.map((posisi, idx) => (
              <Card key={idx} title={posisi.nama} subtitle={posisi.keterangan} foto={posisi.foto} />
            ))}
          </div>

          {/* Ketua Umum */}
          <div className="flex justify-center mb-10">
            <Card
              title={organisasi.tengah.nama}
              foto={organisasi.tengah.foto}
              bg="bg-blue-100"
            />
          </div>

          {/* Sekum & Bendum */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {organisasi.sejajarBawah.map((posisi, idx) => (
              <Card key={idx} title={posisi.nama} foto={posisi.foto} />
            ))}
          </div>

          {/* Departemen */}
          <h3 className="text-2xl font-semibold font-heading text-center mb-6 text-blue-950">
            Departemen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {organisasi.departemen.map((dept, idx) => (
              <Card
                key={idx}
                title={dept.nama}
                subtitle={dept.kadep}
                foto={dept.foto}
                bg="bg-yellow-50"
              />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default StrukturOrganisasi;
