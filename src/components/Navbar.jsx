import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, PhoneCall, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setBookingModalOpen(false);
  }, [location.pathname]);

  // Beautiful custom message for WhatsApp
  const whatsappCustomMessage = encodeURIComponent(
    `Hello NEEVS Team! 👋\n\nI would like to book a doorstep appliance service.\n\n📍 Location / Area:\n🔧 Appliance Type (AC / Washing Machine / Refrigerator / TV / Microwave):\n⚠️ Issue / Symptom:\n🕒 Preferred Date & Time:\n\nPlease confirm availability and share the service estimate. Thank you!`
  );

  const whatsappUrl = `https://wa.me/917996163604?text=${whatsappCustomMessage}`;

  const handleOpenBookingModal = () => {
    setBookingModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top emergency announcement ticker */}
      <div className="navbar-top-strip">
        <div className="page-container top-strip-inner">
          <div className="ticker-item">
            <span className="live-dot"></span>
            <Sparkles size={13} className="ticker-sparkle" />
            <span>Doorstep Appliance Service in 90 Minutes across All Active Locations</span>
          </div>
          <div className="top-strip-right">
            <a href="tel:+917996163604" className="top-call-link">
              <PhoneCall size={13} />
              <span>Need Quick Support? +91 79961 63604</span>
            </a>
          </div>
        </div>
      </div>

      <motion.header
        className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo-wrap" title="NEEVS Home Appliance Service">
            <motion.img
              src={logo}
              alt="NEEVS Home Appliance Service"
              className="navbar-logo-img"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            />
            <div className="navbar-brand-text">
              <span className="brand-name-title">NEEVS</span>
              <span className="brand-name-sub">Home Appliance Service</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Services
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Projects
            </NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Testimonials
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              FAQ
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            <a href="tel:+917996163604" className="nav-phone-call-btn" title="Call NEEVS Support">
              <span className="phone-icon-bubble">
                <PhoneCall size={15} />
              </span>
              <div className="phone-number-box">
                <span className="phone-label">24/7 Helpline</span>
                <span className="phone-digits">+91 79961 63604</span>
              </div>
            </a>

            <motion.button
              className="book-service-btn interactive-btn"
              onClick={handleOpenBookingModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Book a Service</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="navbar-mobile-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <NavLink to="/" className="mobile-link">Home</NavLink>
              <NavLink to="/about" className="mobile-link">About</NavLink>
              <NavLink to="/services" className="mobile-link">Services</NavLink>
              <NavLink to="/projects" className="mobile-link">Projects</NavLink>
              <NavLink to="/testimonials" className="mobile-link">Testimonials</NavLink>
              <NavLink to="/contact" className="mobile-link">Contact</NavLink>
              <NavLink to="/faq" className="mobile-link">FAQ</NavLink>
              <a href="tel:+917996163604" className="mobile-link mobile-phone-highlight">
                <PhoneCall size={16} />
                <span>Call +91 79961 63604</span>
              </a>
              <button
                className="book-service-btn mobile-book-btn"
                onClick={handleOpenBookingModal}
              >
                Book a Service
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Book Service Choice Modal (WhatsApp vs Call or Online Form) */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="booking-modal-backdrop" onClick={() => setBookingModalOpen(false)}>
            <motion.div
              className="booking-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close Button */}
              <button
                className="booking-modal-close"
                onClick={() => setBookingModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="booking-modal-header">
                <div className="booking-modal-tag">
                  <Sparkles size={14} />
                  <span>Instant Doorstep Dispatch</span>
                </div>
                <h3 className="booking-modal-title">How would you like to book?</h3>
                <p className="booking-modal-subtitle">
                  Connect with our certified technician coordinator right away via WhatsApp or direct phone call.
                </p>
              </div>

              {/* Action Choices */}
              <div className="booking-options-grid">
                {/* WhatsApp Option */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-option-card opt-whatsapp"
                  onClick={() => setBookingModalOpen(false)}
                >
                  <div className="opt-icon-bubble wa-bubble">
                    <MessageCircle size={26} />
                  </div>
                  <div className="opt-text-wrap">
                    <div className="opt-title-row">
                      <h4>Chat on WhatsApp</h4>
                      <span className="opt-badge fastest">Fastest · 2 Min Reply</span>
                    </div>
                    <p>Instant chat with pre-filled service details & quick technician assignment.</p>
                  </div>
                  <ArrowRight size={20} className="opt-arrow" />
                </a>

                {/* Direct Call Option */}
                <a
                  href="tel:+917996163604"
                  className="booking-option-card opt-call"
                  onClick={() => setBookingModalOpen(false)}
                >
                  <div className="opt-icon-bubble call-bubble">
                    <PhoneCall size={24} />
                  </div>
                  <div className="opt-text-wrap">
                    <div className="opt-title-row">
                      <h4>Call Helpline Directly</h4>
                      <span className="opt-badge available">24/7 Available</span>
                    </div>
                    <p>Speak live with our service specialist: <strong>+91 79961 63604</strong></p>
                  </div>
                  <ArrowRight size={20} className="opt-arrow" />
                </a>
              </div>

              {/* Alternative: Online detailed web form */}
              <div className="booking-modal-footer">
                <span className="footer-or">Or fill out our full online form:</span>
                <button
                  type="button"
                  className="online-form-link-btn"
                  onClick={() => {
                    setBookingModalOpen(false);
                    navigate('/book-service');
                  }}
                >
                  Continue to Web Booking Form →
                </button>
              </div>

              {/* Trust bar at bottom */}
              <div className="booking-modal-trust-bar">
                <span><ShieldCheck size={14} /> 30-Day Warranty</span>
                <span><Clock size={14} /> 90-Min Doorstep Arrival</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
