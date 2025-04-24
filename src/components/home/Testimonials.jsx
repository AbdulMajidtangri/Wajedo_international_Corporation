import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useSwipeable } from 'react-swipeable'

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Project Manager, Skyline Construction',
    quote: 'WAJEDOs inspection services ensured our commercial building project met all regulatory requirements. Their attention to detail helped us identify and address potential issues before they became costly problems.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Director, Urban Development Corp',
    quote: 'The team at WAJEDO provided exceptional inspection services for our multi-story residential complex. Their thorough approach and clear reporting gave us confidence throughout the construction process.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
  },
  {
    id: 3,
    name: 'Robert Martinez',
    role: 'Site Supervisor, Premier Buildings',
    quote: 'Working with WAJEDO has been a game-changer for our quality control procedures. Their inspectors are knowledgeable, professional, and committed to ensuring every project meets the highest standards.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    trackMouse: true // allows swipe with mouse too
  })

  const { name, role, quote, image } = testimonials[current]

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">What Our Clients Say</h2>
        <div className="relative flex items-center justify-center" {...swipeHandlers}>
          {/* Left navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FiChevronLeft size={24} className="text-gray-700 dark:text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full sm:w-[80%]">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-200 object-cover"
            />
            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{quote}"</p>
            <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
            <p className="text-gray-500 dark:text-gray-400">{role}</p>
          </div>

          {/* Right navigation */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FiChevronRight size={24} className="text-gray-700 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
