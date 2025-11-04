import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Users, Building, Award } from 'lucide-react'
import SEO from '../components/SEO'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'technology', label: 'Technology' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'manufacturing', label: 'Manufacturing' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Expansion',
      category: 'technology',
      description: 'Helped a fast-growing tech startup scale from 50 to 200 employees in 6 months.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 150, time: '6 months', satisfaction: '98%' }
    },
    {
      id: 2,
      title: 'Hospital Staffing Solution',
      category: 'healthcare',
      description: 'Comprehensive staffing solution for a major hospital network during peak season.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 200, time: '3 months', satisfaction: '99%' }
    },
    {
      id: 3,
      title: 'Financial Services Team',
      category: 'finance',
      description: 'Built a complete finance team for a new investment firm, including executives.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 25, time: '4 months', satisfaction: '100%' }
    },
    {
      id: 4,
      title: 'Manufacturing Leadership',
      category: 'manufacturing',
      description: 'Executive search for C-suite positions in a major manufacturing company.',
      image: 'https://images.unsplash.com/photo-1565043589221-1d5d7c3e4e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 8, time: '8 months', satisfaction: '95%' }
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'technology',
      description: 'Staffed a complete engineering and product team for an e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 75, time: '5 months', satisfaction: '97%' }
    },
    {
      id: 6,
      title: 'Healthcare Network',
      category: 'healthcare',
      description: 'Temporary staffing solution for a healthcare network during COVID-19 surge.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { placements: 300, time: '2 months', satisfaction: '99%' }
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      <SEO
        title="Portfolio - Success Stories & Case Studies | SV Manpower services Hyderabad"
        description="Explore our portfolio of successful manpower placements and case studies. See how SV Manpower services has helped businesses across various industries with housekeeping, security, drivers, and staffing solutions. Real success stories from satisfied clients."
        keywords="manpower portfolio, staffing case studies, success stories, manpower placements, client projects, staffing solutions portfolio, manpower services portfolio, employment success stories"
        url="https://svmanpower.com/portfolio"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Success stories and case studies from our satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary-600">
              Explore our successful placements across different industries
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-700 hover:bg-primary-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-secondary-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {project.stats.placements}
                      </div>
                      <div className="text-xs text-secondary-600">Placements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {project.stats.time}
                      </div>
                      <div className="text-xs text-secondary-600">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {project.stats.satisfaction}
                      </div>
                      <div className="text-xs text-secondary-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that speak to our success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '50+', label: 'Industries Served' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '48h', label: 'Average Response Time' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
