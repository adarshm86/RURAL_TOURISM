import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#080f08]/90 backdrop-blur-xl border-b border-white/5"
    >
      {/* Logo */}
      <button
        onClick={() => navigate('/')}
        className="text-white font-display text-xl font-semibold tracking-wide hover:text-earth-300 transition"
      >
        <span className="font-kannada text-earth-400">ಕರ್ನಾಟಕ</span>{' '}
        <span className="font-light">Rural</span>
      </button>

      {/* Nav links */}
      <div className="flex items-center gap-6">
        {[
          { label: 'Explore', path: '/explore' },
          { label: 'About', path: '/about' },
          { label: 'Contactus', path: '/aboutus' }
        ].map(({ label, path }) => (
          <button
            type="button"   // ✅ ADD THIS
            key={label}
            onClick={() => navigate(path)}
            className={`text-sm font-body tracking-widest uppercase transition ${
              location.pathname === path ? 'text-earth-300' : 'text-white/60 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode?.(!darkMode)}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-earth-400 hover:text-earth-300 transition"
          title="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </motion.nav>
  )
}