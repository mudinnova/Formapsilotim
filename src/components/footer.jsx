import React from "react";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Siap Meningkatkan Pelayanan Klinik Anda?
        </h3>
        <p className="mb-6 text-base md:text-lg">
          Bergabunglah bersama kami dan rasakan kemudahan pengelolaan data kesehatan!
        </p>
        <button
          className="bg-blue-500 text-white font-semibold hover:bg-blue-300 px-6 py-3 rounded-full shadow-lg transition duration-300"
          aria-label="Tombol untuk mendaftar sekarang"
        >
          Daftar Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">FormapsiLotim</span>. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
