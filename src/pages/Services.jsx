import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CallToAction from '../components/home/CallToAction'
import services from './ServiceData'
// Service data


// Simple Building Model component
const BuildingModel = () => {
  // Create a simple building model using Three.js geometries
  return (
    <group position={[0, 0, 0]}>
      {/* Main building structure */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[5, 4, 3]} />
        <meshStandardMaterial color="#4299E1" transparent opacity={0.7} wireframe={true} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 4.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#F6E05E" transparent opacity={0.7} wireframe={true} />
      </mesh>
      
      {/* Ground floor */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#A0AEC0" />
      </mesh>
      
      {/* Floors */}
      {[1, 2, 3].map((floor) => (
        <mesh key={floor} position={[0, floor, 0]}>
          <boxGeometry args={[4.9, 0.1, 2.9]} />
          <meshStandardMaterial color="#90CDF4" />
        </mesh>
      ))}
    </group>
  )
}

const ServiceDetail = ({ service, isActive, onClose }) => {
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
        return 'text-blueprint-600 bg-blueprint-100 dark:text-blueprint-400 dark:bg-blueprint-900/50'
      case 'safety':
        return 'text-safety-600 bg-safety-100 dark:text-safety-400 dark:bg-safety-900/50'
      case 'steel':
      default:
        return 'text-steel-600 bg-steel-100 dark:text-steel-400 dark:bg-steel-800/50'
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        height: isActive ? 'auto' : 0
      }}
      transition={{ duration: 0.3 }}
      className={`overflow-hidden mt-4 rounded-lg border ${getColorClass(service.color)}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="mb-4">
            <div className={`inline-flex p-3 rounded-lg mb-2 ${getIconColorClass(service.color)}`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-steel-500 hover:text-steel-700 dark:text-steel-400 dark:hover:text-steel-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-steel-700 dark:text-steel-300 mb-4">{service.description}</p>
        
        <h4 className="font-semibold mb-2">Key Benefits:</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="text-steel-700 dark:text-steel-300">{benefit}</li>
          ))}
        </ul>
        
        <button 
          className="btn btn-primary"
          onClick={() => window.location.href = '/contact'}
        >
          Request This Service
        </button>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  // Update page title on component mount
  useEffect(() => {
    document.title = 'Our Services - Wajedo Construction Inspection'
  }, [])

  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null)
    } else {
      setActiveService(id)
    }
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
        return 'text-blueprint-600 bg-blueprint-100 dark:text-blueprint-400 dark:bg-blueprint-900/50'
      case 'safety':
        return 'text-safety-600 bg-safety-100 dark:text-safety-400 dark:bg-safety-900/50'
      case 'steel':
      default:
        return 'text-steel-600 bg-steel-100 dark:text-steel-400 dark:bg-steel-800/50'
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-steel-50 dark:bg-steel-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blueprint-600 dark:text-blueprint-400">Services</span>
            </h1>
            <p className="text-lg text-steel-600 dark:text-steel-300 mb-8">
              Comprehensive inspection solutions to ensure quality, safety, and compliance for all your construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-12 bg-white dark:bg-steel-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Advanced Inspection <span className="text-blueprint-600 dark:text-blueprint-400">Technology</span>
              </h2>
              <p className="mb-4 text-steel-700 dark:text-steel-300">
                At WAJEDO, we combine traditional inspection expertise with cutting-edge technology to provide the most comprehensive assessment of your construction projects.
              </p>
              <p className="mb-4 text-steel-700 dark:text-steel-300">
                Our inspectors utilize 3D modeling, thermal imaging, drone technology, and digital documentation tools to ensure no detail is missed during the inspection process.
              </p>
              <p className="text-steel-700 dark:text-steel-300">
                This approach allows us to identify issues that might not be visible to the naked eye, providing you with a complete understanding of your project's condition and needs.
              </p>
            </div>
            
            <div className="bg-steel-100 dark:bg-steel-800 rounded-lg overflow-hidden h-96 shadow-elevation-2">
              <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <BuildingModel />
                <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={1} />
                <gridHelper args={[20, 20, 0x4299E1, 0x4299E1]} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-steel-50 dark:bg-steel-800/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Comprehensive Inspection Services
            </h2>
            <p className="text-steel-600 dark:text-steel-400">
              Click on any service to learn more about how WAJEDO can help ensure the quality, safety, and compliance of your construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col">
                <button
                  className={`${getColorClass(service.color)} p-6 rounded-lg border shadow-elevation-1 hover:shadow-elevation-2 transition-all text-left ${activeService === service.id ? 'ring-2 ring-blueprint-500 dark:ring-blueprint-400' : ''}`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${getIconColorClass(service.color)}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-steel-600 dark:text-steel-400">{service.description}</p>
                </button>

                {/* Service Detail Expansion */}
                <ServiceDetail 
                  service={service} 
                  isActive={activeService === service.id}
                  onClose={() => setActiveService(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-steel-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Inspection Process
            </h2>
            <p className="text-steel-600 dark:text-steel-400">
              We follow a thorough, systematic approach to ensure no aspect of your project is overlooked.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blueprint-200 dark:bg-blueprint-800 -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: 'Initial Consultation',
                  description: 'We begin with a detailed discussion of your project requirements, timeline, and specific inspection needs.'
                },
                {
                  step: 2,
                  title: 'Inspection Planning',
                  description: 'Our team develops a customized inspection plan, tailored to your projects specific requirements and compliance needs.'
                },
                {
                  step: 3,
                  title: 'On-Site Inspection',
                  description: 'Our experienced inspectors conduct a thorough on-site assessment, documenting all findings with photos and detailed notes.'
                },
                {
                  step: 4,
                  title: 'Analysis & Reporting',
                  description: 'We analyze all collected data and prepare a comprehensive report detailing our findings, recommendations, and next steps.'
                },
                {
                  step: 5,
                  title: 'Review & Follow-Up',
                  description: 'We review the report with you to ensure you understand all findings, and provide guidance on addressing any issues identified.'
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blueprint-600 dark:bg-blueprint-500 rounded-full flex items-center justify-center -translate-x-1/2 shadow-elevation-2">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className={`bg-steel-50 dark:bg-steel-800 p-6 rounded-lg shadow-elevation-1 ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-steel-600 dark:text-steel-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

    </PageTransition>
  )
}

export default Services