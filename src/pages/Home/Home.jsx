import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  Award,
  Headphones,
  PhoneCall,
  Star,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Sparkles,
  CalendarCheck,
  Zap,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Home() {
  const serviceCategories = [
    {
      id: 'washing-machine',
      name: 'Washing Machine Repair & Service',
      image: '/images/service-washing-machine.jpg',
      badge: 'Bestseller',
      desc: 'Drum spin balance, water drainage pumps, door latches & motor repair.'
    },
    {
      id: 'refrigerator',
      name: 'Refrigerator Repair & Service',
      image: '/images/service-refrigerator.jpg',
      badge: 'Emergency Same-Day',
      desc: 'Cooling coil troubleshooting, compressor relay and gas leak fixes.'
    },
    {
      id: 'ac-service',
      name: 'Air Conditioner Repair & Service',
      image: '/images/service-ac.jpg',
      badge: 'Popular',
      desc: 'Deep jet clean, gas leak top-up, fan motor fix and installation.'
    },
    {
      id: 'microwave',
      name: 'Microwave Oven Repair',
      image: '/images/service-microwave.jpg',
      desc: 'Magnetron heating repair, touchpad response and turntable rotation.'
    },
    {
      id: 'television',
      name: 'LED / Smart TV Repair',
      image: '/images/service-tv.jpg',
      desc: 'Display backlight lines, motherboard circuit soldering & sound restoration.'
    },
    {
      id: 'dishwasher',
      name: 'Dishwasher Repair',
      image: '/images/service-dishwasher.jpg',
      desc: 'Spray arm descaling, wash pump clearing and drainage maintenance.'
    },
    {
      id: 'kitchen-appliances',
      name: 'Kitchen Appliance Services',
      image: '/images/service-kitchen.jpg',
      desc: 'Deep degreasing, chimney suction motor overhaul & hob burner service.'
    },
    {
      id: 'other-appliances',
      name: 'Other Home Appliance Repairs',
      image: '/images/service-other.jpg',
      desc: 'Water purifiers (RO/UV), geysers, inverters, and home electricals.'
    }
  ];

  const whyChooseReasons = [
    {
      title: 'Experienced Service Professionals',
      desc: 'Background-verified technicians with extensive multi-brand appliance training.',
      icon: Award
    },
    {
      title: 'Convenient Doorstep Assistance',
      desc: 'Doorstep service completed within 90 minutes across all supported neighborhoods.',
      icon: Clock
    },
    {
      title: 'Transparent Service Communication',
      desc: 'Clear diagnosis and accurate upfront price estimate before initiating any repair.',
      icon: CheckCircle2
    },
    {
      title: 'Reliable Repair Solutions',
      desc: 'Only 100% genuine OEM-certified spare parts with 30-day workmanship warranty.',
      icon: ShieldCheck
    },
    {
      title: 'Customer-Focused Approach',
      desc: 'Prompt follow-up, courteous service protocols, and clean dust-free handovers.',
      icon: Headphones
    },
    {
      title: 'Support Across Multiple Appliances',
      desc: 'One reliable destination for all major household electronics and kitchen systems.',
      icon: Zap
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Book a Service',
      desc: 'Submit your service request through our website or call our helpline.'
    },
    {
      num: '02',
      title: 'Get Confirmation',
      desc: 'Our team contacts you in minutes to understand symptoms and schedule arrival.'
    },
    {
      num: '03',
      title: 'Expert Inspection',
      desc: 'A certified technician inspects the appliance and explains the repair estimate.'
    },
    {
      num: '04',
      title: 'Service Completed',
      desc: 'Repair is executed with genuine parts after your approval, backed by warranty.'
    }
  ];

  const completedProjects = [
    {
      title: 'Front-Load Washing Machine Drum Balancing',
      appliance: 'Washing Machine',
      image: '/images/service-washing-machine.jpg',
      issue: 'Excessive shaking and grinding noise during 1200 RPM high spin cycle.',
      solution: 'Replaced worn-out drum suspension dampers and calibrated bearings.'
    },
    {
      title: 'Split Inverter AC Jet Wash & Gas Charging',
      appliance: 'Air Conditioner',
      image: '/images/service-ac.jpg',
      issue: 'Weak cooling output and water dripping into master bedroom.',
      solution: 'Hydro-jet wash of indoor cooling coil, cleared drain pipe, recharged R32 gas.'
    },
    {
      title: 'Double Door Refrigerator Frost-Free Defrost Fix',
      appliance: 'Refrigerator',
      image: '/images/service-refrigerator.jpg',
      issue: 'Top freezer working fine but lower food compartment warm.',
      solution: 'Replaced choked defrost bi-metal thermostat and defrost heater element.'
    }
  ];

  const verifiedTestimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Homeowner, Madhapur',
      appliance: 'LG Front Load Washing Machine',
      rating: 5,
      review:
        'NEEVS technician arrived on time, was extremely polite, and diagnosed the drum noise in 15 minutes. Very transparent pricing.'
    },
    {
      name: 'Priya Sharma',
      role: 'IT Consultant, Gachibowli',
      appliance: 'Daikin Inverter AC Service',
      rating: 5,
      review:
        'The jet cleaning service was thorough. He covered the walls, cleaned the indoor coil, and cooling was restored like new.'
    },
    {
      name: 'Suresh Babu',
      role: 'Business Owner, Jubilee Hills',
      appliance: 'Samsung Double Door Refrigerator',
      rating: 5,
      review:
        'Saved me from buying a new fridge. Fixed the cooling thermostat and charged a fair price. Truly professional service.'
    }
  ];

  const serviceLocations = [
    { city: 'JP Nagar', pin: '560078' },
    { city: 'Jayanagar', pin: '560041' },
    { city: 'BTM Layout', pin: '560068' },
    { city: 'Koramangala', pin: '560034' },
    { city: 'HSR Layout', pin: '560102' },
    { city: 'Bannerghatta Road', pin: '560076' },
    { city: 'Electronic City', pin: '560100' },
    { city: 'Whitefield', pin: '560066' },
    { city: 'Indiranagar', pin: '560038' },
    { city: 'Marathahalli', pin: '560037' },
    { city: 'Bellandur', pin: '560103' },
    { city: 'Banashankari', pin: '560050' }
  ];

  const homeFaqs = [
    {
      q: 'Which appliances do you repair?',
      a: 'We repair washing machines, refrigerators, microwave ovens, air conditioners, televisions, dishwashers, kitchen chimneys, and other everyday household appliances.'
    },
    {
      q: 'Do you provide doorstep service?',
      a: 'Yes, 100% of our diagnostic and repair work is performed directly at your doorstep by certified technicians.'
    },
    {
      q: 'How can I book a repair?',
      a: 'Simply click "Book a Service" to schedule online, or call our customer hotline at +91 79961 63604.'
    },
    {
      q: 'How much does appliance repair cost?',
      a: 'Cost depends on the appliance model and parts needed. Our technician inspects first and provides an upfront estimate before starting.'
    },
    {
      q: 'Can I schedule a convenient service appointment?',
      a: 'Yes, you can choose morning, afternoon, evening, or emergency express slots when booking.'
    },
    {
      q: 'Do you provide post-service support?',
      a: 'Yes! Every paid service includes a 30-day post-service warranty and dedicated helpline assistance.'
    }
  ];

  return (
    <div className="home-page">
      {/* Section 1 – Hero Banner with Devices Showcase */}
      <section className="home-hero-fullscreen">
        {/* Full-bleed background image showing all devices & technician (Desktop) */}
        <div className="hero-fullscreen-bg-wrap desktop-only-bg">
          <img
            src="/images/home-hero-technician-devices-clear.jpg"
            alt="NEEVS Certified Multi-Appliance Service Technician: AC, Refrigerator, Washing Machine, Smart TV, Microwave"
            className="hero-fullscreen-bg-img"
          />
        </div>

        <div className="page-container hero-fullscreen-content">
          <motion.div
            className="hero-fullscreen-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="trusted-partner-tag" variants={fadeInUp}>
              <ShieldCheck size={18} className="partner-shield-icon" />
              <span>DOORSTEP SERVICE ACROSS ALL MAJOR BRANDS</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeInUp}>
              Expert Home Appliance <br />
              <span className="hero-highlight">Repair & Service</span> <br />
              at Your Doorstep
            </motion.h1>

            {/* Mobile Visual Feature Box: Dedicated photo of Technician & Devices */}
            <div className="mobile-hero-photo-card">
              <img
                src="/images/home-hero-technician-devices-clear.jpg"
                alt="NEEVS Certified Appliance Technician at Work"
                className="mobile-hero-photo-img"
              />
              <div className="mobile-photo-badge">
                <ShieldCheck size={14} />
                <span>100% Certified Multi-Brand Specialists</span>
              </div>
            </div>

            <motion.p className="hero-description" variants={fadeInUp}>
              Prompt, reliable repair solutions for Washing Machines, Refrigerators, Inverter ACs, Smart TVs, and Kitchen Appliances. Certified technicians arriving in 90 minutes with genuine OEM parts.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeInUp}>
              <Link to="/book-service" className="hero-primary-btn interactive-btn">
                <span>Book a Service</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="hero-secondary-btn interactive-btn">
                <span>Explore All Services</span>
              </Link>
              <a href="tel:+917996163604" className="hero-call-badge interactive-btn">
                <PhoneCall size={16} />
                <span>+91 79961 63604</span>
              </a>
            </motion.div>

            <motion.div className="hero-trust-bullets" variants={fadeInUp}>
              <div className="bullet-item">
                <Check size={16} className="bullet-check" />
                <span>30-Day Post-Service Warranty</span>
              </div>
              <div className="bullet-item">
                <Check size={16} className="bullet-check" />
                <span>90-Min Doorstep Dispatch</span>
              </div>
              <div className="bullet-item">
                <Check size={16} className="bullet-check" />
                <span>100% Genuine OEM Spares</span>
              </div>
            </motion.div>

            {/* Quick appliance pill bar */}
            <motion.div className="hero-appliance-pills" variants={fadeInUp}>
              <span className="pill-label">Working on:</span>
              <Link to="/services/ac-service" className="appliance-pill">⚡ Air Conditioners</Link>
              <Link to="/services/refrigerator" className="appliance-pill">🧊 Refrigerators</Link>
              <Link to="/services/washing-machine" className="appliance-pill">🧺 Washing Machines</Link>
              <Link to="/services/television" className="appliance-pill">📺 Smart TVs</Link>
              <Link to="/services/microwave" className="appliance-pill">🍲 Microwaves</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 – Trust Indicators (4 attractive cards with hover lift) */}
      <section className="feature-strip-section">
        <div className="page-container">
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div className="feature-item" variants={fadeInUp} whileHover={{ y: -4 }}>
              <div className="feature-icon-box">
                <Award size={24} />
              </div>
              <div className="feature-text">
                <h3>Expert Technicians</h3>
                <p>Skilled appliance service professionals</p>
              </div>
            </motion.div>

            <motion.div className="feature-item" variants={fadeInUp} whileHover={{ y: -4 }}>
              <div className="feature-icon-box">
                <Clock size={24} />
              </div>
              <div className="feature-text">
                <h3>Doorstep Service</h3>
                <p>Convenient service at your home</p>
              </div>
            </motion.div>

            <motion.div className="feature-item" variants={fadeInUp} whileHover={{ y: -4 }}>
              <div className="feature-icon-box">
                <ShieldCheck size={24} />
              </div>
              <div className="feature-text">
                <h3>Reliable Solutions</h3>
                <p>Focus on quality repairs & genuine spares</p>
              </div>
            </motion.div>

            <motion.div className="feature-item" variants={fadeInUp} whileHover={{ y: -4 }}>
              <div className="feature-icon-box">
                <Headphones size={24} />
              </div>
              <div className="feature-text">
                <h3>Customer Support</h3>
                <p>Assistance when you need it</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 – About NEEVS */}
      <section className="home-about-overview page-container">
        <motion.div
          className="about-overview-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <div className="about-overview-text">
            <span className="section-pill">About NEEVS</span>
            <h2 className="overview-title">Keeping Your Home Appliances Running Smoothly</h2>
            <p className="overview-desc">
              NEEVS Home Appliance Service is dedicated to providing convenient and dependable repair and maintenance solutions for everyday household appliances. We help customers maintain their appliances through professional service, careful diagnosis, and practical repair solutions.
            </p>
            <Link to="/about" className="overview-btn interactive-btn">
              <span>Know More About Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-overview-graphic">
            <motion.div
              className="graphic-stat-box"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="graphic-stat-val">90 Min</span>
              <span className="graphic-stat-txt">Fastest Doorstep Dispatch</span>
            </motion.div>
            <motion.div
              className="graphic-stat-box accent"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="graphic-stat-val">30 Days</span>
              <span className="graphic-stat-txt">Post-Service Warranty</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 4 – Our Services (Grid with smooth hover lifts) */}
      <section className="home-services-section">
        <div className="page-container">
          <div className="section-header-center">
            <span className="section-pill">Our Services</span>
            <h2 className="section-main-title">Complete Home Appliance Solutions Under One Roof</h2>
            <p className="section-main-desc">
              Whatever appliance needs attention, our team is here to help. Explore our range of home appliance repair and maintenance services.
            </p>
          </div>

          <motion.div
            className="home-services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {serviceCategories.map((item) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Link to={`/services/${item.id}`} className="service-card-modern">
                  <div className="card-thumb-wrap">
                    <img src={item.image} alt={item.name} className="card-thumb-img" />
                    {item.badge && <span className="service-ribbon-badge">{item.badge}</span>}
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-desc">{item.desc}</p>
                    <span className="card-link">
                      <span>View Details</span>
                      <ArrowRight size={14} className="card-arrow" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="center-action-row">
            <Link to="/services" className="view-all-services-btn interactive-btn">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 – Why Choose NEEVS? */}
      <section className="why-choose-section">
        <div className="page-container">
          <div className="section-header-center">
            <span className="section-pill">Why NEEVS</span>
            <h2 className="section-main-title">Why Customers Choose NEEVS</h2>
            <p className="section-main-desc">
              Professional standards, transparent communications, and dependable doorstep workmanship.
            </p>
          </div>

          <motion.div
            className="why-reasons-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {whyChooseReasons.map((r, i) => {
              const IconComp = r.icon;
              return (
                <motion.div
                  key={i}
                  className="why-reason-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 12px 28px rgba(11, 87, 208, 0.1)' }}
                >
                  <div className="reason-check-dot">
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h4 className="reason-title">{r.title}</h4>
                    <p className="reason-desc">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 6 – How It Works (Step progression) */}
      <section className="how-it-works-section page-container">
        <div className="section-header-center">
          <span className="section-pill">Simple Workflow</span>
          <h2 className="section-main-title">Getting Your Appliance Fixed Is Simple</h2>
        </div>

        <motion.div
          className="workflow-steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {workflowSteps.map((step) => (
            <motion.div
              key={step.num}
              className="workflow-step-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div className="step-glow-circle">{step.num}</div>
              <h4 className="workflow-title">{step.title}</h4>
              <p className="workflow-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 7 – Our Completed Work */}
      <section className="completed-work-section page-container">
        <div className="section-header-center">
          <span className="section-pill">Our Projects</span>
          <h2 className="section-main-title">Quality Service That Makes a Difference</h2>
          <p className="section-main-desc">Explore some of our appliance inspection, repair, and maintenance work.</p>
        </div>

        <motion.div
          className="completed-projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {completedProjects.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-display-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div className="project-img-box">
                <img src={p.image} alt={p.title} className="p-img" />
                <span className="p-appliance-badge">{p.appliance}</span>
              </div>
              <div className="p-info">
                <h4 className="p-title">{p.title}</h4>
                <p className="p-issue"><strong>Issue:</strong> {p.issue}</p>
                <p className="p-sol"><strong>Solution:</strong> {p.solution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="center-action-row">
          <Link to="/projects" className="view-all-services-btn interactive-btn">
            <span>View All Completed Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Section 8 – Customer Testimonials */}
      <section className="home-testimonials-section">
        <div className="page-container">
          <div className="section-header-center">
            <span className="section-pill">Testimonials</span>
            <h2 className="section-main-title">What Our Customers Say About Us</h2>
            <p className="section-main-desc">Real reviews from verified households we service every day.</p>
          </div>

          <motion.div
            className="testimonials-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {verifiedTestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="testimonial-quote-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="star-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="quote-text">“{t.review}”</p>
                <div className="cust-appliance-tag">{t.appliance}</div>
                <div className="customer-info">
                  <div className="cust-avatar-dot"></div>
                  <div>
                    <h5 className="cust-name">{t.name}</h5>
                    <span className="cust-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 9 – Service Areas */}
      <section className="service-areas-section page-container">
        <div className="section-header-center">
          <span className="section-pill">Service Areas</span>
          <h2 className="section-main-title">Bringing Reliable Appliance Services Closer to You</h2>
          <p className="section-main-desc">
            NEEVS provides home appliance repair and maintenance assistance across our available service locations.
          </p>
        </div>

        <motion.div
          className="areas-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {serviceLocations.map((loc, i) => (
            <motion.div
              key={i}
              className="area-pill-card"
              variants={fadeInUp}
              whileHover={{ y: -3, borderColor: '#0b57d0' }}
            >
              <div className="loc-pin-icon-wrap">
                <MapPin size={18} className="loc-pin-icon" />
              </div>
              <div className="loc-details">
                <strong>{loc.city}</strong>
                <span>PIN {loc.pin}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 10 – FAQ */}
      <section className="home-faq-preview page-container">
        <div className="section-header-center">
          <span className="section-pill">FAQs</span>
          <h2 className="section-main-title">Frequently Asked Questions</h2>
        </div>

        <motion.div
          className="home-faq-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="home-faq-card"
              variants={fadeInUp}
              whileHover={{ y: -3, borderColor: '#93c5fd' }}
            >
              <HelpCircle size={22} className="faq-h-icon" />
              <div>
                <h4 className="faq-h-question">{faq.q}</h4>
                <p className="faq-h-answer">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 11 – Final CTA */}
      <section className="page-container final-cta-wrapper">
        <motion.div
          className="final-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="final-cta-text">
            <h2 className="final-cta-title">Your Appliance Deserves the Right Care!</h2>
            <p className="final-cta-desc">
              Don't let a faulty appliance interrupt your daily routine. Contact NEEVS today and get the assistance you need.
            </p>
          </div>
          <div className="final-cta-buttons">
            <Link to="/book-service" className="cta-book-btn interactive-btn">
              <span>Book a Service</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+917996163604" className="cta-call-btn interactive-btn">
              <PhoneCall size={18} />
              <span>Call +91 79961 63604</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
