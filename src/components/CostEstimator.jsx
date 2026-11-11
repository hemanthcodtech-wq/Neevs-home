import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, RefreshCw, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CostEstimator.css';

const appliancePricing = {
  'Washing Machine': {
    baseInspection: 199,
    commonIssues: [
      { name: 'Drum Noise & Bearing Alignment', est: '₹499 - ₹899' },
      { name: 'Drainage Pump Clearing / Motor Fix', est: '₹399 - ₹699' },
      { name: 'PCB Motherboard Soldering / Error Codes', est: '₹699 - ₹1,499' },
      { name: 'Door Gasket / Lock Replacement', est: '₹349 - ₹599' }
    ]
  },
  'Refrigerator': {
    baseInspection: 199,
    commonIssues: [
      { name: 'Not Cooling / Cooling Coil Descaling', est: '₹449 - ₹799' },
      { name: 'R134a / R600a Gas Charging & Leak Seal', est: '₹999 - ₹1,899' },
      { name: 'Thermostat & Defrost Sensor Replacement', est: '₹499 - ₹850' },
      { name: 'Compressor Relay & Capacitor Fix', est: '₹599 - ₹1,199' }
    ]
  },
  'Air Conditioner (AC)': {
    baseInspection: 249,
    commonIssues: [
      { name: 'Deep Anti-Bacterial Jet Foam Service', est: '₹499 - ₹699' },
      { name: 'R32 / R410A Refrigerant Gas Top-Up', est: '₹1,200 - ₹2,200' },
      { name: 'Water Leakage & Drain Flush', est: '₹349 - ₹549' },
      { name: 'Inverter PCB Board Diagnostics', est: '₹799 - ₹1,800' }
    ]
  },
  'Microwave Oven': {
    baseInspection: 199,
    commonIssues: [
      { name: 'Not Heating / Magnetron Diagnostic', est: '₹499 - ₹999' },
      { name: 'Touchpad Membrane / Display Fix', est: '₹399 - ₹750' },
      { name: 'Turntable Motor & Roller Ring', est: '₹299 - ₹499' },
      { name: 'Internal Sparking / High-Voltage Diode', est: '₹449 - ₹850' }
    ]
  },
  'LED / Smart TV': {
    baseInspection: 249,
    commonIssues: [
      { name: 'No Display / Backlight LED Strip Replacement', est: '₹799 - ₹1,999' },
      { name: 'Motherboard IC Repair / Red Light Blink', est: '₹899 - ₹2,400' },
      { name: 'Sound Output & Speaker Replacement', est: '₹499 - ₹899' },
      { name: 'HDMI Ports & Wi-Fi Module Fix', est: '₹599 - ₹1,200' }
    ]
  },
  'Dishwasher': {
    baseInspection: 249,
    commonIssues: [
      { name: 'Drainage Pump & Impeller Debris Clear', est: '₹499 - ₹799' },
      { name: 'Water Heating Coil & Thermostat', est: '₹699 - ₹1,299' },
      { name: 'Spray Arm Descaling & Valve Repair', est: '₹399 - ₹699' }
    ]
  }
};

export default function CostEstimator() {
  const [selectedAppliance, setSelectedAppliance] = useState('Washing Machine');
  const [selectedIssueIdx, setSelectedIssueIdx] = useState(0);

  const current = appliancePricing[selectedAppliance];
  const activeIssue = current.commonIssues[selectedIssueIdx] || current.commonIssues[0];

  return (
    <section className="cost-estimator-section">
      <div className="page-container">
        <motion.div
          className="estimator-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="estimator-header">
            <span className="section-pill">Transparent Rate Card</span>
            <h3 className="estimator-title">Instant Repair Price Estimator</h3>
            <p className="estimator-subtitle">
              Select your appliance and common issue to preview estimated repair ranges with zero hidden charges.
            </p>
          </div>

          <div className="estimator-interactive-grid">
            {/* Step 1: Choose Appliance */}
            <div className="estimator-col">
              <label className="col-label">1. Select Your Appliance</label>
              <div className="appliance-selector-stack">
                {Object.keys(appliancePricing).map((app) => (
                  <button
                    key={app}
                    className={`app-select-btn ${selectedAppliance === app ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedAppliance(app);
                      setSelectedIssueIdx(0);
                    }}
                  >
                    <span>{app}</span>
                    <Zap size={14} className="app-zap" />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Issue */}
            <div className="estimator-col">
              <label className="col-label">2. Select Issue Symptom</label>
              <div className="issues-stack">
                {current.commonIssues.map((iss, idx) => (
                  <div
                    key={idx}
                    className={`issue-pill-item ${selectedIssueIdx === idx ? 'active' : ''}`}
                    onClick={() => setSelectedIssueIdx(idx)}
                  >
                    <div className="issue-radio-dot"></div>
                    <span className="issue-name">{iss.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Estimated Price Output */}
            <div className="estimator-output-col">
              <div className="output-pricing-box">
                <span className="est-badge">NEEVS Fair Estimate</span>
                <div className="est-amount">{activeIssue.est}</div>
                <span className="est-note">Includes Genuine Spares + Labor</span>

                <div className="est-points-list">
                  <div className="est-point">
                    <CheckCircle2 size={16} />
                    <span>Doorstep diagnostic fee: ₹{current.baseInspection} (Waived off upon repair)</span>
                  </div>
                  <div className="est-point">
                    <CheckCircle2 size={16} />
                    <span>30-Day post-service callback warranty</span>
                  </div>
                  <div className="est-point">
                    <CheckCircle2 size={16} />
                    <span>100% Genuine OEM manufacturer spares</span>
                  </div>
                </div>

                <Link to="/book-service" className="est-book-btn interactive-btn">
                  <span>Book at this Estimate</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

