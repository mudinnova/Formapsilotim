import React from "react";
import { motion } from "framer-motion";
import psdmImage from "../data/PSDM/datapsdm.json";
import Footer from "../components/footer";



const PsdmPage = () => {
  return (
    <div className="font-sans text-gray-950 bg-white">
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold font-heading text-indigo-950 mb-4">Departemen PSDM</h1>
        <p className="max-w-3xl font-body mx-auto text-lg text-gray-700">
          Pengembangan Sumber Daya Manusia (PSDM) bertanggung jawab untuk
          meningkatkan kapasitas, kualitas, dan potensi anggota melalui pelatihan,
          pembinaan, serta program pengembangan soft skill.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold font-heading text-indigo-950 mb-4">Tanggung Jawab</h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Mengembangkan kapasitas kepemimpinan dan keorganisasian anggota.</li>
          <li>Mengelola pelatihan internal dan pembekalan.</li>
          <li>Menjaga kaderisasi berkelanjutan dalam organisasi.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-heading text-indigo-950 mt-10 mb-4">Program Kerja</h2>
        <ul className="list-disc pl-5 text-gray-700 font-body space-y-2">
          <li>Training Dasar Organisasi (TDO)</li>
          <li>Pelatihan Soft Skill: Public Speaking & Leadership</li>
          <li>Kajian Rutin Pengembangan Diri</li>
          <li>Evaluasi dan Monitoring Kinerja Anggota</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold font-heading text-indigo-950 mb-6 text-center">Anggota PSDM</h2>
        <motion.div
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-2"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {psdmImage.psdmImage.map((anggota, index) => (
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
              <p className="text-sm font-body text-gray-500">Anggota PSDM</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default PsdmPage;
