import React from "react";
import { motion } from "framer-motion";
import depluImage from "../data/DEPLU/datadeplu.json";
import Footer from "../components/footer";

const DepluPage = () => {
  return (
    <div className="font-sans text-gray-950 bg-white">
      <div
        className="relative h-64 w-full bg-cover opacity-80 bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/foto/deplu.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">DEPARTEMEN LUAR NEGERI</h1>
          <p className="text-lg mt-2">Sowan Formapsi</p>
          <div className="w-24 h-1 bg-white mx-auto mt-3" />
        </div>
      </div>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold font-heading text-blue-950 mb-4">
          Departemen Luar Negeri (DEPLU)
        </h1>
        <p className="max-w-3xl font-body mx-auto text-lg text-gray-700">
          Departemen Luar Negeri bertugas menjalin hubungan dan kerja sama dengan
          organisasi eksternal, baik dalam lingkup kampus maupun di luar kampus,
          serta memperluas jaringan dan representasi organisasi di tingkat regional maupun nasional.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold font-heading text-blue-950 mb-4">
          Tanggung Jawab
        </h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Menjalin kerja sama eksternal dengan organisasi sejenis.</li>
          <li>Mengelola komunikasi dengan institusi dan lembaga lain.</li>
          <li>Mewakili organisasi dalam forum eksternal.</li>
          <li>Menjadi penghubung dalam kolaborasi kegiatan bersama pihak luar.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-heading text-blue-950 mt-10 mb-4">
          Program Kerja
        </h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Sowan Formapsi</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold font-heading text-blue-950 mb-6 text-center">
          Anggota DEPLU
        </h2>
        <motion.div
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-2"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {depluImage.depluImage.map((anggota, index) => (
            <motion.div
              key={index}
              className="min-w-[200px] bg-white rounded-xl  shadow-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={anggota.foto}
                alt={anggota.nama}
                className="w-32 h-32 mx-auto rounded-xl object-cover mb-2"
              />
              <h3 className="text-lg font-semibold font-heading">{anggota.nama}</h3>
              <p className="text-sm font-body text-gray-500">Anggota DEPLU</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default DepluPage;
