import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
  "/foto/kegiatan 1.jpg",
  "/foto/kegiatan 2.jpg",
  "/foto/kegiatan 3.jpg",
];

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const featureRef = useRef(null);
  const scrollToFeatures = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="w-screen h-screen relative">
        <Slider {...settings}>
          {imageList.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Kegiatan ${index + 1}`}
                className="w-screen h-screen opacity-75 object-cover"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold">
              FORUM MAHASISWA PEMERHATI SOSIAL LOMBOK TIMUR
            </h1>
            <p className="text-lg md:text-xl">
              Sistem informasi Peduli Masyarakat, Kesehatan, Lingkungan dan Pendidikan yang ada di Lombok Timur.
            </p>
            <button
              onClick={scrollToFeatures}
              className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-3 rounded-full shadow-md"
            >
              Klik Untuk Lanjutkan
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featureRef} className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Tentang Formapsi Lotim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/LOGO/logo.png"
              alt="Logo Formapsi Lotim"
              className="w-96 h-96 object-contain"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <h3 className="text-xl font-bold mb-4">Forum Mahasiswa Pemerhati Sosial Lombok Timur</h3>
            <p className="text-gray-700 text-justify line-clamp-6">
              Forum Mahasiswa Pemerhati Sosial Lombok Timur (FORMAPSI LOTIM) adalah salah satu organisasi kemahasiswaan yang bergerak di bidang sosial dan kemanusiaan. Forum ini lahir atas dasar kepedulian mahasiswa Lombok Timur terhadap masalah sosial di masyarakat.
            </p>
            <button
            //   onClick={() =>}
              className="mt-4 bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 rounded-full shadow-md"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Siap Meningkatkan Pelayanan Klinik Anda?</h3>
        <p className="mb-6">Bergabunglah bersama kami dan rasakan kemudahan pengelolaan data kesehatan!</p>
        <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full shadow-md">
          Daftar Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        © {new Date().getFullYear()} AkuSehat. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
