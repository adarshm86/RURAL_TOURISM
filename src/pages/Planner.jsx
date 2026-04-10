
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const REGIONS = [
//   { id: 'coastal', name: 'Coastal Karnataka', icon: '🌊', color: '#10b981' },
//   { id: 'malnad', name: 'Malnad Highlands', icon: '⛰️', color: '#059669' },
//   { id: 'north', name: 'Northern Plains', icon: '🏛️', color: '#34d399' },
//   { id: 'south', name: 'Southern Heritage', icon: '🏰', color: '#6ee7b7' },
// ];

// export default function SmartPlanner() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [plan, setPlan] = useState(null);
//   const [selection, setSelection] = useState({ region: '', days: 3 });

//   const handleGenerate = () => {
//     setLoading(true);
//     setStep(3);
//     // Simulate AI generation delay
//     setTimeout(() => {
//       setPlan({
//         title: `Your ${selection.region} Discovery`,
//         itinerary: [
//           { day: 1, activity: "Arrive in village, welcome drink (Neer Majjige).", spot: "Local Homestay" },
//           { day: 2, activity: "Morning trek followed by village artisan workshop.", spot: "Handicraft Center" },
//           { day: 3, activity: "Local festival celebration & traditional feast.", spot: "Village Temple Square" }
//         ]
//       });
//       setLoading(false);
//     }, 2500);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white pt-4 pb-20 px-6 font-body">
//         <nav className="relative z-20 flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
//         <motion.button
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           onClick={() => navigate('/')} // Navigates back to landing page
//           className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300 backdrop-blur-sm"
//         >
//           <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
//           <span className="text-sm font-medium tracking-wide">Back to Home</span>
//         </motion.button>

//         {/* Optional: Add your Logo/Title in the center or right */}
//         <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
//           ಕರ್ನಾಟಕ Rural
//         </div>
//       </nav>
//       <div className="max-w-4xl mx-auto mt-16">
        
//         {/* Header */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
//           <h2 className="text-earth-300 font-kannada text-2xl mb-2">ನಿಮ್ಮ ಪ್ರಯಾಣ, ನಿಮ್ಮ ಆಯ್ಕೆ</h2>
//           <h1 className="text-4xl md:text-6xl font-display font-bold">Smart Trip Planner</h1>
//         </motion.div>

//         <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl overflow-hidden">
          
//           <AnimatePresence mode="wait">
//             {/* STEP 1: Region Selection */}
//             {step === 1 && (
//               <motion.div key="s1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
//                 <h3 className="text-2xl font-display mb-8">Where do you want to wander?</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {REGIONS.map((r) => (
//                     <button
//                       key={r.id}
//                       onClick={() => { setSelection({ ...selection, region: r.name }); setStep(2); }}
//                       className="group p-6 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-left flex items-center justify-between"
//                     >
//                       <div>
//                         <span className="text-3xl block mb-2">{r.icon}</span>
//                         <span className="text-lg font-bold">{r.name}</span>
//                       </div>
//                       <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
//                     </button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* STEP 2: Duration Selection */}
//             {step === 2 && (
//               <motion.div key="s2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
//                 <button onClick={() => setStep(1)} className="text-earth-300 text-sm mb-6 flex items-center gap-2">← Back to regions</button>
//                 <h3 className="text-2xl font-display mb-8">How many days is your escape?</h3>
//                 <div className="flex flex-wrap gap-4 mb-12">
//                   {[2, 3, 5, 7].map(d => (
//                     <button 
//                       key={d} 
//                       onClick={() => setSelection({...selection, days: d})}
//                       className={`px-8 py-4 rounded-full border transition-all ${selection.days === d ? 'bg-earth-500 border-earth-500' : 'border-white/20 hover:border-white'}`}
//                     >
//                       {d} Days
//                     </button>
//                   ))}
//                 </div>
//                 <button 
//                   onClick={handleGenerate}
//                   className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-earth-300 transition-colors uppercase tracking-widest"
//                 >
//                   Generate My Rural Path
//                 </button>
//               </motion.div>
//             )}

//             {/* STEP 3: Results / Loading */}
//             {step === 3 && (
//               <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
//                 {loading ? (
//                   <div className="py-20">
//                     <div className="w-16 h-16 border-4 border-earth-300 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
//                     <p className="font-kannada text-earth-300 text-xl animate-pulse">ಗ್ರಾಮೀಣ ಹಾದಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...</p>
//                   </div>
//                 ) : (
//                   <div className="text-left">
//                     <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
//                       <h3 className="text-3xl font-display font-bold">{plan.title}</h3>
//                       <button onClick={() => setStep(1)} className="text-xs uppercase tracking-tighter border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black">Reset</button>
//                     </div>
//                     <div className="space-y-8">
//                       {plan.itinerary.map((item, idx) => (
//                         <div key={idx} className="flex gap-6 relative">
//                           <div className="flex flex-col items-center">
//                             <div className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center font-bold">{item.day}</div>
//                             {idx !== plan.itinerary.length - 1 && <div className="w-1 h-full bg-white/10 mt-2" />}
//                           </div>
//                           <div className="pb-8">
//                             <h4 className="text-earth-300 text-sm font-bold uppercase tracking-widest mb-1">{item.spot}</h4>
//                             <p className="text-xl text-white/80">{item.activity}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// const TRIP_REGIONS = [
//   { id: 'coastal', name: 'Coastal Trails', kannada: 'ಕರಾವಳಿ ತೀರ', icon: '🌊', bg: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80' },
//   { id: 'malnad', name: 'Malnad Mist', kannada: 'ಮಲೆನಾಡಿನ ಮಂಜು', icon: '⛰️', bg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' },
//   { id: 'north', name: 'Northern Ruins', kannada: 'ಉತ್ತರ ಕರ್ನಾಟಕ', icon: '🏛️', bg: 'https://images.unsplash.com/photo-1625316708582-7c3873423ade?q=80&w=600' },
//   { id: 'central', name: 'Central Heritage', kannada: 'ಮಧ್ಯ ಕರ್ನಾಟಕ', icon: '🏰', bg: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=600' },
// ];

// export default function SmartPlanner() {
//   const [plannerStep, setPlannerStep] = useState('hero');
//   const [loading, setLoading] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [days, setDays] = useState(3);
//   const [plan, setPlan] = useState(null);
//   const [rotation, setRotation] = useState(0);
  
//   const detailsRef = useRef(null);

//   const rotateCarousel = (direction) => {
//     setRotation(prev => prev + (direction * 90));
//   };

//   const handleCardClick = (region) => {
//     setSelectedRegion(region);
//     setTimeout(() => {
//       detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   };

//   const handleGenerate = () => {
//     setLoading(true);
//     setPlannerStep('results');
//     setTimeout(() => {
//       setPlan({
//         title: `${selectedRegion.name} Expedition`,
//         itinerary: [
//           { day: 1, spot: "Village Welcome", activity: "Traditional welcome rituals followed by a slow sunset walk through paddy fields." },
//           { day: 2, spot: "Deep Culture", activity: "Hands-on pottery workshop with local artisans and a midnight spirit ritual witness." },
//           { day: 3, spot: "The Gathering", activity: "Community harvest feast (Oota) and interactive folk music session." }
//         ]
//       });
//       setLoading(false);
//     }, 2500);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white selection:bg-earth-500 overflow-x-hidden">
      
//       {/* STEP 1: HERO */}
//       <AnimatePresence>
//         {plannerStep === 'hero' && (
//           <motion.section 
//             key="hero" exit={{ opacity: 0, y: -100 }}
//             className="h-screen flex flex-col items-center justify-center text-center relative px-6"
//           >
//             <motion.div 
//               className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-earth-300/20"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />
//             <div className="relative z-10">
//               <p className="font-kannada text-earth-300 text-2xl mb-4">ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?</p>
//               <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">Start Your <span className="text-earth-300 italic">Journey</span></h1>
//               <button 
//                 onClick={() => setPlannerStep('carousel')}
//                 className="px-12 py-5 bg-earth-500 text-white font-bold rounded-full uppercase tracking-widest text-sm shadow-lg shadow-earth-900/50"
//               >
//                 Let's Wander
//               </button>
//             </div>
//           </motion.section>
//         )}
//       </AnimatePresence>

//       {/* STEP 2: CIRCULAR CAROUSEL & DETAILS */}
//       <AnimatePresence>
//         {plannerStep === 'carousel' && (
//           <motion.section key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <div className="pt-32 pb-10 text-center">
//               <h2 className="text-4xl font-display font-bold mb-2 uppercase tracking-tighter">Select Your Realm</h2>
//               <p className="text-earth-300/60 font-kannada text-lg">ಯಾವ ಭಾಗವನ್ನು ಅನ್ವೇಷಿಸಲು ಬಯಸುತ್ತೀರಿ?</p>
//             </div>

//             {/* ── Circular 3D Carousel ── */}
//             <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden perspective-1000">
              
//               {/* Navigation Controls */}
//               <button onClick={() => rotateCarousel(1)} className="absolute left-10 z-50 p-4 border border-white/10 rounded-full hover:bg-earth-500 transition-all group">
//                 <span className="block transform rotate-180 group-active:scale-90">→</span>
//               </button>
//               <button onClick={() => rotateCarousel(-1)} className="absolute right-10 z-50 p-4 border border-white/10 rounded-full hover:bg-earth-500 transition-all group">
//                 <span className="block group-active:scale-90">→</span>
//               </button>

//               <motion.div 
//                 className="relative w-[300px] h-[400px] transition-all duration-1000 preserve-3d"
//                 animate={{ rotateY: rotation }}
//                 transition={{ type: "spring", stiffness: 120, damping: 14,duration: 0.5 }}
//               >
//                 {TRIP_REGIONS.map((region, idx) => {
//                   const angle = idx * 90; // Spacing 4 cards evenly in a 360 circle
//                   return (
//                     <motion.div 
//                       key={region.id}
//                       onClick={() => handleCardClick(region)}
//                       className={`absolute inset-0 rounded-3xl overflow-hidden cursor-pointer border-2 transition-all duration-700 shadow-2xl backface-hidden ${
//                         selectedRegion?.id === region.id ? 'border-earth-300 scale-110 z-30' : 'border-white/10 opacity-80 scale-100'
//                       }`}
//                       style={{
//                         transform: `rotateY(${angle}deg) translateZ(450px)`, // Curving the slider
//                       }}
//                     >
//                       <img 
//                         src={region.bg} 
//                         className={`w-full h-full object-cover transition-all duration-700 ${selectedRegion?.id === region.id ? 'grayscale-0' : 'grayscale'}`} 
//                         alt={region.name}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
//                       <div className="absolute bottom-8 left-8 right-8">
//                         <p className="font-kannada text-earth-300 text-xl mb-1">{region.kannada}</p>
//                         <h3 className="text-3xl font-display font-bold leading-tight">{region.name}</h3>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>

//             {/* Duration Section */}
//             <div ref={detailsRef} className="min-h-[50vh]">
//               <AnimatePresence>
//                 {selectedRegion && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
//                     className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5 mt-10"
//                   >
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                       <div className="p-10 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl">
//                         <h3 className="text-2xl font-display font-bold mb-8 uppercase tracking-widest">Plan Duration</h3>
//                         <div className="flex gap-6 mb-12">
//                           {[3, 5, 7].map(d => (
//                             <button 
//                               key={d} onClick={() => setDays(d)}
//                               className={`w-20 h-20 rounded-2xl border transition-all text-xl font-display ${days === d ? 'bg-earth-500 border-earth-300 shadow-lg shadow-earth-500/20' : 'border-white/10 hover:border-white/30'}`}
//                             >
//                               {d}
//                             </button>
//                           ))}
//                         </div>
//                         <button 
//                           onClick={handleGenerate}
//                           className="w-full py-6 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-earth-300 transition-colors"
//                         >
//                           Generate Itinerary
//                         </button>
//                       </div>
//                       <div className="lg:pl-10">
//                         <p className="text-earth-300 font-kannada text-3xl mb-4">{selectedRegion.kannada}</p>
//                         <h2 className="text-6xl font-display font-bold mb-6 tracking-tighter">{selectedRegion.name}</h2>
//                         <p className="text-white/50 leading-relaxed font-body text-lg italic">"We are weaving a path through {selectedRegion.name}'s hidden heritage, focusing on authentic village life and ancient traditions."</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.section>
//         )}
//       </AnimatePresence>

//       {/* STEP 3: RESULTS (Loading + Timeline) */}
//       <AnimatePresence>
//         {plannerStep === 'results' && (
//           <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto pt-40 pb-20 px-6">
//             {loading ? (
//               <div className="text-center py-20">
//                 <motion.div 
//                   animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//                   className="w-20 h-20 border-t-2 border-earth-300 rounded-full mx-auto mb-8 shadow-[0_0_20px_rgba(196,160,114,0.3)]"
//                 />
//                 <p className="font-kannada text-earth-300 text-2xl animate-pulse tracking-widest">ಗ್ರಾಮೀಣ ಹಾದಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...</p>
//               </div>
//             ) : (
//               <div className="space-y-16">
//                 <div className="border-b border-white/10 pb-10 flex justify-between items-end">
//                    <h2 className="text-5xl font-display font-bold uppercase tracking-tighter">{plan?.title}</h2>
//                    <button onClick={() => setPlannerStep('hero')} className="text-xs uppercase tracking-[0.3em] text-white/30 hover:text-earth-300 transition-colors">Start Over</button>
//                 </div>
//                 {plan?.itinerary.map((item, idx) => (
//                   <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="flex gap-10 group">
//                     <div className="flex flex-col items-center">
//                       <div className="w-16 h-16 rounded-full border border-earth-300/30 flex items-center justify-center font-display text-earth-300 text-xl group-hover:bg-earth-500 group-hover:text-white transition-all duration-500">0{item.day}</div>
//                       {idx !== plan.itinerary.length - 1 && <div className="w-[1px] h-32 bg-gradient-to-b from-earth-300/30 to-transparent mt-4" />}
//                     </div>
//                     <div className="pt-2">
//                       <h4 className="text-sm font-bold text-earth-300 uppercase tracking-[0.3em] mb-4">{item.spot}</h4>
//                       <p className="text-2xl text-white/80 font-body leading-relaxed max-w-2xl">{item.activity}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </motion.section>
//         )}
//       </AnimatePresence>

//       {/* Custom Styles for 3D Carousel */}
//       <style jsx>{`
//         .perspective-1000 { perspective: 1200px; }
//         .preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRIP_REGIONS = [
  { id: 'coastal', name: 'Coastal Trails', kannada: 'ಕರಾವಳಿ ತೀರ', bg: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80' },
  { id: 'malnad', name: 'Malnad Mist', kannada: 'ಮಲೆನಾಡಿನ ಮಂಜು', bg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' },
  { id: 'north', name: 'Northern Ruins', kannada: 'ಉತ್ತರ ಕರ್ನಾಟಕ', bg: 'https://images.unsplash.com/photo-1625316708582-7c3873423ade?q=80&w=600' },
  { id: 'central', name: 'Central Heritage', kannada: 'ಮಧ್ಯ ಕರ್ನಾಟಕ', bg: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=600' },
];

export default function SmartPlanner() {
  const [plannerStep, setPlannerStep] = useState('hero');
  const [loading, setLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [days, setDays] = useState(3);
  const [plan, setPlan] = useState(null);
  const [rotation, setRotation] = useState(0);
  
  const detailsRef = useRef(null);

  // FIXED: Logic to find which card is currently "front-most" based on rotation
  const getActiveIndex = () => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    return Math.round(normalizedRotation / 90) % 4;
  };

  const rotateCarousel = (direction) => {
    setRotation(prev => prev + (direction * 90));
  };

  const handleCardClick = (region) => {
    setSelectedRegion(region);
    // Ensure the UI updates before scrolling
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleGenerate = () => {
    setLoading(true);
    setPlannerStep('results');
    setTimeout(() => {
      setPlan({
        title: `${selectedRegion.name} Expedition`,
        itinerary: [
          { day: 1, spot: "Village Welcome", activity: "Traditional welcome rituals followed by a slow sunset walk." },
          { day: 2, spot: "Cultural Immersion", activity: "Hands-on workshop with local artisans." },
          { day: 3, spot: "The Gathering", activity: "Community harvest feast and interactive folk music." }
        ]
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-earth-500 overflow-x-hidden">
      
      {/* STEP 1: HERO */}
      <AnimatePresence>
        {plannerStep === 'hero' && (
          <motion.section 
            key="hero" exit={{ opacity: 0, y: -100 }}
            className="h-screen flex flex-col items-center justify-center text-center relative px-6"
          >
            <motion.div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-earth-300/20" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
            <div className="relative z-10">
              <p className="font-kannada text-earth-300 text-2xl mb-4">ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">Start Your <span className="text-earth-300 italic">Journey</span></h1>
              <button onClick={() => setPlannerStep('carousel')} className="px-12 py-5 bg-earth-500 text-white font-bold rounded-full uppercase tracking-widest text-sm shadow-lg">Let's Wander</button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* STEP 2: CIRCULAR CAROUSEL */}
      <AnimatePresence>
        {plannerStep === 'carousel' && (
          <motion.section key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-display font-bold uppercase">Select Your Realm</h2>
              <p className="text-earth-300/60 font-kannada">ಯಾವ ಭಾಗವನ್ನು ಅನ್ವೇಷಿಸಲು ಬಯಸುತ್ತೀರಿ?</p>
            </div>

            <div className="relative h-[550px] w-full flex items-center justify-center perspective-1000">
              
              {/* Navigation Arrows - Using z-50 to ensure they stay on top */}
              <button onClick={() => rotateCarousel(1)} className="absolute left-6 md:left-20 z-50 p-5 border border-white/10 rounded-full hover:bg-earth-500 transition-all">←</button>
              <button onClick={() => rotateCarousel(-1)} className="absolute right-6 md:right-20 z-50 p-5 border border-white/10 rounded-full hover:bg-earth-500 transition-all">→</button>

              <motion.div 
                className="relative w-[300px] h-[400px] preserve-3d"
                animate={{ rotateY: rotation }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }} // Increased speed as requested
              >
                {TRIP_REGIONS.map((region, idx) => {
                  const angle = idx * 90;
                  return (
                    <motion.div 
                      key={region.id}
                      onClick={() => handleCardClick(region)}
                      className={`absolute inset-0 rounded-3xl overflow-hidden cursor-pointer border-2 transition-all duration-500 shadow-2xl backface-hidden flex-shrink-0 z-20 ${
                        selectedRegion?.id === region.id ? 'border-earth-300 scale-105' : 'border-white/10 opacity-70'
                      }`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(400px)`, // Slightly reduced translateZ for better fit
                        pointerEvents: 'auto', // Force pointer events
                      }}
                    >
                      <img src={region.bg} className={`w-full h-full object-cover ${selectedRegion?.id === region.id ? 'grayscale-0' : 'grayscale'}`} alt={region.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-kannada text-earth-300 text-lg mb-1">{region.kannada}</p>
                        <h3 className="text-2xl font-display font-bold leading-tight">{region.name}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Duration Section Reveal */}
            <div ref={detailsRef} className="scroll-mt-20">
              <AnimatePresence>
                {selectedRegion && (
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5 mt-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                        <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-widest">Plan Duration</h3>
                        <div className="flex gap-4 mb-10">
                          {[3, 5, 7].map(d => (
                            <button key={d} onClick={() => setDays(d)} className={`w-16 h-16 rounded-xl border transition-all ${days === d ? 'bg-earth-500 border-earth-300 shadow-lg shadow-earth-500/20' : 'border-white/10'}`}>{d}</button>
                          ))}
                        </div>
                        <button onClick={handleGenerate} className="w-full py-5 bg-white text-black rounded-xl font-bold uppercase tracking-widest hover:bg-earth-300 transition-all">Generate</button>
                      </div>
                      <div>
                        <p className="text-earth-300 font-kannada text-2xl mb-2">{selectedRegion.kannada}</p>
                        <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">{selectedRegion.name}</h2>
                        <p className="text-white/40 leading-relaxed font-body italic italic italic italic">"Crafting a path through {selectedRegion.name}'s hidden heart."</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* STEP 3: RESULTS */}
      <AnimatePresence>
        {plannerStep === 'results' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto pt-40 pb-20 px-6">
            {loading ? (
              <div className="text-center py-20">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-16 h-16 border-t-2 border-earth-300 rounded-full mx-auto mb-8" />
                <p className="font-kannada text-earth-300 text-xl animate-pulse">ಗ್ರಾಮೀಣ ಹಾದಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...</p>
              </div>
            ) : (
              <div className="space-y-16">
                <div className="border-b border-white/10 pb-10 flex justify-between items-end">
                   <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">{plan?.title}</h2>
                   <button onClick={() => setPlannerStep('hero')} className="text-xs uppercase tracking-widest text-white/30 hover:text-white underline">Reset</button>
                </div>
                {plan?.itinerary.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex gap-10 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-earth-300/30 flex items-center justify-center text-earth-300 group-hover:bg-earth-300 group-hover:text-black transition-all">0{item.day}</div>
                      {idx !== plan.itinerary.length - 1 && <div className="w-[1px] h-24 bg-gradient-to-b from-earth-300/30 to-transparent mt-4" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-2">{item.spot}</h4>
                      <p className="text-xl text-white/80 font-body leading-relaxed max-w-xl">{item.activity}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <style jsx>{`
        .perspective-1000 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}