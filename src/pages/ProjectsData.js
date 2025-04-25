const projects = [
  {
    id: 1,
    title: "Harborview Commercial Tower",
    category: "Commercial",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Comprehensive inspection services for a 32-story commercial tower, ensuring structural integrity and code compliance throughout construction."
  },
  {
    id: 2,
    title: "Riverside Luxury Apartments",
    category: "Residential",
    location: "Chicago, IL",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Quality assurance and safety inspections for a 200-unit luxury apartment complex, including foundation, structural, and final inspections."
  },
  {
    id: 3,
    title: "Sunrise Medical Center",
    category: "Healthcare",
    location: "Austin, TX",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection of critical healthcare facilities including surgery rooms and ICU, with a focus on safety and accessibility compliance."
  },
  {
    id: 4,
    title: "Greenwood High School Campus",
    category: "Educational",
    location: "Seattle, WA",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Campus-wide inspection of classroom blocks, laboratories, and gymnasium facilities ensuring earthquake safety standards."
  },
  {
    id: 5,
    title: "Skyline Hospitality Resort",
    category: "Hospitality",
    location: "Orlando, FL",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Pre-opening inspection for a 5-star hotel with 350 rooms, spa, and rooftop dining facilities."
  },
  {
    id: 6,
    title: "Metro Industrial Park",
    category: "Industrial",
    location: "Detroit, MI",
    image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Comprehensive inspection for large-scale warehousing and manufacturing units including fire and environmental safety."
  },
  {
    id: 7,
    title: "Bayfront Tech Campus",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Multi-tower commercial technology hub with LEED certification, inspected for sustainable and green compliance."
  },
  {
    id: 8,
    title: "Maple Street Villas",
    category: "Residential",
    location: "Denver, CO",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Series of 40 luxury villas with smart home integration and energy-efficient design inspection."
  },
  {
    id: 9,
    title: "Caring Hands Clinic",
    category: "Healthcare",
    location: "San Diego, CA",
    image: "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection of outpatient clinic, labs, and diagnostic center with a focus on patient and healthcare worker safety."
  },
  {
    id: 10,
    title: "Bright Future University",
    category: "Educational",
    location: "Boston, MA",
    image: "https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "University campus inspection covering student housing, libraries, auditoriums, and green zones."
  },
  {
    id: 11,
    title: "Oceanview Beach Hotel",
    category: "Hospitality",
    location: "Miami, FL",
    image: "https://images.pexels.com/photos/261106/pexels-photo-261106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Luxury beachfront hotel project inspection with emphasis on weatherproofing and guest safety."
  },
  {
    id: 12,
    title: "Titanium Steel Plant",
    category: "Industrial",
    location: "Pittsburgh, PA",
    image: "https://images.pexels.com/photos/236334/pexels-photo-236334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection of high-temperature manufacturing and processing units with emphasis on safety standards."
  },
  {
    id: 13,
    title: "Empire Trade Center",
    category: "Commercial",
    location: "Dallas, TX",
    image: "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection for a commercial complex with offices, cafes, and co-working spaces."
  },
  {
    id: 14,
    title: "Willow Park Residences",
    category: "Residential",
    location: "Phoenix, AZ",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Routine safety inspection for a suburban residential neighborhood with family homes."
  },
  {
    id: 15,
    title: "Lakeside Medical Pavilion",
    category: "Healthcare",
    location: "Minneapolis, MN",
    image: "https://images.pexels.com/photos/386145/pexels-photo-386145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection of advanced imaging centers and laboratories with clean room standards."
  },
  {
    id: 16,
    title: "North Hills Academy",
    category: "Educational",
    location: "Portland, OR",
    image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Campus-wide inspections including dormitories, cafeteria, and tech-enabled classrooms."
  },
  {
    id: 17,
    title: "Azure Skies Resort",
    category: "Hospitality",
    location: "Las Vegas, NV",
    image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Pre-launch luxury hotel inspection with casino, event center, and wellness spa."
  },
  {
    id: 18,
    title: "Ironworks Fabrication Facility",
    category: "Industrial",
    location: "Cleveland, OH",
    image: "https://images.pexels.com/photos/3855966/pexels-photo-3855966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Inspection for welding shops, high-load cranes, and automated production systems."
  },
  {
    id: 19,
    title: "Global Business Center",
    category: "Commercial",
    location: "Atlanta, GA",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Multi-national corporate office with inspection for energy efficiency and compliance."
  },
  {
    id: 20,
    title: "Palm Grove Apartments",
    category: "Residential",
    location: "Tampa, FL",
    image: "https://images.pexels.com/photos/208739/pexels-photo-208739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "Final inspection for gated community apartments with recreation and safety features."
  }
];

export default projects;
