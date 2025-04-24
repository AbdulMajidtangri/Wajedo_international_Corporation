import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background with #2A4365 as base color */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#2A4365' }}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A4365]/90 via-[#2A4365]/80 to-[#1E3A8A]/80"></div>
          
          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg 
              className="h-full w-full"
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
            >
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Floating Dots Animation */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.15, 0],
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                transition: {
                  duration: Math.random() * 40 + 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                Ready to Elevate Your Project?
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#EBF8FF' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Our team delivers <span className="font-semibold" style={{ color: '#FFFFFF' }}>precision inspections</span> with guaranteed compliance. Start with a risk-free assessment today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="relative overflow-hidden group px-8 py-4 bg-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ color: '#2A4365' }}
              >
                <span className="relative z-10">Get Started Now</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <Link 
                to="/services" 
                className="relative overflow-hidden group px-8 py-4 border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                style={{ color: '#FFFFFF' }}
              >
                <span className="relative z-10">View Our Services</span>
                <motion.span 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              className="mt-8 text-blue-200 text-sm"
              style={{ color: '#BEE3F8' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>Trusted by industry leaders nationwide</p>
              <div className="flex justify-center mt-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: '#F6AD55' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction