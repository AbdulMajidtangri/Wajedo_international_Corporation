import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from 'react-icons/fi'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Contact Us - Wajedo Construction Inspection'
  }, [])
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      })
      return
    }
    
    // Simulate form submission
    // In a real implementation, you would send this data to a server
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for contacting us! We will get back to you shortly.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-blueprint-600 dark:text-blueprint-400">Us</span>
            </h1>
            <p className="text-lg text-steel-600 dark:text-steel-300 mb-8">
              Have questions about our inspection services? We're here to help. Reach out to our team for more information or to schedule an inspection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white dark:bg-steel-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-steel-600 dark:text-steel-400 mb-8">
                Whether you have questions about our services, need an inspection quote, or want to discuss your project requirements, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blueprint-100 dark:bg-blueprint-900/50 flex items-center justify-center text-blueprint-600 dark:text-blueprint-400">
                      <FiMapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <address className="not-italic text-steel-600 dark:text-steel-400">
                      123 Construction Way<br />
                      Building 45, Suite 500<br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blueprint-100 dark:bg-blueprint-900/50 flex items-center justify-center text-blueprint-600 dark:text-blueprint-400">
                      <FiPhone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-steel-600 dark:text-steel-400">
                      <a href="tel:+12125551234" className="hover:text-blueprint-600 dark:hover:text-blueprint-400">
                        (212) 555-1234
                      </a>
                    </p>
                    <p className="text-steel-500 dark:text-steel-500 text-sm mt-1">
                      Monday - Friday, 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blueprint-100 dark:bg-blueprint-900/50 flex items-center justify-center text-blueprint-600 dark:text-blueprint-400">
                      <FiMail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-steel-600 dark:text-steel-400">
                      <a href="mailto:info@wajedo.com" className="hover:text-blueprint-600 dark:hover:text-blueprint-400">
                        info@wajedo.com
                      </a>
                    </p>
                    <p className="text-steel-500 dark:text-steel-500 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blueprint-100 dark:bg-blueprint-900/50 flex items-center justify-center text-blueprint-600 dark:text-blueprint-400">
                      <FiMessageSquare size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
                    <p className="text-steel-600 dark:text-steel-400">
                      Available during business hours
                    </p>
                    <button className="text-blueprint-600 dark:text-blueprint-400 font-medium hover:underline mt-1">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="mt-10 h-64 bg-steel-100 dark:bg-steel-800 rounded-lg overflow-hidden shadow-elevation-1">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215053961897!2d-73.98784522393865!3d40.75790657138058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1698187345569!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-steel-50 dark:bg-steel-800 p-8 rounded-lg shadow-elevation-2">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {/* Success/Error Message */}
                {formStatus.submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 mb-6 rounded-md ${
                      formStatus.error 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel-700 dark:text-steel-300 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-steel-300 focus:ring-2 focus:ring-blueprint-500 focus:border-transparent dark:bg-steel-900 dark:border-steel-700 dark:focus:ring-blueprint-600"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel-700 dark:text-steel-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-steel-300 focus:ring-2 focus:ring-blueprint-500 focus:border-transparent dark:bg-steel-900 dark:border-steel-700 dark:focus:ring-blueprint-600"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel-700 dark:text-steel-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-steel-300 focus:ring-2 focus:ring-blueprint-500 focus:border-transparent dark:bg-steel-900 dark:border-steel-700 dark:focus:ring-blueprint-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-steel-700 dark:text-steel-300 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-steel-300 focus:ring-2 focus:ring-blueprint-500 focus:border-transparent dark:bg-steel-900 dark:border-steel-700 dark:focus:ring-blueprint-600"
                      >
                        <option value="">Select a service</option>
                        <option value="Building Inspection">Building Inspection</option>
                        <option value="Safety Compliance">Safety Compliance</option>
                        <option value="Quality Assurance">Quality Assurance</option>
                        <option value="Equipment Inspection">Equipment Inspection</option>
                        <option value="Technology Integration">Technology Integration</option>
                        <option value="Consulting">Consulting Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-steel-700 dark:text-steel-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-steel-300 focus:ring-2 focus:ring-blueprint-500 focus:border-transparent dark:bg-steel-900 dark:border-steel-700 dark:focus:ring-blueprint-600"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center btn btn-primary"
                    >
                      <FiSend className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-steel-600 dark:text-steel-400">
              Find answers to commonly asked questions about our inspection services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'How quickly can you schedule an inspection?',
                  answer: 'We typically schedule inspections within 3-5 business days, depending on the type of inspection and current workload. For urgent inspections, we offer expedited services when available.'
                },
                {
                  question: 'What types of buildings do you inspect?',
                  answer: 'We inspect a wide range of structures including residential, commercial, industrial, healthcare, educational, and hospitality buildings. Our experienced inspectors are qualified to assess various construction types and purposes.'
                },
                {
                  question: 'How long does a typical inspection take?',
                  answer: 'The duration of an inspection depends on the size and complexity of the project. A small residential inspection might take a few hours, while a large commercial project could require multiple days. Well provide a time estimate when scheduling your inspection.'
                },
                {
                  question: 'What information is included in your inspection reports?',
                  answer: 'Our comprehensive reports include detailed findings, photographic documentation, compliance assessments, recommendations for addressing any issues, and next steps. Reports are typically delivered within 48 hours after the inspection is completed.'
                },
                {
                  question: 'Are your inspectors certified?',
                  answer: 'Yes, all of our inspectors hold relevant professional certifications and licenses. Many are also members of professional organizations such as ICC, ASHI, and other industry-specific certification bodies.'
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-steel-900 p-6 rounded-lg shadow-elevation-1"
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-steel-600 dark:text-steel-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact