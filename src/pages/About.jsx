import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
  const navigate = useNavigate()

  // Animation variants for smooth staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const cards = [
    {
      icon: "🌾",
      title: "Preserve the Unseen",
      desc: "Beyond the major cities lies a wealth of dying arts, fading folklore, and undocumented history. We exist to digitize and preserve these rural treasures before they are lost to time."
    },
    {
      icon: "🛤️",
      title: "Redefine Tourism",
      desc: "We want to shift the focus from crowded commercial hotspots to the authentic, soulful experiences of village fairs, ancient ruins, and grassroots craft centers."
    },
    {
      icon: "🤝",
      title: "Empower Communities",
      desc: "By bringing visibility to rural artisans, local festival organizers, and remote temple guides, we aim to bridge the gap between global travelers and local livelihoods."
    }
  ]

  return (
    <div className="min-h-screen bg-[#080f08] text-white selection:bg-[#e4c590] selection:text-black overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')} 
          className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm font-medium tracking-wide">Back</span>
        </motion.button>
        <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
          ಕರ್ನಾಟಕ Rural
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e4c590]/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-[#e4c590] font-kannada text-xl md:text-2xl mb-4 tracking-widest"
        >
          ನಮ್ಮ ಕಥೆ
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight max-w-5xl"
        >
          Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4c590] to-amber-700 italic">Soul</span> of Karnataka.
        </motion.h1>
      </section>

      {/* THE STORY SECTION (Magazine Style) */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.pexels.com/photos/20281434/pexels-photo-20281434.jpeg" 
                alt="Rural Karnataka Culture" 
                className="w-full h-full object-cover  transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f08] via-transparent to-transparent opacity-80" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#e4c590]/30 rounded-full -z-10 animate-[spin_20s_linear_infinite] border-dashed" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">The Heart Behind the Code</h2>
            <p className="text-lg text-white/70 leading-relaxed font-body">
              This project didn't start in a sterile tech hub; it started on the ground. Spending time out in the field—working in community camps, sitting with local artisans, and witnessing the sheer scale of our rural heritage—sparked a realization. 
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-body">
              We realized that the true heartbeat of Karnataka isn't just in the towering tech parks of Bengaluru. It lives in the rhythmic beats of the Dollu Kunitha, the fiery devotion of the Mylara Jatre, and the silent majesty of forgotten Chalukyan ruins. 
            </p>
            <p className="text-lg text-[#e4c590] font-medium leading-relaxed italic">
              We built this platform to ensure these stories are never lost in the digital age.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MISSION CARDS SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black/40 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Our Mission</h2>
            <div className="w-16 h-1 bg-[#e4c590] mx-auto mt-6 rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#e4c590]/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#e4c590]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="text-5xl mb-6 drop-shadow-lg">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e4c590] transition-colors">{card.title}</h3>
                <p className="text-white/60 leading-relaxed font-body">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-32 px-6 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
        >
          Ready to step off the beaten path?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => navigate('/explore')}
          className="px-10 py-4 bg-[#e4c590] text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(228,197,144,0.3)]"
        >
          Start Exploring Maps
        </motion.button>
      </section>

    </div>
  )
}