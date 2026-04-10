
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REGIONS = [
  { id: 'coastal', name: 'Coastal Karnataka', icon: '🌊', color: '#10b981' },
  { id: 'malnad', name: 'Malnad Highlands', icon: '⛰️', color: '#059669' },
  { id: 'north', name: 'Northern Plains', icon: '🏛️', color: '#34d399' },
  { id: 'south', name: 'Southern Heritage', icon: '🏰', color: '#6ee7b7' },
];

export default function SmartPlanner() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);
  const [selection, setSelection] = useState({ region: '', days: 3 });

  const handleGenerate = () => {
    setLoading(true);
    setStep(3);
    // Simulate AI generation delay
    setTimeout(() => {
      setPlan({
        title: `Your ${selection.region} Discovery`,
        itinerary: [
          { day: 1, activity: "Arrive in village, welcome drink (Neer Majjige).", spot: "Local Homestay" },
          { day: 2, activity: "Morning trek followed by village artisan workshop.", spot: "Handicraft Center" },
          { day: 3, activity: "Local festival celebration & traditional feast.", spot: "Village Temple Square" }
        ]
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-4 pb-20 px-6 font-body">
        <nav className="relative z-20 flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')} // Navigates back to landing page
          className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300 backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </motion.button>

        {/* Optional: Add your Logo/Title in the center or right */}
        <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
          ಕರ್ನಾಟಕ Rural
        </div>
      </nav>
      <div className="max-w-4xl mx-auto mt-16">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-earth-300 font-kannada text-2xl mb-2">ನಿಮ್ಮ ಪ್ರಯಾಣ, ನಿಮ್ಮ ಆಯ್ಕೆ</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold">Smart Trip Planner</h1>
        </motion.div>

        <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: Region Selection */}
            {step === 1 && (
              <motion.div key="s1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                <h3 className="text-2xl font-display mb-8">Where do you want to wander?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REGIONS.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => { setSelection({ ...selection, region: r.name }); setStep(2); }}
                      className="group p-6 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-left flex items-center justify-between"
                    >
                      <div>
                        <span className="text-3xl block mb-2">{r.icon}</span>
                        <span className="text-lg font-bold">{r.name}</span>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Duration Selection */}
            {step === 2 && (
              <motion.div key="s2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                <button onClick={() => setStep(1)} className="text-earth-300 text-sm mb-6 flex items-center gap-2">← Back to regions</button>
                <h3 className="text-2xl font-display mb-8">How many days is your escape?</h3>
                <div className="flex flex-wrap gap-4 mb-12">
                  {[2, 3, 5, 7].map(d => (
                    <button 
                      key={d} 
                      onClick={() => setSelection({...selection, days: d})}
                      className={`px-8 py-4 rounded-full border transition-all ${selection.days === d ? 'bg-earth-500 border-earth-500' : 'border-white/20 hover:border-white'}`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handleGenerate}
                  className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-earth-300 transition-colors uppercase tracking-widest"
                >
                  Generate My Rural Path
                </button>
              </motion.div>
            )}

            {/* STEP 3: Results / Loading */}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                {loading ? (
                  <div className="py-20">
                    <div className="w-16 h-16 border-4 border-earth-300 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                    <p className="font-kannada text-earth-300 text-xl animate-pulse">ಗ್ರಾಮೀಣ ಹಾದಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...</p>
                  </div>
                ) : (
                  <div className="text-left">
                    <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                      <h3 className="text-3xl font-display font-bold">{plan.title}</h3>
                      <button onClick={() => setStep(1)} className="text-xs uppercase tracking-tighter border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black">Reset</button>
                    </div>
                    <div className="space-y-8">
                      {plan.itinerary.map((item, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center font-bold">{item.day}</div>
                            {idx !== plan.itinerary.length - 1 && <div className="w-1 h-full bg-white/10 mt-2" />}
                          </div>
                          <div className="pb-8">
                            <h4 className="text-earth-300 text-sm font-bold uppercase tracking-widest mb-1">{item.spot}</h4>
                            <p className="text-xl text-white/80">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}