import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Crown, Disc2Icon, GitBranchPlus, Telescope, X } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-blue-900">
        <motion.div
          className="absolute inset-0"
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
              "radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.4) 0%, transparent 30%), radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 30%), radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 30%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Crown className="mr-2 h-6 w-6 text-yellow-400" /> Pepe Maximus
              </h3>
              <p className="max-w-md text-green-200">
                The most legendary memecoin to ever grace the blockchain. Join the Pepe Maximus army today!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              {[X, GitBranchPlus, Disc2Icon, Telescope].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-full"
                  style={{
                    boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-t border-green-700/50 mt-8 pt-8 text-center text-green-300 text-sm"
          >
            <p>© 2025 Pepe Maximus. All rights reserved.</p>
            <p className="mt-2">
              $PEPEMAX is a meme coin with no intrinsic value or expectation of financial return. There is no formal
              team or roadmap. It's completely useless and for entertainment purposes only.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer