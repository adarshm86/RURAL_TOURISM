import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// DATA & MASTER BACKGROUND
// ==========================================
// The high-res background you provided
const MASTER_BG = 'https://images.pexels.com/photos/31126276/pexels-photo-31126276.jpeg';

const TRIP_REGIONS = [
  { 
    id: 'coastal', 
    name: 'Coastal Trails', 
    kannada: 'ಕರಾವಳಿ ತೀರ', 
    bg: 'https://media.assettype.com/outlooktraveller/2024-09-05/dvtgxds3/shutterstock_2459133885.jpg?w=1600&q=80'
  },
  { 
    id: 'malnad', 
    name: 'Malnad Mist', 
    kannada: 'ಮಲೆನಾಡಿನ ಮಂಜು', 
    bg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'
  },
  { 
    id: 'north', 
    name: 'Northern Ruins', 
    kannada: 'ಉತ್ತರ ಕರ್ನಾಟಕ', 
    bg: 'https://images.unsplash.com/photo-1625316708582-7c3873423ade?auto=format&fit=crop&w=1600&q=80'
  },
  { 
    id: 'central', 
    name: 'Central Heritage', 
    kannada: 'ಮಧ್ಯ ಕರ್ನಾಟಕ', 
    bg: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=1600&q=80'
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function SmartPlanner() {
  const navigate = useNavigate();
  const [plannerStep, setPlannerStep] = useState('hero');
  const [loading, setLoading] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [days, setDays] = useState(3);
  const [plan, setPlan] = useState(null);

  // Logic to determine which background is currently active
  let activeBg = MASTER_BG;
  if (plannerStep === 'region_select' && hoveredRegion) {
    activeBg = hoveredRegion.bg;
  } else if ((plannerStep === 'duration_select' || plannerStep === 'results') && selectedRegion) {
    activeBg = selectedRegion.bg;
  }

  const handleGenerate = () => {
    setLoading(true);
    setPlannerStep('results');

    const regionalMasterData = {
      coastal: [
        { day: 1, spot: "Udupi Heritage", activity: "Traditional 'Hasiru' welcome and an evening witnessing a ritualistic Kola performance." },
        { day: 2, spot: "Blue Waters", activity: "Backwater kayaking in the Mulki mangroves and exploring the 1000-pillar Saavira Kambada Basadi." },
        { day: 3, spot: "The Coastline", activity: "A seafood culinary workshop followed by sunset at the unique Maravanthe beach-river divide." },
        { day: 4, spot: "Island Life", activity: "Boat expedition to St. Mary’s Island and exploring the lighthouse at Kapu beach." },
        { day: 5, spot: "Temple Architecture", activity: "Visiting the world's second-tallest Shiva statue at Murudeshwara and beach trekking in Gokarna." },
        { day: 6, spot: "Craft & Shells", activity: "Hands-on session with local shell artisans and visiting the Mirjan Fort ruins." },
        { day: 7, spot: "Departure", activity: "Morning yoga on the beach followed by a traditional 'Gadi' departure ceremony." }
      ],
      malnad: [
        { day: 1, spot: "Estate Arrival", activity: "Guided walk through organic coffee plantations and a traditional 'Akki Rotti' cooking session." },
        { day: 2, spot: "Cloud Forests", activity: "Trek to the Kavaledurga Fort ruins and observing King Cobra conservation in Agumbe." },
        { day: 3, spot: "Hidden Falls", activity: "Morning dip in the Sirimane falls and a spiritual visit to the ancient Sringeri Sharada Peetham." },
        { day: 4, spot: "Peak Expedition", activity: "Early morning 4x4 drive to Mullayanagiri peak followed by a visit to Bababudangiri caves." },
        { day: 5, spot: "Wildlife & Tea", activity: "Safari at Bhadra Wildlife Sanctuary and a sunset tea-tasting at a 100-year-old estate." },
        { day: 6, spot: "Riverside Peace", activity: "Coracle riding in the Tunga river and exploring the elephant camp at Sakrebyle." },
        { day: 7, spot: "Mist Farewell", activity: "Morning bird watching followed by a traditional Malnad harvest feast (Bharani Oota)." }
      ],
      north: [
        { day: 1, spot: "Empire of Stone", activity: "A boulder-climbing session in Hampi followed by a sunset coracle ride across the Tungabhadra." },
        { day: 2, spot: "Cave Architecture", activity: "Exploring the rock-cut temples of Badami and the museum at Agastya Lake." },
        { day: 3, spot: "Deccan Flavors", activity: "A rustic 'Jolada Rotti' lunch with a local weaver community in the historic village of Ilkal." },
        { day: 4, spot: "Lost Kingdom", activity: "Full day exploration of the UNESCO world heritage sites at Pattadakal and Aihole." },
        { day: 5, spot: "Islamic Heritage", activity: "Visit the massive Gol Gumbaz in Bijapur and the intricate Ibrahim Rauza." },
        { day: 6, spot: "Local Craft", activity: "Workshop on traditional Lambani embroidery and exploring the red-stone fort of Badami." },
        { day: 7, spot: "Heritage Goodbye", activity: "Morning prayer at Banashankari temple and a local bazaar shopping for Ilkal sarees." }
      ],
      central: [
        { day: 1, spot: "Royal Traditions", activity: "A curated heritage walk through the Mysuru artisan markets and the palace illumination." },
        { day: 2, spot: "Temple Town", activity: "Ascending the steps of Melukote for the view and learning about the history of the Iyengar community." },
        { day: 3, spot: "Riverine History", activity: "Exploring the island fort of Srirangapatna and a serene riverside meditation at the Kaveri banks." },
        { day: 4, spot: "Jungle Safari", activity: "Deep forest safari in Bandipur National Park looking for wild tigers and elephants." },
        { day: 5, spot: "Sandalwood & Silk", activity: "Visit to a traditional silk weaving factory and a government sandalwood oil distillery." },
        { day: 6, spot: "Stone Wonders", activity: "Day trip to the Hoysala temples of Belur and Halebidu, famous for intricate soapstone carvings." },
        { day: 7, spot: "Royal Farewell", activity: "Mysore style breakfast (Mylari Dosa) and a visit to Chamundi Hills for a city-wide view." }
      ]
    };

    setTimeout(() => {
      const fullItinerary = regionalMasterData[selectedRegion.id] || regionalMasterData['coastal'];
      const slicedItinerary = fullItinerary.slice(0, days);
      setPlan({
        title: `${selectedRegion.name} Expedition`,
        itinerary: slicedItinerary
      });
      setLoading(false);
    }, 1200); 
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#e4c590] selection:text-black overflow-x-hidden font-body relative">
      
      {/* ==========================================
          THE CROSSFADING BACKGROUND
          ========================================== */}
      <div className="fixed inset-0 z-0 bg-black pointer-events-none">
        <AnimatePresence>
          <motion.img
            key={activeBg}
            src={activeBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }} // Opacity at 0.5 ensures text remains highly readable
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Soft vignette gradient to darken the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-12 bg-black/10 backdrop-blur-sm border-b border-white/5">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        
        {/* ── STEP 1: HERO ── */}
        <AnimatePresence mode="wait">
          {plannerStep === 'hero' && (
            <motion.div 
              key="hero" 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-kannada text-[#e4c590] text-2xl md:text-3xl mb-4 drop-shadow-lg">ನಿಮ್ಮ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ</p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-10 tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                Curate Your <span className="text-[#e4c590] italic block mt-2">Journey</span>
              </h1>
              <button 
                onClick={() => setPlannerStep('region_select')} 
                className="px-14 py-5 bg-[#e4c590] text-black font-bold rounded-full uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(228,197,144,0.4)] hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Let's Wander
              </button>
            </motion.div>
          )}

          {/* ── STEP 2: REGION SELECTION (Giant Typography) ── */}
          {plannerStep === 'region_select' && (
            <motion.div 
              key="select" 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl flex flex-col gap-2 py-32"
            >
              <p className="text-center text-white/60 tracking-[0.3em] uppercase text-sm mb-12 drop-shadow-md">Select Your Destination</p>
              
              {TRIP_REGIONS.map((region) => (
                <motion.div 
                  key={region.id}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => { setSelectedRegion(region); setPlannerStep('duration_select'); }}
                  className="group flex flex-col items-center justify-center py-4 cursor-pointer relative"
                >
                  <span className="text-[#e4c590] font-kannada text-lg md:text-xl mb-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-4 group-hover:translate-y-0 duration-300 drop-shadow-lg">
                    {region.kannada}
                  </span>
                  <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-none font-display font-bold uppercase transition-all duration-500 text-white/30 group-hover:text-white hover:scale-105 drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                    {region.name}
                  </h2>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── STEP 3: DURATION SELECTION ── */}
          {plannerStep === 'duration_select' && selectedRegion && (
            <motion.div 
              key="duration" 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl bg-black/50 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            >
              <p className="text-[#e4c590] font-kannada text-2xl mb-2 drop-shadow-md">{selectedRegion.kannada}</p>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 drop-shadow-lg">{selectedRegion.name}</h2>
              <p className="text-white/80 text-lg font-body italic mb-12">
                "Experience the soul of {selectedRegion.name}. How many days would you like to wander?"
              </p>

              <div className="flex gap-4 md:gap-8 mb-12 justify-center">
                {[3, 5, 7].map(d => (
                  <button 
                    key={d} onClick={() => setDays(d)}
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl border transition-all flex flex-col items-center justify-center font-display ${days === d ? 'bg-[#e4c590] border-[#e4c590] shadow-[0_0_40px_rgba(228,197,144,0.5)] text-black scale-105' : 'bg-black/40 border-white/20 text-white/60 hover:border-white/60 hover:bg-white/10'}`}
                  >
                    <span className="text-4xl md:text-5xl font-bold">{d}</span>
                    <span className="text-xs uppercase tracking-widest mt-1 opacity-70 font-sans">Days</span>
                  </button>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setPlannerStep('region_select')}
                  className="px-6 py-5 border border-white/20 rounded-2xl text-white/70 hover:text-white transition-all uppercase tracking-widest text-xs hover:bg-white/10 bg-black/40"
                >
                  Back
                </button>
                <button 
                  onClick={handleGenerate}
                  className="flex-1 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.3em] text-sm hover:bg-[#e4c590] transition-all active:scale-95 shadow-xl"
                >
                  Generate Plan
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 4: RESULTS (Timeline) ── */}
          {plannerStep === 'results' && (
            <motion.div 
              key="results" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              className="w-full max-w-4xl pt-20 pb-40"
            >
              {loading ? (
                <div className="text-center py-32 bg-black/50 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl">
                  <div className="relative w-24 h-24 mx-auto mb-12">
                    <motion.div 
                      animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-[#e4c590] rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-4 border-b-2 border-[#e4c590]/20 rounded-full" 
                    />
                  </div>
                  <p className="font-kannada text-[#e4c590] text-3xl animate-pulse tracking-widest">ಮಾರ್ಗವನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...</p>
                  <p className="text-white/60 mt-4 tracking-widest text-sm uppercase">Curating authentic experiences</p>
                </div>
              ) : (
                <div className="bg-black/60 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/10 pb-12 mb-16">
                     <div>
                      <h2 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter">{plan?.title}</h2>
                      <p className="text-[#e4c590] mt-2 tracking-widest text-xs uppercase opacity-90 drop-shadow-md">Personalized Rural Route • {days} Days</p>
                     </div>
                     <button onClick={() => { setPlannerStep('hero'); setHoveredRegion(null); }} className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-[#e4c590] transition-colors border border-white/20 px-6 py-3 rounded-full hover:bg-white/10">
                       Start Over
                     </button>
                  </div>

                  <div className="relative">
                     <div className="absolute left-[27px] md:left-[35px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e4c590]/50 via-white/20 to-transparent" />
                     
                     <div className="space-y-16">
                      {plan?.itinerary.map((item, idx) => (
                        <motion.div 
                          key={idx} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15, type: "spring" }}
                          className="flex gap-8 md:gap-12 group relative"
                        >
                          <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full border border-[#e4c590]/40 bg-black/80 backdrop-blur-md flex items-center justify-center font-display text-[#e4c590] group-hover:bg-[#e4c590] group-hover:text-black group-hover:scale-110 transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            0{item.day}
                          </div>
                          <div className="pt-2">
                            <h4 className="text-xs md:text-sm font-bold text-[#e4c590] uppercase tracking-[0.4em] mb-3 opacity-80 flex items-center gap-3">
                              <span className="w-6 h-[1px] bg-[#e4c590]/50" />
                              {item.spot}
                            </h4>
                            <p className="text-2xl md:text-3xl text-white/90 font-display leading-relaxed max-w-2xl group-hover:text-white transition-colors">
                              {item.activity}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                     </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}