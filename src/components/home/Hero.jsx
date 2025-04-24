import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import * as THREE from 'three'

const Hero = () => {
  const canvasRef = useRef(null)
  
  // Initialize Three.js scene with the previous working model
  useEffect(() => {
    // Setup
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    
    // Sizing
    const sizes = {
      width: canvas.clientWidth,
      height: canvas.clientHeight
    }
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 8)
    scene.add(camera)
    
    // Renderer with better settings
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    
    // Blueprint materials
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x4299E1,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    })
    
    const solidMaterial = new THREE.MeshStandardMaterial({
      color: 0x4299E1,
      transparent: true,
      opacity: 0.2,
      metalness: 0.5,
      roughness: 0.7
    })
    
    // Building structure
    const mainBuilding = new THREE.Group()
    
    // Main tower
    const towerGeometry = new THREE.BoxGeometry(2.5, 5, 2.5)
    const tower = new THREE.Mesh(towerGeometry, gridMaterial)
    tower.position.y = 1
    mainBuilding.add(tower)
    
    // Add floors with windows
    for (let i = 0; i < 8; i++) {
      const floorGeometry = new THREE.PlaneGeometry(2.7, 2.7)
      const floor = new THREE.Mesh(floorGeometry, gridMaterial)
      floor.rotation.x = -Math.PI / 2
      floor.position.y = -2.5 + i * 1.2
      tower.add(floor)
      
      // Add windows
      if (i % 2 === 0) {
        const windowGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.1)
        const windowMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.7
        })
        
        const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial)
        leftWindow.position.set(-1, -2 + i * 1.2, 1.26)
        tower.add(leftWindow)
        
        const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial)
        rightWindow.position.set(1, -2 + i * 1.2, 1.26)
        tower.add(rightWindow)
      }
    }
    
    // Add surrounding smaller buildings
    const smallBuilding1 = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 2, 1.5),
      solidMaterial
    )
    smallBuilding1.position.set(-3, 0, 0)
    mainBuilding.add(smallBuilding1)
    
    const smallBuilding2 = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 3, 1.2),
      solidMaterial
    )
    smallBuilding2.position.set(3, 0.5, -1)
    mainBuilding.add(smallBuilding2)
    
    const smallBuilding3 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 1.8, 6),
      solidMaterial
    )
    smallBuilding3.position.set(2, 0, 3)
    mainBuilding.add(smallBuilding3)
    
    // Add floor grid
    const floorGrid = new THREE.GridHelper(20, 20, 0x4299E1, 0x4299E1)
    floorGrid.position.y = -3
    floorGrid.material.opacity = 0.2
    floorGrid.material.transparent = true
    scene.add(floorGrid)
    
    scene.add(mainBuilding)
    
    // Add ambient and directional light
    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)
    
    // Animation variables
    let time = 0
    
    // Animate
    const animate = () => {
      time += 0.005
      
      // Rotate the building group
      mainBuilding.rotation.y = time * 0.5
      
      // Add subtle bobbing motion
      mainBuilding.position.y = Math.sin(time * 2) * 0.1
      
      // Move camera slightly for parallax effect
      camera.position.x = Math.sin(time * 0.3) * 0.5
      camera.position.z = 8 + Math.sin(time * 0.2) * 0.3
      camera.lookAt(scene.position)
      
      // Render
      renderer.render(scene, camera)
      
      // Call animate again on the next frame
      window.requestAnimationFrame(animate)
    }
    
    animate()
    
    // Handle resizing
    const handleResize = () => {
      sizes.width = canvas.clientWidth
      sizes.height = canvas.clientHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      scene.traverse(object => {
        if (object.isMesh) {
          object.geometry.dispose()
          if (object.material.isMaterial) {
            object.material.dispose()
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          }
        }
      })
      renderer.dispose()
    }
  }, [])
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Model */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-90">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-5"></div>
      
      {/* Smaller content container */}
      <div className="relative z-20 w-full max-w-4xl px-6 lg:max-w-5xl xl:max-w-6xl">
        <motion.div 
          className="bg-white/85 dark:bg-steel-900/90 backdrop-blur-lg p-8 lg:p-12 rounded-xl shadow-2xl border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight text-center">
                <span className="text-steel-800 dark:text-white block">We are the world's leading</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent block mt-3 lg:mt-5">
                  inspection, testing, calibration and certification company
                </span>
              </h1>
            </motion.div>
            
            <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-center text-steel-700 dark:text-steel-300 font-medium max-w-4xl mx-auto leading-relaxed">
                Our value to society is enabling a better, safer and more interconnected world.
                <br />
                <span className="text-blue-600 dark:text-blue-400 font-semibold mt-3 inline-block text-xl">
                  Since 1963
                </span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-5 mt-8 lg:mt-10"
            >
              <Link 
                to="/services" 
                className="btn btn-primary px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold hover:scale-105 transition-transform"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-secondary px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold hover:scale-105 transition-transform"
              >
                Contact Experts
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient with grid pattern overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-steel-900 to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4299E1 1px, transparent 1px),
              linear-gradient(to bottom, #4299E1 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
    </section>
  )
}

export default Hero