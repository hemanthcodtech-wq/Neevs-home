import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { ShieldCheck, Sparkles } from 'lucide-react';
import './SplashScreen.css';

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown in this browser session
    const hasSeenSplash = sessionStorage.getItem('neevs_splash_seen');
    if (hasSeenSplash) {
      setIsVisible(false);
      if (onFinish) onFinish();
      return;
    }

    // Auto dismiss after 1.9 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('neevs_splash_seen', 'true');
    if (onFinish) onFinish();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen-root"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Ambient luminous glow orbs */}
          <div className="splash-orb splash-orb-blue"></div>
          <div className="splash-orb splash-orb-orange"></div>

          {/* Skip button for instant bypass */}
          <button
            type="button"
            className="splash-skip-btn"
            onClick={handleDismiss}
            aria-label="Skip splash screen"
          >
            Skip →
          </button>

          <div className="splash-content">
            {/* Animated Brand Logo Container */}
            <motion.div
              className="splash-logo-wrapper"
              initial={{ scale: 0.7, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="splash-logo-halo"></div>
              <img
                src={logo}
                alt="NEEVS Home Appliance Service"
                className="splash-logo-img"
              />
            </motion.div>

            {/* Brand Title with Fade Up */}
            <motion.div
              className="splash-text-block"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="splash-badge">
                <Sparkles size={13} className="splash-sparkle-icon" />
                <span>EXPERT HOME APPLIANCE SERVICE</span>
              </div>
              <h1 className="splash-brand-title">NEEVS</h1>
              <p className="splash-tagline">
                Reliable Doorstep Repair & Maintenance
              </p>
            </motion.div>

            {/* Animated Loading Sweep Bar */}
            <motion.div
              className="splash-progress-track"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="splash-progress-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.35, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Verified Trust Strip at Bottom of Splash */}
            <motion.div
              className="splash-footer-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <div className="splash-trust-item">
                <ShieldCheck size={14} />
                <span>Certified Multi-Brand Specialists</span>
              </div>
              <span className="splash-dot">•</span>
              <div className="splash-trust-item">
                <span>90-Min Doorstep Dispatch</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
