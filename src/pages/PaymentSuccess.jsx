import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
    <Helmet>
      <title>Payment Successful - Techi Black</title>
    </Helmet>
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for your payment. Your transaction was successful.<br/>Our team will contact you soon.</p>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  </div>
);

export default PaymentSuccess;
