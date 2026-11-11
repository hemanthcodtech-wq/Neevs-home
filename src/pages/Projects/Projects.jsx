import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    'All',
    'Washing Machine',
    'Refrigerator',
    'Air Conditioner',
    'Microwave',
    'Television',
    'Dishwasher'
  ];

  const projectsList = [
    {
      id: 1,
      title: 'Front-Load Washing Machine Drum Balancing',
      category: 'Washing Machine',
      image: '/images/service-washing-machine.jpg',
      location: 'JP Nagar 5th Phase, Bangalore',
      date: 'Nov 2026',
      issue: 'Excessive vibration, heavy thudding noise during 1200 RPM high spin cycle.',
      solution: 'Replaced worn-out shock absorber dampers, balanced drum counter-weights, and ran diagnostic calibration.',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Split AC Deep Foam Jet Wash & R32 Gas Top-Up',
      category: 'Air Conditioner',
      image: '/images/service-ac.jpg',
      location: 'Jayanagar 4th Block, Bangalore',
      date: 'Nov 2026',
      issue: 'Weak cooling airflow and water overflowing onto the bedroom floor.',
      solution: 'High-pressure anti-bacterial jet wash of indoor and outdoor coils, cleared drain pipe, recharged gas to 135 PSI.',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Double Door Refrigerator Frost-Free Defrost Fix',
      category: 'Refrigerator',
      image: '/images/service-refrigerator.jpg',
      location: 'BTM Layout 2nd Stage, Bangalore',
      date: 'Oct 2026',
      issue: 'Freezer running fine but bottom vegetable compartment completely warm.',
      solution: 'Identified choked defrost drain hole, replaced bi-metal thermostat and calibrated cooling airflow damper.',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Convection Microwave Oven Magnetron Heating Fix',
      category: 'Microwave',
      image: '/images/service-microwave.jpg',
      location: 'Koramangala 5th Block, Bangalore',
      date: 'Oct 2026',
      issue: 'Microwave timer and turntable running normally but food remains freezing cold.',
      solution: 'Replaced faulty high-voltage diode and magnetron tube with genuine manufacturer unit, verified with RF meter.',
      status: 'Completed'
    },
    {
      id: 5,
      title: '55-inch 4K Smart TV Motherboard Circuit Repair',
      category: 'Television',
      image: '/images/service-tv.jpg',
      location: 'HSR Layout Sector 3, Bangalore',
      date: 'Oct 2026',
      issue: 'Red power light blinking, TV clicking but display does not power on.',
      solution: 'Precision micro-soldering of failed power regulator capacitors on mainboard, restored HDMI eARC port.',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Built-in Dishwasher Drainage Pump Overhaul',
      category: 'Dishwasher',
      image: '/images/service-dishwasher.jpg',
      location: 'Bannerghatta Road, Bangalore',
      date: 'Sep 2026',
      issue: 'Error code E24 showing and standing soapy water remaining in bottom tub.',
      solution: 'Unblocked foreign debris in impeller chamber, replaced intake non-return check valve and descaled spray arms.',
      status: 'Completed'
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page">
      <PageHeader
        title="Our Projects & Repairs"
        subtitle="Explore our appliance service and repair work across top household brands."
        breadcrumb={[{ label: 'Projects', path: '' }]}
        bannerImage="/images/page-hero-banner.jpg"
      />

      <section className="projects-container page-container">
        {/* Category Filters with Interactive Pill Animations */}
        <div className="filter-buttons-wrapper">
          {filterTabs.map((tab) => (
            <motion.button
              key={tab}
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid with AnimatePresence for Filter Switches */}
        <motion.div
          className="projects-gallery-grid"
          layout
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-thumbnail-area">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-photo-img"
                  />
                  <div className="project-tag-badge">{item.category}</div>
                  <div className="project-status-pill">
                    <CheckCircle size={13} />
                    <span>{item.status}</span>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-meta-line">
                    <span className="project-loc">
                      <MapPin size={13} /> {item.location}
                    </span>
                    <span className="project-date">
                      <Calendar size={13} /> {item.date}
                    </span>
                  </div>

                  <h3 className="project-title">{item.title}</h3>

                  <div className="project-details-block">
                    <p className="proj-issue">
                      <strong>Issue Identified:</strong> {item.issue}
                    </p>
                    <p className="proj-solution">
                      <strong>Service Performed:</strong> {item.solution}
                    </p>
                  </div>

                  <div className="project-footer">
                    <Link to="/book-service" className="project-book-similar">
                      <span>Book Service for Your {item.category}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Book Service CTA Banner */}
        <motion.div
          className="projects-bottom-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="p-cta-text">
            <h3>Facing a similar appliance malfunction?</h3>
            <p>Our certified technicians can be at your doorstep within 90 minutes.</p>
          </div>
          <Link to="/book-service" className="p-cta-btn interactive-btn">
            <span>Book a Service Now</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
