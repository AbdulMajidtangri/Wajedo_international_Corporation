import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import { useEffect } from 'react'

const NotFound = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Page Not Found - Wajedo Construction Inspection'
  }, [])

  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-300px)] flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl font-bold text-blueprint-600 dark:text-blueprint-400 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
              <p className="text-lg text-steel-600 dark:text-steel-400 mb-8 max-w-lg mx-auto">
                The page you're looking for doesn't exist or has been moved to another location.
              </p>
              <Link 
                to="/" 
                className="btn btn-primary"
              >
                Return to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound