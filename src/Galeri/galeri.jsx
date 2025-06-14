import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/footer';
import galeriData from '../data/galerikarya.json';

const GaleriLanding = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [hiddenSubcategories, setHiddenSubcategories] = useState({});
  const [zoomImg, setZoomImg] = useState(null); // 👈 State for zoomed image

  const handleSubClick = (name) => {
    setActiveSub((prev) => (prev === name ? null : name));
    setHiddenSubcategories((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((k) => [k, true])),
      [name]: false,
    }));
  };

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />

      {/* Hero */}
      <div
        className="relative h-64 mt-24 w-full bg-cover opacity-80 bg-center flex items-center justify-center"
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
          {galeriData.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => {
                setSelectedGallery(item);
                setActiveSub(null);
              }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-4 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Isi Galeri */}
      {selectedGallery && selectedGallery.subcategories && (
        <section className="py-12 px-4 bg-white border-t">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedGallery.title}</h3>
              <button
                onClick={() => setSelectedGallery(null)}
                className="text-blue-900 hover:underline"
              >
                Kembali ke Kategori
              </button>
            </div>

            {/* Subcategory Names */}
            <div className="flex gap-6 mb-6 border-b">
              {selectedGallery.subcategories.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSubClick(sub.name)}
                  className={`relative text-md font-semibold px-2 pb-2 border-b-4 transition-all duration-200
                    ${activeSub === sub.name
                      ? 'text-blue-900 border-blue-900'
                      : 'text-gray-500 border-transparent hover:border-gray-300'}`}
                >
                  {sub.name}
                </button>
              ))}
            </div>

            {/* Subcategory Content */}
            {selectedGallery.subcategories.map(
              (sub, idx) =>
                !hiddenSubcategories[sub.name] && (
                  <div key={idx} className="mb-10">
                    <div className="overflow-x-auto">
                      <div className="flex gap-4 w-max">
                        {sub.items.map((img, i) => (
                          <motion.div
                            key={i}
                            className="min-w-[240px] flex-shrink-0 rounded-md shadow hover:shadow-lg"
                            whileHover={{ scale: 1.03 }}
                            onClick={() =>
                              setZoomImg(typeof img === 'string' ? img : img.gambar)
                            }
                          >
                            <img
                              src={typeof img === 'string' ? img : img.gambar}
                              alt={`Galeri ${sub.name} ${i + 1}`}
                              className="w-full h-48 object-cover rounded-md cursor-pointer"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {/* Modal Zoom Image */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImg(null)}
          >
            <motion.img
              src={zoomImg}
              alt="Zoom"
              className="max-w-4xl max-h-[80vh] rounded-lg shadow-xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GaleriLanding;
