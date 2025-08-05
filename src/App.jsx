import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import Plans from '@/pages/Plans';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PaymentsPolicy from '@/pages/PaymentsPolicy';
import RefundPolicy from '@/pages/RefundPolicy';
import TermsConditions from '@/pages/TermsConditions';
import PaymentSuccess from '@/pages/PaymentSuccess';
import PaymentFailure from '@/pages/PaymentFailure';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payments-policy" element={<PaymentsPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;