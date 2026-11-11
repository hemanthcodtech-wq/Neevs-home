import React from 'react';
import PageHeader from '../../components/PageHeader';
import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import './Legal.css';

export default function Legal({ type = 'privacy' }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How NEEVS protects and manages your personal and service data.',
      sections: [
        {
          h: '1. Information We Collect',
          p: 'We collect customer contact information (such as your full name, mobile number, email address, and service premises address) solely for coordinating and executing appliance repair appointments.'
        },
        {
          h: '2. Use of Information',
          p: 'Your information is used strictly to assign local technicians, provide service updates via SMS or WhatsApp, generate transparent invoices, and offer 30-day post-service warranty support. We never sell or lease your information to third-party marketing entities.'
        },
        {
          h: '3. Data Security',
          p: 'We implement industry-standard encryption and operational safeguards to protect your personal details against unauthorized access or disclosure.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Guidelines and service responsibilities for NEEVS customers.',
      sections: [
        {
          h: '1. Scope of Service',
          p: 'NEEVS provides on-site doorstep diagnostics, troubleshooting, parts replacement, and routine maintenance for household appliances.'
        },
        {
          h: '2. Inspection & Estimates',
          p: 'Prior to conducting any repair, our technician inspects the appliance and provides an upfront estimate. Repairs proceed only with the customer’s explicit consent.'
        },
        {
          h: '3. Customer Cooperation',
          p: 'Customers agree to provide reasonable access to power, water supply, and appliance testing locations during the scheduled service visit.'
        }
      ]
    },
    warranty: {
      title: 'Warranty Policy',
      subtitle: 'Our commitment to quality repairs and genuine OEM replacement parts.',
      sections: [
        {
          h: '1. 30-Day Post-Service Guarantee',
          p: 'Every paid service visit carries a 30-day workmanship warranty. If the exact same issue re-occurs within 30 days of service, our technician will re-inspect and rectify it free of diagnostic charges.'
        },
        {
          h: '2. Genuine Spare Parts Warranty',
          p: 'All new replacement parts supplied by NEEVS carry manufacturer and OEM warranty (typically 90 days to 1 year depending on the part component).'
        },
        {
          h: '3. Exclusions',
          p: 'Warranty does not cover physical damage, electrical short-circuits caused by high household surge voltage, or unauthorized third-party tampering post-repair.'
        }
      ]
    }
  };

  const current = content[type] || content.privacy;

  return (
    <div className="legal-page">
      <PageHeader
        title={current.title}
        subtitle={current.subtitle}
        breadcrumb={[{ label: current.title, path: '' }]}
        bannerImage="/images/service-dishwasher.jpg"
      />

      <section className="legal-container page-container">
        <div className="legal-card">
          <div className="legal-top-badge">
            <ShieldCheck size={20} className="legal-shield" />
            <span>Official Policy Document • NEEVS Home Appliance Service</span>
          </div>

          <div className="legal-body">
            {current.sections.map((sec, i) => (
              <div key={i} className="legal-section-block">
                <h3>{sec.h}</h3>
                <p>{sec.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

