import React from 'react'
import AnimatedSection from './AnimatedSection'
import { motion, AnimatePresence } from "framer-motion"
import { Coins, Crown, Sparkle, Trophy, User, Zap } from 'lucide-react'
const AboutSection = () => {
  return (
   <AnimatedSection>
    <div className="text-center mb-16 py-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 mb-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          }}
        >
          About Pepe Maximus
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
          variants={{
            hidden: { width: 0 },
            visible: { width: 80, transition: { delay: 0.4, duration: 0.6 } },
          }}
        />
      </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.4 } },
          }}
          className="relative"
        >
          <img
            src="/images/bob/glasspepe.png"
            alt="Pepe Maximus Story"
            className="w-fit h-auto rounded-lg shadow-xl relative z-10"
          />
          <motion.div
            className="absolute -inset-4 bg-gradient-to-br from-green-300 via-blue-300 to-purple-300 rounded-xl -z-0 opacity-70 blur-lg"
            animate={{
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Floating icons around the image */}
          {[Sparkle, Zap, Trophy, Coins].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-green-500"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
              style={{
                top: `${20 + index * 20}%`,
                left: index % 4 === 0 ? "-10%" : "90%",
                filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.7))",
              }}
            >
              <Icon size={30} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.6 } },
          }}
          className="bg-gradient-to-br from-green-100/80 to-blue-100/80 p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm"
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10 z-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2322c55e' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4 flex items-center">
              <Crown className="mr-2 h-6 w-6 text-yellow-500" /> The Legend Begins
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Born in the depths of the meme universe, Pepe Maximus isn't just another frog-themed token. He's the
              chosen one, destined to bring balance to the memecoin ecosystem and massive gains to his loyal followers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With the strength of a thousand diamond hands and the wisdom of ancient crypto sages, Pepe Maximus leads
              his army toward financial glory and meme immortality.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block">
              
              {/* <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold shadow-lg">
                <User className="mr-2 h-5 w-5" /> Join the Army
              </button> */}

                <button className=" rounded-lg px-6 py-3 text-lg font-bold text-white shadow-lg bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 hover:from-green-600 hover:to-yellow-500 transition-transform transform hover:scale-105 active:scale-95" >
                  <div className='flex items-center'>
                   <User className="mr-2 h-5 w-5" /> Join the Army
                  </div>
                </button>
              
              <motion.div
                className="absolute inset-0 rounded-md bg-gradient-to-r from-green-400 to-blue-400 -z-10 blur-md"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

   </AnimatedSection>
  )
}

export default AboutSection