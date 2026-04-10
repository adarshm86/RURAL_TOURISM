import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { motion, AnimatePresence } from 'framer-motion'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

// ==========================================
// ICONS
// ==========================================
const templeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

const festivalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

const artIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2970/2970785.png", 
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png", 
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

// ==========================================
// MATH: HAVERSINE FORMULA FOR DISTANCE
// ==========================================
function calculateDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return Math.round(R * c);
}

// ==========================================
// HELPER COMPONENT: MAP CONTROLLER
// ==========================================
function MapController({ selectedPlace }) {
  const map = useMap()
  useEffect(() => {
    if (selectedPlace) {
      map.flyTo(selectedPlace.coords, 11, { duration: 1.5 })
    }
  }, [selectedPlace, map])
  return null
}

// ==========================================
// HORIZONTAL SCROLLING ROW (Blurry Background)
// ==========================================
const HorizontalScrollRow = ({ images, reverse, speed }) => (
  <div className="flex w-full overflow-hidden opacity-40">
    <motion.div
      className="flex gap-4 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
    >
      {[...images, ...images, ...images].map((img, idx) => (
        <div key={idx} className="w-72 h-48 shrink-0 rounded-xl overflow-hidden border border-white/5 shadow-xl">
          <img src={img.image} alt="bg" className="w-full h-full object-cover" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default function ExplorePage() {
  const navigate = useNavigate()
  
  // ====================================================
  // ✅ FIX: Check Session Storage to see if they already watched the intro
  // ====================================================
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('hasSeenExploreIntro') !== 'true';
  })
  
  const [showButton, setShowButton] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [filter, setFilter] = useState("all")
  const [userLocation, setUserLocation] = useState(null)

  // This function hides the intro AND saves the memory to the browser
  const handleCloseIntro = () => {
    setShowIntro(false)
    sessionStorage.setItem('hasSeenExploreIntro', 'true')
  }

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowButton(true), 3500)
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
        (error) => console.log("Location error:", error)
      );
    }
  }, []);

  // DATA (Temples, Festivals, and Arts)
  const places = [
    // TEMPLES
    { id: 1, name: "Madhukeshwara Temple", coords: [14.5416, 74.8673], type: "temple", description: "Ancient Kadamba-era rural temple", image: "https://touringwithpk.com/wp-content/uploads/2021/06/Nov18-341a.jpg" },
    { id: 2, name: "Kedareshwara Temple", coords: [14.3940, 75.3110], type: "temple", description: "Hidden Hoysala architectural gem", image: "https://data.agatetravel.com/images/photogallery/2019/kedareshwara-temple.jpg" },
    { id: 3, name: "Naganatha Temple", coords: [15.9150, 75.6850], type: "temple", description: "Early Chalukyan temple", image: "https://www.mediastorehouse.com/p/791/naganatha-temple-bagalkot-badami-karnataka-india-47294911.jpg.webp" },
    { id: 4, name: "Chandramouleshwara Temple", coords: [15.3647, 75.1136], type: "temple", description: "Unique 12-door Shiva temple", image: "https://cdn.s3waas.gov.in/s3eefc9e10ebdc4a2333b42b2dbb8f27b6/uploads/bfi_thumb/2018082894-olwdjijv7uv94zb3c7d60g10lon9x6rg6ztdqdwq9u.jpg" },
    { id: 5, name: "Bandalike Temple Complex", coords: [13.9185, 75.3550], type: "temple", description: "5 temples with epic carvings", image: "https://content3.jdmagicbox.com/v2/comp/shimoga/s7/9999p8182.8182.230624011339.s5s7/catalogue/bandalike-ancient-temple-narasapura-shimoga-tourist-attraction-iwfds2but1.jpg" },
    { id: 6, name: "Tarakeshwara Temple", coords: [14.7642, 75.1240], type: "temple", description: "Massive yet lesser-known temple", image: "https://media.istockphoto.com/id/1007839992/photo/carved-exterior-view-of-kopeshwar-temple-khidrapur-maharashtra-india.jpg?s=612x612&w=0&k=20&c=W_w4bZtq8WlJB8h93sIoULk0LfQ6RAJnkf84DZf81Tg=" },
    { id: 7, name: "Galageshwara Temple", coords: [15.2700, 75.9600], type: "temple", description: "Temple beside river", image: "https://media.assettype.com/freepressjournal/2025-04-07/np3g4969/2024_04_30.jpg" },
    { id: 8, name: "Mukteshwara Temple", coords: [14.8000, 75.3000], type: "temple", description: "Fine carvings in rural Karnataka", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFHbVrzgvFI6v-0aWE1M4eHqV7DD_Xtw48prd4HtPi9UEFEZYylcziku-H9B3Pl64zv5WOiUdPX7ORrbn5IiT6Lf3bfEa7HxhbDVdEf0XN3CDIG2Z2ltHlWfjNnLGHNzW3123BBYlhkzc/s1600/05+Chaudayyadanapura+Muktesvara+Temple.jpg" },
    { id: 9, name: "Lakshmi Devi Temple", coords: [12.9920, 76.1730], type: "temple", description: "Oldest Hoysala temple", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGhm2f0D2qm4MLSg9-tFH1wH2pTn8i7iYF30Q0-eHoz-8SQM-zWqc06xqV0bHXtlguwpvotiisP-cETSA2DhGVjAw2A5Q3GJpBj2fb0wo_egbdrO5v34JXwHqNs_PnxGQG6eD0r0BaY88/s1600/IMG_1396.JPG" },
    { id: 10, name: "Someshwara Temple", coords: [13.1360, 78.1290], type: "temple", description: "Vijayanagara-style temple", image: "https://media.istockphoto.com/id/1187554786/photo/someshwara-temple-kolar-karnataka-india.jpg?s=612x612&w=0&k=20&c=LdSCuOiwnojtSCtWWA6lNRJE9FFsIgdp9WkE3-o1xU0=" },
  
    // FESTIVALS
    { id: 11, name: "Kichchu Hayisuvudu", coords: [12.52, 76.90], type: "festival", description: "Fire ritual for cattle protection", best_time: "January", image: "https://live.staticflickr.com/3112/3201539036_6e57b9386e_b.jpg" },
    { id: 12, name: "Banashankari Jatre", coords: [15.92, 75.68], type: "festival", description: "Village fair with crafts", best_time: "February", image: "https://pbs.twimg.com/media/EN-rMhYWkAARPCG.jpg" },
    { id: 13, name: "Bedara Vesha", coords: [14.62, 74.85], type: "festival", description: "Hunter-themed folk dance", best_time: "March", image: "https://i0.wp.com/ficklesorts.com/wp-content/uploads/2019/03/img_7309.jpg?fit=1400%2C933&ssl=1" },
    { id: 14, name: "Mylara Jatre", coords: [14.83, 75.60], type: "festival", description: "Devotional ritual & prophecy", best_time: "March-April", image: "https://imgs.etvbharat.com/etvbharat/prod-images/kn-hvr-02-mailar-karnika7202143_08022023001843_0802f_1675795723_503.png" },
    { id: 15, name: "Kambala", coords: [12.90, 74.90], type: "festival", description: "Buffalo race in paddy fields", best_time: "Nov-Feb", image: "https://discoverindiabycar.com/wp-content/uploads/2024/07/Kambala-Festival-A-Thrilling-Dive-into-Karnatakas-Cultural-Heritage-01.jpg" },
    { id: 16, name: "Suggi Kunita", coords: [13.34, 77.10], type: "festival", description: "Harvest dance with masks", best_time: "Jan-Feb", image: "https://ruthvi.weebly.com/uploads/2/2/4/5/22455836/5569478_orig.jpg?477" },
    { id: 17, name: "Somana Kunita", coords: [14.30, 75.80], type: "festival", description: "Night spirit dance ritual", best_time: "Winter", image: "https://kstdc.co/wp-content/uploads/2021/08/somana.jpg" },
    { id: 18, name: "Hulivesha", coords: [13.34, 74.75], type: "festival", description: "Tiger dance (Udupi)", best_time: "August", image: "https://www.drkrishi.co.in/wp-content/uploads/Fire-Breathing-Tiger.jpg" },
    { id: 19, name: "Karaga Rural", coords: [13.20, 77.50], type: "festival", description: "Sacred overnight procession", best_time: "April", image: "https://utsav.gov.in/public/uploads/event_cover_image/event_420/1657273768657075168.jpg" },
    { id: 20, name: "Village Jatre", coords: [15.20, 76.30], type: "festival", description: "Traditional temple fairs", best_time: "Varies", image: "https://media.assettype.com/deccanherald%2F2024-11-30%2Fcnsi1ny1%2Ffile7ya360h86hw19k5epca7.jpg?w=undefined&auto=format%2Ccompress&fit=max" },

    // ARTS & CRAFTS
    { id: 21, name: "Channapatna Toys", coords: [12.6518, 77.2089], type: "art", description: "GI-tagged wooden toys coloured with natural vegetable dyes.", best_time: "Year-round", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Channapatna_toys.jpg" },
    { id: 22, name: "Bidriware Metalcraft", coords: [17.9104, 77.5199], type: "art", description: "Striking silver inlay artwork on blackened zinc and copper alloy.", best_time: "Year-round", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bidri_ware_of_Bidar.jpg" },
    { id: 23, name: "Kinhal Wood Carving", coords: [15.4572, 76.2359], type: "art", description: "Vibrant, lightweight wooden sculptures from the Vijayanagara era.", best_time: "Year-round", image: "https://live.staticflickr.com/5613/15448332999_3a6a12b2e8_b.jpg" },
    { id: 24, name: "Sandur Lambani Embroidery", coords: [15.0945, 76.5492], type: "art", description: "Intricate mirror-work and tribal embroidery by the Banjara community.", best_time: "Year-round", image: "https://images.unsplash.com/photo-1605814561084-3860d5b12857?q=80&w=800" },
    { id: 25, name: "Ilkal Sarees", coords: [15.9575, 76.1133], type: "art", description: "Traditional handloom weaving famous for its distinctive red 'Tope Teni' border.", best_time: "Year-round", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ilkal_saree.jpg" },
    { id: 26, name: "Chittara Murals", coords: [14.1751, 74.9643], type: "art", description: "Intricate wall paintings using rice paste and earth colors.", best_time: "Year-round", image: "https://images.unsplash.com/photo-1574513812739-930491cb88f2?q=80&w=800" },
    { id: 27, name: "Kasuti Embroidery", coords: [15.4589, 75.0078], type: "art", description: "Dharwad folk embroidery featuring geometric motifs.", best_time: "Year-round", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Kasuti_embroidery.jpg" },
    { id: 28, name: "Navalgund Durries", coords: [15.5562, 75.3496], type: "art", description: "Brightly colored, geometrically patterned woven floor rugs.", best_time: "Year-round", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800" },
    { id: 29, name: "Sagara Sandalwood Carving", coords: [14.1670, 75.0298], type: "art", description: "Exquisite, highly detailed sandalwood carvings.", best_time: "Year-round", image: "https://images.unsplash.com/photo-1590483864016-5c58eeaa6042?q=80&w=800" },
    { id: 30, name: "Nagamangala Metal Craft", coords: [12.8236, 76.7570], type: "art", description: "Ancient technique of bronze and brass casting.", best_time: "Year-round", image: "https://images.unsplash.com/photo-1550989047-b352b21edc72?q=80&w=800" }
  ]

  const filteredPlaces = places.filter((p) => filter === "all" || p.type === filter)

  const handleSelectPlace = (place) => {
    setSelectedPlace(place)
    const cardElement = document.getElementById(`place-card-${place.id}`)
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="h-screen bg-[#080f08] text-white flex flex-col overflow-hidden relative">
      
      {/* ==========================================
          CINEMATIC TITLE INTRO SEQUENCE
          ========================================== */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.8 } }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
          >
            {/* Blurry Moving Background */}
            <div className="absolute inset-0 flex flex-col gap-6 justify-center -rotate-6 scale-125 z-0 pointer-events-none blur-[4px]">
              <HorizontalScrollRow images={places.slice(0, 10)} reverse={false} speed={40} />
              <HorizontalScrollRow images={places.slice(10, 20)} reverse={true} speed={35} />
              
              {/* 👇 Fix: Reusing the first 10 images so the row doesn't go blank! */}
              <HorizontalScrollRow images={places.slice(0, 10)} reverse={false} speed={45} />
            </div>

            {/* Dark Gray Overlay to make text readable */}
            <div className="absolute inset-0 bg-[#080f08]/70 z-10" />

            {/* Content: Appears little by little */}
            <div className="relative z-20 flex flex-col items-center text-center">
              
              {/* Title: Fades in after 0.5s */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-display font-bold text-[#e4c590] drop-shadow-2xl"
              >
                ಕರ್ನಾಟಕ
              </motion.h1>

              {/* Subtitle: Fades in after 1.5s */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="text-white/80 text-xl md:text-2xl mt-6 font-medium tracking-[0.3em] uppercase"
              >
                Rural Karnataka
              </motion.p>

              {/* Button: Fades in after 3s */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="mt-12"
              >
                {/* ✅ FIX: handleCloseIntro replaces setShowIntro(false) */}
                <button
                  onClick={handleCloseIntro}
                  className="px-10 py-4 border border-[#e4c590]/50 text-[#e4c590] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#e4c590] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(228,197,144,0.1)] hover:shadow-[0_0_30px_rgba(228,197,144,0.4)]"
                >
                  Click to Explore
                </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          THE ACTUAL MAP & SIDEBAR UI
          ========================================== */}
      {/* NAVBAR */}
      <nav className="w-full py-4 px-6 border-b border-white/10 flex justify-between items-center bg-black z-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')} 
          className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300 backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </motion.button>
        
        <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
          ಕರ್ನಾಟಕ Rural
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex flex-1 overflow-hidden">
        
        {/* MAP AREA */}
        <div className="h-[45vh] lg:h-full w-full lg:w-[60%] relative z-0">
          <MapContainer center={[14.5, 75.5]} zoom={7} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
            <MapController selectedPlace={selectedPlace} />

            {/* Place Markers */}
            {filteredPlaces.map((place) => {
              let iconType = place.type === "temple" ? templeIcon : place.type === "festival" ? festivalIcon : artIcon;
              return (
                <Marker key={place.id} position={place.coords} icon={iconType} eventHandlers={{ click: () => handleSelectPlace(place) }} />
              )
            })}

            {/* User Location Marker */}
            {userLocation && (
              <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                <Popup>You are here!</Popup>
              </Marker>
            )}
          </MapContainer>
          
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#080f08] to-transparent pointer-events-none hidden lg:block z-[400]" />
        </div>

        {/* CLEAN MINIMALIST SIDEBAR AREA */}
        <div className="h-[55vh] lg:h-full w-full lg:w-[40%] flex flex-col bg-[#080f08] z-10 border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
          
          <div className="p-6 pb-4 border-b border-white/10 shrink-0 bg-gradient-to-b from-black/80 to-[#080f08] backdrop-blur-md">
            <h1 className="text-3xl font-display font-bold text-earth-300 drop-shadow-md">Explore</h1>
            <p className="text-white/50 text-sm mt-1 mb-5">
              Discover {filteredPlaces.length} hidden temples, festivals & arts
            </p>

            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {['all', 'temple', 'festival', 'art'].map((type) => (
                <button
                  key={type}
                  onClick={() => { setFilter(type); setSelectedPlace(null); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border border-transparent ${
                    filter === type 
                      ? type === 'festival' ? 'bg-orange-500 text-white' : type === 'art' ? 'bg-purple-500 text-white' : 'bg-green-600 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {type === 'all' ? 'All Places' : type === 'temple' ? '🛕 Temples' : type === 'festival' ? '🎉 Festivals' : '🎨 Arts & Crafts'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-24 scroll-smooth">
            <AnimatePresence>
              {filteredPlaces.map((place) => {
                const isSelected = selectedPlace?.id === place.id;
                
                let distanceText = "";
                if (userLocation) {
                  const dist = calculateDistance(userLocation.lat, userLocation.lng, place.coords[0], place.coords[1]);
                  if (dist !== null) distanceText = `${dist} km away`;
                }

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={place.id}
                    id={`place-card-${place.id}`}
                    onClick={() => handleSelectPlace(place)}
                    className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md overflow-hidden ${
                      isSelected
                        ? 'border-white/30 bg-white/10 scale-[1.02]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* THUMBNAIL */}
                      <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
                        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                      </div>

                      {/* TEXT */}
                      <div className="flex-1 min-w-0 py-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">
                          {place.type}
                        </span>
                        
                        <h3 className={`text-lg font-bold truncate transition-colors ${isSelected ? 'text-white' : 'text-white/90'}`}>
                          {place.name}
                        </h3>
                        
                        <p className="text-white/60 text-sm line-clamp-2 mt-1">
                          {place.description}
                        </p>

                        <div className="flex items-center gap-3 mt-2 text-xs font-medium">
                          {distanceText && <span className="text-blue-300 flex items-center gap-1">📍 {distanceText}</span>}
                          {place.best_time && <span className="text-orange-400/80">🗓️ {place.best_time}</span>}
                        </div>
                      </div>
                    </div>

                    {/* EXPANDABLE BUTTON */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pt-4 overflow-hidden"
                        >
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate(`/district/${place.id}`); }}
                            className="w-full py-2.5 bg-earth-600 hover:bg-earth-500 text-white rounded-xl text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2"
                          >
                            Explore Full Details <span>→</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}