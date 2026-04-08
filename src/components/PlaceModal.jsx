import React from 'react'
import { motion } from 'framer-motion'

export default function PlaceModal({ place, district, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
          w-full md:w-[560px] bg-[#0f1f0f] border border-white/10 rounded-t-3xl md:rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0f] via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:bg-black/70 hover:text-white transition backdrop-blur"
          >
            ✕
          </button>

          {/* Category badge */}
          <span
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body text-white"
            style={{ background: district.color }}
          >
            {place.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="font-display font-bold text-2xl text-white">{place.name}</h2>
          <p className="text-white/70 font-body mt-3 leading-relaxed text-sm">
            {place.description}
          </p>

          {/* Meta */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {place.timings && (
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-1">Timings</p>
                <p className="text-white/80 text-sm font-body">{place.timings}</p>
              </div>
            )}
            {place.bestSeason && (
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-1">Best Season</p>
                <p className="text-white/80 text-sm font-body">{place.bestSeason}</p>
              </div>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={onClose}
            className="mt-5 w-full py-3 rounded-xl font-body font-medium text-white transition"
            style={{ background: district.color }}
          >
            Got it, explore the map!
          </button>
        </div>
      </motion.div>
    </>
  )
}
