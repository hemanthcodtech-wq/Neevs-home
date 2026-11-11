import React from 'react';
import PageHeader from '../../components/PageHeader';
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  DollarSign,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Wrench,
  HelpCircle,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServiceDetail.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const serviceDataMap = {
  'washing-machine': {
    title: 'Washing Machine Repair & Service',
    heading: 'Professional Washing Machine Repair at Your Doorstep',
    subtitle: 'Expert Care for Front Load, Top Load & Semi-Automatic Washers',
    description:
      'Having trouble with your washing machine? NEEVS provides complete inspection, troubleshooting, repair, and maintenance services to restore your washing machine’s performance quickly and reliably.',
    image: '/images/service-washing-machine.jpg',
    startingPrice: '₹399',
    mrp: '₹699',
    commonProblems: [
      'Washing machine not starting or tripping power supply',
      'Water not draining / drainage pump or filter blockage',
      'Excessive vibration, drum imbalance or violent grinding noise',
      'Drum not spinning / motor drive belt failure',
      'Water leakage from underneath, detergent tray or door gasket',
      'Door lock sensor and latch mechanism problems',
      'Error codes on digital display and PCB electronic circuit faults'
    ],
    supportedTypes: [
      'Front-Load Washing Machines (Inverter Direct Drive)',
      'Top-Load Fully Automatic Washers',
      'Semi-Automatic Twin Tub Washers',
      'Washer-Dryer Combos'
    ],
    supportedBrands: ['LG', 'Samsung', 'IFB', 'Bosch', 'Whirlpool', 'Godrej', 'Panasonic', 'Haier']
  },
  'refrigerator': {
    title: 'Refrigerator Repair & Service',
    heading: 'Reliable Refrigerator Repair & Maintenance',
    subtitle: 'Keep your food fresh and your cooling uninterrupted',
    description:
      'Keep your food fresh and your refrigerator working efficiently with NEEVS refrigerator inspection, troubleshooting, and repair services right at your home.',
    image: '/images/service-refrigerator.jpg',
    startingPrice: '₹449',
    mrp: '₹799',
    commonProblems: [
      'Refrigerator not cooling / weak cooling performance in fridge section',
      'Freezer not making ice or excessive frost accumulation on cooling coils',
      'Water leaking on kitchen floor or accumulating in vegetable crisper',
      'Excessive humming or loud rattling noise from compressor',
      'Compressor relay failure and starting issues',
      'Thermostat and electronic temperature sensor calibration errors',
      'Door gasket seal loose or cold air leakage around perimeter'
    ],
    supportedTypes: [
      'Single Door Direct Cool Refrigerators',
      'Double Door Frost-Free Refrigerators',
      'Side-by-Side & French Door Smart Inverter Refrigerators',
      'Deep Freezers & Compact Mini Fridges'
    ],
    supportedBrands: ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'Hitachi', 'Panasonic']
  },
  'microwave': {
    title: 'Microwave Oven Repair',
    heading: 'Expert Microwave Oven Repair Solutions',
    subtitle: 'Safe, certified heating & electronic repairs',
    description:
      'From heating problems to electrical faults, NEEVS provides microwave oven inspection and repair solutions to help restore your appliance safely and promptly.',
    image: '/images/service-microwave.jpg',
    startingPrice: '₹349',
    mrp: '₹599',
    commonProblems: [
      'Microwave running but not heating food properly',
      'Turntable glass plate not rotating or jerky roller movement',
      'Digital display blank or touch keypad membrane unresponsive',
      'Door safety interlock switch or latch mechanism stuck',
      'Sparking or burning smell inside the microwave cavity',
      'Unusual humming or buzzing sounds during operation'
    ],
    supportedTypes: [
      'Solo Microwave Ovens',
      'Grill Microwave Ovens',
      'Convection Baking & Cooking Microwaves',
      'Built-In Luxury Kitchen Microwave Appliances'
    ],
    supportedBrands: ['LG', 'Samsung', 'IFB', 'Panasonic', 'Morphy Richards', 'Bajaj', 'Whirlpool']
  },
  'ac-service': {
    title: 'Air Conditioner Repair & Service',
    heading: 'Stay Cool with Professional AC Services',
    subtitle: 'Deep Foam Jet Cleaning, Leak Detection & Gas Charging',
    description:
      'NEEVS offers air conditioner inspection, repair, and maintenance services to help keep your cooling system operating efficiently all year round.',
    image: '/images/service-ac.jpg',
    startingPrice: '₹499',
    mrp: '₹799',
    commonProblems: [
      'AC blowing normal air / weak cooling output in room',
      'Water dripping or leaking from indoor cooling unit',
      'Unusual vibration, fan blade noise or blower rattle',
      'AC not switching on or remote control sensor unresponsive',
      'Refrigerant gas leak in copper tubing / low gas pressure',
      'Clogged air filters and dusty cooling coils causing foul odor',
      'Inverter PCB circuit board and dual run capacitor failure'
    ],
    supportedTypes: [
      'Split Inverter & Non-Inverter Air Conditioners',
      'Window Air Conditioners',
      'Cassette AC Units & Multi-Split Home Systems'
    ],
    supportedBrands: ['Daikin', 'Voltas', 'LG', 'Blue Star', 'Samsung', 'Hitachi', 'Carrier', 'Lloyd', 'Mitsubishi']
  },
  'television': {
    title: 'LED / Smart TV Repair',
    heading: 'Professional LED & Smart TV Repair',
    subtitle: 'Display panel, motherboard & audio restoration',
    description:
      'Get expert assistance for your television problems with NEEVS precision inspection and repair services for supported LED, OLED, and Smart TV models.',
    image: '/images/service-tv.jpg',
    startingPrice: '₹499',
    mrp: '₹899',
    commonProblems: [
      'TV not turning on / red standby light blinking continuously',
      'No picture, blank black screen but background audio is clear',
      'No sound or crackling distorted speaker output',
      'Horizontal or vertical color lines across the screen panel',
      'HDMI, USB and Wi-Fi connectivity problems',
      'Remote control IR receiver or sensor failure'
    ],
    supportedTypes: [
      'LED & LCD Smart Televisions',
      '4K Ultra HD & 8K Televisions',
      'OLED & QLED Premium HDR Displays'
    ],
    supportedBrands: ['Sony', 'Samsung', 'LG', 'Mi / Xiaomi', 'OnePlus', 'TCL', 'Vu', 'Panasonic']
  },
  'dishwasher': {
    title: 'Dishwasher Repair',
    heading: 'Dependable Dishwasher Repair & Maintenance',
    subtitle: 'Restore your kitchen sanitation routine without stress',
    description:
      'NEEVS helps identify and address dishwasher problems so your kitchen cleaning routine can get back on track with spotless results.',
    image: '/images/service-dishwasher.jpg',
    startingPrice: '₹499',
    mrp: '₹799',
    commonProblems: [
      'Dishwasher not starting or wash cycle halting midway',
      'Dishes coming out dirty or white film residue left behind',
      'Water not draining out of the bottom basin',
      'Water leaking from door perimeter or water intake valve',
      'Unusual grinding or squealing noise during spray cycle',
      'Door latch locking failure or soap dispenser not opening'
    ],
    supportedTypes: [
      'Built-in Under-counter Dishwashers',
      'Freestanding Dishwashers',
      'Compact Tabletop Dishwashers'
    ],
    supportedBrands: ['Bosch', 'Siemens', 'IFB', 'LG', 'Voltas Beko', 'Faber']
  },
  'kitchen-appliances': {
    title: 'Kitchen Appliance Services',
    heading: 'Expert Kitchen Chimney & Cooktop Services',
    subtitle: 'Deep degreasing, motor overhauls & burner calibrations',
    description:
      'Keep your kitchen clean and smoke-free with NEEVS certified chimney, hob, and cooktop maintenance services.',
    image: '/images/service-kitchen.jpg',
    startingPrice: '₹299',
    mrp: '₹599',
    commonProblems: [
      'Chimney suction loss or weak smoke extraction',
      'Heavy oil/grease buildup in baffle filters and motor',
      'Excessive humming or vibrating blower noise',
      'Touch/gesture sensor not responding',
      'Gas hob burner flame uneven or yellow soot',
      'Auto-ignition sparking failure'
    ],
    supportedTypes: [
      'Auto-Clean Kitchen Chimneys',
      'Baffle & Filterless Chimneys',
      'Built-in Glass Gas Hobs',
      'Induction Cooktops'
    ],
    supportedBrands: ['Faber', 'Elica', 'Glen', 'Hindware', 'Kaff', 'Prestige']
  },
  'other-appliances': {
    title: 'Other Home Appliance Repairs',
    heading: 'Complete Care for Everyday Household Systems',
    subtitle: 'Water purifiers, water geysers, inverters & more',
    description:
      'From clean drinking water to hot showers and backup power, NEEVS provides reliable service for essential home systems.',
    image: '/images/service-other.jpg',
    startingPrice: '₹349',
    mrp: '₹649',
    commonProblems: [
      'RO water purifier water tasting foul or slow filtration',
      'Water purifier motor vibrating or continuous beeping',
      'Electric geyser water not heating or tripping main MCB',
      'Geyser water tank leakage or rusted safety valve',
      'Inverter battery not charging or short backup duration',
      'Room heater coil failure or thermostat malfunction'
    ],
    supportedTypes: [
      'RO + UV + UF Water Purifiers',
      'Instant & Storage Electric Geysers',
      'Home Sine-Wave Inverters',
      'Room Heaters & Oil Radiators'
    ],
    supportedBrands: ['Kent', 'Aquaguard / Eureka Forbes', 'Havells', 'AO Smith', 'Bajaj', 'Racold', 'Luminous']
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const currentService = serviceDataMap[serviceId] || serviceDataMap['washing-machine'];

  return (
    <div className="service-detail-page">
      <PageHeader
        title={currentService.title}
        subtitle={currentService.subtitle}
        breadcrumb={[
          { label: 'Services', path: '/services' },
          { label: currentService.title, path: '' }
        ]}
        bannerImage={currentService.image}
      />

      <section className="detail-container page-container">
        {/* Top Hero Showcase Card with Animated Visuals */}
        <motion.div
          className="detail-showcase-card"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="detail-text-col">
            <span className="detail-tag">Professional Care</span>
            <h2 className="detail-heading">{currentService.heading}</h2>
            <p className="detail-subhead">{currentService.description}</p>

            <div className="pricing-cta-box">
              <div className="price-tag-wrap">
                <span className="starting-label">Inspection & Service starts at</span>
                <span className="price-amount">
                  {currentService.startingPrice}{' '}
                  <span className="mrp-strikethrough">{currentService.mrp}</span>
                </span>
              </div>
              <Link to="/book-service" className="detail-book-now-btn interactive-btn">
                <span>Book This Service</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="detail-visual-col">
            <div className="service-hero-img-box">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="service-feature-photo"
              />
              <div className="guarantee-overlay-pill">
                <ShieldCheck size={16} />
                <span>30-Day Workmanship Warranty</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Grid: Common Problems & Supported Models */}
        <div className="detail-two-col-grid">
          {/* Left Column: Common Problems Addressed */}
          <motion.div
            className="inclusions-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <h3 className="grid-section-title">Common Problems We Address</h3>
            <ul className="inclusions-list">
              {currentService.commonProblems.map((prob, idx) => (
                <li key={idx} className="inclusion-item">
                  <CheckCircle size={20} className="check-bullet" />
                  <div>
                    <h4 className="inc-title">{prob}</h4>
                  </div>
                </li>
              ))}
            </ul>

            <div className="service-reminder-note">
              <Sparkles size={18} />
              <span>We use only 100% genuine OEM replacement parts with standard warranty.</span>
            </div>
          </motion.div>

          {/* Right Column: Supported Types & Process */}
          <motion.div
            className="why-choose-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div className="types-supported-box">
              <h3 className="grid-section-title">Types & Brands Supported</h3>
              <div className="type-list-pills">
                {currentService.supportedTypes.map((t, i) => (
                  <span key={i} className="type-pill">
                    {t}
                  </span>
                ))}
              </div>

              <h4 className="brands-title">Popular Brands Serviced:</h4>
              <p className="brands-list-text">{currentService.supportedBrands.join(' • ')} & more</p>
            </div>

            {/* Why Choose NEEVS Mini Cards */}
            <div className="why-cards-stack">
              <div className="why-card">
                <div className="why-icon-bubble">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4>Certified & Background-Verified</h4>
                  <p>Skilled technicians with brand-specific specialized training.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-bubble">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Fast Doorstep Assistance</h4>
                  <p>Technician arrives within 90 minutes across active service areas.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon-bubble">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h4>Upfront Transparent Pricing</h4>
                  <p>Fair estimates communicated before starting any repair work.</p>
                </div>
              </div>
            </div>

            <div className="emergency-contact-box">
              <PhoneCall size={22} className="emergency-phone-icon" />
              <div>
                <h5>Need immediate technician dispatch?</h5>
                <p>Call our central hotline: <strong>+91 79961 63604</strong></p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Step Process Section */}
        <motion.div
          className="service-process-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <h3 className="section-process-title">How Getting Your Appliance Fixed Works</h3>
          <div className="process-steps-row">
            <motion.div className="process-step-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <span className="step-num">01</span>
              <h4>Book a Service</h4>
              <p>Submit your service request through our website or phone call.</p>
            </motion.div>
            <motion.div className="process-step-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <span className="step-num">02</span>
              <h4>Get Confirmation</h4>
              <p>Our team contacts you in minutes to understand the issue.</p>
            </motion.div>
            <motion.div className="process-step-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <span className="step-num">03</span>
              <h4>Expert Inspection</h4>
              <p>A certified technician inspects the appliance and explains the repair.</p>
            </motion.div>
            <motion.div className="process-step-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <span className="step-num">04</span>
              <h4>Service Completed</h4>
              <p>The repair is completed after your explicit approval with warranty card.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="service-detail-bottom-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="b-cta-left">
            <h3>Your Appliance Deserves the Right Care!</h3>
            <p>Don't let a faulty appliance interrupt your routine. Book certified assistance today.</p>
          </div>
          <div className="b-cta-right">
            <Link to="/book-service" className="b-cta-primary-btn interactive-btn">
              <span>Book a Service Now</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+917996163604" className="b-cta-call-btn interactive-btn">
              <PhoneCall size={16} />
              <span>Call +91 79961 63604</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
