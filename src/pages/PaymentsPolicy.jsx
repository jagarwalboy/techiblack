
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PaymentsPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Payments Policy - Techi Black | Payment Terms & Methods</title>
        <meta name="description" content="Learn about Techi Black's payment terms, accepted payment methods, billing cycles, and payment policies for our digital marketing services." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">
                  Payments Policy
                </h1>
                <p className="text-lg text-white/80">
                  Last updated: January 2025
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Payment Terms</h2>
                  <div className="text-white/80 space-y-4">
                    <p>Our standard payment terms are as follows:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Monthly Services:</strong> Payment due on the 1st of each month</li>
                      <li><strong>Project-Based Work:</strong> 50% upfront, 50% upon completion</li>
                      <li><strong>Website Development:</strong> 30% upfront, 40% at milestone, 30% upon completion</li>
                      <li><strong>Annual Packages:</strong> Payment due annually with 10% discount</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Accepted Payment Methods</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We accept the following payment methods:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Bank Transfer (NEFT/RTGS/IMPS)</li>
                      <li>UPI (Google Pay, PhonePe, Paytm)</li>
                      <li>Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                      <li>Digital Wallets</li>
                      <li>Cheque (for amounts above ₹50,000)</li>
                    </ul>
                    <p>All payments should be made in Indian Rupees (INR) unless otherwise agreed upon.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Billing and Invoicing</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Invoices are sent via email on the 25th of each month for the following month's services</li>
                      <li>All invoices include applicable GST as per Indian tax regulations</li>
                      <li>Payment is due within 7 days of invoice date</li>
                      <li>Late payment charges of 2% per month may apply after the due date</li>
                      <li>GST registration number and other tax details are provided on all invoices</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Service Suspension</h2>
                  <div className="text-white/80 space-y-4">
                    <p>In case of non-payment:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Services may be suspended after 15 days of non-payment</li>
                      <li>A reminder notice will be sent 3 days before suspension</li>
                      <li>Services will be resumed within 24 hours of payment clearance</li>
                      <li>Accounts overdue by 30 days may be terminated</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Pricing Changes</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Prices are subject to change with 30 days written notice</li>
                      <li>Existing contracts will honor the original pricing until renewal</li>
                      <li>Annual subscribers are protected from price increases during their contract period</li>
                      <li>Price changes due to scope modifications will be communicated immediately</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Taxes and Compliance</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
                      <li>GST at the prevailing rate will be added to all invoices</li>
                      <li>TDS deductions, if applicable, should be communicated in advance</li>
                      <li>We provide all necessary tax documents for your compliance requirements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Disputes and Resolution</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Payment disputes should be raised within 7 days of invoice receipt</li>
                      <li>We will investigate and respond to disputes within 3 business days</li>
                      <li>Services will continue during dispute resolution unless otherwise agreed</li>
                      <li>Unresolved disputes will be subject to Mumbai jurisdiction</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
                  <div className="text-white/80 space-y-4">
                    <p>For payment-related queries, contact:</p>
                    <ul className="space-y-2">
                      <li>Email: billing@techiblack.com</li>
                      <li>Phone: +91 98765 43210</li>
                      <li>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</li>
                    </ul>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaymentsPolicy;
