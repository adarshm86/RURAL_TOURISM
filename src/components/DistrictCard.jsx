import React from 'react'
import { motion } from 'framer-motion'

export default function DistrictCard({ district, isSelected, index, onClick, onHover }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onClick={onClick}
      onMouseEnter={() => onHover?.(district.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300
        ${isSelected
          ? 'ring-2 ring-earth-400 shadow-lg shadow-earth-900/30'
          : 'border border-white/5 hover:border-white/20'
        }
      `}
    >
      {/* Cover image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={district.coverImage}
          alt={district.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
          style={{ background: `linear-gradient(135deg, ${district.color}, transparent)` }}
        />

        {/* District info overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <p className="font-kannada text-sm" style={{ color: district.accentColor }}>
            {district.kannadaName}
          </p>
          <h3 className="font-display font-bold text-xl text-white leading-tight">
            {district.name}
          </h3>
          <p className="text-white/60 text-xs font-body mt-0.5">{district.tagline}</p>
        </div>

        {/* Place count badge */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-body bg-black/50 text-white/70 border border-white/10">
          {district.places.length} places
        </div>
      </div>

      {/* Highlights row */}
      <div className="flex gap-2 px-4 py-3 bg-white/3 flex-wrap">
        {district.highlights.slice(0, 3).map((h) => (
          <span
            key={h}
            className="text-xs font-body px-2 py-0.5 rounded-full border border-white/10 text-white/50"
          >
            {h}
          </span>
        ))}
        {district.highlights.length > 3 && (
          <span className="text-xs text-white/30">+{district.highlights.length - 3}</span>
        )}
        <span className="ml-auto text-xs text-earth-400 font-body group-hover:text-earth-300 transition">
          Explore →
        </span>
      </div>
    </motion.div>
  )
}
