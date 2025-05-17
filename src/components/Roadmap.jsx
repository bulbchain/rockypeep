import { BarChart3, Globe, Handshake, Rocket } from 'lucide-react'
import React from 'react'
import AnimatedSection from './AnimatedSection'
import { motion, AnimatePresence } from "framer-motion"

const Roadmap = () => {

      const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      items: [
        "Website and social media launch",
        "Community building",
        "Initial DEX offering",
        "CoinGecko & CoinMarketCap listings",
      ],
      icon: Rocket,
      color: "from-green-400 to-green-600",
      iconColor: "text-green-500",
    },
    {
      phase: "Phase 2",
      title: "Expansion & Partnerships",
      items: [
        "Major exchange listings",
        "Strategic partnerships",
        "Meme contests and community events",
        "Expanded marketing campaigns",
      ],
      icon: Handshake,
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-500",
    },
    {
      phase: "Phase 3",
      title: "Utility & Growth",
      items: [
        "Pepe Maximus NFT collection",
        "Staking platform launch",
        "Community governance implementation",
        "Pepe Maximus merchandise store",
      ],
      icon: BarChart3,
      color: "from-purple-400 to-purple-600",
      iconColor: "text-purple-500",
    },
    {
      phase: "Phase 4",
      title: "Pepe Maximus Ecosystem",
      items: ["Cross-chain expansion", "Pepe Maximus mobile app", "Metaverse integration", "Charitable initiatives"],
      icon: Globe,
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-500",
    },
  ]

  return (
   <AnimatedSection>
           <div className="relative py-10 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 -z-0 opacity-20"
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
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2322c55e' fillOpacity='0.2' fillRule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "100px 100px",
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
            Roadmap
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
            variants={{
              hidden: { width: 0 },
              visible: { width: 80, transition: { delay: 0.4, duration: 0.6 } },
            }}
          />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 via-blue-300 to-purple-300 hidden md:block rounded-full"
            variants={{
              hidden: { height: 0 },
              visible: { height: "100%", transition: { delay: 0.6, duration: 1.5 } },
            }}
          />

          <div className="space-y-24 relative">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.8 + index * 0.2 },
                  },
                }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-green-50/90 via-white/80 to-blue-50/90 backdrop-blur-sm p-6 rounded-xl shadow-lg relative overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0`}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <h3
                      className={`text-xl font-bold bg-gradient-to-r ${item.color} text-transparent bg-clip-text mb-2`}
                    >
                      {item.phase}
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h4>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                      {item.items.map((listItem, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + index * 0.2 + i * 0.1 }}
                        >
                          <motion.span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0`}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                          />
                          <span className="text-gray-700">{listItem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="md:w-0 flex justify-center my-6 md:my-0 relative">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 shadow-lg`}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{
                      scale: {
                        delay: 1 + index * 0.2,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      },
                      rotate: {
                        delay: 1 + index * 0.2,
                        duration: 1,
                      },
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Pulsing effect */}
                  <motion.div
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-r ${item.color} opacity-70 z-0`}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
   </AnimatedSection>
  )
}

export default Roadmap