import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import services from '../../pages/ServiceData'

const ServiceOverview = () => {
  const [hoveredId, setHoveredId] = useState(null)

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

  const getColorClass = (color) => {
    switch(color) {
      case 'blueprint':
        return 'bg-blueprint-50 border-blueprint-200 dark:bg-blueprint-900/30 dark:border-blueprint-800'
      case 'safety':
        return 'bg-safety-50 border-safety-200 dark:bg-safety-900/30 dark:border-safety-800'
      case 'steel':
      default:
        return 'bg-steel-50 border-steel-200 dark:bg-steel-800/30 dark:border-steel-700'
    }
  }

  const getIconColorClass = (color) => {
    switch(color) {
      case 'blueprint':
        return 'text-blueprint-600 dark:text-blueprint-400'
      case 'safety':
        return 'text-safety-600 dark:text-safety-400'
      case 'steel':
      default:
        return 'text-steel-600 dark:text-steel-400'
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-steel-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Inspection <span className="text-blueprint-600 dark:text-blueprint-400">Services</span>
            </h2>
            <p className="text-steel-600 dark:text-steel-400">
              We provide comprehensive inspection services to ensure your construction projects meet all safety standards, quality requirements, and regulatory compliance.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${getColorClass(service.color)} 
                ${hoveredId === service.id ? 'shadow-elevation-3 -translate-y-1' : 'shadow-elevation-1'}`}
            >
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${getIconColorClass(service.color)} 
                  bg-white dark:bg-steel-800`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-steel-600 dark:text-steel-400 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-${service.color}-600 dark:text-${service.color}-400 font-medium hover:underline`}
                >
                  Learn more
                </Link>
              </div>
              {/* Decorative diagonal line */}
              <div 
                className={`absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 
                  bg-${service.color}-200 dark:bg-${service.color}-800/30`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="btn btn-primary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceOverview