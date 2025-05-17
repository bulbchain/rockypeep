import React from 'react'
import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
   ChevronDown,
  Coins,
  Github,
  Rocket,
  Twitter,
  FileText,
  Sparkles,
  Zap,
  Trophy,
  BarChart3,
  Users,
  Globe,
  Handshake,
  HelpCircle,
  Wallet,
  Percent,
  DiscIcon as Discord,
  TextIcon as Telegram,
  Code,
  Crown,
} from "lucide-react"
import HeroSection from './HeroSection'
import AnimatedSection from './AnimatedSection'
import AboutSection from './AboutSection'
import TockonomicsSection from './TockonomicsSection'
import Roadmap from './Roadmap'
import Team from './Team'
import Footer from './Footer'
import FloatingIcons from './FloatingIcons'

// import HeroSection from './HeroSection'
const Page = () => {

    useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = globalStyles
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    // <div className="min-h-screen bg-gradient-to-b from-green-200 via-blue-100 to-purple-200 overflow-hidden">
        <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-50 to-purple-50 overflow-hidden">
   
    {/* <HeroSection/> */}
        <HeroSection />
        {/* <AnimatedSection/> */}
        <AboutSection/>
        <TockonomicsSection/>
        <Roadmap/>
        <Team/>
        <Footer/>
        <FloatingIcons/>
        {/* <Faq/> */}
        </div>
  )
}

// function HeroSection() {
//   return (

//   )
// }

const globalStyles = `
  .shadow-rainbow {
    box-shadow: 
      0 0 10px rgba(150, 255, 150, 0.5),
      0 0 20px rgba(150, 150, 255, 0.3),
      0 0 30px rgba(255, 150, 255, 0.2);
  }
  
  .text-shadow-glow {
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(150, 255, 150, 0.6),
      0 0 30px rgba(150, 150, 255, 0.4);
  }
`
export default Page

