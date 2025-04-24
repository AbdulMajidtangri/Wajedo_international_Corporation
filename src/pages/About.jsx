import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import { useInView } from 'react-intersection-observer'

const About = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'About Us - Wajedo Construction Inspection'
  }, [])

  // Use react-intersection-observer for scroll animations
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [ref3, inView3] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'Founder & Chief Inspector',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'With over 20 years of experience in construction inspection, James founded WAJEDO to provide quality inspection services that prioritize safety and compliance.'
    },
    {
      id: 2,
      name: 'Emma Rodriguez',
      role: 'Senior Structural Engineer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Emma brings her expertise in structural engineering to ensure buildings meet all safety requirements and structural integrity standards.'
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Compliance Specialist',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Davids in-depth knowledge of building codes and regulations helps clients navigate complex compliance requirements with confidence.'
    },
    {
      id: 4,
      name: 'Sophia Patel',
      role: 'Quality Assurance Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sophia oversees our quality assurance processes, ensuring that every inspection meets WAJEDOs high standards of excellence.'
    }
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blueprint-600 dark:text-blueprint-400">WAJEDO</span>
            </h1>
            <p className="text-lg text-steel-600 dark:text-steel-300 mb-8">
              We are dedicated to ensuring the safety, quality, and compliance of construction projects through expert inspection services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24" ref={ref1}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-steel-700 dark:text-steel-300">
                Founded in 2005, WAJEDO Construction Inspection began with a simple mission: to provide expert inspection services that ensure construction projects meet the highest standards of quality, safety, and regulatory compliance.
              </p>
              <p className="mb-4 text-steel-700 dark:text-steel-300">
                Our founder, James Wilson, recognized a gap in the industry for inspection services that were both thorough and efficient. With decades of experience in construction and engineering, he assembled a team of experts dedicated to addressing this need.
              </p>
              <p className="text-steel-700 dark:text-steel-300">
                Today, WAJEDO has grown to become a trusted partner for construction companies, developers, and property owners across the country. Our commitment to excellence and attention to detail has established us as industry leaders in construction inspection.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-elevation-2">
                <img 
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Construction site inspection" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-safety-500 text-steel-900 p-4 rounded-lg shadow-elevation-2">
                <p className="font-bold text-xl">Since 2005</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-steel-50 dark:bg-steel-800/50" ref={ref2}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-steel-600 dark:text-steel-400">
                At WAJEDO, we're guided by a clear mission and strong core values that inform everything we do.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white dark:bg-steel-900 p-8 rounded-lg shadow-elevation-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-blueprint-600 dark:text-blueprint-400">Our Mission</h3>
              <p className="text-steel-700 dark:text-steel-300">
                To safeguard construction quality and safety through expert inspection services, ensuring that every project meets or exceeds industry standards and regulatory requirements.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white dark:bg-steel-900 p-8 rounded-lg shadow-elevation-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-blueprint-600 dark:text-blueprint-400">Our Vision</h3>
              <p className="text-steel-700 dark:text-steel-300">
                To be the industry leader in construction inspection, recognized for our integrity, expertise, and commitment to advancing safety and quality standards in the built environment.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white dark:bg-steel-900 p-6 rounded-lg shadow-elevation-2"
            >
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-steel-600 dark:text-steel-400">
                We conduct our business with honesty, transparency, and ethical principles at all times.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bg-white dark:bg-steel-900 p-6 rounded-lg shadow-elevation-2"
            >
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-steel-600 dark:text-steel-400">
                We strive for the highest standards in every inspection we perform, without compromise.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-white dark:bg-steel-900 p-6 rounded-lg shadow-elevation-2"
            >
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-steel-600 dark:text-steel-400">
                We embrace new technologies and methodologies to enhance the efficiency and accuracy of our inspections.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24" ref={ref3}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Expert Team</h2>
              <p className="text-steel-600 dark:text-steel-400">
                WAJEDO's success is built on the expertise and dedication of our team members, who bring decades of combined experience in construction, engineering, and inspection.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-steel-900 rounded-lg shadow-elevation-2 overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blueprint-600 dark:text-blueprint-400 font-medium mb-3">{member.role}</p>
                  <p className="text-steel-600 dark:text-steel-400 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About