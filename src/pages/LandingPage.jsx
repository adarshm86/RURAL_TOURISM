import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Leaf configurations
const LEAVES = [
  { left: '5%', delay: 0, duration: 8, emoji: '🍃' },
  { left: '18%', delay: 2, duration: 11, emoji: '🍂' },
  { left: '32%', delay: 1, duration: 9, emoji: '🌿' },
  { left: '50%', delay: 3, duration: 7, emoji: '🍃' },
  { left: '65%', delay: 0.5, duration: 10, emoji: '🍂' },
  { left: '80%', delay: 2.5, duration: 8.5, emoji: '🍃' },
  { left: '92%', delay: 1.5, duration: 12, emoji: '🌿' },
]

function FallingLeaf({ left, delay, duration, emoji }) {
  return (
    <motion.div
      style={{ left, position: 'absolute', top: '-50px', fontSize: '22px', zIndex: 5 }}
      animate={{ y: '110vh', rotate: 360, opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        opacity: { times: [0, 0.1, 0.85, 1] },
      }}
    >
      {emoji}
    </motion.div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overlayOpacity = Math.min(0.5 + scrollY / 600, 0.85)

  return (
    <div className="bg-black min-h-screen">
      {/* ── Hero ── */}
      <div className="relative h-screen w-full overflow-hidden">

        {/* Falling Leaves */}
        {LEAVES.map((l, i) => <FallingLeaf key={i} {...l} />)}

        {/* Navbar (FIXED ROUTING HERE) */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl md:text-2xl font-display font-semibold tracking-wide"
          >
            <span className="font-kannada">ಕರ್ನಾಟಕ</span>{' '}
            <span className="font-light text-earth-300">Rural</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 text-white"
          >
            {/* Swapped <a> for <button> to use React Router */}
            <button 
              onClick={() => navigate('/explore')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              Explore
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              About
            </button>
            
            {/* Added Contact Us button */}
            <button 
              onClick={() => navigate('/aboutus')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate('/explore')}
              className="px-5 py-2 border border-white/60 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 tracking-wider font-body"
            >
              Get Started
            </button>
          </motion.div>
        </nav>

        {/* Video BG */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/myvedcomp.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY ONLY (remove gradient) */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(0,0,0,0.5)" }}
        />

        {/* Overlay darkens on scroll */}
        <div
          className="absolute inset-0 transition-all duration-100 z-10"
          style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
        />

        {/* Decorative border */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-earth-500/40 m-6" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-earth-500/40 m-6" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-earth-500/40 m-6" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-earth-500/40 m-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-kannada text-earth-300 text-lg md:text-xl mb-4 tracking-widest"
          >
            ಮಣ್ಣಿನ ಮಡಿಲಲ್ಲಿ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            Explore Rural<br />
            <span className="italic text-earth-300">Karnataka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/70 font-body max-w-md"
          >
            Ancient temples, misty peaks, golden sands, and the warmth of Karnataka's villages all in one journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-3 bg-earth-500 text-white rounded-full hover:bg-earth-400 transition-all duration-300 font-body font-medium tracking-wide shadow-lg shadow-earth-900/50"
            >
              Start Exploring →
            </button>
            <button onClick={()=> navigate('/calendar')} className="px-8 py-3 border border-white/30 text-white rounded-full hover:border-earth-400 hover:text-earth-300 transition-all duration-300 font-body font-medium tracking-wide">
              Watch Calendar
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-white/60"
          >
            {[
              { num: '30+', label: 'Districts' },
              { num: '500+', label: 'Heritage Sites' },
              { num: '6', label: 'World Heritage Sites' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-display font-bold text-earth-300">{num}</div>
                <div className="text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* ── Teaser strip ── */}
      <div className="h-[50vh] bg-gradient-to-b from-black to-deepgreen flex items-center justify-center">
        <motion.p
          className="text-center text-white/50 font-display italic text-2xl max-w-lg px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          "Every village in Karnataka holds a story waiting to be discovered."
        </motion.p>
      </div>
    </div>
  )
}