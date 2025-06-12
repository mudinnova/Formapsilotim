import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const DepartemenKami = () => {
  const departemenList = [
    { nama: 'PSDM', gambar: '/animasi/PSDM.png' },
    { nama: 'SOSMAS', gambar: '/images/departemen/sosmas.png' },
    { nama: 'KESLING', gambar: '/images/departemen/kesling.png' },
    { nama: 'DEPLU', gambar: '/images/departemen/deplu.png' },
    { nama: 'MEDKOMINFO', gambar: '/images/departemen/medkominfo.png' },
    { nama: 'SKA', gambar: '/images/departemen/ska.png' },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
      <div className="relative h-64 w-full mt-24 bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "url('/img/header-bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay hitam transparan */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            DEPARTEMEN
          </h1>
          <p className="text-lg mt-2">Forum Mahasiswa Pemerhati Sosial Lombok Timur</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3" />
        </div>
      </div>
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
              Departemen {dept.nama} berfokus pada peningkatan kualitas hidup masyarakat melalui
              program-program yang inovatif dan berkelanjutan.
            </p>

            <button className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 rounded-full shadow-md w-full">
              Selengkapnya
            </button>
          </motion.div>
        ))}
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-16 bg-yellow-500 text-white text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Ayo Bergabung Bersama Kami</h3>
        <p className="mb-6">Bergabunglah bersama kami dan rasakan kemudahan pengelolaan data kesehatan!</p>
        <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full shadow-md">
          Daftar Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        © {new Date().getFullYear()} FormapsiLotim. All rights reserved.
      </footer>
    </div>
  );
};

export default DepartemenKami;
