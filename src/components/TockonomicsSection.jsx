import React from 'react'
import AnimatedSection from './AnimatedSection'
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, Code, Coins, Globe, Users, Zap } from 'lucide-react'

const TockonomicsSection = () => {

      const tokenomics = [
    { name: "Community", percentage: 40, color: "bg-gradient-to-r from-green-500 to-green-400", icon: Users },
    { name: "Liquidity", percentage: 30, color: "bg-gradient-to-r from-blue-500 to-blue-400", icon: BarChart3 },
    { name: "Development", percentage: 20, color: "bg-gradient-to-r from-purple-500 to-purple-400", icon: Code },
    { name: "Marketing", percentage: 10, color: "bg-gradient-to-r from-yellow-500 to-yellow-400", icon: Globe },
  ]


  return (
     <AnimatedSection>
             <div className="relative py-10 overflow-hidden bg-gradient-to-br from-green-400 via-purple-400 to-yellow-300">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 -z-10"
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
              "radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 30%), radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 30%)",
            backgroundSize: "100% 100%",
          }}
        />

        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
            }}
          >
            Tokenomics
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
            variants={{
              hidden: { width: 0 },
              visible: { width: 80, transition: { delay: 0.4, duration: 0.6 } },
            }}
          />
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.6 } },
            }}
          >
            Total Supply: 69,420,000,000 $PEPEMAX
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
            }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute rounded-full ${item.color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  style={{
                    width: `${item.percentage * 1.6}px`,
                    height: `${item.percentage * 1.6}px`,
                    left: `${50 - (item.percentage * 0.8) + index * 10}px`,
                    top: `${50 - (item.percentage * 0.8) + index * 20}px`,
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20 + index * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Coins className="w-16 h-16 text-green-700 filter drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.6 } },
            }}
          >
            <div className="space-y-6">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="bg-gradient-to-r from-green-50/90 to-blue-50/90 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100/50"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-800 flex items-center">
                      <item.icon className="w-5 h-5 mr-2 text-green-500" />
                      {item.name}
                    </h4>
                    <span className="text-lg font-bold text-green-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-2.5 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-yellow-100/80 to-green-100/80 backdrop-blur-sm rounded-lg border border-green-200/50"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 1.6 } },
              }}
            >
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                <p className="text-lg text-gray-700 font-medium">
                  0% Tax on buys and sells - We believe in fair trading for all Pepe Maximus holders!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default TockonomicsSection