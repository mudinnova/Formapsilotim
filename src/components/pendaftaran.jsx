import React, { useState, useEffect } from 'react';

const Pendaftaran = () => {
  const [pendaftaranDibuka, setPendaftaranDibuka] = useState(false);

  useEffect(() => {
    const sekarang = new Date();
    const tanggalBuka = new Date('2026-04-01T00:00:00'); // ganti sesuai waktu mulai pendaftaran
    const tanggalTutup = new Date('2025-05-01T23:59:59'); // ganti sesuai waktu akhir pendaftaran

    if (sekarang >= tanggalBuka && sekarang <= tanggalTutup) {
      setPendaftaranDibuka(true);
    }
  }, []);

  return (
    <section className="py-16 bg-white text-black text-center px-6 shadow-lg">
      <h3 className="text-3xl font-bold font-heading text-blue-950 mb-4">Ayo Bergabung Bersama Kami</h3>
      <p className="mb-6">
        Bergabunglah bersama kami dan rasakan pengalaman berorganisasi yang menyenangkan dan
        bermakna!
      </p>

      {pendaftaranDibuka ? (
        <button className="bg-blue-500 text-white hover:bg-blue-300 px-6 py-3 rounded-full shadow-md">
          Daftar Sekarang
        </button>
      ) : (
        <p className="italic text-gray-500 opacity-80">Pendaftaran belum dibuka</p>
      )}
    </section>
  );
};

export default Pendaftaran;
