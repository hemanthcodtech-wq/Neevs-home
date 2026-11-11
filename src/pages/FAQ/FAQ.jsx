import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Which appliances does NEEVS service?',
      a: 'We provide specialized repair and maintenance solutions for washing machines (Front Load, Top Load & Semi-Automatic), refrigerators (Single Door, Double Door & Side-by-Side Inverter models), microwave ovens (Solo, Grill & Convection), air conditioners (Split & Window AC), LED and Smart 4K televisions, dishwashers, kitchen chimneys, hobs, and other household appliances.'
    },
    {
      q: 'Do you provide doorstep service?',
      a: 'Yes! All repairs and diagnostic evaluations are conducted right at your doorstep across our active service locations. Our certified technician arrives with standard testing equipment, diagnostic tools, and common genuine replacement spares.'
    },
    {
      q: 'How do I book a service with NEEVS?',
      a: 'You can easily submit a booking request through our online Book a Service form, contact us directly via phone at +91 79961 63604, or message us on WhatsApp. Our coordinator will contact you in under 15 minutes to confirm the appointment.'
    },
    {
      q: 'How much does appliance repair cost?',
      a: 'Repair charges depend on the specific appliance, the nature of the fault, and any spare parts required. Our technician performs a comprehensive initial inspection and communicates a transparent, upfront estimate. We proceed with the repair only after your explicit approval.'
    },
    {
      q: 'Do you service all appliance brands?',
      a: 'We service all major leading brands and models including Samsung, LG, Whirlpool, Bosch, IFB, Godrej, Daikin, Voltas, Blue Star, Panasonic, Sony, Haier, Philips, and more.'
    },
    {
      q: 'How can I check my booking status?',
      a: 'You can check your status by calling our customer support helpline with your booking mobile number, or log into the Technician & Customer portal to track live job progress.'
    },
    {
      q: 'Do you provide genuine spare parts?',
      a: 'Yes, we source only 100% genuine OEM-certified spare parts to ensure long-lasting appliance performance. Replaced parts come with a standard replacement warranty.'
    },
    {
      q: 'Can I reschedule my appointment?',
      a: 'Absolutely. If your plans change, simply notify our customer support team or respond to your booking WhatsApp message to pick a revised time slot with zero cancellation or rescheduling fees.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Got questions about our home appliance repair service? Find clear answers here."
        breadcrumb={[{ label: 'FAQ', path: '' }]}
        bannerImage="/images/service-microwave.jpg"
      />

      <section className="faq-container page-container">
        <div className="faq-layout">
          <motion.div
            className="faq-accordion-col"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                className={`faq-item-card ${openIndex === idx ? 'expanded' : ''}`}
                onClick={() => toggleFAQ(idx)}
                variants={fadeInUp}
                whileHover={{ borderColor: '#93c5fd' }}
                layout
              >
                <div className="faq-question-row">
                  <div className="faq-q-text">
                    <HelpCircle size={20} className="faq-icon" />
                    <h3>{item.q}</h3>
                  </div>
                  <motion.div
                    className="faq-toggle-arrow"
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      className="faq-answer-block"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="faq-sidebar-col"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="faq-support-box">
              <Sparkles size={28} className="sidebar-sparkle" />
              <h3>Still Have Questions?</h3>
              <p>Our friendly customer support team is available from 7:00 AM to 10:00 PM every day to assist you.</p>

              <div className="sidebar-contact-info">
                <a href="tel:+917996163604" className="sidebar-phone-btn interactive-btn">
                  <PhoneCall size={18} />
                  <span>+91 79961 63604</span>
                </a>
                <Link to="/contact" className="sidebar-contact-btn interactive-btn">
                  Send an Inquiry
                </Link>
              </div>
            </div>

            <div className="faq-guarantee-box">
              <h4>NEEVS Trust Guarantee</h4>
              <ul>
                <li>✓ 30-Day Post Service Warranty</li>
                <li>✓ Transparent Upfront Pricing</li>
                <li>✓ Verified Background-Checked Engineers</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
