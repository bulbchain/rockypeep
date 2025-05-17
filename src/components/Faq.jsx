// import React from 'react'
// import AnimatedSection from './AnimatedSection'
// import { motion, AnimatePresence } from "framer-motion"
// import { HelpCircle, Percent, Sparkles, Users, Wallet } from 'lucide-react'
// import { Accordion, AccordionItem, AccordionTrigger } from '@everest-ui/react-accordion'

// const Faq = () => {
//   const faqs = [
//     {
//       question: "What is Pepe Maximus?",
//       answer:
//         "Pepe Maximus is not just a memecoin, it's a movement. Built on the blockchain with a community-first approach, Pepe Maximus aims to become the most legendary memecoin in crypto history.",
//       icon: HelpCircle,
//       color: "from-green-400 to-green-600",
//     },
//     {
//       question: "How can I buy $PEPEMAX tokens?",
//       answer:
//         "You can purchase $PEPEMAX tokens on decentralized exchanges like Uniswap. Simply connect your wallet, swap ETH for $PEPEMAX, and join the Pepe Maximus army!",
//       icon: Wallet,
//       color: "from-blue-400 to-blue-600",
//     },
//     {
//       question: "Is there a tax on transactions?",
//       answer: "No! Pepe Maximus has 0% tax on buys and sells. We believe in fair trading for all community members.",
//       icon: Percent,
//       color: "from-purple-400 to-purple-600",
//     },
//     {
//       question: "Is the team doxxed?",
//       answer:
//         "The team prefers to remain anonymous, as is tradition in the memecoin space. However, we are fully committed to the project's success and community growth.",
//       icon: Users,
//       color: "from-yellow-400 to-yellow-600",
//     },
//     {
//       question: "What makes Pepe Maximus different from other memecoins?",
//       answer:
//         "Pepe Maximus combines the viral nature of memes with actual utility and a strong community focus. Our roadmap includes NFTs, staking, and other features that provide real value beyond speculation.",
//       icon: Sparkles,
//       color: "from-green-400 to-blue-600",
//     },
//   ]

//   return (
//     <AnimatedSection>
//            <div className="relative py-10 overflow-hidden">
//         {/* Animated background */}
//         <motion.div
//           className="absolute inset-0 -z-10"
//           animate={{
//             backgroundPosition: ["0% 0%", "100% 100%"],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "mirror",
//             ease: "linear",
//           }}
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fillOpacity='0.05' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
//             backgroundSize: "20px 20px",
//           }}
//         />

//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-6"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
//             }}
//           >
//             Frequently Asked Questions
//           </motion.h2>
//           <motion.div
//             className="h-1 w-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
//             variants={{
//               hidden: { width: 0 },
//               visible: { width: 80, transition: { delay: 0.4, duration: 0.6 } },
//             }}
//           />
//         </div>

//         <motion.div
//           className="max-w-3xl mx-auto bg-gradient-to-br from-green-100/90 via-white/80 to-blue-100/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
//           }}
//         >
//           <Accordion type="single" collapsible className="w-full">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//               >
//                 <AccordionItem value={`item-${index}`} className="border-b border-gray-100 last:border-0">
//                   <AccordionTrigger className="text-left font-medium px-6 py-4 text-gray-800 hover:no-underline group">
//                     <div className="flex items-center">
//                       <motion.div
//                         className={`mr-3 p-2 rounded-full bg-gradient-to-r ${faq.color} bg-opacity-10`}
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                       >
//                         <faq.icon className="w-5 h-5 text-green-600" />
//                       </motion.div>
//                       <span className="group-hover:text-green-600 transition-colors">{faq.question}</span>
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent className="px-6 pb-4 text-gray-600">
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="pl-10"
//                     >
//                       {faq.answer}
//                     </motion.div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </motion.div>
//             ))}
//           </Accordion>
//         </motion.div>
//       </div>
//      </AnimatedSection>
//   )
// }

// export default Faq