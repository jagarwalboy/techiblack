
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "10 Social Media Marketing Strategies That Actually Work in 2025",
      excerpt: "Discover the latest social media marketing strategies that are driving real results for businesses. From AI-powered content creation to community building, learn what's working now.",
      content: `Social media marketing continues to evolve at breakneck speed. In 2025, successful brands are focusing on authentic engagement, AI-assisted content creation, and building genuine communities around their products and services.

Key strategies include:
• Leveraging AI tools for content personalization
• Building micro-communities within larger platforms
• Using interactive content like polls, quizzes, and live streams
• Focusing on video-first content strategies
• Implementing social commerce features
• Creating user-generated content campaigns
• Utilizing social listening for brand monitoring
• Developing platform-specific content strategies
• Building authentic influencer partnerships
• Measuring ROI with advanced analytics tools

The most successful brands are those that treat social media as a two-way conversation rather than a broadcasting channel. They respond quickly to comments, engage with their community, and provide real value through their content.`,
      author: "Ankit Rajpurohit",
      date: "2025-01-15",
      category: "Social Media",
      readTime: "8 min read",
      views: "2.5K",
      image: "Modern social media dashboard with analytics and engagement metrics",
      tags: ["Social Media", "Marketing Strategy", "2025 Trends"]
    },
    {
      id: 2,
      title: "The Complete Guide to Google Ads for Small Businesses",
      excerpt: "Master Google Ads with this comprehensive guide designed specifically for small businesses. Learn how to maximize your ROI and compete with larger companies on a smaller budget.",
      content: `Google Ads can be a game-changer for small businesses when executed correctly. The key is understanding how to optimize your campaigns for maximum ROI while working within budget constraints.

Essential steps for success:
• Conduct thorough keyword research using free and paid tools
• Create compelling ad copy that speaks to your target audience
• Design high-converting landing pages
• Set up proper conversion tracking
• Use negative keywords to avoid irrelevant clicks
• Implement ad extensions to improve visibility
• Monitor and adjust bids regularly
• Test different ad variations continuously
• Focus on local targeting for location-based businesses
• Utilize remarketing to re-engage previous visitors

Small businesses often make the mistake of trying to compete on broad, expensive keywords. Instead, focus on long-tail keywords and local search terms where you can achieve better results with smaller budgets.

Budget management is crucial. Start small, test what works, then scale successful campaigns. Always monitor your cost-per-acquisition and ensure it aligns with your business goals.`,
      author: "Divyanshu Singh",
      date: "2025-01-12",
      category: "Google Ads",
      readTime: "12 min read",
      views: "3.1K",
      image: "Google Ads interface showing campaign performance and optimization settings",
      tags: ["Google Ads", "Small Business", "PPC", "ROI"]
    },
    {
      id: 3,
      title: "Website Design Trends That Convert: What Works in 2025",
      excerpt: "Explore the latest website design trends that not only look great but actually convert visitors into customers. From minimalist designs to interactive elements, discover what's driving results.",
      content: `Website design in 2025 is all about creating seamless user experiences that guide visitors toward conversion. The most effective designs combine aesthetic appeal with psychological principles that encourage action.

Top converting design trends:
• Minimalist layouts with clear value propositions
• Interactive elements that engage users
• Personalized content based on user behavior
• Mobile-first responsive design
• Fast-loading pages with optimized images
• Clear and prominent call-to-action buttons
• Social proof integration (testimonials, reviews)
• Accessibility features for all users
• Dark mode options for better user experience
• Micro-animations that guide user attention

Color psychology plays a crucial role in conversion optimization. Different colors evoke different emotions and can significantly impact user behavior. For example, orange and red create urgency, while blue builds trust.

Typography choices also matter. Clean, readable fonts improve user experience and keep visitors engaged longer. The key is finding the right balance between creativity and functionality.

Loading speed remains critical. Even a one-second delay can reduce conversions by 7%. Optimize images, use content delivery networks, and minimize code to ensure fast loading times.`,
      author: "Mahendar Singh",
      date: "2025-01-10",
      category: "Web Design",
      readTime: "10 min read",
      views: "1.8K",
      image: "Modern website design showcase with conversion optimization elements",
      tags: ["Web Design", "UX/UI", "Conversion", "Trends"]
    },
    {
      id: 4,
      title: "Email Marketing Automation: Set It and Forget It Strategies",
      excerpt: "Learn how to create powerful email marketing automation sequences that nurture leads and drive sales while you sleep. Discover the workflows that top marketers use to maximize engagement.",
      content: `Email marketing automation is one of the highest ROI marketing channels available today. When done correctly, automated email sequences can nurture leads, recover abandoned carts, and turn one-time buyers into loyal customers.

Essential automation workflows:
• Welcome series for new subscribers
• Abandoned cart recovery sequences
• Post-purchase follow-up campaigns
• Re-engagement campaigns for inactive subscribers
• Birthday and anniversary emails
• Product recommendation sequences
• Lead nurturing workflows
• Customer onboarding series
• Win-back campaigns for churned customers
• Event-triggered behavioral emails

The key to successful automation is segmentation. Not all subscribers are the same, so your emails shouldn't be either. Segment your list based on demographics, behavior, purchase history, and engagement levels.

Personalization goes beyond just using the subscriber's name. Use dynamic content to show relevant products, customize messaging based on past behavior, and send emails at optimal times for each individual.

Testing is crucial for optimization. A/B test subject lines, send times, content, and call-to-action buttons. Small improvements in open rates and click-through rates can lead to significant revenue increases.

Don't forget about deliverability. Maintain a clean email list, use double opt-in, and monitor your sender reputation to ensure your emails reach the inbox.`,
      author: "Ankit Rajpurohit",
      date: "2025-01-08",
      category: "Email Marketing",
      readTime: "9 min read",
      views: "2.2K",
      image: "Email marketing automation dashboard showing workflow sequences and performance metrics",
      tags: ["Email Marketing", "Automation", "Lead Nurturing", "ROI"]
    },
    {
      id: 5,
      title: "Content Marketing ROI: How to Measure What Matters",
      excerpt: "Stop guessing and start measuring! Learn how to track and optimize your content marketing ROI with the metrics that actually matter for business growth.",
      content: `Content marketing ROI can be challenging to measure, but it's essential for proving value and optimizing your strategy. The key is focusing on metrics that align with your business objectives rather than vanity metrics.

Key metrics to track:
• Lead generation and quality scores
• Customer acquisition cost (CAC)
• Customer lifetime value (CLV)
• Conversion rates by content type
• Organic traffic growth and quality
• Brand awareness and sentiment
• Social shares and engagement
• Email subscribers and engagement
• Sales attribution to content
• Content engagement depth and time

Set up proper tracking systems using Google Analytics, marketing automation platforms, and CRM integration. Create UTM parameters for all content to track performance across channels.

Attribution modeling helps you understand the customer journey. Most conversions involve multiple touchpoints, so use first-touch, last-touch, and multi-touch attribution models to get a complete picture.

Calculate content ROI using this formula: (Revenue Generated - Content Investment) / Content Investment × 100. Include all costs: creation, promotion, tools, and team time.

Create content performance dashboards that show real-time metrics. This helps you identify top-performing content and replicate success across your strategy.

Remember that content marketing is often a long-term strategy. Some content may not show immediate ROI but contributes to brand building and customer education that pays off over time.`,
      author: "Divyanshu Singh",
      date: "2025-01-05",
      category: "Content Marketing",
      readTime: "11 min read",
      views: "1.9K",
      image: "Content marketing analytics dashboard showing ROI metrics and performance data",
      tags: ["Content Marketing", "Analytics", "ROI", "Measurement"]
    }
  ];

  const categories = ['All', 'Social Media', 'Google Ads', 'Web Design', 'Email Marketing', 'Content Marketing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog - Techi Black | Expert Tips & Strategies</title>
        <meta name="description" content="Stay updated with the latest digital marketing trends, tips, and strategies from Techi Black experts. Learn about social media, Google Ads, web design, and more." />
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
                Digital Marketing
                <span className="block gradient-text">Insights & Tips</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights, proven strategies, and actionable tips from our digital marketing professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-yellow-400 text-gray-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden card-hover group"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      alt={post.title}
                     src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 bg-white/10 text-white/80 px-2 py-1 rounded text-xs"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 group"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-white/70">Try adjusting your search terms or category filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Get weekly digital marketing tips, strategies, and industry updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
