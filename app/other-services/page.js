'use client';

import React from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

export default function OtherServicesPage() {
  const { openModal } = useInquiry();

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-title">Essential Travel, Attestation & Logistics Services</h1>
            <p className="page-description">
              A seamless suite of premium travel support services designed to handle every logistical detail of your domestic and international journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Overview */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">One-Stop Travel Hub</span>
              <h2 className="section-title">Reliable, Fast-Track Solutions Under One Roof</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Whether you are traveling for a corporate meeting, family vacation, employment abroad, or university admission, AMAAC INTERNATIONAL manages your flight bookings, government document attestations, express courier deliveries, hotel stays, chauffeur vehicles, and comprehensive medical insurance.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => openModal('Other Services Assistance')}>
                  Book a Service Now &rarr;
                </button>
                <a
                  href="https://wa.me/919846000000?text=Hello%20AMAAC%20INTERNATIONAL,%20I%20need%20assistance%20with%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Direct WhatsApp Support
                </a>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
                <img src="/assets/other-services.jpg" alt="AMAAC International Travel Concierge and Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Services Detailed Grid */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Full Service Spectrum</span>
            <h2 className="section-title">Explore Our 6 Core Auxiliary Services</h2>
            <p className="section-subtitle">
              Engineered for maximum reliability, transparency, and speed.
            </p>
          </div>

          {/* Trust & Performance Ribbon */}
          <div className="aux-trust-ribbon">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>100% Genuine Stamping</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Government & MEA Apostille</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>Express Turnaround</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Same-Day Processing & Booking</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>Best Fare Promise</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>IATA & Direct Hotel Contract Rates</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0f172a' }}>Global Network</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Doorstep Courier & Airport Logistics</span>
              </div>
            </div>
          </div>

          <div className="grid-3">
            {/* 1. Ticketing */}
            <div className="aux-service-card" id="ticketing">
              <div className="aux-card-top">
                <div className="aux-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                  </svg>
                </div>
                <span className="aux-card-badge blue">Ticketing Desk</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">Air Ticketing</h3>
                <span className="aux-card-tagline">Domestic & International Airline Reservations</span>
              </div>

              <p className="aux-card-desc">
                Direct domestic and international airline reservations across full-service and budget carriers worldwide.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>IATA Accredited global reservation system</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Special Student Fares with extra baggage (40kg+)</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Corporate bulk booking & group travel discounts</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>24/7 Rescheduling, date change & refund support</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Best Fare Guarantee</span>
                </div>
                <button className="btn btn-primary aux-btn" onClick={() => openModal('Flight Ticketing Booking')}>
                  Book Flights
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 2. Attestation */}
            <div className="aux-service-card theme-gold" id="attestation">
              <div className="aux-card-top">
                <div className="aux-icon-wrap gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <span className="aux-card-badge gold">Attestation Desk</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">Certificate Attestation</h3>
                <span className="aux-card-tagline">Government & Embassy Legalization</span>
              </div>

              <p className="aux-card-desc">
                Government certified authentication for educational degrees, marriage/birth certificates, and commercial documents.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Ministry of External Affairs (MEA) & Apostille</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>UAE, Saudi Arabia, Qatar, Oman & Kuwait Embassy</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>State HRD, Home Dept, GAD, & Notary Verification</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Fast-Track 5 to 7 Day Express Courier Processing</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill gold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>100% Genuine Stamping</span>
                </div>
                <button className="btn btn-gold aux-btn" onClick={() => openModal('Certificate Attestation Service')}>
                  Get Attestation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 3. Couriers */}
            <div className="aux-service-card theme-indigo" id="couriers">
              <div className="aux-card-top">
                <div className="aux-icon-wrap indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <span className="aux-card-badge indigo">Courier Logistics</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">International Couriers</h3>
                <span className="aux-card-tagline">Worldwide Express Document Shipping</span>
              </div>

              <p className="aux-card-desc">
                Reliable express courier and cargo shipping for academic documents, passports, and commercial parcels globally.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Global Door-to-Door Pickup and Delivery</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Live End-to-End Barcode GPS Tracking</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Document security tamper-evident packaging</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Express Delivery to GCC, Europe, UK, USA & Canada</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Secure & Insured</span>
                </div>
                <button className="btn btn-primary aux-btn" onClick={() => openModal('Courier Delivery Booking')}>
                  Ship Document
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 4. Hotel Bookings */}
            <div className="aux-service-card theme-emerald" id="hotels">
              <div className="aux-card-top">
                <div className="aux-icon-wrap emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <span className="aux-card-badge emerald">Hotel Stays</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">Hotel Bookings</h3>
                <span className="aux-card-tagline">Handpicked Luxury & City Accommodations</span>
              </div>

              <p className="aux-card-desc">
                Handpicked accommodations from luxury 5-star resort suites to economical, centrally-located city hotels.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Preferred corporate rates with global hotel chains</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Makkah & Madinah 5-Star Haram View Clock Tower Stays</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Complimentary daily breakfast & early check-in perks</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Free cancellation vouchers on select properties</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Verified Properties</span>
                </div>
                <button className="btn btn-primary aux-btn" onClick={() => openModal('Hotel Booking Reservation')}>
                  Find Hotel
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 5. Car Rentals */}
            <div className="aux-service-card theme-cyan" id="car-rentals">
              <div className="aux-card-top">
                <div className="aux-icon-wrap cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11 2 11.3V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                  </svg>
                </div>
                <span className="aux-card-badge cyan">Fleet & Transfers</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">Car Rentals & Transfers</h3>
                <span className="aux-card-tagline">VIP Chauffeurs & Self-Drive Fleets</span>
              </div>

              <p className="aux-card-desc">
                Private chauffeur-driven luxury cars, airport shuttle transfers, and self-drive vehicle fleets globally.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Airport Meet-and-Greet & VIP Transfers</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Luxury fleet: Mercedes, BMW, Audi, Lexus & SUVs</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Group coach buses (14 to 50 seaters) for tour groups</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>International Driving Permit (IDP) advisory</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Punctual & Courteous</span>
                </div>
                <button className="btn btn-primary aux-btn" onClick={() => openModal('Car Rental Transfer Booking')}>
                  Book Vehicle
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 6. Travel Insurance */}
            <div className="aux-service-card theme-rose" id="insurance">
              <div className="aux-card-top">
                <div className="aux-icon-wrap rose">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="aux-card-badge rose">Travel Insurance</span>
              </div>

              <div className="aux-card-title-group">
                <h3 className="aux-card-title">Travel Insurance</h3>
                <span className="aux-card-tagline">Embassy-Compliant Medical & Trip Protection</span>
              </div>

              <p className="aux-card-desc">
                Embassy-compliant comprehensive international travel insurance protecting your health and trip investment.
              </p>

              <div className="aux-features-wrap">
                <span className="aux-features-label">Service Specifications & Features</span>
                <ul className="aux-features-list">
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Mandatory Schengen & European &euro;30,000+ coverage</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Emergency medical, hospitalization & evacuation cover</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Baggage loss, flight delay & passport theft protection</span>
                  </li>
                  <li>
                    <span className="aux-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Instant digital policy delivery within 10 minutes</span>
                  </li>
                </ul>
              </div>

              <div className="aux-card-footer">
                <div className="aux-guarantee-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Cashless Hospital Network</span>
                </div>
                <button className="btn btn-primary aux-btn" onClick={() => openModal('Travel Insurance Policy')}>
                  Get Insured
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
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
                <h2>Require Immediate Travel or Legal Assistance?</h2>
                <p>Our dedicated operations desk is available round-the-clock for flight bookings, urgent embassy attestations, or express couriers.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-gold" onClick={() => openModal('Express Services Desk')}>
                  Request Urgent Assistance
                </button>
                <a
                  href="https://wa.me/919846000000?text=Hello%20AMAAC%20INTERNATIONAL,%20I%20need%20urgent%20service%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  WhatsApp Operations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
