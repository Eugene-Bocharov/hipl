import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { AppoinmentPage } from './pages/AppoinmentPage/AppoinmentPage';
import ProjectsPage from './pages/ProjectsPages/ProjectsPage';
import ExterPage from './pages/ServPages/ExterPage';
import HomAEPage from './pages/ServPages/HomAEPage';
import InterPage from './pages/ServPages/InterPage';
import RoofingPage from './pages/ServPages/RoofingPage';
import TestimonialsPage from './pages/ProjectsPages/TestimonialsPage';
import NewConstr from './pages/ServPages/NewConstr';
import { DevPage } from './pages/DevPage/DevPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/development" element={<DevPage />} />
          <Route path="/design" element={<AboutPage />} />
          <Route path="/projects" element={<AboutPage />} />
          <Route path="/appointments" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
