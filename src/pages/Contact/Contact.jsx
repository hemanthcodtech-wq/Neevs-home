import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  CalendarCheck,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  Headphones,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    applianceType: 'Washing Machine',
    urgency: 'Standard Service (Within 24 Hours)',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const localHubs = [
    { area: 'Central Hub (JP Nagar 5th Phase)', address: '21, 6th Cross, Vinayaka Nagar, JP Nagar 5th Phase, Bangalore 560078', phone: '+91 79961 63604', timing: '7:00 AM - 10:00 PM' },
    { area: 'Koramangala & HSR Layout Hub', address: '17th Main Rd, 5th Block, Koramangala, Bangalore 560095', phone: '+91 79961 63604', timing: '7:30 AM - 9:30 PM' },
    { area: 'Jayanagar & BTM Layout Hub', address: '9th Main Rd, 4th Block, Jayanagar, Bangalore 560011', phone: '+91 79961 63604', timing: '8:00 AM - 9:00 PM' }
  ];

  const quickFaqs = [
    {
      q: 'How fast can a technician arrive at my home?',
      a: 'For emergency requests (refrigerator failure, AC breakdown, gas leakage), our technician arrives within 90 minutes. For standard appointments, you can choose any convenient 2-hour window.'
    },
    {
      q: 'Do you charge for home inspection?',
      a: 'A minimal diagnostic fee of ₹199 applies only if you decide not to proceed with the repair. If you approve the repair, the inspection fee is completely waived off!'
    },
    {
      q: 'Can I pay online after service completion?',
      a: 'Yes, we accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash directly to the technician with a printed or digital invoice.'
    },
    {
      q: 'What if the same problem recurs after repair?',
      a: 'Every repair is backed by our 30-Day Workmanship Warranty. We will send a senior technician back free of charge to re-inspect and fix it.'
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Contact NEEVS Support"
        subtitle="We're here to help. Reach our 24/7 dedicated support desk or book instant doorstep assistance."
        breadcrumb={[{ label: 'Contact Us', path: '' }]}
        bannerImage="/images/hero-contact.jpg"
      />

      <section className="contact-container page-container">
        {/* 1. Emergency Breakdown Assistance Banner */}
        <motion.div
          className="emergency-alert-strip"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="alert-left">
            <span className="emergency-pulse-dot"></span>
            <AlertCircle size={24} className="alert-icon" />
            <div>
              <h4>Appliance Emergency Breakdown?</h4>
              <p>Fridge warming up, AC blowing hot air, or water flooding from washing machine?</p>
            </div>
          </div>
          <div className="alert-right">
            <a href="tel:+917996163604" className="emergency-call-pill interactive-btn">
              <Phone size={16} />
              <span>Priority Hotline: +91 79961 63604</span>
            </a>
          </div>
        </motion.div>

        {/* 2. Main Contact Grid (Channels + Form) */}
        <div className="contact-grid">
          {/* Left Column: Direct Channels */}
          <motion.div
            className="contact-info-card"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="contact-tag">Direct Channels</span>
            <h2 className="contact-heading">We're Here to Assist You</h2>
            <p className="contact-intro">
              Reach out directly to our central dispatch desk or chat with us on WhatsApp for rapid technician assignment.
            </p>

            <div className="contact-channels">
              <motion.div className="channel-box" whileHover={{ x: 6 }}>
                <div className="channel-icon-circle">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Phone Support</h4>
                  <a href="tel:+917996163604">+91 79961 63604</a>
                  <span>Call directly for instant booking</span>
                </div>
              </motion.div>

              <motion.div className="channel-box" whileHover={{ x: 6 }}>
                <div className="channel-icon-circle whatsapp">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4>WhatsApp Chat Support</h4>
                  <a href="https://wa.me/917996163604" target="_blank" rel="noreferrer">
                    +91 79961 63604 (Chat on WhatsApp)
                  </a>
                  <span>Share photo/video of appliance error code</span>
                </div>
              </motion.div>

              <motion.div className="channel-box" whileHover={{ x: 6 }}>
                <div className="channel-icon-circle">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Customer Care Email</h4>
                  <a href="mailto:support@neevs.in">support@neevs.in</a>
                  <span>Warranty claims & corporate requests</span>
                </div>
              </motion.div>

              <motion.div className="channel-box" whileHover={{ x: 6 }}>
                <div className="channel-icon-circle">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>Service Hours</h4>
                  <p>Monday - Sunday: 7:00 AM - 10:00 PM</p>
                  <span>365 days emergency doorstep coverage</span>
                </div>
              </motion.div>

              <motion.div className="channel-box" whileHover={{ x: 6 }}>
                <div className="channel-icon-circle">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Head Office / Workshop</h4>
                  <p>21, 6th Cross, Vinayaka Nagar, JP Nagar 5th Phase, Bangalore - 560078</p>
                  <span>Walk-in service desk & genuine parts counter</span>
                </div>
              </motion.div>
            </div>

            {/* Embedded Live Google Maps Card */}
            <div className="google-map-embed-wrapper">
              <iframe
                title="NEEVS Home Appliance Service Location - JP Nagar Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.687827091762!2d77.55663223072946!3d12.934310469136184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156b6ab2834b%3A0xc7cc04a83d1d02dc!2s21%2C%206th%20Cross%20Rd%2C%20KR%20Layout%2C%20JP%20Nagar%20Phase%206%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1794327046065!5m2!1sen!2sin"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <div className="map-embed-footer">
                <MapPin size={16} className="text-orange" />
                <span>21, 6th Cross, Vinayaka Nagar, JP Nagar 5th Phase, Bangalore - 560078</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Booking Inquiry Form */}
          <motion.div
            className="contact-form-card"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
          >
            <div className="form-badge-strip">
              <Sparkles size={16} />
              <span>Average Response Time: Under 15 Minutes</span>
            </div>

            <h3 className="form-card-title">Send Us a Message</h3>
            <p className="form-card-subtitle">
              Fill in your details below and our service supervisor will get in touch immediately.
            </p>

            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Thank You, {formData.name || 'Valued Customer'}!</h4>
                <p>
                  Your service inquiry regarding <strong>{formData.applianceType}</strong> has been registered.
                  Our nearest technician will call you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  className="reset-form-btn interactive-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', applianceType: 'Washing Machine', urgency: 'Standard Service (Within 24 Hours)', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Suresh Babu"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row-contact">
                  <div className="form-group">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-contact">
                  <div className="form-group">
                    <label htmlFor="applianceType">Appliance Type *</label>
                    <select
                      id="applianceType"
                      name="applianceType"
                      value={formData.applianceType}
                      onChange={handleChange}
                    >
                      <option value="Washing Machine">Washing Machine</option>
                      <option value="Refrigerator">Refrigerator</option>
                      <option value="Microwave Oven">Microwave Oven</option>
                      <option value="Air Conditioner (AC)">Air Conditioner (AC)</option>
                      <option value="LED / Smart TV">LED / Smart TV</option>
                      <option value="Dishwasher">Dishwasher</option>
                      <option value="Kitchen Chimney / Hob">Kitchen Chimney / Hob</option>
                      <option value="Other Appliances">Other Appliances</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">Service Urgency *</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="Emergency Express (Under 90 Mins)">Emergency Express (Under 90 Mins)</option>
                      <option value="Same Day Service">Same Day Service</option>
                      <option value="Standard Service (Within 24 Hours)">Standard Service (Within 24 Hours)</option>
                      <option value="Weekend Appointment">Weekend Appointment</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Fault Summary *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Inverter AC blowing normal air, not cooling"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message & Location Landmark *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Please specify error codes, unusual sounds, and your apartment / area landmark..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-form-btn interactive-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Service Request</span>
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* 3. Three Regional Service Center Hubs */}
        <div className="regional-hubs-section">
          <div className="section-title-wrap">
            <span className="contact-tag">Local Presence</span>
            <h3 className="section-sub-h">Our Regional Service & Dispatch Centers</h3>
            <p className="section-sub-p">Drop by our local centers for walk-in consultation or spare parts inquiries.</p>
          </div>

          <motion.div
            className="hubs-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {localHubs.map((hub, idx) => (
              <motion.div
                key={idx}
                className="hub-card"
                variants={fadeInUp}
                whileHover={{ y: -6, borderColor: '#93c5fd' }}
              >
                <div className="hub-header">
                  <MapPin size={22} className="hub-pin" />
                  <h4>{hub.area}</h4>
                </div>
                <p className="hub-address">{hub.address}</p>
                <div className="hub-meta">
                  <div className="hub-meta-item">
                    <Phone size={14} />
                    <a href={`tel:${hub.phone}`}>{hub.phone}</a>
                  </div>
                  <div className="hub-meta-item">
                    <Clock size={14} />
                    <span>{hub.timing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. What Happens After You Contact Us? (4-Step Transparency Workflow) */}
        <div className="contact-steps-section">
          <div className="section-title-wrap">
            <span className="contact-tag">Service Commitment</span>
            <h3 className="section-sub-h">What Happens After You Contact Us?</h3>
          </div>

          <motion.div
            className="contact-steps-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="c-step-card" variants={fadeInUp}>
              <div className="c-step-num">1</div>
              <h4>Instant Ticket Dispatch</h4>
              <p>Your request is logged into our CRM and assigned to the nearest certified field engineer.</p>
            </motion.div>

            <motion.div className="c-step-card" variants={fadeInUp}>
              <div className="c-step-num">2</div>
              <h4>Pre-Visit Diagnostic Call</h4>
              <p>Technician calls you within 15 minutes to confirm symptoms and carry the exact OEM spares.</p>
            </motion.div>

            <motion.div className="c-step-card" variants={fadeInUp}>
              <div className="c-step-num">3</div>
              <h4>Transparent Quote</h4>
              <p>On-site inspection with zero hidden charges. Work begins only after your explicit approval.</p>
            </motion.div>

            <motion.div className="c-step-card" variants={fadeInUp}>
              <div className="c-step-num">4</div>
              <h4>30-Day Warranty Slip</h4>
              <p>Get a digital and printed invoice with our 30-day post-service callback guarantee.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* 5. Frequently Asked Contact Questions Accordion */}
        <div className="contact-faq-section">
          <div className="section-title-wrap">
            <span className="contact-tag">Quick Answers</span>
            <h3 className="section-sub-h">Frequently Asked Contact Questions</h3>
          </div>

          <div className="c-faq-list">
            {quickFaqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`c-faq-item ${activeFaq === i ? 'open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                layout
              >
                <div className="c-faq-q">
                  <div className="c-faq-q-text">
                    <FileQuestion size={18} className="q-icon" />
                    <h4>{faq.q}</h4>
                  </div>
                  <div className="c-faq-arrow">
                    {activeFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      className="c-faq-a"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6. Bottom Direct Callout Banner */}
        <motion.div
          className="contact-bottom-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="c-strip-text">
            <h4>Prefer Instant Doorstep Booking?</h4>
            <p>Skip the form and directly schedule a convenient 90-minute time slot.</p>
          </div>
          <div className="c-strip-actions">
            <Link to="/book-service" className="c-strip-book interactive-btn">
              <span>Book Appointment Online</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+917996163604" className="c-strip-call interactive-btn">
              <Phone size={18} />
              <span>Call +91 79961 63604</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
