import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import projects from '../pages/ProjectsData';
import PageTransition from '../components/common/PageTransition';
import CallToAction from '../components/home/CallToAction';

const categories = [
  'All',
  'Commercial',
  'Residential',
  'Healthcare',
  'Educational',
  'Hospitality',
  'Industrial'
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(8); // Initial number of projects to show
  const projectsPerLoad = 5; // Number of projects to load per click
  
  useEffect(() => {
    document.title = 'Projects - Wajedo Construction Inspection';
  }, []);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
    setVisibleProjects(8); // Reset visible projects when category changes
  }, [selectedCategory]);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + projectsPerLoad);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore our portfolio of successful inspection projects across a wide range of construction sectors.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div 
                key={project.id}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="block h-full"
                  onClick={() => window.scrollTo(0, 0)}
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
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="inline-flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We don't have any {selectedCategory} projects to display right now. Please select another category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
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
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </PageTransition>
  );
};

export default Projects;