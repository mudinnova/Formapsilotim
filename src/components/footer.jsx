import React from "react";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Ayo Bergabung Bersama Kami</h3>
        <p className="mb-6">
          Bergabunglah bersama kami dan rasakan pengalaman berorganisasi yang menyenangkan dan
          bermakna!
        </p>
        <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full shadow-md">
          Daftar Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        © {new Date().getFullYear()} FormapsiLotim. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
