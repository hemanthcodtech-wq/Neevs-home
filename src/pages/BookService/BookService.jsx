import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Clock, Wrench, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookService.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

export default function BookService() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: 'Washing Machine',
    brand: '',
    issue: 'Not starting / Power issue',
    description: '',
    address: '',
    city: 'Bangalore',
    pincode: '560078',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)'
  });

  const [submitted, setSubmitted] = useState(false);

  const appliances = [
    'Washing Machine',
    'Refrigerator',
    'Microwave Oven',
    'Air Conditioner (AC)',
    'LED / Smart TV',
    'Dishwasher',
    'Kitchen Appliances (Chimney/Hob)',
    'Other Home Appliances'
  ];

  const commonIssues = {
    'Washing Machine': ['Not starting / Power issue', 'Water not draining', 'Drum not spinning / Noise', 'Water leakage', 'Error codes'],
    'Refrigerator': ['Not cooling', 'Freezer not freezing', 'Excessive noise', 'Water leakage', 'Gas / Compressor problem'],
    'Microwave Oven': ['Not heating', 'Turntable not rotating', 'Touchpad not responding', 'Sparking inside'],
    'Air Conditioner (AC)': ['Not cooling properly', 'Water leakage from indoor unit', 'Unusual noise', 'Jet service / Deep clean', 'Gas leak & topup'],
    'LED / Smart TV': ['No display / Black screen', 'No sound', 'Lines on screen', 'HDMI / Connectivity issue', 'Power not turning on'],
    'Dishwasher': ['Dishes not clean', 'Water not draining', 'Door lock failure', 'Leakage from bottom'],
    'Kitchen Appliances (Chimney/Hob)': ['Suction motor issue', 'Deep degreasing required', 'Burner ignition fault'],
    'Other Home Appliances': ['General inspection & repair']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'appliance' ? { issue: commonIssues[value] ? commonIssues[value][0] : 'General inspection' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="book-service-page">
      <PageHeader
        title="Schedule Your Appliance Service"
        subtitle="Quick & hassle-free doorstep repair booking with certified brand technicians."
        breadcrumb={[{ label: 'Book a Service', path: '' }]}
        bannerImage="/images/hero-technician.jpg"
      />

      <section className="booking-section page-container">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="confirmation"
              className="booking-confirmation-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
            >
              <div className="conf-icon-wrap">
                <CheckCircle2 size={54} className="conf-icon" />
              </div>
              <h2 className="conf-title">Booking Request Submitted!</h2>
              <p className="conf-lead">
                Thank you for choosing <strong>NEEVS Home Appliance Service</strong>.
              </p>
              <p className="conf-desc">
                Our service coordinator will call you on <strong>{formData.phone || '+91 79961 63604'}</strong> within 15 minutes to confirm the technician's arrival for your <strong>{formData.appliance}</strong> ({formData.brand || 'Selected Model'}).
              </p>

              <div className="conf-summary-grid">
                <div className="conf-summary-item">
                  <span className="summary-label">Appliance</span>
                  <span className="summary-val">{formData.appliance}</span>
                </div>
                <div className="conf-summary-item">
                  <span className="summary-label">Preferred Date</span>
                  <span className="summary-val">{formData.date || 'Earliest Available'}</span>
                </div>
                <div className="conf-summary-item">
                  <span className="summary-label">Time Slot</span>
                  <span className="summary-val">{formData.timeSlot}</span>
                </div>
                <div className="conf-summary-item">
                  <span className="summary-label">Service City</span>
                  <span className="summary-val">{formData.city} - {formData.pincode || '500081'}</span>
                </div>
              </div>

              <div className="conf-actions">
                <button
                  className="conf-reset-btn interactive-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Appliance
                </button>
              </div>
            </motion.div>
          ) : (
            <div key="form" className="booking-layout-grid">
              <motion.div
                className="booking-form-card"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="form-intro-strip">
                  <Sparkles size={20} className="sparkle-icon" />
                  <span>Quick Doorstep Service in Under 90 Minutes across Supported Locations</span>
                </div>

                <form onSubmit={handleSubmit} className="booking-form">
                  <h3 className="form-sub-header">1. Customer Information</h3>
                  <div className="form-row-two">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label>Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <h3 className="form-sub-header">2. Appliance & Problem Details</h3>
                  <div className="form-row-two">
                    <div className="form-field">
                      <label>Select Appliance *</label>
                      <select
                        name="appliance"
                        value={formData.appliance}
                        onChange={handleChange}
                      >
                        {appliances.map((app) => (
                          <option key={app} value={app}>{app}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Appliance Brand *</label>
                      <input
                        type="text"
                        name="brand"
                        required
                        placeholder="e.g. Samsung, LG, Whirlpool, Daikin"
                        value={formData.brand}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Select Primary Issue *</label>
                    <select
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                    >
                      {(commonIssues[formData.appliance] || ['General inspection & repair']).map((iss) => (
                        <option key={iss} value={iss}>{iss}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Describe the Problem in Detail</label>
                    <textarea
                      rows="3"
                      name="description"
                      placeholder="Provide symptoms, error codes, or sounds observed..."
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <h3 className="form-sub-header">3. Service Address & Preferred Time</h3>
                  <div className="form-field">
                    <label>Door / Flat / Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Flat No, Apartment / House Name, Street"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row-two">
                    <div className="form-field">
                      <label>City / Town *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Bangalore"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label>PIN Code *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        placeholder="e.g. 500081"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-field">
                      <label>Preferred Service Date *</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label>Preferred Time Slot *</label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                        <option value="Evening (03:00 PM - 07:00 PM)">Evening (03:00 PM - 07:00 PM)</option>
                        <option value="Emergency Express (Within 90 Mins)">Emergency Express (Within 90 Mins)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-submit-row">
                    <motion.button
                      type="submit"
                      className="booking-submit-btn interactive-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Submit Service Request</span>
                      <ArrowRight size={18} />
                    </motion.button>
                    <p className="form-privacy-hint">
                      🔒 Zero upfront payment needed. Pay only after inspection & your approval.
                    </p>
                  </div>
                </form>
              </motion.div>

              <motion.div
                className="booking-benefits-sidebar"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.15 }}
              >
                <motion.div className="benefit-card" whileHover={{ y: -4 }}>
                  <ShieldCheck size={36} className="b-icon" />
                  <h4>Certified Technicians</h4>
                  <p>Background checked, uniformed, and verified home appliance engineers.</p>
                </motion.div>

                <motion.div className="benefit-card" whileHover={{ y: -4 }}>
                  <Clock size={36} className="b-icon" />
                  <h4>90-Minute Response</h4>
                  <p>Prompt doorstep arrival with complete diagnostic testing kit.</p>
                </motion.div>

                <motion.div className="benefit-card" whileHover={{ y: -4 }}>
                  <Wrench size={36} className="b-icon" />
                  <h4>Genuine OEM Spare Parts</h4>
                  <p>Transparent estimates with official warranty on replaced parts.</p>
                </motion.div>

                <div className="help-box-callout">
                  <h5>Need Immediate Help?</h5>
                  <p>Call our central dispatcher directly:</p>
                  <a href="tel:+917996163604" className="callout-tel">+91 79961 63604</a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
