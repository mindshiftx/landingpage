import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Features       from './components/Features';
import About          from './components/About';
import Testimonials   from './components/Testimonials';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import ScrollToTop    from './components/ScrollToTop';

import AcademicShiftPage from './components/AcademicShiftPage';
import ScatterBoardPage  from './components/ScatterBoardPage';

/* ----- landing stack extracted for readability ----- */
const Landing = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      {/* keep scroll-restoration inside router */}
      <ScrollToTop />

      <Routes>
        {/* main marketing site */}
        <Route path="/"                element={<Landing />} />

        {/* individual product pages */}
        <Route path="/academic-shift"  element={<AcademicShiftPage />} />
        <Route path="/scatterboard"    element={<ScatterBoardPage  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
