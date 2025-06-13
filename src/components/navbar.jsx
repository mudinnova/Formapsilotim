import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full h-24 z-50 backdrop-blur bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img
          src="/LOGO/logo.png"
          alt="Logo Formapsi Lotim"
          className="w-24 h-24 object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <button
              onClick={() => navigate("/")}
              className="hover:text-yellow-500"
            >
              Beranda
            </button>
          </li>

          {/* Dropdown Profile */}
          <li className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="hover:text-yellow-500 cursor-pointer focus:outline-none"
            >
              Profile
            </button>
            {profileOpen && (
              <ul className="absolute bg-white text-gray-800 rounded-md shadow-md mt-2 w-48">
                <li
                  className="px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={() => {
                    navigate("/profile/tentangformapsi");
                    setProfileOpen(false);
                  }}
                >
                  Tentang Forum
                </li>
                <li
                  className="px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={() => {
                    navigate("/profile/Strukturalformapsi");
                    setProfileOpen(false);
                  }}
                >
                  Tim Kami
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/departemen");
                setProfileOpen(false);
              }}
              className="hover:text-yellow-500"
            >
              Departemen
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/program-kerja")}
              className="hover:text-yellow-500"
            >
              Program Kerja
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/Galeri")}
              className="hover:text-yellow-500"
            >
              Galeri
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-gray-800 px-6 pb-4 space-y-4 font-medium">
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Beranda
            </button>
          </li>
          <li>
            <details>
              <summary className="cursor-pointer">Profile</summary>
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/profile/tentangformapsi");
                    }}
                    className="hover:text-yellow-500"
                  >
                    Tentang Forum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/profile/StrukturOrganisasi");
                    }}
                    className="hover:text-yellow-500"
                  >
                    Tim Kami
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/departemen");
              }}
            >
              Departemen
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/program-kerja");
              }}
            >
              Program Kerja
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/galeri");
              }}
            >
              Galeri
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
