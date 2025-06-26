
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Techi Black | Service Refunds & Cancellations</title>
        <meta name="description" content="Understand Techi Black's refund policy for digital marketing services. Learn about our cancellation terms, refund eligibility, and process for different service types." />
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
                  Refund Policy
                </h1>
                <p className="text-lg text-white/80">
                  Last updated: January 2025
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. General Refund Policy</h2>
                  <div className="text-white/80 space-y-4">
                    <p>At Techi Black, we strive to deliver exceptional digital marketing services. Our refund policy varies based on the type of service provided:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Monthly subscription services</li>
                      <li>One-time project work</li>
                      <li>Website development projects</li>
                      <li>Advertising management services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Monthly Subscription Services</h2>
                  <div className="text-white/80 space-y-4">
                    <p><strong>Social Media Management & Other Monthly Services:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Cancellation allowed with 30 days written notice</li>
                      <li>No refund for the current month if services have been delivered</li>
                      <li>Partial refunds may be considered if services were not delivered as agreed</li>
                      <li>First month satisfaction guarantee - full refund if not satisfied within 15 days</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Website Development Projects</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Before project commencement:</strong> Full refund of advance payment</li>
                      <li><strong>After design approval:</strong> 50% of total project cost is non-refundable</li>
                      <li><strong>After development completion:</strong> No refunds, only revisions as per agreement</li>
                      <li><strong>Project cancellation:</strong> Payment for completed milestones is non-refundable</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Advertising Management Services</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Management fees are non-refundable once campaigns are live</li>
                      <li>Ad spend budget is separate and refundable if not utilized</li>
                      <li>Setup fees are non-refundable after campaign creation</li>
                      <li>Performance guarantees are subject to minimum campaign duration</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Refund Eligibility Criteria</h2>
                  <div className="text-white/80 space-y-4">
                    <p>Refunds may be considered in the following situations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Services were not delivered as per the agreed timeline</li>
                      <li>Quality of work does not meet the standards outlined in the contract</li>
                      <li>Technical issues on our end prevent service delivery</li>
                      <li>Breach of contract terms by Techi Black</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Non-Refundable Items</h2>
                  <div className="text-white/80 space-y-4">
                    <p>The following are generally non-refundable:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Third-party costs (domain registration, hosting, advertising spend)</li>
                      <li>Custom design work that has been approved by the client</li>
                      <li>Time spent on consultation and strategy development</li>
                      <li>Services that have been fully delivered as per agreement</li>
                      <li>Cancellations due to change in business requirements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Refund Process</h2>
                  <div className="text-white/80 space-y-4">
                    <p>To request a refund:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Submit a written refund request to refunds@techiblack.com</li>
                      <li>Include your invoice number and reason for refund</li>
                      <li>We will review and respond within 5 business days</li>
                      <li>Approved refunds will be processed within 7-10 business days</li>
                      <li>Refunds will be made to the original payment method</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Dispute Resolution</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We encourage open communication to resolve any issues</li>
                      <li>Escalated disputes will be reviewed by senior management</li>
                      <li>Mediation may be suggested for complex cases</li>
                      <li>Legal disputes will be subject to Mumbai jurisdiction</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                  <div className="text-white/80 space-y-4">
                    <p>For refund requests or questions about this policy:</p>
                    <ul className="space-y-2">
                      <li>Email: refunds@techiblack.com</li>
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

export default RefundPolicy;
