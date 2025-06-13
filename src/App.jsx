import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProfileFormapsi from "./profile/profile_formapsi";
import DepartemenKami from "./Departemen/departemen";
import StrukturOrganisasi from "./profile/struktur";
import GaleriLanding from "./Galeri/galeri";



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
        {/* Tambahkan rute lainnya jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
