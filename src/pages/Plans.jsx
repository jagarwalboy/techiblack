import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, CreditCard, Smartphone, Building2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PAYU_MERCHANT_KEY = 'XG67ge';
const PAYU_MERCHANT_SALT = 'tJAUeCbL9apmZOaGPBzrxl8LtmPYsXW4'; // For demo only, do NOT expose in production
const PAYU_BASE_URL = 'https://secure.payu.in/_payment'; // Use PayU test URL for sandbox

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const payuFormRef = useRef(null);
  const [payuData, setPayuData] = useState(null);

  const plans = [
    {
      id: 'social-media',
      name: 'Social Media Management',
      price: '₹18,000',
      period: '/month',
      description: 'Complete social media content and management package',
      features: [
        'Daily content creation and posting',
        'Social media strategy development',
        'Community management and engagement',
        'Monthly analytics and reporting',
        'Content calendar planning',
        'Brand voice development',
        'Hashtag research and optimization',
        'Social media advertising setup'
      ],
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'website-dev',
      name: 'Website Development',
      price: '₹35,000',
      period: 'starting from',
      description: 'Professional website development and design',
      features: [
        'Custom website design',
        'Responsive mobile optimization',
        'SEO-friendly development',
        'Content management system',
        'Contact forms and integrations',
        'Performance optimization',
        'Security implementation',
        '3 months free maintenance'
      ],
      popular: false,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'ad-management',
      name: 'Ad Management',
      price: '₹5,000',
      period: 'starting from',
      description: 'Google Ads and Meta Ads management services',
      features: [
        'Campaign strategy and setup',
        'Keyword research and optimization',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Conversion tracking setup',
        'Monthly performance reports',
        'Budget optimization',
        'A/B testing and refinement'
      ],
      popular: false,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, MasterCard, RuPay',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      icon: Smartphone,
      description: 'Google Pay, PhonePe, Paytm',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'All major banks supported',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Paytm, Amazon Pay, etc.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleGetQuote = (planName) => {
    toast({
      title: "Quote Request Submitted!",
      description: `We'll contact you soon with a custom quote for ${planName}. 🚀`,
    });
  };

  const handlePayNow = (plan) => {
    // Prepare PayU form data
    const txnid = 'Txn' + Date.now();
    const amount = plan.price.replace(/[^\d.]/g, '');
    const productinfo = plan.name;
    const firstname = 'Customer';
    const email = 'customer@email.com';
    const phone = '9999999999';
    // For demo, hash is not secure. In production, generate hash on server.
    const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_MERCHANT_SALT}`;
    // Simple SHA512 hash (for demo, use a backend in production)
    window.crypto.subtle.digest('SHA-512', new TextEncoder().encode(hashString)).then(buffer => {
      const hashArray = Array.from(new Uint8Array(buffer));
      const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setPayuData({
        key: PAYU_MERCHANT_KEY,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone,
        surl: window.location.origin + '/payment-success',
        furl: window.location.origin + '/payment-failure',
        hash
      });
      setTimeout(() => payuFormRef.current && payuFormRef.current.submit(), 500);
    });
  };

  const handlePaymentMethod = (method, plan) => {
    toast({
      title: "🚧 Payment Gateway Integration",
      description: "Payment processing isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    setShowPaymentOptions(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Techi Black | Affordable Digital Marketing Packages</title>
        <meta name="description" content="Explore Techi Black's competitive pricing plans for social media management, website development, and ad management. Starting from ₹5,000. Get custom quotes today!" />
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
                Choose Your Perfect
                <span className="block gradient-text">Digital Marketing Plan</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. All plans include consultation and custom strategies tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative glass-effect rounded-2xl p-8 card-hover ${
                    plan.popular ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-white/70 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/90">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      onClick={() => handlePayNow(plan)}
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3`}
                    >
                      Pay Now
                      <CreditCard className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleGetQuote(plan.name)}
                      variant="outline"
                      className="w-full border-gray-400 bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3"
                    >
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options Modal */}
        {showPaymentOptions && selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPaymentOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-effect rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Choose Payment Method
                </h3>
                <p className="text-white/70">
                  {selectedPlan.name} - {selectedPlan.price}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePaymentMethod(method, selectedPlan)}
                    className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white text-center transition-all hover:shadow-lg`}
                  >
                    <method.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-semibold">{method.name}</div>
                    <div className="text-xs opacity-80">{method.description}</div>
                  </motion.button>
                ))}
              </div>

              <Button
                onClick={() => setShowPaymentOptions(false)}
                variant="outline"
                className="w-full border-gray-400 bg-white text-gray-900 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* PayU Payment Form (hidden) */}
        {payuData && (
          <form ref={payuFormRef} action={PAYU_BASE_URL} method="post" style={{ display: 'none' }}>
            <input type="hidden" name="key" value={payuData.key} />
            <input type="hidden" name="txnid" value={payuData.txnid} />
            <input type="hidden" name="amount" value={payuData.amount} />
            <input type="hidden" name="productinfo" value={payuData.productinfo} />
            <input type="hidden" name="firstname" value={payuData.firstname} />
            <input type="hidden" name="email" value={payuData.email} />
            <input type="hidden" name="phone" value={payuData.phone} />
            <input type="hidden" name="surl" value={payuData.surl} />
            <input type="hidden" name="furl" value={payuData.furl} />
            <input type="hidden" name="hash" value={payuData.hash} />
          </form>
        )}

        {/* Additional Info */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Every business is unique. Our pricing is flexible and can be customized based on your specific requirements, budget, and goals. Contact us for a personalized consultation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Consultation</h3>
                  <p className="text-white/70 text-sm">Free initial consultation to understand your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Quote</h3>
                  <p className="text-white/70 text-sm">Tailored pricing based on your requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Get Started</h3>
                  <p className="text-white/70 text-sm">Begin your digital transformation journey</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg mt-8">
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plans;
