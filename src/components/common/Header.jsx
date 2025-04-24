import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun, FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../../contexts/ThemeContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Navigation items with dropdowns
  const navItems = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our Story', path: '/about#story' },
        { name: 'Mission & Values', path: '/about#mission' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Company History', path: '/about#history' },
        { name: 'Certifications', path: '/about#certifications' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Building Inspection', path: '/services#building' },
        { name: 'Safety Compliance', path: '/services#safety' },
        { name: 'Quality Assurance', path: '/services#quality' },
        { name: 'Equipment Inspection', path: '/services#equipment' },
        { name: 'Consulting Services', path: '/services#consulting' }
      ]
    },
    { 
      name: 'Projects', 
      path: '/projects',
      dropdown: [
        { name: 'Commercial', path: '/projects?category=Commercial' },
        { name: 'Residential', path: '/projects?category=Residential' },
        { name: 'Healthcare', path: '/projects?category=Healthcare' },
        { name: 'Educational', path: '/projects?category=Educational' },
        { name: 'Industrial', path: '/projects?category=Industrial' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact' 
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const handleMouseEnter = (index) => {
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md dark:bg-steel-900 dark:bg-opacity-90' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-2xl md:text-3xl font-bold m-0 ${
                scrolled 
                  ? 'text-blueprint-600 dark:text-blueprint-400' 
                  : 'text-blueprint-600 dark:text-white'
              }`}>
                WAJEDO
              </h1>
              <p className={`text-xs font-medium -mt-1 ${
                scrolled 
                  ? 'text-steel-600 dark:text-steel-400' 
                  : 'text-steel-800 dark:text-steel-300'
              }`}>
                CONSTRUCTION INSPECTION
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative nav-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    relative text-base font-medium transition-colors group
                    hover:text-blueprint-600 dark:hover:text-blueprint-400
                    ${isActive 
                      ? 'text-blueprint-600 dark:text-blueprint-400' 
                      : `${scrolled ? 'text-steel-800 dark:text-white' : 'text-steel-800 dark:text-white'}`
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center">
                        {item.name}
                        {item.dropdown && (
                          <FiChevronDown 
                            className={`ml-1 transition-transform ${hoveredItem === index ? 'rotate-180' : ''}`}
                          />
                        )}
                      </span>
                      {isActive && !item.dropdown && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blueprint-600 dark:bg-blueprint-400"
                          layoutId="navbar-indicator"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && hoveredItem === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-steel-800 rounded-lg shadow-elevation-3 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-steel-700 dark:text-steel-300 hover:bg-blueprint-50 dark:hover:bg-blueprint-900/30 hover:text-blueprint-600 dark:hover:text-blueprint-400 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-steel-700 hover:bg-steel-100 dark:text-steel-300 dark:hover:bg-steel-800' 
                  : 'text-steel-800 hover:bg-white hover:bg-opacity-20 dark:text-white dark:hover:bg-steel-800 dark:hover:bg-opacity-30'
              }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-steel-700 hover:bg-steel-100 dark:text-steel-300 dark:hover:bg-steel-800' 
                  : 'text-steel-800 hover:bg-white hover:bg-opacity-20 dark:text-white dark:hover:bg-steel-800 dark:hover:bg-opacity-30'
              }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-steel-700 hover:bg-steel-100 dark:text-steel-300 dark:hover:bg-steel-800' 
                  : 'text-steel-800 hover:bg-white hover:bg-opacity-20 dark:text-white dark:hover:bg-steel-800 dark:hover:bg-opacity-30'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white dark:bg-steel-900"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="nav-item">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.path}
                        onClick={() => !item.dropdown && setIsOpen(false)}
                        className={({ isActive }) => `
                          flex-grow py-2 px-4 rounded-md transition-colors ${
                            isActive 
                              ? 'bg-blueprint-100 text-blueprint-600 dark:bg-blueprint-900 dark:text-blueprint-300' 
                              : 'text-steel-800 hover:bg-steel-100 dark:text-white dark:hover:bg-steel-800'
                          }
                        `}
                      >
                        {item.name}
                      </NavLink>
                      {item.dropdown && (
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="p-2 text-steel-600 dark:text-steel-400"
                        >
                          <FiChevronDown 
                            className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => {
                                setActiveDropdown(null)
                                setIsOpen(false)
                              }}
                              className="block py-2 px-4 text-sm text-steel-600 dark:text-steel-400 hover:text-blueprint-600 dark:hover:text-blueprint-400"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header