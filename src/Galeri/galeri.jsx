import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import Footer from '../components/footer';

const kategoriGaleri = [
  {
    id: 'kegiatan',
    title: 'Galeri Kegiatan',
    image: '/animasi/kegiatan.webp',
    items: [
      '/galeri/kegiatan1.jpg',
      '/galeri/kegiatan2.jpg',
      '/galeri/kegiatan3.jpg',
    ],
  },
  {
    id: 'karya',
    title: 'Galeri Karya',
    image: '/animasi/karyaa.webp',
    items: [
      '/galeri/karya1.jpg',
      '/galeri/karya2.jpg',
      '/galeri/karya3.jpg',
    ],
  },
  {
    id: 'buku',
    title: 'Galeri Buku',
    image: '/animasi/buku.webp',
    items: [
      '/galeri/buku1.jpg',
      '/galeri/buku2.jpg',
      '/galeri/buku3.jpg',
    ],
  },
  {
    id: 'penghargaan',
    title: 'Galeri Penghargaan',
    image: '/animasi/penghargaan.webp',
    items: [
      '/galeri/penghargaan1.jpg',
      '/galeri/penghargaan2.jpg',
      '/galeri/penghargaan3.jpg',
    ],
  },
];

const GaleriLanding = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />

      {/* Hero */}
      <div
          className="relative h-64 mt-24 w-full bg-cover bg-center flex items-center opacity-80 justify-center"
          style={{ backgroundImage: "url('/foto/bag.webp')" }}
        >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">GALERI</h1>
          <p className="text-lg mt-2">Dokumentasi Kegiatan, Karya, dan Prestasi Kami</p>
          <div className="w-24 h-1 bg-white mx-auto mt-3" />
        </div>
      </div>

      {/* Pilihan Galeri */}
      <section className="py-16 bg-gray-100 px-4 relative z-10">

        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kategori Galeri</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
  {kategoriGaleri.map((item, index) => (
    <motion.div
      key={item.id}
      onClick={() => setSelectedGallery(item)}
      className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Gambar dimotionkan */}
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Teks di bawah gambar */}
      <div className="py-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
      </div>
    </motion.div>
  ))}
</div>


      </section>

      {/* Isi Galeri */}
      {selectedGallery && (
        <section className="py-12 px-4 bg-white border-t">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{selectedGallery.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selectedGallery.items.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-md shadow hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={img}
                    alt={`Galeri ${selectedGallery.title} ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer/>
    </div>
  );
};

export default GaleriLanding;