import React from 'react';
import { motion } from 'framer-motion';

const ProgramKerjaKami = () => {
  const programList = [
    {
      nama: 'Program 1',
      deskripsi: 'Deskripsi singkat tentang program kerja Program 1.',
    },
    {
      nama: 'Program 2',
      deskripsi: 'Deskripsi singkat tentang program kerja Program 2.',
    },
    {
      nama: 'Program 3',
      deskripsi: 'Deskripsi singkat tentang program kerja Program 3.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Program Kerja Kami</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programList.map((program, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-3 text-center">{program.nama}</h3>
            <p className="text-gray-700 mb-5 text-sm text-justify">
              {program.deskripsi}
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

export default ProgramKerjaKami;
