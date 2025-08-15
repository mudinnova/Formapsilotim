import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-white border border-y-blue-900 text-black text-center px-6">
      <h3 className="text-3xl font-bold font-heading text-blue-950 mb-12">
        Hubungi Kami
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {/* Kontak */}
        <div>
          <h4 className="text-xl font-bold font-heading mb-4">Kontak</h4>
          <p>Email: <a href="mailto:formapsilotim@gmail.com" className="text-blue-600 hover:underline">formapsilotim@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/6281234567890" className="text-blue-600 hover:underline">+62 812-3456-7890</a></p>
        </div>

        {/* Media Sosial */}
        <div>
          <h4 className="text-xl font-bold font-heading mb-4 ">Media Sosial</h4>
          <div className="flex items-center gap-3 mb-3">
            <FaInstagram className="text-pink-600 text-xl" />
            <a href="https://instagram.com/formapsilotim" className="text-blue-600 hover:underline">
              @formapsilotim
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaFacebook className="text-blue-700 text-xl" />
            <a href="https://facebook.com/formapsilotim" className="text-blue-600 hover:underline">
              Formapsi Lotim
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-600 text-xl" />
            <a href="https://wa.me/6281234567890" className="text-blue-600 hover:underline">
              WhatsApp Kami
            </a>
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <h4 className="text-xl mb-4 font-bold font-headingtext-center">Lokasi</h4>
          <p className="mb-4 font-body">Kelayu, Kecamatan Selong, Kabupaten Lombok Timur</p>
          <iframe
            title="lokasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0671310873674!2d116.09287261410416!3d-8.173297894126742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdd1d212345678%3A0x1234567890abcdef!2sUniversitas%20Mataram!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </section>


      {/* Footer */}
      <footer className="py-1 bg-gray-900 text-gray-300 text-center">
        © {new Date().getFullYear()} FormapsiLotim. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
