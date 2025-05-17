import { useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
const AnimatedSection = ({ children }) => {

const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="py-0 px-4 max-w-7xl mx-auto"
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection