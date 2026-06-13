import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ResultsSection from './sections/ResultsSection'
import PhilosophySection from './sections/PhilosophySection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import Preloader from './sections/Preloader'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollRef = useRef({ y: 0, speed: 0 })

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    let rafId: number
    let prevY = window.scrollY

    const tick = () => {
      const y = window.scrollY
      const delta = y - prevY
      scrollRef.current.y = y
      scrollRef.current.speed = delta
      prevY = y
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <Preloader />
      <Header scrollRef={scrollRef} />
      <main>
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <PhilosophySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
