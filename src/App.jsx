import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import AwardsSection from './components/AwardsSection'
import TeamSection from './components/TeamSection'
import PartnersSection from './components/PartnersSection'
import ContactSection from './components/ContactSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HistorySection />
      <AwardsSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
    </div>
  )
}
