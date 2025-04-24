import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutOverview = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-steel-50 dark:bg-steel-800/50 overflow-hidden">
      <motion.div 
        className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left: Animated Text Content */}
        <motion.div variants={item}>
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            About <span className="text-blueprint-600 dark:text-blueprint-400">WAJEDO</span>
          </motion.h2>
          
          <motion.p 
            className="text-steel-700 dark:text-steel-300 mb-4"
            variants={item}
          >
            Founded in 2005, WAJEDO Construction Inspection has grown into a nationally trusted provider of expert inspection services.
            We ensure that every project meets the highest standards of safety, quality, and compliance.
          </motion.p>
          
          <motion.p 
            className="text-steel-700 dark:text-steel-300 mb-6"
            variants={item}
          >
            Our mission is to safeguard construction integrity with thorough inspections, a commitment to excellence, and innovative practices.
          </motion.p>
          
          <motion.div variants={item} className="flex gap-4">
            <Link 
              to="/about"
              className="inline-block bg-blueprint-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blueprint-700 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Static Image */}
        <motion.div 
          className="relative h-96 w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-full h-full rounded-lg overflow-hidden shadow-elevation-2"
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="WAJEDO Inspection"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div 
            className="absolute -bottom-5 -right-5 bg-safety-500 text-steel-900 p-3 rounded-lg shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            whileHover={{ rotate: 5 }}
          >
            <p className="font-bold text-lg">Since 2005</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutOverview;
