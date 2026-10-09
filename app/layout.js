import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { InquiryProvider } from '@/components/InquiryContext';
import InquiryModal from '@/components/InquiryModal';
import { WhatsAppButton, ToastNotification } from '@/components/WhatsAppButton';

export const metadata = {
  title: 'AMAAC INTERNATIONAL | Global Tourism, Visa Services, Study Abroad & Travel Solutions',
  description: 'AMAAC INTERNATIONAL (amaacinternational.com) - Premier international gateway for Tourism (GCC, India, Asia), Global Visa Stamping, Study Abroad Counseling (UK, Canada, Europe, MBBS), Certificate Attestation, Air Ticketing & Corporate Logistics.',
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <InquiryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <InquiryModal />
          <WhatsAppButton />
          <ToastNotification />
        </InquiryProvider>
      </body>
    </html>
  );
}
