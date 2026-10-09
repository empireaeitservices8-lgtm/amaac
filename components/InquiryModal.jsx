'use client';

import React, { useState } from 'react';
import { useInquiry } from './InquiryContext';

export default function InquiryModal() {
  const { isOpen, selectedService, closeModal, triggerToast } = useInquiry();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService,
    details: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      closeModal();
      triggerToast('Thank you! Your inquiry has been received. An AMAAC International specialist will connect with you within 15 minutes.');
    }, 700);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
          &times;
        </button>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>
          Request Consultation
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Connect with an authorized consultant for personalized options & quotes.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+91 / +971 ..."
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Service Category</label>
            <select
              className="form-control"
              value={formData.service || selectedService}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Tourism Packages (GCC / India / Asia)">Tourism Packages (GCC / India / Asia)</option>
              <option value="Global Visa Services">Global Visa Services (GCC / Schengen / US / UK)</option>
              <option value="Study Abroad Consultation">Study Abroad Counseling (UK / Canada / Europe / MBBS)</option>
              <option value="Certificate Attestation & MEA">Certificate Attestation & MEA</option>
              <option value="Flight Ticketing & Hotels">Flight Ticketing & Hotels</option>
              <option value="International Couriers">International Couriers</option>
              <option value="Car Rentals & Insurance">Car Rentals & Travel Insurance</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Travel Dates or Specific Requirements</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Provide destination, dates, degree certificates, or visa country..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
            {submitting ? 'Transmitting Request...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
