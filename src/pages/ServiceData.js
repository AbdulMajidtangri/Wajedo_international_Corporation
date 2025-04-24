import { FiClipboard, FiShield, FiAward, FiTool, FiCpu, FiUsers, FiFileText } from 'react-icons/fi'
const services = [
  {
    id: 1,
    title: 'Building Inspection',
    icon: FiClipboard ,
    description: 'Comprehensive evaluation of structural integrity, safety compliance, and construction quality.',
    benefits: [
      'Identify structural issues before they become major problems',
      'Ensure compliance with building codes and regulations',
      'Detailed reports with findings and recommendations',
      'Expert assessment of construction quality'
    ],
    color: 'blueprint'
  },
  {
    id: 2,
    title: 'Safety Compliance',
    icon: FiShield ,
    description: 'Ensure your project meets all safety regulations and code requirements.',
    benefits: [
      'Prevent workplace accidents and injuries',
      'Avoid costly fines and legal issues',
      'Create safer environments for workers and occupants',
      'Documentation of safety compliance measures'
    ],
    color: 'safety'
  },
  {
    id: 3,
    title: 'Quality Assurance',
    icon: FiAward,
    description: 'Verify materials and workmanship meet the highest industry standards.',
    benefits: [
      'Ensure materials meet specifications and quality standards',
      'Verify proper installation and workmanship',
      'Identify and address quality issues early',
      'Documentation for warranty and insurance purposes'
    ],
    color: 'steel'
  },
  {
    id: 4,
    title: 'Equipment Inspection',
    icon: FiTool ,
    description: 'Expert evaluation of construction machinery and equipment for optimal performance.',
    benefits: [
      'Prevent equipment failures and downtime',
      'Ensure machinery meets safety standards',
      'Identify maintenance needs before breakdowns occur',
      'Extend equipment lifespan through proper monitoring'
    ],
    color: 'blueprint'
  },
  {
    id: 5,
    title: 'Technology Integration',
    icon: FiCpu ,
    description: 'Implementing advanced technologies for more efficient inspection processes.',
    benefits: [
      'Drone and aerial inspections for hard-to-reach areas',
      'Thermal imaging to detect hidden issues',
      '3D modeling and simulation for comprehensive assessment',
      'Digital reporting and project management tools'
    ],
    color: 'safety'
  },
  {
    id: 6,
    title: 'Consulting Services',
    icon: FiUsers ,
    description: 'Expert advice and solutions for construction challenges and compliance issues.',
    benefits: [
      'Guidance on regulatory compliance and permitting',
      'Solutions for complex construction challenges',
      'Risk assessment and mitigation strategies',
      'Project planning and quality management advice'
    ],
    color: 'steel'
  },
  {
    id: 7,
    title: 'Documentation & Reporting',
    icon: FiFileText ,
    description: 'Comprehensive documentation and detailed reports for all inspection services.',
    benefits: [
      'Detailed inspection reports with findings and recommendations',
      'Photographic documentation of all issues',
      'Digital records accessible through secure client portal',
      'Compliance documentation for regulatory requirements'
    ],
    color: 'blueprint'
  }
]
export default services;