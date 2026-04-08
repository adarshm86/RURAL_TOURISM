import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageGallery({ images, name }) {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-earth-300 mb-5">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              i === 0 ? 'col-span-2 h-56' : 'h-36'
            }`}
          >
            <img
              src={src}
              alt={`${name} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-2xl">⊕</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4"
            >
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={images[lightbox]}
                alt={`${name} ${lightbox + 1}`}
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
              >
                →
              </button>

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                ✕
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
