import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your business growth and success.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and transparency.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and use cutting-edge strategies to keep you competitive.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution.'
    }
  ];

  const team = [
    {
      name: 'Ankit Rajpurohit',
      role: 'Founder & CEO',
      description: 'Digital marketing expert with 8+ years of experience helping businesses grow online.'
    },
    {
      name: 'Divyanshu Singh',
      role: 'Creative Director',
      description: 'Award-winning designer specializing in brand identity and digital experiences.'
    },
    {
      name: 'Mahendar Singh',
      role: 'Technical Lead',
      description: 'Full-stack developer with expertise in modern web technologies and optimization.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Techi Black | Leading Digital Marketing Agency</title>
        <meta name="description" content="Learn about Techi Black's mission, values, and expert team. We're a leading digital marketing agency dedicated to helping businesses grow their online presence and achieve success." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                About
                <span className="block gradient-text">Techi Black</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We're a passionate team of digital marketing experts dedicated to helping businesses thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  At Techi Black, we believe every business deserves to succeed online. Our mission is to democratize digital marketing by providing world-class services that are accessible, effective, and tailored to each client's unique needs.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  We combine creativity, technology, and data-driven strategies to help businesses of all sizes build their online presence, engage their audience, and achieve sustainable growth.
                </p>
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-8">
                  <img  
                    className="w-full h-64 object-cover rounded-xl"
                    alt="Team collaboration in modern office"
                   src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Numbers that speak to our commitment and success in digital marketing.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
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

        {/* Team Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Experienced professionals passionate about driving digital success for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-gray-900 font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm">
                    {member.description}
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
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join hundreds of businesses that trust Techi Black to drive their digital marketing success. Let's create something amazing together.
              </p>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg">
                <Link to="/contact">
                  Get Started Today
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

export default About;