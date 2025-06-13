import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const DepartemenKami = () => {
  const departemenList = [
    {
      nama: 'PENGEMBANGAN SUMBER DAYA MANUSIA (PSDM)',
      gambar: '/animasi/psdm.webp',
      deskripsi:
        'Departemen PSDM (Pengembangan Sumber Daya Manusia) berperan dalam meningkatkan kapasitas dan kualitas anggota melalui pelatihan, pembinaan, dan pengembangan soft skill.',
    },
    {
      nama: 'SOSIAL MASYARAKAT (SOSMAS)',
      gambar: '/animasi/sosmas.webp',
      deskripsi:
        'Departemen SOSMAS (Sosial Masyarakat) fokus pada kegiatan sosial dan pengabdian kepada masyarakat, seperti bakti sosial, edukasi, dan program berbasis komunitas.',
    },
    {
      nama: 'KESEHATAN LINGKUNGAN (KESLING)',
      gambar: '/animasi/kesling.webp',
      deskripsi:
        'Departemen KESLING (Kesehatan Lingkungan) mengedukasi pentingnya hidup bersih dan sehat serta mengadakan program pelestarian lingkungan.',
    },
    {
      nama: 'DEPARTEMEN LUAR NEGERI (DEPLU)',
      gambar: '/animasi/deplu.webp',
      deskripsi:
        'Departemen DEPLU (Luar Negeri) bertugas menjalin kerja sama eksternal dengan organisasi atau instansi lain serta memperluas relasi dan jaringan organisasi.',
    },
    {
      nama: 'MEDIA KOMUNIKASI DAN INFORMASI (MEDKOMINFO)',
      gambar: '/animasi/medkom.webp',
      deskripsi:
        'Departemen MEDKOMINFO (Media Komunikasi dan Informasi) bertanggung jawab dalam publikasi kegiatan, desain grafis, pengelolaan media sosial, dan dokumentasi.',
    },
    {
      nama: 'SOSIAL KEAGAMAAN (SKA)',
      gambar: '/animasi/ska.webp',
      deskripsi:
        'Departemen SKA (Sosial Keagamaan) berfokus pada pengembangan nilai-nilai spiritual, moral, serta pelaksanaan kegiatan keagamaan dan dakwah.',
    },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative mt-24 h-64 w-full bg-cover bg-center flex items-center opacity-80 justify-center"
        style={{ backgroundImage: "url('/foto/bag.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            DEPARTEMEN
          </h1>
          <p className="text-lg mt-2">Forum Mahasiswa Pemerhati Sosial Lombok Timur</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3" />
        </div>
      </div>

      {/* Departemen Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold  font-heading text-blue-950 text-center mb-12">Departemen Kami</h2>

        <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">
          {departemenList.map((dept, index) => (
            <motion.div
              key={index}
              className="bg-white flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={dept.gambar}
                alt={`Logo Departemen ${dept.nama}`}
                className="w-40 h-40 object-contain mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-heading text-blue-950 font-bold mb-2">{dept.nama}</h3>
                <p className="text-gray-700 mb-4 text-sm font-sans text-justify">{dept.deskripsi}</p>
                <button className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 rounded-full shadow-md">
                  Selengkapnya
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default DepartemenKami;
