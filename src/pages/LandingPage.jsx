import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Leaf configurations
const LEAVES = [
  { left: '5%', delay: 0, duration: 8, emoji: '🍃' },
  { left: '18%', delay: 2, duration: 11, emoji: '🍂' },
  { left: '32%', delay: 1, duration: 9, emoji: '🌿' },
  { left: '50%', delay: 3, duration: 7, emoji: '🍃' },
  { left: '65%', delay: 0.5, duration: 10, emoji: '🍂' },
  { left: '80%', delay: 2.5, duration: 8.5, emoji: '🍃' },
  { left: '92%', delay: 1.5, duration: 12, emoji: '🌿' },
]


const COLUMN_1_DATA = [
  { id: 101, img: "https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2FybmF0YWthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D", slogan: "ಹಸಿರು ಸಿರಿಯ ನಾಡು, ಕರುನಾಡು.", sub: "The land of eternal greenery." },
  { id: 102, img: "https://images.pexels.com/photos/34738142/pexels-photo-34738142.jpeg", slogan: "ಮಲೆನಾಡಿನ ಮಡಿಲಲ್ಲಿ ಅಡಗಿದ ಸೌಂದರ್ಯ.", sub: "Hidden gems in the heart of Malnad." },
  { id: 103, img: "https://images.pexels.com/photos/33013758/pexels-photo-33013758.jpeg", slogan: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ವೈಭವ.", sub: "The majesty of the Western Ghats." },
];

const COLUMN_2_DATA = [
  { id: 201, img: "https://media.istockphoto.com/id/916270810/photo/single-tusk-elephant-in-dubare-elephant-camp-coorg-india.jpg?s=612x612&w=0&k=20&c=NGj-BcgRkj-UaQk4UuPD6mGHa6_Xk5_-tJY7s7J7aNc=", slogan: "ಶಿಲ್ಪಕಲೆಯ ಸೌಂದರ್ಯ, ಬೇಲೂರು.", sub: "Where stones speak poetry." },
  { id: 202, img: "https://images.pexels.com/photos/31355441/pexels-photo-31355441.jpeg", slogan: "ಐತಿಹಾಸಿಕ ಹಂಪಿಯ ವೈಭವ.", sub: "The glory of historical Hampi." },
  { id: 203, img: "https://media.istockphoto.com/id/514856110/photo/woman-working-on-the-rice-field.jpg?s=612x612&w=0&k=20&c=h-8t0o176V0dzGoZPubJOciolhqvTIYY-S7otdytY7Y=", slogan: "ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ತವರು.", sub: "The cradle of art and culture." },
];

const COLUMN_3_DATA = [
  { id: 301, img: "https://images.pexels.com/photos/33543027/pexels-photo-33543027.jpeg", slogan: "ಗ್ರಾಮೀಣ ಬದುಕಿನ ಸರಳತೆ.", sub: "Simplicity of rural life." },
  { id: 302, img: "https://media.istockphoto.com/id/514856110/photo/woman-working-on-the-rice-field.jpg?s=612x612&w=0&k=20&c=h-8t0o176V0dzGoZPubJOciolhqvTIYY-S7otdytY7Y=", slogan: "ಕರಾವಳಿಯ ಕಡಲ ತೀರದ ಸೊಬಗು.", sub: "The majestic charm of the coast." },
  { id: 303, img: "https://images.pexels.com/photos/32547425/pexels-photo-32547425.jpeg", slogan: "ಬಯಲು ಸೀಮೆಯ ಬದುಕು.", sub: "Life in the open plains." },
];


const seasonalData = [
  {
    month: 'January',
    event: 'Pongal Harvest Trails',
    slogan: 'ಸೂರ್ಯನ ಬೆಳಕಲ್ಲಿ ಹಬ್ಬದ ಹೆಜ್ಜೆ',
    desc: 'Celebrate village harvest traditions, folk music, and farm-to-table food experiences.',
    image:
      'https://images.slurrp.com/prodarticles/42s8x7ye2gx.webp',
    link:"https://pikme.org/activity/attractions/pongal-celebration-tumkur?srsltid=AfmBOop02LoMkxlsD_Z3tEytyE5SObC7XBHmjJ46rRQr0TDSxumribf3"
  },
  {
  month: 'December',
  event: 'Spirit of the Coast',
  slogan: 'ದೈವದ ಆಶೀರ್ವಾದ, ತುಳುನಾಡಿನ ಹೆಮ್ಮೆ',
  desc: 'Witness the mystical Bhoota Kola—a sacred midnight ritual where ancient spirits come alive through dance and fire.',
  image: 'https://miro.medium.com/v2/resize:fit:1200/1*_j7l2T6RDWMv9vNYXd2tgQ@2x.jpeg', // Suggest using a high-energy photo of a Kola performer
  link: 'https://www.storiesbysoumya.com/coastal-karnataka-culture-guide/'
},
  {
    month: 'August',
    event: 'Monsoon Malnad Escapes',
    slogan: 'ಮಳೆಯ ಮಂಜಿನಲ್ಲಿ ಹಸಿರಿನ ಹಾದಿ',
    desc: 'Walk through misty forest villages, waterfalls, and traditional homestays in the Western Ghats.',
    image:
      'https://www.travelmalnad.com/storage/blog_fi/01KM0KV697FEZSNVZWF18F5348.png',
    link:"https://www.travelmalnad.com/Blog/monsoon-in-malnad-region-and-things-to-do-during-this-season"
  },
  
]

function FallingLeaf({ left, delay, duration, emoji }) {
  return (
    <motion.div
      style={{ left, position: 'absolute', top: '-50px', fontSize: '22px', zIndex: 5 }}
      animate={{ y: '110vh', rotate: 360, opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        opacity: { times: [0, 0.1, 0.85, 1] },
      }}
    >
      {emoji}
    </motion.div>
  )
}

const ScrollingColumn = ({ images, reverse, onHover }) => (
  <div className="overflow-hidden h-full">
    <motion.div 
      className="flex flex-col gap-4 py-4"
      animate={{ y: reverse ? [0, -1200] : [-1200, 0] }}
      transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
    >
      {/* Triple the data to ensure smooth infinite scroll with different images */}
      {[...images, ...images, ...images].map((item, idx) => (
        <motion.div
          key={`${item.id}-${idx}`}
          onMouseEnter={() => onHover(item)}
          className="relative aspect-[3/4] w-full rounded-xl overflow-hidden cursor-pointer border border-white/10 group"
          whileHover={{ scale: 1.02, borderColor: "rgba(196, 160, 114, 0.5)", zIndex: 10 }}
        >
          <img src={item.img} alt="Rural Karnataka" className="w-full h-full object-cover  transition-all duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function LandingPage() {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeGalleryItem, setActiveGalleryItem] = useState(COLUMN_1_DATA[0])

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overlayOpacity = Math.min(0.5 + scrollY / 600, 0.85)

  return (
    <div className="bg-black min-h-screen">
      {/* ── Hero ── */}
      <div className="relative h-screen w-full overflow-hidden">

        {/* Falling Leaves */}
        {LEAVES.map((l, i) => <FallingLeaf key={i} {...l} />)}

        {/* Navbar (FIXED ROUTING HERE) */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl md:text-2xl font-display font-semibold tracking-wide"
          >
            <span className="font-kannada">ಕರ್ನಾಟಕ</span>{' '}
            <span className="font-light text-earth-300">Rural</span>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 text-white"
          >
            {/* Swapped <a> for <button> to use React Router */}
            <button 
              onClick={() => navigate('/explore')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              Explore
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              About
            </button>
            
            {/* Added Contact Us button */}
            <button 
              onClick={() => navigate('/aboutus')} 
              className="hover:text-earth-300 transition font-body text-sm tracking-widest uppercase"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate('/planner')}
              className="px-5 py-2 border border-white/60 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 tracking-wider font-body"
            >
              SmartPlanner
            </button>
          </motion.div>
        </nav>

        {/* Video BG */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/myvedcomp.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY ONLY (remove gradient) */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(0,0,0,0.5)" }}
        />

        {/* Overlay darkens on scroll */}
        <div
          className="absolute inset-0 transition-all duration-100 z-10"
          style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
        />

        {/* Decorative border */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-earth-500/40 m-6" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-earth-500/40 m-6" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-earth-500/40 m-6" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-earth-500/40 m-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-kannada text-earth-300 text-lg md:text-xl mb-4 tracking-widest"
          >
            ಮಣ್ಣಿನ ಮಡಿಲಲ್ಲಿ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            Explore Rural<br />
            <span className="italic text-earth-300">Karnataka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/70 font-body max-w-md"
          >
            Ancient temples, misty peaks, golden sands, and the warmth of Karnataka's villages all in one journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-3 bg-earth-500 text-white rounded-full hover:bg-earth-400 transition-all duration-300 font-body font-medium tracking-wide shadow-lg shadow-earth-900/50"
            >
              Start Exploring →
            </button>
            <button onClick={()=> navigate('/calendar')} className="px-8 py-3 border border-white/30 text-white rounded-full hover:border-earth-400 hover:text-earth-300 transition-all duration-300 font-body font-medium tracking-wide">
              Watch Calendar
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-white/60"
          >
            {[
              { num: '30+', label: 'Districts' },
              { num: '500+', label: 'Heritage Sites' },
              { num: '6', label: 'World Heritage Sites' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-display font-bold text-earth-300">{num}</div>
                <div className="text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>

      
      {/* ── Teaser strip ── */}
      <div className="h-[50vh] bg-black flex items-center justify-center">
        <motion.p
          className="text-center font-display text-earth-300 italic text-2xl max-w-lg px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          "Every village in Karnataka holds a story waiting to be discovered."
        </motion.p>
      </div>

      {/* <section className="bg-black pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-earth-300 font-kannada text-2xl mb-2">ಋತುಮಾನದ ಸಡಗರ</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Seasonal Highlights</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
                    alt={item.event}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="p-6 relative">
                  <span className="text-earth-500 text-xs font-bold tracking-[0.2em] uppercase">{item.month}</span>
                  <h4 className="text-2xl font-display font-bold text-white mt-1">{item.event}</h4>
                  <p className="font-kannada text-earth-300/80 text-sm mt-3 mb-4">{item.slogan}</p>
                  <p className="text-white/50 text-sm italic">"{item.desc}"</p>
                  
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => navigate('/calendar')}
                    className="mt-6 text-earth-300 text-xs font-bold flex items-center gap-2 uppercase tracking-widest"
                  >
                    Learn More <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

        {/* ── Moving Photo Cards Gallery (WITH UNIQUE IMAGES) ── */}
      <section className="relative h-[120vh] bg-black flex overflow-hidden border-y border-white/5">
        {/* Left Panel: Branding */}
        <div className="hidden lg:flex w-1/4 flex-col justify-center px-12 z-20 bg-black">
          <h2 className="text-white text-3xl font-display font-semibold tracking-wide">
            <span className="font-kannada block text-earth-300 text-6xl mb-4 leading-tight">ಕರ್ನಾಟಕ</span>
            <span className="font-light opacity-60 text-xl tracking-[0.3em] uppercase">Rural Heritage</span>
          </h2>
          <div className="w-16 h-1 bg-earth-500 mt-8" />
        </div>

        {/* Center: Moving Columns with UNIQUE DATA */}
        <div className="flex-1 grid grid-cols-3 gap-6 h-full px-6 py-12">
          <ScrollingColumn images={COLUMN_1_DATA} reverse={true} onHover={setActiveGalleryItem} />
          <ScrollingColumn images={COLUMN_2_DATA} reverse={false} onHover={setActiveGalleryItem} />
          <ScrollingColumn images={COLUMN_3_DATA} reverse={true} onHover={setActiveGalleryItem} />
        </div>

        {/* Right Panel: Dynamic Slogans */}
        <div className="w-1/3 lg:w-1/4 flex flex-col justify-center px-8 lg:px-12 z-20 bg-black/80 backdrop-blur-lg border-l border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGalleryItem.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-kannada text-earth-300 text-4xl md:text-5xl leading-[1.4]">
                {activeGalleryItem.slogan}
              </p>
              <div className="w-8 h-[1px] bg-white/20 my-6" />
              <p className="text-white/40 font-body text-sm uppercase tracking-[0.25em] font-medium italic">
                {activeGalleryItem.sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cinematic Fades */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── Seasonal Highlights Section ── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-earth-300 font-kannada text-3xl mb-4">ಋತುಮಾನದ ಸಡಗರ</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Seasonal Highlights</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" alt={item.event} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  
                  <h4 className="text-2xl font-display font-bold text-white mt-1">{item.event}</h4>
                  <p className="font-kannada text-earth-300/80 text-sm mt-3 mb-4">{item.slogan}</p>
                  <p className="text-white/50 text-sm italic">"{item.desc}"</p>
                  <button onClick={() =>  window.open(item.link, '_blank', 'noopener,noreferrer')} className="mt-6 text-earth-300 text-xs font-bold flex items-center gap-2 uppercase tracking-widest">Learn More →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-white text-2xl font-display font-semibold mb-4">
              <span className="font-kannada">ಕರ್ನಾಟಕ</span>{' '}
              <span className="font-light text-earth-300">Rural</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed italic">
              "Every village in Karnataka holds a story waiting to be discovered."
            </p>
          </div>

          {/* Quick Links
          <div>
            <h4 className="text-earth-300 uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="/explore" className="hover:text-white transition">Hidden Temples</a></li>
              <li><a href="/calendar" className="hover:text-white transition">Village Festivals</a></li>
              <li><a href="/about" className="hover:text-white transition">Our Mission</a></li>
            </ul>
          </div> */}

          {/* Seasonal Highlights (Reference to your data)
          <div>
            <h4 className="text-earth-300 uppercase tracking-widest text-xs font-bold mb-6">Seasonal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><span className="block text-[10px] text-earth-500 uppercase">January</span> Kichchu Hayisuvudu</li>
              <li><span className="block text-[10px] text-earth-500 uppercase">May</span> Kodava Hockey</li>
              <li><span className="block text-[10px] text-earth-500 uppercase">November</span> Hampi Utsav</li>
            </ul>
          </div> */}

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-earth-300 uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-white/50">Subscribe for monthly rural travel guides.</p>
              <div className="flex border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none text-sm text-white focus:outline-none w-full"
                />
                <button className="text-earth-300 hover:text-white transition">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © {currentYear} Karnataka Rural Tourism. All Rights Reserved.
          </div>
          <div className="hidden md:block w-[1px] h-3 bg-white/10"></div>
    <div className="text-[10px] text-earth-300/60 uppercase tracking-[0.2em]">
      Built by <span className="text-earth-300 font-bold">Team BrainRot</span>
    </div>
          <div className="flex gap-6">
            <motion.a whileHover={{ y: -2 }} href="#" className="text-white/40 hover:text-white transition">Instagram</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="text-white/40 hover:text-white transition">Twitter</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="text-white/40 hover:text-white transition">Facebook</motion.a>
          </div>
        </div>
      </div>
    </footer>
    </div>

    
  )
}