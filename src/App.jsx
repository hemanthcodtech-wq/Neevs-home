import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import BrandMarquee from './components/BrandMarquee';
import TrustGuaranteeStrip from './components/TrustGuaranteeStrip';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';
import SplashScreen from './components/SplashScreen';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Projects from './pages/Projects/Projects';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import BookService from './pages/BookService/BookService';
import FAQ from './pages/FAQ/FAQ';
import Legal from './pages/Legal/Legal';
import SignIn from './pages/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

export default function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="app-layout">
      {/* Session-Aware First-Time Splash Screen */}
      <SplashScreen />

      <ScrollToTopOnRoute />
      {!isDashboard && <Navbar />}

      <main className="main-content-flow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms-conditions" element={<Legal type="terms" />} />
          <Route path="/warranty-policy" element={<Legal type="warranty" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Brand Marquee & Trust Strip on all public customer pages */}
      {!isDashboard && (
        <>
          <TrustGuaranteeStrip />
          <BrandMarquee />
          <Footer />
          <FloatingCTA />
        </>
      )}
    </div>
  );
}
