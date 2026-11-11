import React from 'react';
import PageHeader from '../../components/PageHeader';
import {
  CheckCircle,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const hoverCard = {
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: '0 20px 40px rgba(11, 87, 208, 0.12)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export default function About() {
  const applianceExpertise = [
    { title: 'Washing Machines', desc: 'Front-load, top-load, and direct drive motor diagnostic.', icon: '🌀' },
    { title: 'Refrigerators', desc: 'Inverter cooling, defrost thermostats, and gas charging.', icon: '❄️' },
    { title: 'Air Conditioners', desc: 'Jet pressure cleaning, PCB boards, and leak seals.', icon: '💨' },
    { title: 'Microwave Ovens', desc: 'Magnetron heating, touchpad sensors, and safety switches.', icon: '⚡' },
    { title: 'LED / Smart TVs', desc: 'Display backlights, motherboard circuits, and audio chips.', icon: '📺' },
    { title: 'Dishwashers', desc: 'Drainage pumps, heating coils, and spray arm descaling.', icon: '🍽️' },
    { title: 'Kitchen Chimneys', desc: 'Deep baffle degreasing and suction motor service.', icon: '🍳' },
    { title: 'Water Purifiers & Geysers', desc: 'Filter cartridges, heating elements, and safety valves.', icon: '💧' }
  ];

  const coreValues = [
    {
      title: 'Quality and Reliability',
      desc: 'We never cut corners. Every repair is executed using verified diagnostic procedures and genuine replacement parts.',
      icon: Award
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Transparent quotes, courteous interactions, and a comprehensive 30-day post-service warranty on all completed jobs.',
      icon: HeartHandshake
    },
    {
      title: 'Professional Service',
      desc: 'Uniformed, ID-verified technicians who treat your home with utmost respect and maintain clean dust-free workspaces.',
      icon: ShieldCheck
    },
    {
      title: 'Transparency',
      desc: 'Clear, upfront communication with zero hidden diagnostic fees or surprise charges.',
      icon: Sparkles
    },
    {
      title: 'Continuous Improvement',
      desc: 'Ongoing training on latest inverter appliances, IoT smart diagnostics, and manufacturer repair guidelines.',
      icon: Target
    }
  ];

  return (
    <div className="about-page">
      <PageHeader
        title="About NEEVS"
        subtitle="Reliable Appliance Care. Better Living."
        breadcrumb={[{ label: 'About Us', path: '' }]}
      />

      <section className="about-content-section page-container">
        {/* Section 2 – Who We Are */}
        <motion.div
          className="who-we-are-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <div className="who-we-are-grid">
            <motion.div
              className="about-image-wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technician-photo-showcase">
                <img
                  src="/images/hero-technician.jpg"
                  alt="NEEVS Certified Appliance Specialist"
                  className="about-hero-img"
                />
                <motion.div
                  className="badge-overlay"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Certified Technicians
                </motion.div>
              </div>
            </motion.div>

            <div className="who-we-are-details">
              <span className="about-tag">Who We Are</span>
              <h2 className="about-section-heading">Your Trusted Partner for Home Appliance Care</h2>
              <p className="about-body-text">
                NEEVS Home Appliance Service is focused on making home appliance maintenance and repairs easier for households. We provide service solutions for a wide range of everyday appliances, helping customers address technical issues and maintain their equipment with confidence.
              </p>

              <div className="our-story-box">
                <h3 className="story-heading">Built Around Your Everyday Needs</h3>
                <p className="story-text">
                  Every household depends on appliances to make everyday life easier. When they stop working, it can disrupt your routine. NEEVS was established with a simple goal: to make dependable appliance service more accessible and convenient for customers.
                </p>
              </div>

              <div className="about-cta-row">
                <Link to="/book-service" className="about-cta-btn interactive-btn">
                  <span>Book a Technician Now</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="about-secondary-link">
                  Explore Services →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 4 – Mission & Vision */}
        <motion.div
          className="mission-vision-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.div
            className="mv-card mission"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <div className="mv-icon-circle">
              <Target size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver convenient, dependable, and customer-focused home appliance repair and maintenance services that keep everyday homes operating smoothly without disruption.
            </p>
          </motion.div>

          <motion.div
            className="mv-card vision"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <div className="mv-icon-circle accent">
              <Sparkles size={28} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted name in home appliance services through quality workmanship, transparent communication, and unparalleled customer satisfaction.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 5 – Our Core Values */}
        <div className="core-values-section">
          <div className="values-header-center">
            <span className="about-tag">Principles That Guide Us</span>
            <h2 className="values-main-title">Our Core Values</h2>
          </div>

          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={idx}
                  className="value-card"
                  variants={fadeInUp}
                  whileHover={{ y: -6, borderColor: '#93c5fd' }}
                >
                  <div className="val-top-row">
                    <span className="val-number">0{idx + 1}</span>
                    <div className="val-icon-box">
                      <IconComp size={20} />
                    </div>
                  </div>
                  <h4 className="val-title">{val.title}</h4>
                  <p className="val-desc">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Section 6 – Our Expertise with Grid Zoom Stagger */}
        <div className="expertise-section">
          <div className="values-header-center">
            <span className="about-tag">Full Appliance Coverage</span>
            <h2 className="values-main-title">Our Technical Expertise</h2>
            <p className="expertise-sub">
              Certified repairs for all major home appliance categories with original OEM spares.
            </p>
          </div>

          <motion.div
            className="expertise-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {applianceExpertise.map((item, idx) => (
              <motion.div
                key={idx}
                className="expertise-item-card"
                variants={fadeInUp}
                whileHover={{ y: -6, borderColor: '#0b57d0' }}
              >
                <span className="exp-icon">{item.icon}</span>
                <h4 className="exp-name">{item.title}</h4>
                <p className="exp-info">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 7 – Why Trust NEEVS */}
        <motion.div
          className="why-trust-neevs-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="trust-content">
            <span className="about-tag">Trust & Safety</span>
            <h2>Why Trust NEEVS for Your Home?</h2>
            <p>
              We treat your home and appliances with the utmost care. Our technicians follow rigorous safety standards, wear protective shoe covers, carry certified digital diagnostic equipment, and provide clear written estimates before touching a single screw.
            </p>

            <div className="trust-points-list">
              <div className="trust-point">
                <CheckCircle size={18} className="trust-check" />
                <span>100% Background-Verified Service Specialists</span>
              </div>
              <div className="trust-point">
                <CheckCircle size={18} className="trust-check" />
                <span>Transparent Upfront Diagnostic Estimates</span>
              </div>
              <div className="trust-point">
                <CheckCircle size={18} className="trust-check" />
                <span>30-Day Post-Service Callback Warranty</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 8 – CTA Banner with Motion */}
        <motion.div
          className="about-final-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="a-cta-text">
            <h3>Looking for dependable appliance service?</h3>
            <p>We're here to help restore your household comfort promptly.</p>
          </div>
          <Link to="/book-service" className="a-cta-btn interactive-btn">
            <span>Book a Service Today</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
