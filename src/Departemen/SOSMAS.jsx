import React from "react";
import { motion } from "framer-motion";
import sosmasImage from "../data/SOSMAS/datasosmas.json";
import Footer from "../components/footer";

const SosmasPage = () => {
  return (
    <div className="font-sans text-gray-950 bg-white">
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold font-heading text-cyan-900 mb-4">Departemen Sosial & Keagamaan (SOSMAS)</h1>
        <p className="max-w-3xl font-body mx-auto text-lg text-gray-700">
          Departemen Sosial dan Keagamaan (SOSMAS) bertanggung jawab dalam menyelenggarakan kegiatan sosial,
          kemanusiaan, dan keagamaan sebagai bentuk pengabdian kepada masyarakat dan peningkatan spiritualitas anggota.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold font-heading text-cyan-950 mb-4">Tanggung Jawab</h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Menyusun dan melaksanakan program sosial dan keagamaan secara berkala.</li>
          <li>Menumbuhkan rasa kepedulian sosial dan nilai religius di lingkungan organisasi.</li>
          <li>Menjadi penghubung antara organisasi dan kegiatan pengabdian masyarakat.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-heading text-cyan-950 mt-10 mb-4">Program Kerja</h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Bakti Sosial & Donasi Ramadhan</li>
          <li>Peringatan Hari Besar Islam (PHBI)</li>
          <li>Ngaji Bareng & Kajian Keislaman Rutin</li>
          <li>Program Berbagi Jumat Berkah</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold font-heading text-cyan-950 mb-6 text-center">Anggota SOSMAS</h2>
        <motion.div
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-2"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sosmasImage.sosmasImage.map((anggota, index) => (
            <motion.div
              key={index}
              className="min-w-[200px] bg-white rounded-xl shadow-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={anggota.foto}
                alt={anggota.nama}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-2"
              />
              <h3 className="text-lg font-semibold font-heading">{anggota.nama}</h3>
              <p className="text-sm font-body text-gray-500">Anggota SOSMAS</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default SosmasPage;
