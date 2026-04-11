import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const navigate = useNavigate();

  const teamMembers = [
    { 
      name: 'Adarsh M', 
      id: '1VA23IS002', 
      email: 'adarshm.reach@gmail.com',
      role: 'Project Innovator'
    },
    { 
      name: 'Kavana H', 
      id: '1VA23IS045', 
      email: 'kavanahpoojary@gmail.com',
      role: 'Creative Developer'
    },
    { 
      name: 'Shreya P Shetty', 
      id: '1VA23IS099', 
      email: 'shreyapshetty@gmail.com',
      role: 'Research & Design'
    },
  ];

  // Animation variants for staggering the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-[#080f08] text-white selection:bg-[#e4c590] selection:text-black overflow-x-hidden font-body relative">
      
      {/* ── CINEMATIC BACKGROUND ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080f08]/90 via-black/70 to-[#080f08] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080f08_100%)] z-20" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-12 bg-black/20 backdrop-blur-md border-b border-white/5">
        <motion.button
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')} 
          className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300 bg-black/40"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </motion.button>
        <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
          ಕರ್ನಾಟಕ Rural
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-30 min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20">
        
        {/* Hero Headers */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-kannada text-[#e4c590] text-2xl md:text-3xl mb-4 drop-shadow-md">ನಮ್ಮ ತಂಡ</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter drop-shadow-2xl">
            The <span className="text-[#e4c590] italic">Creators</span>
          </h1>
          <p className="text-white/50 tracking-[0.3em] uppercase text-sm mt-6 font-medium">
            Team BrainRot • Building the Future of Heritage
          </p>
        </motion.div>

        {/* ── GLASSMORPHISM CARDS GRID ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15 }}
              className="group relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-[#e4c590]/50"
            >
              {/* Glowing Background Blob on Hover */}
              <div className="absolute inset-0 bg-[#e4c590]/0 group-hover:bg-[#e4c590]/5 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />

              {/* Avatar Circle */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#e4c590]/30 group-hover:border-[#e4c590] group-hover:animate-[spin_10s_linear_infinite] transition-colors duration-500" />
                <div className="w-20 h-20 rounded-full bg-[#080f08] border border-white/10 flex items-center justify-center shadow-inner z-10 group-hover:shadow-[0_0_20px_rgba(228,197,144,0.4)] transition-shadow duration-500">
                  <span className="text-3xl font-display font-bold text-[#e4c590]">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <h3 className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#e4c590] transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="text-sm font-body text-white/60 italic mb-4">
                {member.role}
              </p>
              
              <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-[#e4c590]/50 transition-colors" />
              
              {/* ID & Email block - Neatly placed inside the card! */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2 font-bold">
                  {member.id}
                </p>
                <p className="text-[11px] tracking-widest text-[#e4c590]/80 font-body">
                  {member.email}
                </p>
              </div>

              {/* Action Button */}
              <a 
                href={`mailto:${member.email}`}
                className="mt-auto px-8 py-3 border border-white/20 rounded-full text-sm font-body text-white/70 tracking-widest hover:bg-[#e4c590] hover:text-black hover:border-[#e4c590] transition-all duration-300 z-10 shadow-lg"
              >
                Say Hello
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}