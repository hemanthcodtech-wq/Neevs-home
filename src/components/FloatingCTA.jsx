import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickHelp, setShowQuickHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setShowScrollTop(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, 0);
    }

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  };

  return (
    <div className="floating-cta-root">
      {/* Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn interactive-btn"
            onClick={scrollToTop}
            title="Scroll to top"
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Quick Chat Floating Button */}
      <motion.a
        href="https://wa.me/917996163604"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with Service Coordinator on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="wa-pulse-ring"></span>
        <MessageSquare size={24} />
        <span className="wa-tooltip">Chat on WhatsApp</span>
      </motion.a>

      {/* Floating Emergency Call Button on Mobile */}
      <motion.a
        href="tel:+917996163604"
        className="floating-call-btn"
        title="Call Helpline"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <Phone size={22} />
      </motion.a>
    </div>
  );
}

