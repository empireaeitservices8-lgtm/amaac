'use client';

import React from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

function FlagUK() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="United Kingdom Flag">
      <clipPath id="flag-clip-uk"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-uk)">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#ffffff" strokeWidth="8"/>
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30 0 v40 M0 20 h60" stroke="#ffffff" strokeWidth="12"/>
        <path d="M30 0 v40 M0 20 h60" stroke="#C8102E" strokeWidth="7"/>
      </g>
    </svg>
  );
}

function FlagCanada() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="Canada Flag">
      <clipPath id="flag-clip-ca"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-ca)">
        <rect width="60" height="40" fill="#ffffff"/>
        <rect width="15" height="40" fill="#D80621"/>
        <rect x="45" width="15" height="40" fill="#D80621"/>
        <path d="M30 8 l2.5 5.5 4.5-2.5-1.5 6 6 1.5-5 5 2.5 5.5-6.5-2.5-1 6.5-1-6.5-6.5 2.5 2.5-5.5-5-5 6-1.5-1.5-6 4.5 2.5z" fill="#D80621"/>
      </g>
    </svg>
  );
}

function FlagAustralia() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="Australia Flag">
      <clipPath id="flag-clip-au"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-au)">
        <rect width="60" height="40" fill="#00008B"/>
        <g transform="scale(0.5)">
          <rect width="60" height="40" fill="#012169"/>
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#ffffff" strokeWidth="8"/>
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30 0 v40 M0 20 h60" stroke="#ffffff" strokeWidth="12"/>
          <path d="M30 0 v40 M0 20 h60" stroke="#C8102E" strokeWidth="7"/>
        </g>
        <circle cx="15" cy="30" r="3.5" fill="#ffffff"/>
        <circle cx="45" cy="11" r="1.8" fill="#ffffff"/>
        <circle cx="52" cy="17" r="1.8" fill="#ffffff"/>
        <circle cx="51" cy="30" r="1.8" fill="#ffffff"/>
        <circle cx="41" cy="24" r="1.8" fill="#ffffff"/>
        <circle cx="47" cy="22" r="1.2" fill="#ffffff"/>
      </g>
    </svg>
  );
}

function FlagGermany() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="Germany Flag">
      <clipPath id="flag-clip-de"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-de)">
        <rect width="60" height="13.34" fill="#000000"/>
        <rect y="13.34" width="60" height="13.34" fill="#DD0000"/>
        <rect y="26.68" width="60" height="13.34" fill="#FFCE00"/>
      </g>
    </svg>
  );
}

function FlagIreland() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="Ireland Flag">
      <clipPath id="flag-clip-ie"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-ie)">
        <rect width="20" height="40" fill="#169B62"/>
        <rect x="20" width="20" height="40" fill="#ffffff"/>
        <rect x="40" width="20" height="40" fill="#FF883E"/>
      </g>
    </svg>
  );
}

