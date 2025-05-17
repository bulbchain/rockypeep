import React from 'react'
import AnimatedSection from './AnimatedSection'
import { Code, Crown, Sparkles, Users } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const Team = () => {
      const team = [
    {
      name: "Pepe Maximus",
      role: "Founder & CEO",
      image: "/images/bob/pepe.png",
      description: "The legendary frog himself. Visionary, leader, meme lord.",
      color: "from-green-400 to-green-600",
      icon: Crown,
    },
    {
      name: "Crypto Chad",
      role: "Lead Developer",
      image: "/images/bob/nerdpepe.png",
      description: "Blockchain wizard with diamond hands and a galaxy brain.",
      color: "from-blue-400 to-blue-600",
      icon: Code,
    },
    {
      name: "Meme Queen",
      role: "Marketing Director",
      image: "/images/bob/fempepe1.png",
      description: "Turning memes into marketing gold since the dawn of crypto.",
      color: "from-purple-400 to-purple-600",
      icon: Sparkles,
    },
    {
      name: "Ser Hodl",
      role: "Community Manager",
      image: "/images/bob/hodlpepe.png",
      description: "Never sold a token in his life. Community first, always.",
      color: "from-yellow-400 to-yellow-600",
      icon: Users,
    },
  ]
  return (
     <AnimatedSection>
              <div className="relative py-10 overflow-hidden bg-gradient-to-br from-green-400 via-purple-400 to-yellow-300">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-10"
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
              "radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.4) 0%, transparent 20%), radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 20%), radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 20%), radial-gradient(circle at 70% 90%, rgba(234, 179, 8, 0.4) 0%, transparent 20%)",
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
            The Team
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
            variants={{
              hidden: { width: 0 },
              visible: { width: 80, transition: { delay: 0.4, duration: 0.6 } },
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6 + index * 0.2 },
                },
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-green-50/90 via-white/80 to-blue-50/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg relative"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 z-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />

                    {/* Animated overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Floating icon */}
                  <motion.div
                    className={`absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg z-10`}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    <member.icon
                      className={`w-6 h-6 bg-gradient-to-br ${member.color} text-transparent bg-clip-text`}
                    />
                  </motion.div>
                </div>

                <div className="p-6 relative z-10">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${member.color} text-transparent bg-clip-text mb-1`}
                  >
                    {member.name}
                  </h3>
                  <p className="text-green-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

     </AnimatedSection>
  )
}

export default Team