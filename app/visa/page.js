'use client';

import React from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

function VisaIconGCC() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" stroke="#d97706"/>
      <path d="M12 6v6l4 2" stroke="#d97706"/>
      <path d="M15.5 8.5A5 5 0 0 1 12 17a5 5 0 0 1-3.5-8.5" stroke="#f59e0b" strokeWidth="2"/>
    </svg>
  );
}

function VisaIconSchengen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/>
      <circle cx="12" cy="5" r="1.2" fill="#2563eb"/>
      <circle cx="17" cy="7" r="1.2" fill="#2563eb"/>
      <circle cx="19" cy="12" r="1.2" fill="#2563eb"/>
      <circle cx="17" cy="17" r="1.2" fill="#2563eb"/>
      <circle cx="12" cy="19" r="1.2" fill="#2563eb"/>
      <circle cx="7" cy="17" r="1.2" fill="#2563eb"/>
      <circle cx="5" cy="12" r="1.2" fill="#2563eb"/>
      <circle cx="7" cy="7" r="1.2" fill="#2563eb"/>
      <path d="M9 12l2 2 4-4" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function VisaIconUSUK() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#b45309" fill="#fef3c7" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2.5" fill="#b45309"/>
    </svg>
  );
}

function VisaIconCanAus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <circle cx="12" cy="12" r="10" stroke="#0284c7" strokeWidth="2"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#0284c7" strokeWidth="1.5"/>
    </svg>
  );
}

function VisaIconAsia() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <rect x="2" y="3" width="20" height="18" rx="3" stroke="#059669" strokeWidth="2"/>
      <path d="M7 8h10M7 12h10M7 16h6" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17" cy="16" r="2" fill="#10b981"/>
    </svg>
  );
}