function FlagEuropeMBBS() {
  return (
    <svg viewBox="0 0 60 40" width="44" height="30" aria-label="Europe Medical Flag">
      <clipPath id="flag-clip-eu"><rect width="60" height="40" rx="4"/></clipPath>
      <g clipPath="url(#flag-clip-eu)">
        <rect width="60" height="40" fill="#003399"/>
        <circle cx="30" cy="20" r="13" fill="none" stroke="#FFCC00" strokeWidth="2.5" strokeDasharray="3 3.8"/>
        <rect x="26" y="14" width="8" height="12" rx="1.5" fill="#ffffff"/>
        <rect x="24" y="16" width="12" height="8" rx="1.5" fill="#ffffff"/>
        <path d="M30 15 v10 M25 20 h10" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export default function StudyAbroadPage() {
  const { openModal } = useInquiry();

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-title">Premier Overseas Education & Global Admissions</h1>
            <p className="page-description">
              Empowering ambitious students with admissions to prestigious world universities, post-study work visa rights, scholarship access, and direct medical (MBBS) pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Feature Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Shape Your Future</span>
              <h2 className="section-title">Your Direct Pathway to World-Class Campuses</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Studying abroad opens doors to high-paying international careers, global networking, and permanent residency opportunities. At AMAAC INTERNATIONAL, our senior overseas counselors provide tailored university shortlisting, statement of purpose (SOP) reviews, scholarship filings, and 100% compliant student visa processing.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-gold" onClick={() => openModal('Free Profile Evaluation')}>
                  Book 1-on-1 Counseling &rarr;
                </button>
                <a
                  href="https://wa.me/919400290890?text=Hello%20AMAAC%20INTERNATIONAL,%20I%20want%20to%20study%20abroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  WhatsApp Study Advisor
                </a>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
                <img src="/assets/study-abroad.jpg" alt="AMAAC International Students Studying Abroad" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Countries Section */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)' }} id="destinations">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Destinations Highlighted</span>
            <h2 className="section-title">Top Global Study Destinations</h2>
            <p className="section-subtitle">
              Carefully curated countries selected for academic ranking, post-study work rights, affordable tuition, and high employment returns.
            </p>
          </div>

          <div className="grid-3">
            {/* 1. United Kingdom (UK) */}
            <div className="study-card">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagUK />
                  </div>
                  <span className="study-highlight-badge">2-Year PSW Visa</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">United Kingdom</h3>
                  <span className="study-country-sub">England &bull; Scotland &bull; Wales</span>
                </div>
              </div>

              <p className="study-card-desc">
                Home to historic Russell Group institutions and cutting-edge research facilities with fast-track 1-Year Master&apos;s degrees.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Post-Study Work</span>
                  <span className="meta-val">2 to 3 Years</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Degree Duration</span>
                  <span className="meta-val">UG 3 Yrs / PG 1 Yr</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Intakes</span>
                  <span className="meta-val">Sept / Jan / May</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">English Req</span>
                  <span className="meta-val">IELTS / MOI Waiver</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Russell Group & Top 50 UK Universities</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>20 Hours/Week Part-time Work Rights</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Partial & Merit Scholarships up to &pound;5,000</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-primary study-apply-btn" onClick={() => openModal('Study in UK Counseling')}>
                  Apply for UK
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 2. Canada */}
            <div className="study-card">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagCanada />
                  </div>
                  <span className="study-highlight-badge">PGWP & PR Pathway</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">Canada</h3>
                  <span className="study-country-sub">Top DLIs &bull; Express Entry</span>
                </div>
              </div>

              <p className="study-card-desc">
                Welcoming, multicultural society with top Designated Learning Institutions (DLI) and direct post-graduation work opportunities.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Post-Study Work</span>
                  <span className="meta-val">Up to 3 Years PGWP</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Work Rights</span>
                  <span className="meta-val">24 Hrs/Wk Part-time</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Intakes</span>
                  <span className="meta-val">Sept / Jan / May</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Pathway</span>
                  <span className="meta-val">Express Entry / PNP</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Leading Public Universities & Colleges</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Co-op Programs with Paid Internships</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>High Quality of Living & Healthcare</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-primary study-apply-btn" onClick={() => openModal('Study in Canada Counseling')}>
                  Apply for Canada
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 3. Australia */}
            <div className="study-card">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagAustralia />
                  </div>
                  <span className="study-highlight-badge">High Part-time Wage</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">Australia</h3>
                  <span className="study-country-sub">Group of Eight (Go8) &bull; Subclass 500</span>
                </div>
              </div>

              <p className="study-card-desc">
                World-renowned Group of Eight (Go8) research universities with sunny weather and exceptional student lifestyle.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Post-Study Work</span>
                  <span className="meta-val">2 to 4+ Years PSW</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Min. Wage</span>
                  <span className="meta-val">AUD $24.10 / hr</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Intakes</span>
                  <span className="meta-val">Feb / July / Nov</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Regional Bonus</span>
                  <span className="meta-val">+1 to 2 Yrs PSW</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>High Demand for IT, Nursing & Engineering</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>48 Hours per Fortnight Working Rights</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Subclass 500 Visa Guidance</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-primary study-apply-btn" onClick={() => openModal('Study in Australia Counseling')}>
                  Apply for Australia
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 4. Germany */}
            <div className="study-card">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagGermany />
                  </div>
                  <span className="study-highlight-badge gold">Tuition-Free Public Univ</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">Germany</h3>
                  <span className="study-country-sub">TU9 Universities &bull; EU Blue Card</span>
                </div>
              </div>

              <p className="study-card-desc">
                Europe&apos;s economic engine offering world-class engineering, technology, and management programs with zero tuition fees.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Tuition Fees</span>
                  <span className="meta-val">&euro;0 to &euro;500 / Sem</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Post-Study Work</span>
                  <span className="meta-val">18-Month Job Seeker</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Intakes</span>
                  <span className="meta-val">Winter (Oct) / Summer</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Medium</span>
                  <span className="meta-val">100% English Taught</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>TU9 & Prestigious State Public Universities</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>EU Blue Card Fast Track for Graduates</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Blocked Account & APS Certificate Guidance</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-primary study-apply-btn" onClick={() => openModal('Study in Germany Counseling')}>
                  Apply for Germany
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 5. Ireland */}
            <div className="study-card">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagIreland />
                  </div>
                  <span className="study-highlight-badge">European Tech Hub</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">Ireland</h3>
                  <span className="study-country-sub">English-Speaking EU Gateway</span>
                </div>
              </div>

              <p className="study-card-desc">
                The European headquarters of Google, Meta, Apple, Pfizer & TikTok. English-speaking EU country with vibrant career opportunities.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Post-Study Work</span>
                  <span className="meta-val">2-Year Stay Back</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Language</span>
                  <span className="meta-val">Native English</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Intakes</span>
                  <span className="meta-val">Sept / Jan</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Tech HQ</span>
                  <span className="meta-val">Top 10 Global Tech Firms</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Trinity College Dublin, UCD & National Universities</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>High Starting Salaries for Tech & Pharma</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Critical Skills Employment Permit Pathway</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-primary study-apply-btn" onClick={() => openModal('Study in Ireland Counseling')}>
                  Apply for Ireland
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 6. European MBBS Programs */}
            <div className="study-card featured-mbbs">
              <div className="study-card-header">
                <div className="study-card-top-bar">
                  <div className="country-flag-icon-wrap">
                    <FlagEuropeMBBS />
                  </div>
                  <span className="study-highlight-badge emerald">WHO / NMC Approved</span>
                </div>
                <div className="study-country-meta">
                  <h3 className="study-country-name">MBBS in Europe</h3>
                  <span className="study-country-sub">Georgia &bull; Uzbekistan &bull; Europe</span>
                </div>
              </div>

              <p className="study-card-desc">
                Direct English-medium MBBS programs in Georgia, Uzbekistan & Europe with no entrance donation and low tuition fees.
              </p>

              <div className="study-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Tuition / Year</span>
                  <span className="meta-val">$4,500 - $6,500 USD</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Medium</span>
                  <span className="meta-val">100% English</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Recognition</span>
                  <span className="meta-val">WHO, ECFMG & NMC</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Eligibility</span>
                  <span className="meta-val">50% in PCB + NEET</span>
                </div>
              </div>

              <div className="study-benefits-wrap">
                <span className="study-benefits-label">Key Highlights & Work Rights</span>
                <ul className="study-benefits-list">
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Georgia (Tbilisi State, SEU, David Tvildiani)</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>High FMGE / USMLE / PLAB Success Rate</span>
                  </li>
                  <li>
                    <span className="study-check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Safe Campuses with Indian Food & Hostels</span>
                  </li>
                </ul>
              </div>

              <div className="study-card-footer">
                <button className="btn btn-gold study-apply-btn" onClick={() => openModal('MBBS Abroad Admission')}>
                  Apply for MBBS
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Other Popular Study Countries */}
          <div style={{ marginTop: '3.5rem', background: '#f8fafc', padding: '2.25rem 2rem', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '0.35rem' }}>Global Reach</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--primary)', margin: 0 }}>
                  Other Featured Study Destinations
                </h3>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Global Admissions Assistance Available</span>
            </div>
            <div className="grid-3" style={{ gap: '1.25rem' }}>
              <div style={{ background: '#ffffff', padding: '1.35rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.03)' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 700 }}>United States (USA)</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>Tier-1 Ivy League and state universities with 3-Year STEM OPT extension, generous research grants, and global prestige.</p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.35rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.03)' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 700 }}>New Zealand</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>Exceptional educational quality, pristine safety, high quality of life, and 3-year post-study open work visas.</p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.35rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.03)' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 700 }}>Singapore & France</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>World-class business schools (INSEAD, NUS, ESSEC) with 5-year Schengen alumni visas and luxury brand management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Student Support */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Student Support</span>
            <h2 className="section-title">End-to-End Admission & Visa Ecosystem</h2>
            <p className="section-subtitle">
              AMAAC INTERNATIONAL stands by your side at every step, from selecting your ideal course to landing at your university accommodation.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>University Shortlisting</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Honest evaluation of your grades, career goals, and budget to pinpoint the best-fit institutions with maximum admission probability.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>SOP & LOR Editorial Review</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Polished Statements of Purpose and Letters of Recommendation written to highlight your unique academic strengths to admissions committees.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>Scholarship & Loan Guidance</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Guidance on early university scholarships, government grants, and hassle-free education loan sanctioning from partner banks.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>100% Student Visa Filing</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Thorough file creation for CAS/I-20, financial sponsorship affidavits, and 1-on-1 embassy mock interview preparation.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>Certificate Attestation & Apostille</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>In-house MEA, Apostille, and embassy attestation of educational degree transcripts for overseas university admissions.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>Flight, Forex & Accommodation</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Discounted student airfares with extra luggage allowance (40kg+), university dorm bookings, and international multi-currency cards.</p>
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
                <h2>Ready to Begin Your International Academic Journey?</h2>
                <p>Get your profile assessed by senior education consultants. Zero service charge on university applications for select partner institutions.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-gold" onClick={() => openModal('Study Abroad Free Profile Evaluation')}>
                  Get Free Profile Evaluation
                </button>
                <a
                  href="https://wa.me/919400290890?text=Hello%20AMAAC%20INTERNATIONAL,%20I%20want%20to%20apply%20for%20study%20abroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Chat With Counselor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
