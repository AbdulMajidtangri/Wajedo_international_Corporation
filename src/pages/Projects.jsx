import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import CallToAction from '../components/home/CallToAction'
import projects from './ProjectsData'
// Project Data

// Categories for filtering
const categories = [
  'All',
  'Commercial',
  'Residential',
  'Healthcare',
  'Educational',
  'Hospitality',
  'Industrial'
]

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Projects - Wajedo Construction Inspection'
  }, [])
  
  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])
  
  // Animation setup for scroll detection
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blueprint-600 dark:text-blueprint-400">Projects</span>
            </h1>
            <p className="text-lg text-steel-600 dark:text-steel-300 mb-8">
              Explore our portfolio of successful inspection projects across a wide range of construction sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-8 bg-white dark:bg-steel-900 border-b border-steel-200 dark:border-steel-700 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blueprint-600 text-white' 
                    : 'bg-steel-100 text-steel-800 hover:bg-steel-200 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-steel-900">
        <div className="container-custom">
          <motion.div 
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={item}
                className="bg-white dark:bg-steel-800 rounded-lg overflow-hidden shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blueprint-100 text-blueprint-800 dark:bg-blueprint-900 dark:text-blueprint-300">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-steel-500 dark:text-steel-400 mb-3">
                    <span className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                  </p>
                  <p className="text-steel-600 dark:text-steel-400 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty state when no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-steel-600 dark:text-steel-400">
                We don't have any {selectedCategory} projects to display right now. Please select another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-steel-800 rounded-lg overflow-hidden shadow-elevation-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 md:h-96">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blueprint-100 text-blueprint-800 dark:bg-blueprint-900 dark:text-blueprint-300">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-steel-500 dark:text-steel-400 mb-6">
                <span className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedProject.location}
                </span>
              </p>
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-steel-700 dark:text-steel-300 mb-4">{selectedProject.description}</p>
                <p className="text-steel-700 dark:text-steel-300 mb-4">
                  For this project, WAJEDO provided comprehensive inspection services throughout all phases of construction, 
                  from foundation work to final completion. Our team of experienced inspectors ensured that all aspects of the 
                  project met relevant building codes, safety standards, and quality requirements.
                </p>
                <h3 className="text-xl font-semibold mb-4">Inspection Services Provided</h3>
                <ul className="list-disc pl-5 mb-4 text-steel-700 dark:text-steel-300">
                  <li>Structural integrity assessment</li>
                  <li>Building code compliance verification</li>
                  <li>Safety systems inspection</li>
                  <li>Quality assurance monitoring</li>
                  <li>Final completion certification</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Results</h3>
                <p className="text-steel-700 dark:text-steel-300">
                  Through our thorough inspection process, we identified and addressed several potential issues before they 
                  became significant problems, saving the client both time and resources. The project was completed on 
                  schedule and received all necessary approvals and certifications for occupancy.
                </p>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="/contact" 
                  className="btn btn-primary"
                >
                  Contact Us About Your Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Stats Section */}
      <section className="py-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-steel-600 dark:text-steel-400">
              With years of experience and hundreds of successful projects, WAJEDO has established a reputation for excellence in construction inspection.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'Years of Experience' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '100%', label: 'Code Compliance' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-steel-900 rounded-lg shadow-elevation-1"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blueprint-600 dark:text-blueprint-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-steel-600 dark:text-steel-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction/>
    </PageTransition>
  )
}

export default Projects