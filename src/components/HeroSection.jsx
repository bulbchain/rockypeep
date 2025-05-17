import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronDown, Coins, FileText } from 'lucide-react'

const HeroSection = () => {
  return (

    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-green-400 via-purple-400 to-yellow-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [Math.random() * 100, Math.random() * window.innerWidth],
              y: [Math.random() * 100, Math.random() * window.innerHeight],
              scale: [Math.random() + 0.5, Math.random() + 1.5],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 backdrop-blur-sm bg-gradient-to-br from-green-400/20 to-purple-400/20 p-8 rounded-2xl shadow-rainbow"
        style={{
          boxShadow:
            "0 0 15px rgba(150, 255, 150, 0.5), 0 0 30px rgba(255, 150, 255, 0.5), 0 0 45px rgba(255, 255, 150, 0.5)",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="w-64 h-64 mx-auto mb-8 relative"
        >
          <img
            src="/images/bob/pepe.png"
            alt="Pepe Maximus"
            className="w-full h-full object-contain relative z-10"
          />
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-300 via-green-400 to-purple-500 opacity-70 blur-md" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white mb-6 text-shadow-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(150,255,150,0.8)" }}
        >
          PEPE MAXIMUS
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          The most legendary memecoin to ever grace the blockchain. Not just a frog, but a MAXIMUS!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
         
          <button
          className=" rounded-lg px-6 py-3 text-lg font-bold text-white shadow-lg bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 hover:from-green-600 hover:to-yellow-500 transition-transform transform hover:scale-105 active:scale-95"
          >
            <div className='flex items-center'>
            <Coins className="mr-2 h-5 w-5" /> 
            Buy $PEPE
            </div>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            boxShadow: [
              "0 0 5px rgba(150, 255, 150, 0.5)",
              "0 0 15px rgba(150, 255, 150, 0.8)",
              "0 0 5px rgba(150, 255, 150, 0.5)",
            ],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection