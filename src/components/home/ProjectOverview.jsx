import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import projects from '../../pages/ProjectsData'

const ProjectOverview = () => {
  const navigate = useNavigate()
  return (
    <section className="py-16 bg-white dark:bg-steel-900">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-steel-800 rounded-lg shadow-elevation-1 hover:shadow-elevation-3 overflow-hidden transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              {/* Image with zoom effect */}
              <div className="overflow-hidden h-64">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <motion.h3 
                    className="text-xl font-semibold"
                    whileHover={{ color: '#3b82f6' }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm text-steel-600 dark:text-steel-400">{project.location}</p>
                  <motion.span 
                    className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blueprint-100 text-blueprint-800 dark:bg-blueprint-900 dark:text-blueprint-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* View More Link with animated arrow */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="flex items-center text-blueprint-700 dark:text-blueprint-400 font-medium text-sm"
                  >
                    View More
                    <motion.span
                      className="ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button with animation */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/projects">
            <motion.button 
              className="bg-blueprint-700 hover:bg-blueprint-800 text-white font-medium px-6 py-3 rounded-2xl shadow-md relative overflow-hidden"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View All Projects</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blueprint-600 to-blueprint-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectOverview