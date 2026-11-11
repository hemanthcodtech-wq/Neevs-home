import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, breadcrumb = [], bannerImage }) {
  const banner = bannerImage || '/images/page-hero-banner.jpg';

  return (
    <div className="page-header-banner-wrapper">
      <div className="page-container">
        <motion.div
          className="page-hero-banner-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle animated light glow behind the title */}
          <div className="banner-glow-orb"></div>

          {/* Left Text Block matching reference */}
          <motion.div
            className="banner-text-overlay"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="banner-page-title">{title}</h1>
            {subtitle && <p className="banner-page-subtitle">{subtitle}</p>}

            <nav className="banner-breadcrumbs" aria-label="breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="crumb-bullet">•</span>
                  {item.path ? (
                    <Link to={item.path}>{item.label}</Link>
                  ) : (
                    <span className="current">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>

          {/* Dedicated Right Image Section with crisp framing & gradient feathering */}
          <motion.div
            className="banner-image-showcase"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={banner}
              alt={title}
              className="banner-featured-photo"
              loading="eager"
            />
            <div className="banner-image-blend-mask"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
