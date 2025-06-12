import React from "react";
import { motion } from "framer-motion";

const organisasi = {
  atas: ["Pembina", "BPO"],
  tengah: "Ketua Umum",
  sejajarBawah: ["Sekretaris Umum", "Ketua Pelaksana", "Bendahara Umum"],
  departemen: [
    { nama: "PSDM", sekretaris: "Sekretaris PSDM" },
    { nama: "SOSMAS", sekretaris: "Sekretaris SOSMAS" },
    { nama: "KESLING", sekretaris: "Sekretaris KESLING" },
    { nama: "DEPLU", sekretaris: "Sekretaris DEPLU" },
    { nama: "MEDKOMINFO", sekretaris: "Sekretaris MEDKOMINFO" },
    { nama: "SKA", sekretaris: "Sekretaris SKA" },
  ],
};

const Card = ({ title, subtitle, bg = "bg-white", border = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`p-4 rounded-lg shadow-md text-center ${bg} ${
      border ? "border" : ""
    }`}
  >
    <h4 className="font-bold text-lg">{title}</h4>
    {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
  </motion.div>
);

const StrukturOrganisasi = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Struktur Organisasi</h2>

      {/* Baris atas: Pembina & BPO */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        {organisasi.atas.map((posisi, idx) => (
          <Card key={idx} title={posisi} />
        ))}
      </div>

      {/* Ketua Umum */}
      <div className="flex justify-center mb-10">
        <Card title={organisasi.tengah} bg="bg-blue-100" />
      </div>

      {/* Sekum, Ketupat, Bendum */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {organisasi.sejajarBawah.map((posisi, idx) => (
          <Card
            key={idx}
            title={posisi}
            bg={posisi === "Ketua Pelaksana" ? "bg-blue-200" : "bg-white"}
          />
        ))}
      </div>

      {/* Departemen */}
      <h3 className="text-2xl font-semibold text-center mb-6 text-blue-700">Departemen</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {organisasi.departemen.map((dept, idx) => (
          <Card
            key={idx}
            title={dept.nama}
            subtitle={dept.sekretaris}
            bg="bg-yellow-50"
          />
        ))}
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
