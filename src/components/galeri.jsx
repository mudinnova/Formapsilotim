import React from 'react';
import { motion } from 'framer-motion';
import imageData from '../data/galeri.json'; // ✅ pastikan path dan file JSON sesuai

const GaleriKegiatan = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Galeri Kegiatan</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imageData.images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img}
              alt={`Kegiatan ${index + 1}`}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GaleriKegiatan;
