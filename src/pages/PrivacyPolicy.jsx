
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Techi Black | Data Protection & Privacy</title>
        <meta name="description" content="Techi Black's privacy policy outlines how we collect, use, and protect your personal information. Learn about our commitment to data security and privacy." />
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
                  Privacy Policy
                </h1>
                <p className="text-lg text-white/80">
                  Last updated: January 2025
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fill out our contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a consultation</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                    <p>This may include your name, email address, phone number, company information, and any other details you choose to provide.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide and improve our digital marketing services</li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Send you marketing communications (with your consent)</li>
                      <li>Analyze website usage and improve user experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>To trusted service providers who assist in operating our website and conducting business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                  <div className="text-white/80 space-y-4">
                    <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                  <div className="text-white/80 space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>File a complaint with relevant authorities</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                  <div className="text-white/80 space-y-4">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul className="space-y-2">
                      <li>Email: privacy@techiblack.com</li>
                      <li>Phone: +91 98765 43210</li>
                      <li>Address: Mumbai, India</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                  <div className="text-white/80 space-y-4">
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
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

export default PrivacyPolicy;
