import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import {
  Wrench,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import CostEstimator from '../../components/CostEstimator';
import './Services.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

export default function Services() {
  const serviceItems = [
    {
      id: 'washing-machine',
      title: 'Washing Machine Repair & Service',
      desc: 'Expert care for Front Load, Top Load, and Semi-Automatic washing machines with original parts.',
      image: '/images/service-washing-machine.jpg',
      price: 'Starting from ₹399',
      features: ['Drum spinning & motor check', 'Inlet/Outlet drain pipe fix', 'Noise & vibration balancing']
    },
    {
      id: 'refrigerator',
      title: 'Refrigerator Repair & Service',
      desc: 'Single door, double door, and side-by-side inverter fridge cooling repairs and thermostat calibration.',
      image: '/images/service-refrigerator.jpg',
      price: 'Starting from ₹449',
      features: ['Cooling coil defrost repair', 'Compressor relay replacement', 'Door seal & thermostat inspection']
    },
    {
      id: 'ac-service',
      title: 'Air Conditioner Repair & Service',
      desc: 'Complete AC cooling maintenance, filter jet washing, compressor diagnostic and gas charging.',
      image: '/images/service-ac.jpg',
      price: 'Starting from ₹499',
      features: ['Filter cleaning & dust sanitization', 'Cooling coil inspection', 'Gas pressure & leak detection']
    },
    {
      id: 'microwave',
      title: 'Microwave Oven Repair',
      desc: 'Fixing heating problems, keypad touch failure, turntable rotation and door switch mechanisms.',
      image: '/images/service-microwave.jpg',
      price: 'Starting from ₹349',
      features: ['Magnetron heating fix', 'Touch panel sensor replacement', 'Sparking & fuse troubleshooting']
    },
    {
      id: 'television',
      title: 'LED / Smart TV Repair',
      desc: 'LED, OLED, and Smart 4K TV repair including motherboard soldering, panel lines, and audio fix.',
      image: '/images/service-tv.jpg',
      price: 'Starting from ₹499',
      features: ['Display backlight & panel repair', 'Power board circuit testing', 'Sound & HDMI port restoration']
    },
    {
      id: 'dishwasher',
      title: 'Dishwasher Repair',
      desc: 'Thorough inspection of water heating, drainage pump, spray arms, and tablet dispenser motors.',
      image: '/images/service-dishwasher.jpg',
      price: 'Starting from ₹499',
      features: ['Drainage pump clearing', 'Heating element replacement', 'Spray arm descaling']
    },
    {
      id: 'kitchen-appliances',
      title: 'Kitchen Appliance Services',
      desc: 'Chimneys, cooktops, induction hobs, and mixer grinder overhaul by certified technicians.',
      image: '/images/service-kitchen.jpg',
      price: 'Starting from ₹299',
      features: ['Deep grease baffle removal', 'Suction motor bearing oiling', 'Wiring safety testing']
    },
    {
      id: 'other-appliances',
      title: 'Other Home Appliance Repairs',
      desc: 'Water purifiers (RO/UV), geysers, inverters, and room heaters service at affordable prices.',
      image: '/images/service-other.jpg',
      price: 'Starting from ₹349',
      features: ['Filter cartridge swap (RO)', 'Thermostat & coil replacement', 'Prompt diagnostic report']
    }
  ];

  return (
    <div className="services-page">
      <PageHeader
        title="Our Home Appliance Services"
        subtitle="Complete Appliance Repair & Maintenance Solutions Under One Roof"
        breadcrumb={[{ label: 'Services', path: '' }]}
        bannerImage="/images/banner-services.jpg"
      />

      <section className="services-container page-container">
        {/* Top Hero Banner */}
        <motion.div
          className="services-hero-banner"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-banner-info">
            <span className="banner-badge">Trusted by 10,000+ Homes</span>
            <h2 className="banner-headline">Professional Appliance Solutions</h2>
            <p className="banner-subtext">
              From essential kitchen appliances to everyday home electronics, NEEVS offers service solutions designed around your household needs.
            </p>
          </div>
          <div className="banner-badge-graphics">
            <motion.div
              className="gear-symbol-circle"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <Wrench size={42} className="wrench-icon-animated" />
            </motion.div>
          </div>
        </motion.div>

        {/* Services List Grid with Smooth Hover Lift & Zoom */}
        <motion.div
          className="services-category-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {serviceItems.map((service) => (
            <motion.div
              key={service.id}
              className="service-catalog-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-card-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
                <span className="service-price-pill-overlay">{service.price}</span>
              </div>

              <div className="service-card-inner">
                <h3 className="service-name">{service.title}</h3>
                <p className="service-description">{service.desc}</p>

                <div className="service-feature-points">
                  {service.features.map((feat, i) => (
                    <div key={i} className="service-point-item">
                      <CheckCircle size={14} className="point-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-action">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-book-btn interactive-btn"
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4-Step Process Section with Stagger */}
        <motion.div
          className="services-process-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <h3 className="process-headline">Our Simple 4-Step Service Process</h3>
          <div className="process-flow-grid">
            <motion.div className="flow-card" variants={fadeInUp} whileHover={{ y: -5 }}>
              <div className="flow-step">1</div>
              <h4>Choose Appliance</h4>
              <p>Select your faulty appliance and describe the observed issue.</p>
            </motion.div>
            <motion.div className="flow-card" variants={fadeInUp} whileHover={{ y: -5 }}>
              <div className="flow-step">2</div>
              <h4>Explain Problem</h4>
              <p>Brief us on symptoms or error codes for initial diagnosis.</p>
            </motion.div>
            <motion.div className="flow-card" variants={fadeInUp} whileHover={{ y: -5 }}>
              <div className="flow-step">3</div>
              <h4>Schedule Appointment</h4>
              <p>Pick a convenient doorstep date and 90-min arrival time slot.</p>
            </motion.div>
            <motion.div className="flow-card" variants={fadeInUp} whileHover={{ y: -5 }}>
              <div className="flow-step">4</div>
              <h4>Professional Assistance</h4>
              <p>Certified technician arrives with genuine OEM replacement parts.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Instant Cost Estimator Widget */}
        <CostEstimator />

        {/* Bottom CTA Card */}
        <motion.div
          className="book-today-callout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="callout-left">
            <h3 className="callout-title">Need Help With Your Home Appliance?</h3>
            <p className="callout-desc">Get professional doorstep service across all supported locations today.</p>
          </div>
          <div className="callout-right">
            <Link to="/book-service" className="callout-action-btn interactive-btn">
              <span>Book Your Service</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
