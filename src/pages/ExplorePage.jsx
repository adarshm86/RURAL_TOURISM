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

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png", // A distinct blue dot or person icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

// ==========================================
// MATH: HAVERSINE FORMULA FOR DISTANCE
// Calculates distance (in km) between two coordinates
// ==========================================
function calculateDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
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

export default function ExplorePage() {
  const navigate = useNavigate()
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [filter, setFilter] = useState("all")
  
  // STATE FOR USER LOCATION
  const [userLocation, setUserLocation] = useState(null)

  // ASK FOR USER LOCATION ON LOAD
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log("User denied location or error occurred:", error);
        }
      );
    }
  }, []);

  // DATA (Now with Images!)
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
    { id: 20, name: "Village Jatre", coords: [15.20, 76.30], type: "festival", description: "Traditional temple fairs", best_time: "Varies", image: "https://media.assettype.com/deccanherald%2F2024-11-30%2Fcnsi1ny1%2Ffile7ya360h86hw19k5epca7.jpg?w=undefined&auto=format%2Ccompress&fit=max" }
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
    <div className="h-screen bg-[#080f08] text-white flex flex-col overflow-hidden">
     
 
      <nav className="w-full py-4 px-6 border-b border-white/10 flex justify-between items-center bg-black z-20">
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
      <main className="flex flex-1 overflow-hidden">
      {/* MAP AREA */}
      <div className="h-[45vh] lg:h-full w-full lg:w-[60%] relative z-0">
        <MapContainer center={[14.5, 75.5]} zoom={7} style={{ height: '100%', width: '100%' }} zoomControl={false}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          
          <MapController selectedPlace={selectedPlace} />

          {/* Place Markers */}
          {filteredPlaces.map((place) => (
            <Marker key={place.id} position={place.coords} icon={place.type === "temple" ? templeIcon : festivalIcon} eventHandlers={{ click: () => handleSelectPlace(place) }} />
          ))}

          {/* User Location Marker */}
          {userLocation && (
            <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
              <Popup>You are here!</Popup>
            </Marker>
          )}
        </MapContainer>
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#080f08] to-transparent pointer-events-none hidden lg:block z-[400]" />
      </div>

      {/* SIDEBAR AREA */}
      <div className="h-[55vh] lg:h-full w-full lg:w-[40%] flex flex-col bg-[#080f08] z-10 border-l border-white/5">
        
        <div className="p-6 pb-4 border-b border-white/10 shrink-0">
          <h1 className="text-3xl font-display font-bold text-earth-300">Explore</h1>
          <p className="text-white/50 text-sm mt-1 mb-5">
            Discover {filteredPlaces.length} hidden temples & village festivals
          </p>

          <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {['all', 'temple', 'festival'].map((type) => (
              <button
                key={type}
                onClick={() => { setFilter(type); setSelectedPlace(null); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filter === type 
                    ? type === 'festival' ? 'bg-orange-500 text-white' : 'bg-green-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {type === 'all' ? 'All Places' : type === 'temple' ? '🛕 Temples' : '🎉 Festivals'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-24 scroll-smooth">
          <AnimatePresence>
            {filteredPlaces.map((place) => {
              const isSelected = selectedPlace?.id === place.id;
              
              // CALCULATE DISTANCE IF USER GRANTED LOCATION
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
                      ? 'border-green-500/50 bg-green-900/20 shadow-[0_8px_32px_rgba(34,197,94,0.15)] scale-[1.02]'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex gap-4">
                    {/* THUMBNAIL IMAGE */}
                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="flex-1 min-w-0 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">
                        {place.type}
                      </span>
                      
                      <h3 className={`text-lg font-bold truncate transition-colors ${isSelected ? 'text-green-400' : 'text-white'}`}>
                        {place.name}
                      </h3>
                      
                      <p className="text-white/60 text-sm line-clamp-2 mt-1">
                        {place.description}
                      </p>

                      <div className="flex items-center gap-3 mt-2 text-xs font-medium">
                        {distanceText && (
                          <span className="text-blue-300 flex items-center gap-1">
                            📍 {distanceText}
                          </span>
                        )}
                        {place.best_time && (
                          <span className="text-orange-400/80">
                            🗓️ {place.best_time}
                          </span>
                        )}
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
                          className="w-full py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2"
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