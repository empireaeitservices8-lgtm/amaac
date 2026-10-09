'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useInquiry } from './InquiryContext';

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useInquiry();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tourism', href: '/tourism' },
    { name: 'Visa Services', href: '/visa' },
    { name: 'Study Abroad', href: '/study-abroad' },
    { name: 'Other Services', href: '/other-services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Untouched Logo */}
        <Link href="/" className="brand-logo-wrap" title="AMAAC INTERNATIONAL">
          <img
            src="/assets/logo.png"
            alt="AMAAC INTERNATIONAL Logo"
            className="brand-logo-img"
          />
          <span className="brand-logo-tagline">
            ISO 9001:2015 Certified Global Travel & Visa Partner
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-cta">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => openModal('General Consultation')}
          >
            Book Consultation
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
