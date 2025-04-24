import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-steel-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">WAJEDO</h3>
            <p className="text-steel-300 mb-4 text-sm">
              Professional construction inspection services ensuring quality, safety, and compliance for your projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-400 hover:text-blueprint-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-400 hover:text-blueprint-400 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-400 hover:text-blueprint-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Building Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Compliance Check
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Safety Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-blueprint-400" />
                <span className="text-steel-300">
                  123 Construction Way<br />
                  Building 45, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-blueprint-400" />
                <a href="tel:+12125551234" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-blueprint-400" />
                <a href="mailto:info@wajedo.com" className="text-steel-300 hover:text-blueprint-400 transition-colors">
                  info@wajedo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-steel-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-steel-400 text-sm">
              &copy; {currentYear} Wajedo Construction Inspection. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-steel-400 hover:text-blueprint-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel-400 hover:text-blueprint-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel-400 hover:text-blueprint-400 transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer