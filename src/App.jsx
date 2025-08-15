import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProfileFormapsi from "./profile/profile_formapsi";
import DepartemenKami from "./Departemen/departemen";
import StrukturOrganisasi from "./profile/struktur";
import GaleriLanding from "./Galeri/galeri";
import PsdmPage from "./Departemen/PSDM";
import SkaPage from "./Departemen/SKA";
import SosmasPage from "./Departemen/SOSMAS";
import MedkomPage from "./Departemen/MEDKOM";
import DepluPage from "./Departemen/DEPLU";
import KeslingPage from "./Departemen/KESLING";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile/tentangformapsi" element={<ProfileFormapsi />} />
        <Route path="/Profile/Strukturalformapsi" element={<StrukturOrganisasi />} />
        <Route path="/Departemen" element={<DepartemenKami />} />
        <Route path="/Program-Kerja" element={<DepartemenKami />} />
        <Route path="/Galeri" element={<GaleriLanding />} />
        <Route path="/departemen/PSDM" element={<PsdmPage />} />
        <Route path="/departemen/SKA" element={<SkaPage/>}/>
        <Route path="/departemen/SOSMAS" element={<SosmasPage />} />
        <Route path="/departemen/MEDKOMINFO" element={<MedkomPage />} />
        <Route path="/departemen/DEPLU" element={<DepluPage />} />
        <Route path="/departemen/KESLING" element={<KeslingPage />} />
        
        {/* Tambahkan rute lainnya jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
