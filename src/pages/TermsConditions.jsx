
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Techi Black | Service Terms & Legal Agreement</title>
        <meta name="description" content="Read Techi Black's terms and conditions for digital marketing services. Understand our service agreements, client responsibilities, and legal terms." />
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
                  Terms & Conditions
                </h1>
                <p className="text-lg text-white/80">
                  Last updated: January 2025
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <div className="text-white/80 space-y-4">
                    <p>By engaging Techi Black's services, you agree to be bound by these Terms and Conditions. These terms apply to all services provided by Techi Black, including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Social media management</li>
                      <li>Website development</li>
                      <li>Digital advertising management</li>
                      <li>SEO services</li>
                      <li>Digital marketing consulting</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Service Delivery</h2>
                  <div className="text-white/80 space-y-4">
                    <p><strong>Timeline and Deliverables:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Service timelines are estimates and may vary based on project complexity</li>
                      <li>Delays caused by client feedback or approval processes are not our responsibility</li>
                      <li>We will communicate any potential delays promptly</li>
                      <li>Force majeure events may affect delivery timelines</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
                  <div className="text-white/80 space-y-4">
                    <p>Clients are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing accurate and complete information required for services</li>
                      <li>Timely feedback and approvals as per agreed timelines</li>
                      <li>Ensuring all content provided is original or properly licensed</li>
                      <li>Maintaining confidentiality of login credentials and access information</li>
                      <li>Compliance with platform policies and legal requirements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                  <div className="text-white/80 space-y-4">
                    <p><strong>Ownership Rights:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Client retains ownership of their brand, logos, and provided content</li>
                      <li>Techi Black retains rights to methodologies, processes, and general knowledge</li>
                      <li>Custom-created content becomes client property upon full payment</li>
                      <li>We reserve the right to showcase work in our portfolio unless otherwise agreed</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We maintain strict confidentiality of all client information</li>
                      <li>Non-disclosure agreements are available upon request</li>
                      <li>Client data is protected according to our Privacy Policy</li>
                      <li>Access to client accounts is limited to authorized personnel only</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Performance and Results</h2>
                  <div className="text-white/80 space-y-4">
                    <p><strong>Service Expectations:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We provide professional services but cannot guarantee specific results</li>
                      <li>Digital marketing results depend on various external factors</li>
                      <li>We will use best practices and industry standards in all work</li>
                      <li>Performance metrics will be tracked and reported regularly</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Our liability is limited to the amount paid for services in the preceding 12 months</li>
                      <li>We are not liable for indirect, consequential, or punitive damages</li>
                      <li>Client is responsible for backing up their data and content</li>
                      <li>We are not liable for third-party platform changes or policies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                  <div className="text-white/80 space-y-4">
                    <p><strong>Contract Termination:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Either party may terminate with 30 days written notice</li>
                      <li>Immediate termination allowed for breach of contract</li>
                      <li>All outstanding payments are due upon termination</li>
                      <li>Client data will be provided in standard formats upon request</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>These terms may be updated with 30 days notice</li>
                      <li>Continued use of services constitutes acceptance of new terms</li>
                      <li>Major changes will be communicated directly to clients</li>
                      <li>Custom contract terms may override these general terms</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                  <div className="text-white/80 space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>These terms are governed by Indian law</li>
                      <li>Disputes will be subject to Mumbai jurisdiction</li>
                      <li>Mediation will be attempted before legal proceedings</li>
                      <li>English language version takes precedence over translations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                  <div className="text-white/80 space-y-4">
                    <p>For questions about these Terms & Conditions:</p>
                    <ul className="space-y-2">
                      <li>Email: legal@techiblack.com</li>
                      <li>Phone: +91 98765 43210</li>
                      <li>Address: Mumbai, India</li>
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

export default TermsConditions;
