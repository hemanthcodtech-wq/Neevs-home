import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Star, Quote, CheckCircle2, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Testimonials.css';

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

export default function Testimonials() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    appliance: 'Washing Machine',
    rating: '5',
    review: ''
  });

  const verifiedReviews = [
    {
      id: 1,
      name: 'Anitha Reddy',
      role: 'Homeowner, Jubilee Hills',
      appliance: 'Washing Machine Drum Balancing',
      avatarColor: '#3b82f6',
      rating: 5,
      review:
        'NEEVS provided prompt doorstep service. The technician came with proper testing gear, explained why the suspension spring had snapped, and replaced it using original parts. Very satisfied with their transparent communication.'
    },
    {
      id: 2,
      name: 'Vikram Kumar',
      role: 'Software Architect, Gachibowli',
      appliance: 'Split AC Deep Foam Jet Wash',
      avatarColor: '#10b981',
      rating: 5,
      review:
        'Super fast response! Technician arrived within an hour, covered the area with a catchment jacket, and did a complete hydro jet cleaning. Cooling is now back to freezing cold.'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Culinary Instructor, Kondapur',
      appliance: 'Convection Microwave Oven Repair',
      avatarColor: '#f59e0b',
      rating: 5,
      review:
        'My microwave had stopped heating right in the middle of meal prep. NEEVS diagnosed a blown fuse and magnetron fault, fixed it the same afternoon, and gave a 30-day warranty card.'
    },
    {
      id: 4,
      name: 'Karthik Rao',
      role: 'Civil Engineer, Banjara Hills',
      appliance: 'Double Door Refrigerator Repair',
      avatarColor: '#8b5cf6',
      rating: 5,
      review:
        'The cooling coil frost choked up completely. The technician cleared the drain line, calibrated the defrost sensor, and the fridge was operational in no time. Fair pricing with zero surprises.'
    },
    {
      id: 5,
      name: 'Deepika Nair',
      role: 'Doctor, Madhapur',
      appliance: '55" Smart 4K TV Mainboard Repair',
      avatarColor: '#ec4899',
      rating: 5,
      review:
        'Authorized service center told me to replace the entire display panel for an exorbitant price. NEEVS inspected it and discovered it was merely a capacitor fault on the power board. Honest and skilled team!'
    },
    {
      id: 6,
      name: 'Arun Varma',
      role: 'Financial Analyst, Begumpet',
      appliance: 'Dishwasher Drainage Clearing',
      avatarColor: '#06b6d4',
      rating: 5,
      review:
        'Water had started pooling inside the bottom basin. Technician cleaned the drain pump impeller and descaled the spray nozzles. Clean, professional, and courteous service.'
    }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <div className="testimonials-page">
      <PageHeader
        title="What Our Customers Say"
        subtitle="Customer trust is at the heart of everything we do. Read verified reviews from homeowners."
        breadcrumb={[{ label: 'Testimonials', path: '' }]}
        bannerImage="/images/hero-testimonials.jpg"
      />

      <section className="testimonials-container page-container">
        {/* Rating Summary Banner */}
        <motion.div
          className="rating-summary-banner"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rating-big-score">
            <span className="score-num">4.9</span>
            <div className="score-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="score-count">Over 2,840+ Verified Households Serviced</span>
          </div>

          <div className="rating-feature-list">
            <div className="rate-f-item">
              <CheckCircle2 size={18} className="rate-f-icon" />
              <span>98% On-Time Arrival Record</span>
            </div>
            <div className="rate-f-item">
              <CheckCircle2 size={18} className="rate-f-icon" />
              <span>100% Genuine OEM Spares Guaranteed</span>
            </div>
            <div className="rate-f-item">
              <CheckCircle2 size={18} className="rate-f-icon" />
              <span>30-Day Post-Service Callback Warranty</span>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="reviews-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {verifiedReviews.map((r) => (
            <motion.div
              key={r.id}
              className="review-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="review-header">
                <div className="quote-mark">
                  <Quote size={24} />
                </div>
                <div className="review-stars">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              <p className="review-text">“{r.review}”</p>

              <div className="review-appliance-tag">
                <span>Appliance Serviced: <strong>{r.appliance}</strong></span>
              </div>

              <div className="review-author-row">
                <div className="author-avatar" style={{ backgroundColor: r.avatarColor }}>
                  {r.name.charAt(0)}
                </div>
                <div className="author-details">
                  <h4 className="author-name">{r.name}</h4>
                  <span className="author-role">{r.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Customer Feedback Submission Box */}
        <motion.div
          className="feedback-submission-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="feedback-header">
            <MessageSquare size={28} className="f-icon" />
            <div>
              <h3>Share Your NEEVS Service Experience</h3>
              <p>Had a recent appliance repair completed by NEEVS? We would love to hear your feedback.</p>
            </div>
          </div>

          {feedbackSubmitted ? (
            <div className="feedback-thank-you">
              <CheckCircle2 size={36} color="#10b981" />
              <h4>Thank you for your valuable feedback!</h4>
              <p>Your review helps us maintain the highest standard of doorstep service.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <div className="f-row-three">
                <div className="f-field">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                  />
                </div>
                <div className="f-field">
                  <label>Appliance Serviced *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daikin Split AC"
                    value={feedbackForm.appliance}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, appliance: e.target.value })}
                  />
                </div>
                <div className="f-field">
                  <label>Rating *</label>
                  <select
                    value={feedbackForm.rating}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: e.target.value })}
                  >
                    <option value="5">★★★★★ (5 Stars - Excellent)</option>
                    <option value="4">★★★★☆ (4 Stars - Very Good)</option>
                    <option value="3">★★★☆☆ (3 Stars - Average)</option>
                  </select>
                </div>
              </div>

              <div className="f-field">
                <label>Your Review *</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Tell us about the technician's professionalism, timeliness, and repair quality..."
                  value={feedbackForm.review}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, review: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="f-submit-btn interactive-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Submit Feedback</span>
                <Send size={15} />
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* CTA: Experience NEEVS Service */}
        <motion.div
          className="testimonials-cta-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="t-cta-content">
            <h3>Ready to Experience Dependable Appliance Service?</h3>
            <p>Join thousands of pleased homeowners who rely on NEEVS everyday.</p>
          </div>
          <Link to="/book-service" className="t-cta-btn interactive-btn">
            <span>Book a Service Now</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
