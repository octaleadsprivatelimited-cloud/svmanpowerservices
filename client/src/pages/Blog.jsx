import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import SEO from '../components/SEO'

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Remote Work: Trends and Predictions for 2024',
    excerpt: 'Explore how remote work is evolving and what trends are shaping the future of distributed teams.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Sarah Mitchell',
    date: 'December 15, 2024',
    category: 'Industry Insights',
    readTime: '5 min read'
  }

  const blogPosts = [
    {
      id: 1,
      title: '5 Strategies for Effective Remote Team Management',
      excerpt: 'Learn proven techniques to manage and motivate remote teams for maximum productivity.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'David Chen',
      date: 'December 12, 2024',
      category: 'Management',
      readTime: '4 min read'
    },
    {
      id: 2,
      title: 'How to Attract Top Talent in a Competitive Market',
      excerpt: 'Discover what candidates are looking for and how to position your company as an employer of choice.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Maria Rodriguez',
      date: 'December 10, 2024',
      category: 'Recruitment',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'The Benefits of Temporary Staffing for Seasonal Businesses',
      excerpt: 'Explore how temporary staffing can help seasonal businesses manage fluctuating demand.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'James Wilson',
      date: 'December 8, 2024',
      category: 'Staffing',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'Building a Strong Company Culture in the Digital Age',
      excerpt: 'Learn how to create and maintain a positive company culture with remote and hybrid teams.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Emily Johnson',
      date: 'December 5, 2024',
      category: 'Culture',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Interview Best Practices: A Guide for Hiring Managers',
      excerpt: 'Master the art of conducting effective interviews that reveal the right candidate.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Sarah Mitchell',
      date: 'December 3, 2024',
      category: 'Hiring',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'The Rise of Skills-Based Hiring: What It Means for Employers',
      excerpt: 'Understand how skills-based hiring is changing recruitment and what you need to know.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Michael Chen',
      date: 'December 1, 2024',
      category: 'Trends',
      readTime: '4 min read'
    }
  ]

  const categories = [
    'All Posts',
    'Industry Insights',
    'Recruitment',
    'Management',
    'Staffing',
    'Culture',
    'Hiring',
    'Trends'
  ]

  return (
    <div>
      <SEO
        title="Blog & Insights - Manpower & Staffing Articles | SV Manpower services Hyderabad"
        description="Stay updated with the latest trends, tips, and insights in manpower and staffing services. Expert articles on recruitment, HR management, staffing solutions, and industry best practices. Read our blog for valuable HR insights."
        keywords="manpower blog, staffing articles, HR insights, recruitment tips, staffing solutions blog, manpower services articles, HR management tips, employment trends, job market insights, staffing industry news"
        url="https://svmanpower.com/blog"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Stay updated with the latest trends, tips, and insights in manpower and staffing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Featured Article
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-secondary-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-500">
                    {featuredPost.readTime}
                  </span>
                  <Link
                    to="/blog/future-remote-work"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-secondary-600">
              Insights and advice from our HR experts
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-500">
                      {post.readTime}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest HR insights, job market trends, and career advice.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-secondary-900"
            />
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
