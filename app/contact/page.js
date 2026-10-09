'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

function FlagIndia() {
  return (
    <svg viewBox="0 0 60 40" width="38" height="26" aria-label="India Flag">
      <clipPath id="flag-clip-in"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-in)">
        <rect width="60" height="13.34" fill="#FF9933"/>
        <rect y="13.34" width="60" height="13.34" fill="#FFFFFF"/>
        <rect y="26.68" width="60" height="13.34" fill="#138808"/>
        <circle cx="30" cy="20" r="4.8" fill="none" stroke="#000080" strokeWidth="1"/>
        <circle cx="30" cy="20" r="1.2" fill="#000080"/>
      </g>
    </svg>
  );
}

function FlagUAE() {
  return (
    <svg viewBox="0 0 60 40" width="38" height="26" aria-label="UAE & GCC Flag">
      <clipPath id="flag-clip-ae"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-ae)">
        <rect width="60" height="13.34" fill="#00732F"/>
        <rect y="13.34" width="60" height="13.34" fill="#FFFFFF"/>
        <rect y="26.68" width="60" height="13.34" fill="#000000"/>
        <rect width="18" height="40" fill="#FF0000"/>
      </g>
    </svg>
  );
}

export default function ContactPage() {
  const { triggerToast } = useInquiry();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      triggerToast('Thank you! Your official inquiry has been sent to our desk. We will respond within 15 minutes.');
    }, 700);
  };

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-title">Connect with AMAAC INTERNATIONAL</h1>
            <p className="page-description">
              Our global operations team is on standby to assist you with holiday bookings, urgent visas, overseas university admissions, and certificate attestations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {/* Left: Office info & channels */}
            <div>
              <span className="section-tag">Global Presence</span>
              <h2 className="section-title">Reach Our Specialists Directly</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Experience prompt and professional client service across our Indian and GCC offices.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
                {/* India Hub */}
                <div className="contact-hub-card">
                  <div className="hub-card-header">
                    <div className="hub-flag-wrap">
                      <FlagIndia />
                    </div>
                    <span className="hub-status-badge">
                      <span className="pulse-dot"></span> Open & Operating
                    </span>
                  </div>

                  <h3 className="hub-title">India Operations Hub</h3>

                  <div className="hub-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>AMAAC International Towers, MG Road, Kochi & Calicut, Kerala, India.</span>
                  </div>

                  <div className="hub-details-list">
                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Phone / WhatsApp</strong>
                        <a href="tel:+919846000000">+91 98460 00000</a> / <a href="tel:+919846011111">+91 98460 11111</a>
                      </div>
                    </div>

                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Email Inquiry</strong>
                        <a href="mailto:info@amaacinternational.com">info@amaacinternational.com</a>
                      </div>
                    </div>

                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Working Hours</strong>
                        <span>Mon - Sat: 9:00 AM - 7:30 PM (IST)</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919846000000?text=Hello%20AMAAC%20India%20Desk,%20I%20need%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    WhatsApp Indian Desk
                  </a>
                </div>

                {/* UAE / GCC Hub */}
                <div className="contact-hub-card gcc">
                  <div className="hub-card-header">
                    <div className="hub-flag-wrap">
                      <FlagUAE />
                    </div>
                    <span className="hub-status-badge">
                      <span className="pulse-dot"></span> Open & Operating
                    </span>
                  </div>

                  <h3 className="hub-title">GCC Operations Hub (UAE & Saudi)</h3>

                  <div className="hub-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Business Bay / Deira, Dubai, UAE & Riyadh, Saudi Arabia.</span>
                  </div>

                  <div className="hub-details-list">
                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Direct Line</strong>
                        <a href="tel:+971500000000">+971 50 000 0000</a> / <a href="tel:+97140000000">+971 4 000 0000</a>
                      </div>
                    </div>

                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>GCC Operations Email</strong>
                        <a href="mailto:gcc@amaacinternational.com">gcc@amaacinternational.com</a>
                      </div>
                    </div>

                    <div className="hub-detail-item">
                      <div className="hub-detail-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Working Hours</strong>
                        <span>Sun - Thu: 9:00 AM - 8:00 PM (GST)</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919846000000?text=Hello%20AMAAC%20GCC%20Desk,%20I%20need%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    WhatsApp GCC Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div>
              <div className="contact-form-card">
                <span className="contact-form-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  15-Minute Guaranteed Response Time
                </span>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 800 }}>
                  Send Us an Official Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.55 }}>
                  Fill in the form below and a dedicated AMAAC international executive will connect with you promptly.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" required />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-control" placeholder="name@domain.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp Number *</label>
                      <input type="tel" className="form-control" placeholder="+91 / +971 ..." required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Department / Inquiry Category *</label>
                    <select className="form-control" required defaultValue="Tourism & Holidays">
                      <option value="Tourism & Holidays">Tourism Packages (GCC / India / Asia)</option>
                      <option value="Visa Services">Worldwide Visa Processing & Stamping</option>
                      <option value="Study Abroad">Study Abroad (UK, Canada, Europe, MBBS)</option>
                      <option value="Certificate Attestation">Certificate Attestation & MEA</option>
                      <option value="Flight Ticketing">Air Ticketing & Group Bookings</option>
                      <option value="Couriers & Cargo">International Couriers</option>
                      <option value="Hotels & Car Rentals">Hotels & Luxury Car Rentals</option>
                      <option value="Travel Insurance">Travel Insurance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Detailed Requirements *</label>
                    <textarea className="form-control" rows="4" placeholder="Please specify travel dates, number of persons, degree certificates, or visa type..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', fontWeight: 600, borderRadius: '12px' }} disabled={submitting}>
                    {submitting ? 'Transmitting Message...' : 'Send Message'}
                  </button>

                  <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8', marginTop: '1rem', marginBottom: 0 }}>
                    🔒 256-Bit SSL Encrypted & Confidential Data Protection
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Got Questions? We Have Answers</h2>
            <p className="section-subtitle">Common inquiries regarding our travel, visa, study abroad, and attestation services.</p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.85rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>How long does GCC & Schengen visa processing take?</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>UAE and Saudi tourist eVisas are usually processed within 24 to 48 hours. Schengen visas typically take 10 to 15 working days following your biometric appointment at VFS/TLScontact.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '1.85rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Can AMAAC INTERNATIONAL assist with education loans and scholarships?</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>Yes. We guide students through university merit scholarships and assist in preparing loan files for nationalized and private banking partners in India and the GCC.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '1.85rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>What documents are required for certificate attestation?</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>For degree attestation, we need the original degree certificate, final year marksheets, and a clear passport copy. We handle State HRD, MEA, Apostille, and Embassy stamping securely.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '1.85rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Can holiday packages be customized for families and corporate groups?</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>Absolutely. All our itineraries across India, Dubai, Saudi Arabia, Qatar, Bali, Thailand, and Singapore are 100% customizable to your group size, hotel rating preference, and schedule.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
