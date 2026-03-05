import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <>
   <section className="bg-[#222222] h-[20vh] lg:h-[40vh] flex items-center justify-center">
  <motion.h1
    // initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="garamond-font text-2xl md:text-5xl lg:text-6xl font-serif italic text-center text-[#D4AF37] "
  >
    Bijender Singh Associates LLP
  </motion.h1>
</section>

    </> 
  )
}

export default HeroSection