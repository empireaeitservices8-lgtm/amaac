'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useInquiry } from '@/components/InquiryContext';

export default function TourismPage() {
  const { openModal } = useInquiry();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-title">Curated Global Tourism Experiences</h1>
            <p className="page-description">
              From the regal heritage and serene backwaters of India, to the futuristic luxury of the Arabian Gulf (GCC) and the tropical wonders of Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Destinations */}
      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            <button
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Destinations
            </button>
            <button
              className={`tab-btn ${activeTab === 'gcc' ? 'active' : ''}`}
              onClick={() => setActiveTab('gcc')}
            >
              GCC Highlights (Dubai, Saudi, Qatar)
            </button>
            <button
              className={`tab-btn ${activeTab === 'india' ? 'active' : ''}`}
              onClick={() => setActiveTab('india')}
            >
              Indian Tourism
            </button>
            <button
              className={`tab-btn ${activeTab === 'asia' ? 'active' : ''}`}
              onClick={() => setActiveTab('asia')}
            >
              Other Asian Countries
            </button>
          </div>

          {/* 1. GCC HIGHLIGHTS */}
          {(activeTab === 'all' || activeTab === 'gcc') && (
            <div id="gcc" style={{ marginBottom: '4rem' }}>
              <div style={{ borderLeft: '4px solid #d97706', paddingLeft: '1rem', marginBottom: '2rem' }}>
                <span className="section-tag" style={{ color: '#d97706' }}>Arabian Gulf Jewels</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)' }}>
                  GCC Highlights: Dubai, Saudi Arabia & Qatar
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Experience unmatched modern opulence, desert adventures, ancient heritage, and spiritual journeys.
                </p>
              </div>

              <div className="grid-3">
                {/* Dubai Card - Distinct Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/gcc-dubai.jpg" alt="Dubai UAE Luxury Tourism Burj Khalifa" />
                    <span className="card-tag">Dubai & Abu Dhabi, UAE</span>
                  </div>
                  <div className="card-body">
                    <h3>Dubai City of Wonders</h3>
                    <p>Explore the dazzling metropolis of futuristic skyscrapers, palm-shaped islands, and thrilling desert dunes.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Burj Khalifa At The Top 124th/148th floor</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Red Dune Desert Safari with BBQ Dinner</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Dubai Marina Luxury Yacht Cruise</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Day Trip to Abu Dhabi Sheikh Zayed Mosque</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>4N / 5D Packages</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Dubai UAE Tour Package')}>
                        Book Dubai
                      </button>
                    </div>
                  </div>
                </div>

                {/* Saudi Arabia Card - Distinct Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/saudi-alula.jpg" alt="Saudi Arabia AlUla and Riyadh Tourism" />
                    <span className="card-tag">Kingdom of Saudi Arabia</span>
                  </div>
                  <div className="card-body">
                    <h3>Saudi Arabia: Heritage & Umrah</h3>
                    <p>Discover Saudi's transformation from Riyadh's skyscrapers to the ancient tombs of AlUla, alongside curated Umrah & Ziyarat packages.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Riyadh Kingdom Tower & Boulevard City</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> AlUla Hegra UNESCO Heritage tours & Maraya</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Jeddah Historic Al-Balad & Red Sea waterfront</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Premium Umrah Packages (Makkah & Madinah 5-Star)</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>Customized Itineraries</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Saudi Arabia Tour / Umrah')}>
                        Inquire Saudi
                      </button>
                    </div>
                  </div>
                </div>

                {/* Qatar Card - Distinct Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/qatar-doha.jpg" alt="Qatar Doha Corniche Luxury Tourism" />
                    <span className="card-tag">Doha, Qatar</span>
                  </div>
                  <div className="card-body">
                    <h3>Qatar: The Pearl of Arabia</h3>
                    <p>Immerse yourself in world-class art, illuminated dhow cruises along Doha bay, and vibrant Bedouin traditions in Souq Waqif.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Doha Corniche & Museum of Islamic Art</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Historic Souq Waqif Spice & Falcon Market</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Khor Al Adaid Inland Sea 4x4 Safari</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Katara Cultural Village & The Pearl Island</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>3N / 4D Stopover & Tours</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Qatar Doha Tour Package')}>
                        Book Qatar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. INDIAN TOURISM */}
          {(activeTab === 'all' || activeTab === 'india') && (
            <div id="india" style={{ marginBottom: '4rem' }}>
              <div style={{ borderLeft: '4px solid #16a34a', paddingLeft: '1rem', marginBottom: '2rem' }}>
                <span className="section-tag" style={{ color: '#16a34a' }}>Heritage, Nature & Serenity</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)' }}>
                  Incredible Indian Tourism
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  From the tropical tranquil backwaters of the South to snow-capped Himalayan peaks in the North.
                </p>
              </div>

              <div className="grid-3">
                {/* Kerala - Distinct Houseboat Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/kerala-houseboat.jpg" alt="Kerala Backwaters Luxury Houseboat Alleppey" />
                    <span className="card-tag">God's Own Country</span>
                  </div>
                  <div className="card-body">
                    <h3>Kerala: Backwaters & Hills</h3>
                    <p>Cruise the tranquil palm-fringed backwaters on a private traditional houseboat and wander misty tea plantations.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Alleppey & Kumarakom Luxury Houseboat</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Munnar Tea Estates & Eravikulam National Park</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Thekkady Periyar Wildlife Sanctuary</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Kovalam & Varkala Cliff Sunset Beaches</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>5N / 6D Packages</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Kerala Tourism Package')}>
                        Book Kerala
                      </button>
                    </div>
                  </div>
                </div>

                {/* Golden Triangle - Distinct Taj Mahal Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/india-tourism.jpg" alt="Golden Triangle Delhi Agra Taj Mahal Jaipur" />
                    <span className="card-tag">Royal Heritage</span>
                  </div>
                  <div className="card-body">
                    <h3>Golden Triangle: Delhi, Agra, Jaipur</h3>
                    <p>Experience the glorious history of Mughal architecture, the eternal wonder of the Taj Mahal, and royal Rajput palaces.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Agra Taj Mahal Sunrise Tour & Agra Fort</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Jaipur Pink City, Amber Fort & City Palace</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Old Delhi Chandni Chowk & Qutub Minar</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Private chauffeur vehicle throughout tour</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>6N / 7D Royal Package</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Golden Triangle Tour')}>
                        Book Triangle
                      </button>
                    </div>
                  </div>
                </div>

                {/* Kashmir & Himalayas - Distinct Dal Lake Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/kashmir-dal-lake.jpg" alt="Kashmir Dal Lake Shikara and Himalayan Peaks" />
                    <span className="card-tag">Kashmir & Himalayas</span>
                  </div>
                  <div className="card-body">
                    <h3>Kashmir & Himalayan Escapes</h3>
                    <p>Escape to paradise on earth with pristine snow slopes, alpine meadows, and serene traditional wooden Shikara cruises.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Srinagar Dal Lake Shikara ride & Houseboats</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Gulmarg Gondola ride & Pahalgam Valleys</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Himachal (Manali, Shimla, Rohtang Pass)</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Goa Coastal luxury resorts & water sports</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>5N / 6D Escapes</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Kashmir Tour Package')}>
                        Inquire Kashmir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. OTHER ASIAN COUNTRIES */}
          {(activeTab === 'all' || activeTab === 'asia') && (
            <div id="asia">
              <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1rem', marginBottom: '2rem' }}>
                <span className="section-tag" style={{ color: '#2563eb' }}>Tropical Bliss & City Skylines</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)' }}>
                  Other Asian Countries
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  From vibrant street food markets to serene overwater villas and world-renowned theme parks.
                </p>
              </div>

              <div className="grid-2">
                {/* Bali - Distinct Rice Terrace Image */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/asia-tourism.jpg" alt="Bali Indonesia Rice Terraces and Tropical Resort" />
                    <span className="card-tag">Bali, Indonesia</span>
                  </div>
                  <div className="card-body">
                    <h3>Bali Tropical Paradise</h3>
                    <p>Lush emerald rice terraces, cliffside Uluwatu temples, volcanic sunrise treks, and luxury private pool villas.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Ubud Monkey Forest & Tegalalang Rice Terraces</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Nusa Penida Island day excursion (Kelingking Beach)</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Seminyak & Kuta sunset beach clubs</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Water sports at Tanjung Benoa</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>5N / 6D Bali Package</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Bali Indonesia Tour')}>
                        Book Bali
                      </button>
                    </div>
                  </div>
                </div>

                {/* Malaysia & Singapore - Distinct Marina Bay Night Skyline */}
                <div className="feature-card">
                  <div className="card-media">
                    <img src="/assets/singapore-marinabay.jpg" alt="Singapore Marina Bay Sands and Malaysia Kuala Lumpur" />
                    <span className="card-tag">Singapore & Malaysia</span>
                  </div>
                  <div className="card-body">
                    <h3>Singapore & Malaysia Twin Wonders</h3>
                    <p>Experience the thrilling blend of multicultural energy, futuristic skylines, universal theme parks, and lush rainforests.</p>
                    <ul className="card-features-list">
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Singapore Marina Bay Sands Skypark & Supertrees</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Sentosa Island & Universal Studios VIP passes</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Kuala Lumpur Petronas Towers & Batu Caves</li>
                      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Genting Highlands Cable Car & Theme Park</li>
                    </ul>
                    <div className="card-footer">
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>6N / 7D Twin Destination</span>
                      <button className="btn btn-primary btn-sm" onClick={() => openModal('Malaysia Singapore Tour')}>
                        Book Combo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">All-Inclusive Travel</span>
            <h2 className="section-title">The AMAAC INTERNATIONAL Guarantee</h2>
            <p className="section-subtitle">
              Every holiday package booked through AMAAC INTERNATIONAL includes comprehensive travel assurances for seamless peace of mind.
            </p>
          </div>

          <div className="grid-4">
            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Guaranteed Visas & Tickets</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>End-to-end flight booking and tourist visa application filing handled by our desk.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Curated Sightseeing & Desert Safaris</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Iconic tours from Dubai dune bashing & Qatar dhows to Kerala houseboats & Bali temples.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11 2 11.3V16c0 .6.4 1 1 1h2"/></svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Private Luxury Transfers</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Airport pick-up, drop-off, and dedicated AC vehicle for comfortable local sightseeing.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Tailor-Made Holiday Itineraries</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>100% custom day-by-day vacation planning for families, honeymooners, and private groups.</p>
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
                <h2>Have a Destination in Mind?</h2>
                <p>Tell us your preferred dates, budget, and travel companions. Our tourism planners will build your custom itinerary within 2 hours.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-gold" onClick={() => openModal('Custom Tourism Itinerary')}>
                  Build Custom Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
