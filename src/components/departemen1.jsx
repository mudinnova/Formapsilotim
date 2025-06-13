import React from 'react';
import { motion } from 'framer-motion';

const Departemen = () => {
  const departemenList = [
    {
      nama: 'PSDM',
      gambar: '/animasi/psdm.webp',
      deskripsi:
        'Departemen PSDM (Pengembangan Sumber Daya Manusia) berperan dalam meningkatkan kapasitas dan kualitas anggota melalui pelatihan, pembinaan, dan pengembangan soft skill.',
    },
    {
      nama: 'SOSMAS',
      gambar: '/animasi/sosmas.webp',
      deskripsi:
        'Departemen SOSMAS (Sosial Masyarakat) fokus pada kegiatan sosial dan pengabdian kepada masyarakat, seperti bakti sosial, edukasi, dan program berbasis komunitas.',
    },
    {
      nama: 'KESLING',
      gambar: '/animasi/kesling.webp',
      deskripsi:
        'Departemen KESLING (Kesehatan Lingkungan) mengedukasi pentingnya hidup bersih dan sehat serta mengadakan program pelestarian lingkungan.',
    },
    {
      nama: 'DEPLU',
      gambar: '/animasi/deplu.webp',
      deskripsi:
        'Departemen DEPLU (Luar Negeri) bertugas menjalin kerja sama eksternal dengan organisasi atau instansi lain serta memperluas relasi dan jaringan organisasi.',
    },
    {
      nama: 'MEDKOMINFO',
      gambar: '/animasi/medkom.webp',
      deskripsi:
        'Departemen MEDKOMINFO (Media Komunikasi dan Informasi) bertanggung jawab dalam publikasi kegiatan, desain grafis, pengelolaan media sosial, dan dokumentasi.',
    },
    {
      nama: 'SKA',
      gambar: '/animasi/ska.webp',
      deskripsi:
        'Departemen SKA (Sosial Keagamaan) berfokus pada pengembangan nilai-nilai spiritual, moral, serta pelaksanaan kegiatan keagamaan dan dakwah.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Departemen Kami</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {departemenList.map((dept, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={dept.gambar}
              alt={`Logo Departemen ${dept.nama}`}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-xl font-bold mb-2 text-center">{dept.nama}</h3>

            <p className="text-gray-700 mb-4 text-sm text-justify">
              {dept.deskripsi}
            </p>

            <button className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 rounded-full shadow-md w-full">
              Selengkapnya
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Departemen;
