import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Headphones, ThumbsUp, Wrench } from 'lucide-react';
import './TrustGuaranteeStrip.css';

const trustPillars = [
  {
    icon: ShieldCheck,
    title: '30-Day Free Callback Warranty',
    desc: 'If the same problem recurs, we rectify it with zero service fee.'
  },
  {
    icon: Award,
    title: '100% Genuine OEM Spares',
    desc: 'Original manufacturer parts with authentic warranty slips.'
  },
  {
    icon: Clock,
    title: 'Doorstep in 90 Minutes',
    desc: 'GPS-tracked technicians dispatched from your local neighborhood hub.'
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Written Estimates',
    desc: 'No hidden diagnostic costs. Repair starts only after your consent.'
  }
];

export default function TrustGuaranteeStrip() {
  return (
    <section className="trust-strip-wrapper">
      <div className="page-container">
        <div className="trust-strip-card">
          <div className="trust-strip-grid">
            {trustPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="trust-pillar-item">
                  <div className="trust-pillar-icon">
                    <IconComp size={24} />
                  </div>
                  <div className="trust-pillar-text">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

