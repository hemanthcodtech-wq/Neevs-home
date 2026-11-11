import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="page-container footer-content">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-wrap" title="NEEVS Home Appliance Service">
            <img src={logo} alt="NEEVS Home Appliance Service" className="footer-logo-img" />
            <div className="footer-brand-text">
              <span className="footer-brand-name">NEEVS</span>
              <span className="footer-brand-sub">Home Appliance Service</span>
            </div>
          </Link>
          <p className="footer-desc">
            Your trusted partner for home appliance repair, maintenance, and service solutions. Keep your household running smoothly with verified doorstep service.
          </p>
          <div className="footer-trust-badge">
            <ShieldCheck size={18} className="trust-icon" />
            <span>100% Certified Engineers • 30-Day Warranty</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/book-service">Book a Service</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/washing-machine">Washing Machine</Link></li>
            <li><Link to="/services/refrigerator">Refrigerator</Link></li>
            <li><Link to="/services/ac-service">Air Conditioner (AC)</Link></li>
            <li><Link to="/services/microwave">Microwave Oven</Link></li>
            <li><Link to="/services/television">LED / Smart TV</Link></li>
            <li><Link to="/services/dishwasher">Dishwasher</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Information</h4>
          <ul className="footer-contact-list">
            <li>
              <Phone size={16} />
              <a href="tel:+917996163604" className="footer-phone-link">
                Phone: +91 79961 63604
              </a>
            </li>
            <li>
              <Mail size={16} />
              <span>Email: support@neevs.in</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>Address: 21, 6th Cross, Vinayaka Nagar, JP Nagar 5th Phase, Bangalore, Karnataka - 560078</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <p>© 2026 NEEVS Home Appliance Service. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/warranty-policy">Warranty Policy</Link>
            <Link to="/dashboard">Technician Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
