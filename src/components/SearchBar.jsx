import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-shrink-0">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search districts..."
        className="
          w-full sm:w-64 pl-9 pr-4 py-2 rounded-full
          bg-white/5 border border-white/10 text-white/80
          placeholder-white/30 font-body text-sm
          focus:outline-none focus:border-earth-500/60 focus:bg-white/8
          transition-all
        "
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition"
        >
          ✕
        </button>
      )}
    </div>
  )
}
