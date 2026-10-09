'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

export default function HomePage() {
  const { openModal, triggerToast } = useInquiry();
  const [submitting, setSubmitting] = useState(false);

  const handleQuickForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      triggerToast('Thank you! Your inquiry has been received. Our AMAAC advisor will contact you within 15 minutes.');
    }, 700);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Your Trusted Global Gateway for <span className="text-gradient">Travel, Visas & Education</span>
              </h1>
              <p className="hero-description">
                Experience world-class tourism packages across India, the GCC, and Asia; seamless global visa approvals; premier university admissions worldwide; and end-to-end corporate travel solutions with AMAAC INTERNATIONAL.
              </p>
              <div className="hero-actions">
                <Link href="/tourism" className="btn btn-primary">
                  Explore Tourism
                </Link>
                <Link href="/visa" className="btn btn-outline-white">
                  Global Visa Desk
                </Link>
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => openModal('Study Abroad Advisory')}
                >
                  Study Abroad
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-main">
                <img src="/assets/gcc-dubai.jpg" alt="AMAAC International Luxury Travel Destinations" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Services</span>
            <h2 className="section-title">Comprehensive Solutions for Every Journey</h2>
            <p className="section-subtitle">
              From curated holiday packages to international university admissions and rapid document attestation, discover the full range of AMAAC INTERNATIONAL services.
            </p>
          </div>

          <div className="grid-3">
            {/* 1. Tourism Card - Unique AlUla Image */}
            <div className="feature-card">
              <div className="card-media">
                <img src="/assets/saudi-alula.jpg" alt="Tourism Highlights GCC Dubai India Asia" />
                <span className="card-tag">Holiday Escapes</span>
              </div>
              <div className="card-body">
                <h3>Tourism & Holiday Escapes</h3>
                <p>Tailored vacation itineraries with top-tier hotels, private sightseeing, and curated cultural experiences across high-demand destinations.</p>
                <ul className="card-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Incredible India (Kerala, Kashmir, Golden Triangle)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    GCC Highlights (Dubai, Saudi Arabia, Qatar)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Asian Escapes (Bali, Malaysia, Singapore, Thailand)
                  </li>
                </ul>
                <div className="card-footer">
                  <Link href="/tourism" className="btn btn-outline-primary btn-sm">
                    Explore Tourism &rarr;
                  </Link>
                  <button className="btn btn-gold btn-sm" onClick={() => openModal('Tourism Packages')}>
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Visa Services Card - Unique Passport Image */}
            <div className="feature-card">
              <div className="card-media">
                <img src="/assets/visa-services.jpg" alt="Global Visa Services by AMAAC" />
                <span className="card-tag">Global Visas</span>
              </div>
              <div className="card-body">
                <h3>Visa Services (Global)</h3>
                <p>End-to-end visa filing, embassy stamping, biometric appointment scheduling, and rejection recovery for travellers and professionals worldwide.</p>
                <ul className="card-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    GCC Visit & Employment Stamping (UAE, KSA, Qatar)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Schengen 27 European Nations
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    US B1/B2, UK, Canada & Australia Visitor Visas
                  </li>
                </ul>
                <div className="card-footer">
                  <Link href="/visa" className="btn btn-outline-primary btn-sm">
                    View Visa Desk &rarr;
                  </Link>
                  <button className="btn btn-gold btn-sm" onClick={() => openModal('Visa Assistance')}>
                    Check Visa
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Study Abroad Card - Unique Campus Image */}
            <div className="feature-card">
              <div className="card-media">
                <img src="/assets/study-abroad.jpg" alt="Study Abroad Global Universities" />
                <span className="card-tag">Overseas Education</span>
              </div>
              <div className="card-body">
                <h3>Study Abroad Consultation</h3>
                <p>Empowering students to achieve their academic dreams at world-class universities with complete career mapping, admissions, and student visas.</p>
                <ul className="card-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    United Kingdom, Canada & Australia
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Germany (Tuition-Free) & Ireland Tech Hub
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    European MBBS Programs (Georgia, Europe)
                  </li>
                </ul>
                <div className="card-footer">
                  <Link href="/study-abroad" className="btn btn-outline-primary btn-sm">
                    Study Destinations &rarr;
                  </Link>
                  <button className="btn btn-gold btn-sm" onClick={() => openModal('Study Abroad Counseling')}>
                    Free Counseling
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Page 5: Other Services Overview */}
          <div style={{ marginTop: '3.5rem' }}>
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <span className="section-tag" style={{ marginBottom: '0.25rem' }}>Value Added Services</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--primary)' }}>
                    Other Travel & Corporate Services
                  </h3>
                </div>
                <Link href="/other-services" className="btn btn-primary btn-sm">
                  View All 6 Services &rarr;
                </Link>
              </div>

              <div className="grid-3" style={{ gap: '1.25rem' }}>
                <Link href="/other-services#ticketing" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #dbeafe' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>Air Ticketing</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Domestic & international reservations with student extra baggage allowances.</p>
                  </div>
                </Link>

                <Link href="/other-services#attestation" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#fffbeb', color: '#d97706', border: '1px solid #fef3c7' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>Certificate Attestation</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>MEA, Apostille, HRD, and GCC Embassy attestations for UAE, Saudi, Qatar & Oman.</p>
                  </div>
                </Link>

                <Link href="/other-services#couriers" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#eef2ff', color: '#4f46e5', border: '1px solid #e0e7ff' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>International Couriers</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Door-to-door express parcel and certificate shipping worldwide with real-time tracking.</p>
                  </div>
                </Link>

                <Link href="/other-services#hotels" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#ecfdf5', color: '#059669', border: '1px solid #d1fae5' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>Hotel Bookings</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Luxury 5-star properties, boutique resorts, and verified budget hotels worldwide.</p>
                  </div>
                </Link>

                <Link href="/other-services#car-rentals" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#f0f9ff', color: '#0284c7', border: '1px solid #e0f2fe' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11 2 11.3V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>Car Rentals & Transfers</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Airport pick-up, chauffeur-driven luxury sedans, and inter-city executive transport.</p>
                  </div>
                </Link>

                <Link href="/other-services#insurance" className="home-aux-card">
                  <div className="home-aux-icon" style={{ background: '#fff1f2', color: '#e11d48', border: '1px solid #ffe4e6' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>Travel Insurance</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Embassy-compliant medical coverage, baggage loss protection, and Schengen cover.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destination Highlights - All Distinct Images */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Destinations</span>
            <h2 className="section-title">Experience the Best of Global Tourism</h2>
            <p className="section-subtitle">
              Unforgettable experiences hand-crafted by our regional specialists with seamless local logistics.
            </p>
          </div>

          <div className="grid-3">
            {/* GCC Card - Unique Qatar Doha Image */}
            <div className="dark-card">
              <div style={{ height: '190px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src="/assets/qatar-doha.jpg" alt="GCC Region Qatar Saudi Dubai" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>GCC Region Highlights</h3>
              <p>Marvel at Dubai's iconic Burj Khalifa & desert safaris, explore Saudi Arabia's heritage (Riyadh, AlUla & Umrah), and enjoy Doha's luxury waterfront in Qatar.</p>
              <Link href="/tourism" style={{ color: '#60a5fa', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem' }}>
                Explore GCC Packages
              </Link>
            </div>

            {/* India Card - Unique Kerala Houseboat Image */}
            <div className="dark-card">
              <div style={{ height: '190px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src="/assets/kerala-houseboat.jpg" alt="Incredible India Kerala Backwaters Houseboat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Incredible India</h3>
              <p>From the serene backwaters of Kerala and snow-capped peaks of Kashmir & Himachal to the golden sands of Goa and royal palaces of Rajasthan.</p>
              <Link href="/tourism" style={{ color: '#60a5fa', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem' }}>
                Explore India Tours
              </Link>
            </div>

            {/* Asia Card - Unique Singapore Marina Bay Image */}
            <div className="dark-card">
              <div style={{ height: '190px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src="/assets/singapore-marinabay.jpg" alt="Singapore and Malaysia Asian Tourism" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Other Asian Countries</h3>
              <p>Indulge in Bali's emerald rice terraces, Singapore's futuristic skyline, Malaysia's rainforests & islands, and Thailand's turquoise beaches.</p>
              <Link href="/tourism" style={{ color: '#60a5fa', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem' }}>
                Explore Asian Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AMAAC & Quick Form */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Why AMAAC INTERNATIONAL</span>
              <h2 className="section-title">A Standard of Excellence You Can Trust</h2>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                With decades of combined domain expertise in international travel, embassy protocols, and global education, AMAAC INTERNATIONAL delivers precision, speed, and peace of mind.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)' }}>Authorized & Verified Processes</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Every visa document, MEA attestation, and university application adheres strictly to official regulatory guidelines.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)' }}>Fast-Track Turnaround Times</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Priority handling for emergency visas, urgent certificate attestations, and last-minute flight tickets.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)' }}>Dedicated Relationship Managers</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Direct contact with seasoned advisors who coordinate your journey, flight updates, and documentation from start to finish.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--bg-dark)', padding: '3rem', borderRadius: 'var(--radius-lg)', color: '#ffffff', boxShadow: 'var(--shadow-lg)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem' }}>Quick Online Inquiry</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '2rem' }}>Fill in your details and an AMAAC International specialist will get in touch with personalized options.</p>

                <form onSubmit={handleQuickForm}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>Your Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>Contact Number / WhatsApp</label>
                    <input type="tel" className="form-control" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>Select Required Service</label>
                    <select className="form-control" required defaultValue="">
                      <option value="" disabled>-- Choose a Service --</option>
                      <option value="Tourism Packages (GCC / India / Asia)">Tourism Package (GCC, India, Asia)</option>
                      <option value="Global Visa Services">Global Visa Services</option>
                      <option value="Study Abroad Consultation">Study Abroad Counseling (UK, Canada, Europe, MBBS)</option>
                      <option value="Certificate Attestation">Certificate Attestation & Apostille</option>
                      <option value="Air Ticketing & Hotels">Flight Ticketing & Hotel Stays</option>
                      <option value="Couriers & Logistics">International Couriers</option>
                      <option value="Travel Insurance & Car Rental">Travel Insurance & Car Rentals</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>Destination or Specific Note</label>
                    <textarea className="form-control" rows="3" placeholder="Tell us about your travel dates, preferred destination, or course..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                    {submitting ? 'Transmitting...' : 'Submit Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Planning Your Next International Milestone?</h2>
                <p>Connect with the global operations team at AMAAC INTERNATIONAL for bespoke itineraries, verified visa filings, and academic consultations.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-gold" onClick={() => openModal('Instant Consultation')}>
                  Get Free Consultation
                </button>
                <a
                  href="https://wa.me/919846000000?text=Hello%20AMAAC%20INTERNATIONAL,%20I%20am%20inquiring%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