function VisaIconRecovery() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#d97706" fill="#fef3c7" strokeWidth="1.75"/>
      <circle cx="12" cy="11" r="3" stroke="#d97706" strokeWidth="2"/>
      <path d="M14.5 13.5L18 17" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function VisaPage() {
  const { openModal } = useInquiry();

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-title">Global Visa Assistance & Embassy Solutions</h1>
            <p className="page-description">
              Fast, transparent, and embassy-compliant visa filing with an industry-leading 99.4% approval track record across the GCC, Europe, North America, UK, and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Overview */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Embassy Expertise</span>
              <h2 className="section-title">Worldwide Visas Handled with Utmost Precision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Whether you need a quick 30-day UAE tourist visa, urgent Saudi employment stamping, a multi-entry Schengen business visa, or an interview-based US B1/B2 visa, our certified visa officers manage every document, translation, and biometric appointment.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button className="btn btn-primary" onClick={() => openModal('Global Visa Application')}>
                  Start Visa Application
                </button>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
                <img src="/assets/visa-services.jpg" alt="AMAAC Global Visa Services Passports and Boarding Pass" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Visa Portfolios Grid */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Destinations Covered</span>
            <h2 className="section-title">Global Visa Portfolios</h2>
            <p className="section-subtitle">
              Comprehensive documentation, consular compliance, and end-to-end appointment filing for key international jurisdictions.
            </p>
          </div>

          {/* Executive Consular Performance & Trust Ribbon */}
          <div className="visa-stats-ribbon">
            <div className="visa-stat-item">
              <div className="visa-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1.1 }}>99.4%</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 500 }}>Consular Approval Record</div>
              </div>
            </div>

            <div className="visa-stat-item">
              <div className="visa-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>24 - 48 Hrs</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 500 }}>Express eVisa Turnaround</div>
              </div>
            </div>

            <div className="visa-stat-item">
              <div className="visa-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>VFS & TLS</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 500 }}>Priority Slot Tracking</div>
              </div>
            </div>

            <div className="visa-stat-item">
              <div className="visa-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1.1 }}>100% Compliant</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 500 }}>Dossier & Vetting Protocol</div>
              </div>
            </div>
          </div>

          <div className="grid-3" id="gcc-visas">
            {/* GCC Visas */}
            <div className="visa-portfolio-card">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconGCC />
                </div>
                <span className="visa-badge-pill gold">GCC & Middle East</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">GCC Visa & Stamping Desk</h3>
                <span className="visa-card-subtitle">UAE · Saudi Arabia · Qatar · Kuwait · Oman</span>
              </div>

              <p className="visa-card-desc">
                Direct electronic processing and consular stamping for all Gulf Cooperation Council nations.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip fast">⚡ 24-48h Express</span>
                <span className="visa-spec-chip">📄 30/60 Days & Freelance</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Key Jurisdictions & Categories</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>UAE / Dubai:</strong> 30 & 60 Days Tourist, Express 24-hr, Investor & Freelance visas</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Saudi Arabia:</strong> Tourist eVisa, Family Visit, Business, Umrah & Work Stamping</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Qatar:</strong> Hayya eVisa, Business Visit, Commercial Stamping</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Kuwait & Oman & Bahrain:</strong> Family, Tourist, & Medical Stamping</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Fast-Track MOFA & Consular Submission</span>
                </div>
                <button className="btn btn-primary visa-apply-btn" onClick={() => openModal('GCC Visa Application')}>
                  <span>Apply GCC Visa</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* Schengen Visa */}
            <div className="visa-portfolio-card schengen">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconSchengen />
                </div>
                <span className="visa-badge-pill">Europe 27 Nations</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">Schengen Visa (Europe)</h3>
                <span className="visa-card-subtitle">France · Germany · Switzerland · Italy · Spain</span>
              </div>

              <p className="visa-card-desc">
                One single visa granting travel access to 27 European countries including France, Germany, Switzerland, Italy, and Spain.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip priority">📅 VFS & TLS Slot Booking</span>
                <span className="visa-spec-chip">🛡️ Mandatory Insurance Included</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Consular Dossier Specializations</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>All Categories:</strong> Tourist, Business, Family & Cultural Visas</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Slots:</strong> VFS Global & TLScontact appointment locking & tracking</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Dossier:</strong> Comprehensive Cover Letter & Day-by-day Itinerary</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Medical:</strong> Mandatory Embassy-Approved Travel Insurance included</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Consular Appointment & Itinerary Guaranteed</span>
                </div>
                <button className="btn btn-primary visa-apply-btn" onClick={() => openModal('Schengen Visa Processing')}>
                  <span>Apply Schengen</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* US & UK Visas */}
            <div className="visa-portfolio-card usuk">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconUSUK />
                </div>
                <span className="visa-badge-pill gold">USA & United Kingdom</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">USA & United Kingdom (UK)</h3>
                <span className="visa-card-subtitle">United States (B1/B2) · United Kingdom (Standard Visitor)</span>
              </div>

              <p className="visa-card-desc">
                Specialized assistance for high-scrutiny biometric and consular interview visa categories.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip gold">🎙️ 1-on-1 Mock Interview</span>
                <span className="visa-spec-chip">⭐ 6 Mo - 10 Yr Validity</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Specialized Application Suite</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>USA B1/B2:</strong> Complete DS-160 application & appointment tracking</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>1-on-1 US Mock Interview:</strong> Prepare with former visa specialists</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>UK Standard Visitor:</strong> 6 Months, 2 Years, 5 Years, and 10 Years visas</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Financial Vetting:</strong> Documentation & sponsor affidavit audit</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Consular Mock Interview Coaching Included</span>
                </div>
                <button className="btn btn-primary visa-apply-btn" onClick={() => openModal('US / UK Visa Filing')}>
                  <span>Apply US / UK</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* Canada & Australia */}
            <div className="visa-portfolio-card canaus">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconCanAus />
                </div>
                <span className="visa-badge-pill">Canada & Australia</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">Canada & Australia Visas</h3>
                <span className="visa-card-subtitle">Canada (TRV & Super Visa) · Australia (Subclass 600)</span>
              </div>

              <p className="visa-card-desc">
                Streamlined visitor visas, family reunions, and business delegations with high grant ratios.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip priority">🛂 Up to 10-Yr Multiple Entry</span>
                <span className="visa-spec-chip">👨‍👩‍👦 Super Visa Processing</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Program Specifications</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Canada TRV:</strong> Multiple-entry visitor visa valid up to passport validity</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Canada Super Visa:</strong> Long-term stay for parents and grandparents</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Australia Subclass 600:</strong> Tourist and Sponsored Family stream</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Biometrics:</strong> Priority appointment scheduling via VFS Desks</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>High-Grant Multi-Year Approvals</span>
                </div>
                <button className="btn btn-primary visa-apply-btn" onClick={() => openModal('Canada / Australia Visa')}>
                  <span>Apply Canada / Australia</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* East & Southeast Asia */}
            <div className="visa-portfolio-card asia">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconAsia />
                </div>
                <span className="visa-badge-pill emerald">Asia & Far East</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">Asian eVisas & Stamping</h3>
                <span className="visa-card-subtitle">Singapore · Malaysia · Thailand · Vietnam · Japan</span>
              </div>

              <p className="visa-card-desc">
                Hassle-free digital visas and embassy stickers for business, tourism, and transit across Asia.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip fast">⚡ 24-Hour Approval</span>
                <span className="visa-spec-chip">📲 100% Online Filing</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Covered Asia Destinations</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Singapore:</strong> Electronic Visa (e-Visa) authorized submission</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Malaysia:</strong> MDAC & eVisa Tourist / Social Visit Pass</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Thailand & Vietnam:</strong> eVisa / Visa on Arrival pre-approvals</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Japan, South Korea & China:</strong> Paper visa filing & embassy submission</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Fast-Track Electronic Clearance</span>
                </div>
                <button className="btn btn-primary visa-apply-btn" onClick={() => openModal('Asian eVisas')}>
                  <span>Apply Asian Visa</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* Rejection Recovery Desk */}
            <div className="visa-portfolio-card recovery">
              <div className="visa-card-header">
                <div className="visa-emblem-wrap">
                  <VisaIconRecovery />
                </div>
                <span className="visa-badge-pill amber">Specialized Advisory</span>
              </div>

              <div className="visa-card-title-group">
                <h3 className="visa-card-title">Visa Rejection Recovery Desk</h3>
                <span className="visa-card-subtitle">Refusal Forensic Audit · Appeals · Re-Filing Strategy</span>
              </div>

              <p className="visa-card-desc">
                Had your visa rejected previously? We perform in-depth forensic reviews of refusal reasons and re-file with confidence.
              </p>

              <div className="visa-spec-ribbon">
                <span className="visa-spec-chip gold">🔍 In-Depth Refusal Audit</span>
                <span className="visa-spec-chip">⚖️ IRCC GCMS & US 214(b)</span>
              </div>

              <div className="visa-coverage-wrap">
                <span className="visa-coverage-label">Recovery & Re-Filing Workflow</span>
                <ul className="visa-coverage-list">
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>US 214(b) Recovery:</strong> Strong ties evidence compilation & re-interview strategy</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Canada GCMS Notes:</strong> Ordering officer notes from IRCC</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Schengen Appeal:</strong> Remedying financial insufficiency & travel purpose</span>
                  </li>
                  <li>
                    <span className="visa-check-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span><strong>Audit:</strong> Transparent, honest feasibility audit before re-filing</span>
                  </li>
                </ul>
              </div>

              <div className="visa-card-footer">
                <div className="visa-assurance-tag gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Certified Consular Refusal Forensic Review</span>
                </div>
                <button className="btn btn-gold visa-apply-btn" onClick={() => openModal('Visa Rejection Case Review')}>
                  <span>Audit My Case Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Transparent 4-Step Visa Process</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-step-num">01</div>
              <h4>Profile & Document Audit</h4>
              <p>We review your passport, financials, travel history, and destination guidelines to verify total compliance.</p>
            </div>

            <div className="process-card">
              <div className="process-step-num">02</div>
              <h4>Application & Letter Drafting</h4>
              <p>Our visa officers draft professional cover letters, complete government portals, and arrange flight/hotel bookings.</p>
            </div>

            <div className="process-card">
              <div className="process-step-num">03</div>
              <h4>Appointment & Biometrics</h4>
              <p>We secure priority VFS/TLS/Embassy appointment dates and provide complete file dossiers with interview briefing.</p>
            </div>

            <div className="process-card">
              <div className="process-step-num">04</div>
              <h4>Tracking & Safe Delivery</h4>
              <p>We monitor consular updates and hand-deliver or express-courier your stamped passport securely to your door.</p>
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
                <h2>Need an Urgent Visa Assessment?</h2>
                <p>Send us your destination and passport nationality. Our visa experts will respond with requirements, processing timeline, and exact checklist.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-gold" onClick={() => openModal('Urgent Visa Assessment')}>
                  Request Visa Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
