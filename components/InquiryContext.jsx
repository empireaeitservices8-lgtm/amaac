'use client';

import React, { createContext, useContext, useState } from 'react';

const InquiryContext = createContext();

export function InquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Inquiry');
  const [toastMessage, setToastMessage] = useState('');

  const openModal = (service = 'General Inquiry') => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  return (
    <InquiryContext.Provider value={{ isOpen, selectedService, openModal, closeModal, triggerToast, toastMessage }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  return useContext(InquiryContext);
}
