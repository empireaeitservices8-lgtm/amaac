'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-logo-wrap">
              {/* Untouched Logo */}
              <img
                src="/assets/logo.png"
                alt="AMAAC INTERNATIONAL Logo"
                className="brand-logo-img"
                style={{ height: '56px' }}
              />
              <span className="brand-logo-tagline">
                ISO 9001:2015 Certified Global Travel & Visa Partner
              </span>
            </Link>
            <p>
              AMAAC INTERNATIONAL is your premier gateway to bespoke global tourism, certified visa processing, top university admissions, and reliable corporate travel logistics.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tourism">Tourism</Link></li>
              <li><Link href="/visa">Visa Services</Link></li>
              <li><Link href="/study-abroad">Study Abroad</Link></li>
              <li><Link href="/other-services">Other Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Key Services</h4>
            <ul className="footer-links">
              <li><Link href="/tourism#gcc">GCC Tourism (Dubai, Saudi, Qatar)</Link></li>
              <li><Link href="/tourism#india">Incredible Indian Tourism</Link></li>
              <li><Link href="/visa#gcc-visas">GCC & Global Visa Stamping</Link></li>
              <li><Link href="/study-abroad#destinations">UK, Canada & MBBS Abroad</Link></li>
              <li><Link href="/other-services#attestation">Certificate Attestation & MEA</Link></li>
              <li><Link href="/other-services#ticketing">Air Ticketing & Hotel Stays</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Global Contacts</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Corporate Hub: Kochi & Calicut, Kerala, India & Dubai, UAE</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 98460 00000 / +971 50 000 0000</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@amaacinternational.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 AMAAC INTERNATIONAL. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
