import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';
import './BrandMarquee.css';

const brands = [
  { name: 'Samsung', logo: '/brands/samsung.svg', color: '#034EA2' },
  { name: 'LG', logo: '/brands/lg.svg', color: '#A50034' },
  { name: 'Whirlpool', logo: '/brands/whirlpool.svg', color: '#edb111' },
  { name: 'Bosch', logo: '/brands/bosch.svg', color: '#EA1821' },
  { name: 'IFB', logo: '/brands/ifb.svg', color: '#e31e24' },
  { name: 'Daikin', logo: '/brands/daikin.svg', color: '#0097e6' },
  { name: 'Voltas', logo: '/brands/voltas.svg', color: '#005baa' },
  { name: 'Blue Star', logo: '/brands/bluestar.svg', color: '#0b57d0' },
  { name: 'Godrej', logo: '/brands/godrej.svg', color: '#8b0000' },
  { name: 'Panasonic', logo: '/brands/panasonic.svg', color: '#004098' },
  { name: 'Sony', logo: '/brands/sony.svg', color: '#000000' },
  { name: 'Haier', logo: '/brands/haier.svg', color: '#c8102e' },
  { name: 'Hitachi', logo: '/brands/hitachi.svg', color: '#E60012' },
  { name: 'Carrier', logo: '/brands/carrier.svg', color: '#0033a0' },
  { name: 'Faber', logo: '/brands/faber.svg', color: '#e20613' }
];

export default function BrandMarquee() {
  return (
    <section className="brand-marquee-section">
      <div className="page-container marquee-header-wrap">
        <div className="marquee-badge">
          <Sparkles size={14} />
          <span>Multi-Brand Certified Service</span>
        </div>
        <h3 className="marquee-title">Supported Appliance Brands We Service Daily</h3>
        <p className="marquee-sub">
          We use genuine OEM replacement parts for all major international and domestic manufacturers.
        </p>
      </div>

      <div className="marquee-slider-track">
        <motion.div
          className="marquee-track-inner"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="brand-logo-pill">
              <div className="brand-logo-icon-wrap">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo-svg"
                  loading="lazy"
                />
              </div>
              <span className="brand-text">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

