import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PAYU_MERCHANT_KEY = 'XG67ge';
const PAYU_MERCHANT_SALT = 'tJAUeCbL9apmZOaGPBzrxl8LtmPYsXW4'; // For demo only, do NOT expose in production
const PAYU_BASE_URL = 'https://secure.payu.in/_payment'; // Use PayU test URL for sandbox

function handlePayNowBooking(setPayuData, payuFormRef, toast) {
  const txnid = 'Txn' + Date.now();
  const amount = '999';
  const productinfo = 'Service Booking (Non-Refundable)';
  const firstname = 'Customer';
  const email = 'customer@email.com';
  const phone = '9999999999';
  const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_MERCHANT_SALT}`;
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
    toast({
      title: 'Booking Initiated!',
      description: 'Thank you for booking. We will connect you shortly.',
    });
    setTimeout(() => payuFormRef.current && payuFormRef.current.submit(), 500);
  });
}

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Strategies designed to accelerate your business growth and maximize ROI.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering exceptional results.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful campaigns and satisfied clients.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
  ];

  const payuFormRef = useRef(null);
  const [payuData, setPayuData] = useState(null);

  return (
    <>
      <Helmet>
        <title>Techi Black - Digital Marketing Agency | Grow Your Business Online</title>
        <meta name="description" content="Techi Black is a leading digital marketing agency specializing in social media management, website development, and online advertising. Boost your business with our expert services." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Elevate Your
                <span
                  className="block font-extrabold text-transparent bg-clip-text text-5xl md:text-6xl lg:text-7xl"
                  style={{
                    background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 50%, #f59e42 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 12px rgba(40,40,80,0.25)'
                  }}
                >
                  Digital Presence
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your business with our comprehensive digital marketing solutions. 
                From social media management to website development, we've got you covered.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg">
                  <Link to="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold border-0 hover:from-purple-700 hover:to-red-600 px-8 py-3 text-lg group shadow-lg">
                    <Link to="/services" className="relative z-10 flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                      Explore Services
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-xl border-0 transition-all duration-300 focus:ring-4 focus:ring-pink-200 focus:outline-none group"
                  onClick={() => handlePayNowBooking(setPayuData, payuFormRef, toast)}
                >
                  <span className="inline-block align-middle">Book Now for ₹999</span>
                  <span className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                </Button>
              </motion.div>
              {/* PayU Payment Form (hidden) for Booking Button */}
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
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-float"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ animationDelay: '2s' }}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Techi Black?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We combine creativity, strategy, and technology to deliver exceptional results for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-effect rounded-xl p-8 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have grown their businesses with our digital marketing expertise.
              </p>
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
