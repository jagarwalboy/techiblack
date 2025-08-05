
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Globe, 
  Target, 
  BarChart3, 
  Megaphone, 
  Search,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and community management across all major platforms.',
      features: [
        'Content creation and curation',
        'Daily posting and scheduling',
        'Community engagement',
        'Social media advertising',
        'Analytics and reporting',
        'Brand voice development'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Professional, responsive websites that convert visitors into customers and represent your brand perfectly.',
      features: [
        'Custom website design',
        'Mobile-responsive development',
        'E-commerce integration',
        'SEO optimization',
        'Content management systems',
        'Performance optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'Strategic Google Ads campaigns that drive qualified traffic and maximize your return on investment.',
      features: [
        'Keyword research and strategy',
        'Campaign setup and optimization',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Conversion tracking',
        'Performance monitoring'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Megaphone,
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Targeted social media advertising campaigns that reach your ideal customers and drive engagement.',
      features: [
        'Audience research and targeting',
        'Creative ad design',
        'Campaign optimization',
        'A/B testing',
        'Retargeting campaigns',
        'ROI tracking and reporting'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility in search results and attract organic traffic from your target audience.',
      features: [
        'Technical SEO audits',
        'Keyword optimization',
        'Content strategy',
        'Link building',
        'Local SEO',
        'Performance tracking'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing Analytics',
      description: 'Comprehensive analytics and reporting to track performance and optimize your marketing strategies.',
      features: [
        'Performance dashboards',
        'ROI analysis',
        'Conversion tracking',
        'Custom reporting',
        'Data visualization',
        'Strategic recommendations'
      ],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services - Techi Black | Social Media, SEO, Web Development</title>
        <meta name="description" content="Comprehensive digital marketing services including social media management, website development, Google Ads, Meta Ads, SEO, and analytics. Grow your business online with Techi Black." />
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
                Comprehensive
                <span className="block gradient-text">Digital Marketing Services</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                From social media management to website development, we offer a complete suite of digital marketing services to help your business thrive online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 card-hover group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold`}
                  >
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We follow a systematic approach to ensure your digital marketing success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business, competitors, and target audience to create a tailored strategy.'
                },
                {
                  step: '02',
                  title: 'Strategy Development',
                  description: 'Custom digital marketing strategy aligned with your business goals and budget.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute campaigns across chosen channels with continuous monitoring and optimization.'
                },
                {
                  step: '04',
                  title: 'Reporting & Optimization',
                  description: 'Regular performance reports and strategy refinements for maximum ROI.'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-12 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss how our digital marketing services can help you achieve your business goals and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg">
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                  <Link to="/plans">
                    View Pricing Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
