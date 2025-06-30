import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PaymentFailure = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
    <Helmet>
      <title>Payment Failed - Techi Black</title>
    </Helmet>
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-lg mb-6">Unfortunately, your payment could not be processed.<br/>Please try again or contact support.</p>
      <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2">
        <Link to="/plans">Back to Plans</Link>
      </Button>
    </div>
  </div>
);

export default PaymentFailure;
