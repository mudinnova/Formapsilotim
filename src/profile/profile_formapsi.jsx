import React from "react";
import Navbar from "../components/navbar";

const ProfileFormapsi = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
    <div className="mt-24"> {/* Tambahan margin top agar tidak ketimpa navbar */}
      
      {/* Header Section */}
      <div
          className="relative h-64 w-full bg-cover bg-center flex items-center opacity-80 justify-center"
          style={{ backgroundImage: "url('/foto/bag.webp')" }}
        >
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay hitam transparan */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            PROFILE
          </h1>
          <p className="text-lg mt-2">Tentang Formapsi Lotim</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <img
            src="/LOGO/logo.png"
            alt="Logo Formapsi Lotim"
            className="w-64 h-64 mx-auto mb-6  border-yellow-400"  
            />
        
        <h1 className="text-3xl font-bold text-center text-blue-950 mb-4">
          Profil FORMAPSI LOTIM
        </h1>

        <section className="mb-6">
          <p className="text-justify text-gray-700 leading-relaxed font-sans">
            Forum Mahasiswa Pemerhati Sosial Lombok Timur (FORMAPSI LOTIM) adalah salah satu organisasi kemahasiswaan yang bergerak di bidang sosial dan kemanusiaan. Forum Mahasiswa Pemerhati Sosial Lombok Timur lahir atas dasar bentuk kepeduliaan para mahasiswa yang ada di Kabupaten Lombok Timur terhadap permasalahan-permasalahan sosial yang terjadi ditengah masyarakat.
            <br /><br />
            Hal ini menjadi faktor penggerak para mahasiswa Lombok Timur untuk membentuk sebuah organisasi kemahasiswaan yang kita bentuk dengan nama Forum Mahasiswa Pemerhati Sosial Lombok Timur. Sarana atau aspek yang penting dalam pembentukan dan pengembangan sumber daya manusia yang utuh sesuai dengan arah pembangunan nasional saat ini. Hal tersebut dijadikan sebagai landasan sehingga diperlukan peran aktif dalam mewujudkan cita-cita kemerdekaan yang merupakan aspirasi luhur dari bangsa Indonesia.
            <br /><br />
            Forum Mahasiswa Pemerhati Sosial Lombok Timur sebagai wadah untuk mengembangkan dunia dan pengajaran sehingga diharapkan dapat membentuk insan yang terampil, bijak, bernalar, kreatif dan berkepribadian tinggi serta tetap mewujudkan dan menjunjung tinggi nilai sosial dan kemanusiaan. Menuju masyarakat adil, makmur dan diridhoi Tuhan Yang Maha Esa.
            <br /><br />
            Forum Mahasiswa Pemerhati Sosial Lombok Timur adalah suatu wadah bagi mahasiswa Lombok Timur untuk meningkatkan dengan masyarakat. Maka, dianggap perlu adanya konstitusi yang mengatur jalannya roda organisasi yang dihimpun dalam anggaran dasar dan anggaran rumah tangga untuk menciptakan suasana kehidupan organisasi yang kondusif dan dinamis.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-950 mb-2">VISI</h2>
          <p className="text-gray-700 leading-relaxed">
            Terwujudnya kesatuan diantara mahasiswa Kabupaten Lombok Timur serta membentuk organisasi kemahasiswaan yang dilandasi semangat kekeluargaan, kebersamaan, serta menjunjung tinggi nilai sosial dan kemanusiaan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-950 mb-2">MISI</h2>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Menguatkan media aspirasi untuk melayani mahasiswa dan masyarakat secara solutif.</li>
            <li>Menghasilkan kajian dan membangun kerjasama strategis dalam upaya pemecahan masalah sosial.</li>
            <li>Meningkatkan dan mengembangkan potensi dan keahlian mahasiswa Kabupaten Lombok Timur.</li>
            <li>Membentuk karakter mahasiswa Kabupaten Lombok Timur yang proaktif, bertanggung jawab dan kritis dalam memecahkan suatu problematika sosial yang ada.</li>
            <li>Berkontribusi dalam hal pembangunan sosial dan kebudayaan Kabupaten Lombok Timur.</li>
            <li>Mendorong mahasiswa Kabupaten Lombok Timur agar memiliki daya saing dan konektivitas yang luas di era globalisasi.</li>
            <li>Mengabdi kepada masyarakat dan membangun negeri.</li>
          </ul>
        </section>
      </div>
    </div>
    {/* CTA Section */}
    <section className="py-16 bg-yellow-500 text-white text-center px-6 mt-20">
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

export default ProfileFormapsi;
