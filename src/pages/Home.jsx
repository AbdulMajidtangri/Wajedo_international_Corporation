import PageTransition from '../components/common/PageTransition'
import Hero from '../components/home/Hero'
import ServiceOverview from '../components/home/ServiceOverview'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'
import { useEffect } from 'react'
import ProjectOverview from '../components/home/ProjectOverview'
import AboutOverview from '../components/home/AboutOverview'
const Home = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Wajedo Construction Inspection - Professional Building Inspection Services'
  }, [])

  return (
    <PageTransition>
      <Hero />
      <AboutOverview />
      <ServiceOverview />
      <ProjectOverview />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  )
}

export default Home