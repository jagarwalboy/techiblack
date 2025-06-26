import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Social Media Management',
    'Website Development',
    'Google Ads Management',
    'Meta Ads (Facebook & Instagram)',
    'Search Engine Optimization',
    'Digital Marketing Analytics',
    'Custom Package'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@techiblack.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8209024943',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Gurudwara, 51B( Basement, Malviya Nagar Road, Block H 6, Malviya Nagar, New Delhi, Delhi 110017',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend support available'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Techi Black | Get Your Free Digital Marketing Consultation</title>
        <meta name="description" content="Contact Techi Black for a free digital marketing consultation. Call +91 98765 43210 or email info@techiblack.com. Located in Mumbai, India. Get started today!" />
      </Helmet>

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Get In
                <span className="block gradient-text">Touch With Us</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Ready to transform your digital presence? Let's discuss how we can help your business grow and succeed online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-yellow-400 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-white/70 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="+91 8209024943"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-white/80 text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-900">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-900">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 text-lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our Location
                  </h3>
                  <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover rounded-lg"
                      alt="Techi Black office location in Mumbai"
                     src="https://images.unsplash.com/photo-1683022929127-d97c5c34db19" />
                  </div>
                  <p className="text-white/80 mt-4 text-sm">
                    Located in Malviya Nagar, New Delhi, our office is easily accessible and equipped with modern facilities for client meetings.
                  </p>
                </div>

                {/* Quick Response Promise */}
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Quick Response Guarantee
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">Response within 2 hours during business hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">Free consultation call within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">Custom proposal within 48 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">Weekend emergency support available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/80">
                Quick answers to common questions about our services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you start working on my project?",
                  answer: "We can typically start within 1-2 business days after our initial consultation and agreement signing. For urgent projects, same-day starts are possible."
                },
                {
                  question: "Do you work with businesses of all sizes?",
                  answer: "Yes! We work with startups, small businesses, and large enterprises. Our services are scalable and customized to fit your budget and goals."
                },
                {
                  question: "What's included in your monthly reporting?",
                  answer: "Our monthly reports include performance metrics, ROI analysis, campaign insights, recommendations for improvement, and a strategy review call."
                },
                {
                  question: "Can I cancel my service anytime?",
                  answer: "Yes, our contracts are flexible. You can cancel with 30 days notice. We believe in earning your business every month through results."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;