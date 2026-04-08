import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

// ICONS
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

export default function ExplorePage() {
  const navigate = useNavigate()

  const [selectedPlace, setSelectedPlace] = useState(null)
  const [filter, setFilter] = useState("all")
  const [mapRef, setMapRef] = useState(null)

const places = [

  // 🛕 TEMPLES (10)
  { id: 1, name: "Madhukeshwara Temple", coords: [14.5416, 74.8673], type: "temple", description: "Ancient Kadamba-era rural temple" },
  { id: 2, name: "Kedareshwara Temple", coords: [14.3940, 75.3110], type: "temple", description: "Hidden Hoysala architectural gem" },
  { id: 3, name: "Naganatha Temple", coords: [15.9150, 75.6850], type: "temple", description: "Early Chalukyan temple" },
  { id: 4, name: "Chandramouleshwara Temple", coords: [15.3647, 75.1136], type: "temple", description: "Unique 12-door Shiva temple" },
  { id: 5, name: "Bandalike Temple Complex", coords: [13.9185, 75.3550], type: "temple", description: "5 temples with epic carvings" },
  { id: 6, name: "Tarakeshwara Temple", coords: [14.7642, 75.1240], type: "temple", description: "Massive yet lesser-known temple" },
  { id: 7, name: "Galageshwara Temple", coords: [15.2700, 75.9600], type: "temple", description: "Temple beside river" },
  { id: 8, name: "Mukteshwara Temple", coords: [14.8000, 75.3000], type: "temple", description: "Fine carvings in rural Karnataka" },
  { id: 9, name: "Lakshmi Devi Temple", coords: [12.9920, 76.1730], type: "temple", description: "Oldest Hoysala temple" },
  { id: 10, name: "Someshwara Temple", coords: [13.1360, 78.1290], type: "temple", description: "Vijayanagara-style temple" },

  // 🎉 FESTIVALS (10)
  { id: 11, name: "Kichchu Hayisuvudu", coords: [12.52, 76.90], type: "festival", description: "Fire ritual for cattle protection (Mandya)", best_time: "January" },
  { id: 12, name: "Banashankari Jatre", coords: [15.92, 75.68], type: "festival", description: "Village fair with crafts (Badami)", best_time: "February" },
  { id: 13, name: "Bedara Vesha", coords: [14.62, 74.85], type: "festival", description: "Hunter-themed folk dance (Sirsi)", best_time: "March" },
  { id: 14, name: "Mylara Jatre", coords: [14.83, 75.60], type: "festival", description: "Devotional ritual & prophecy (Haveri)", best_time: "March-April" },
  { id: 15, name: "Kambala", coords: [12.90, 74.90], type: "festival", description: "Buffalo race in paddy fields (Coastal Karnataka)", best_time: "Nov-Feb" },
  { id: 16, name: "Suggi Kunita", coords: [13.34, 77.10], type: "festival", description: "Harvest dance with masks (Tumkur)", best_time: "Jan-Feb" },
  { id: 17, name: "Somana Kunita", coords: [14.30, 75.80], type: "festival", description: "Night spirit dance ritual", best_time: "Winter" },
  { id: 18, name: "Hulivesha", coords: [13.34, 74.75], type: "festival", description: "Tiger dance (Udupi)", best_time: "August" },
  { id: 19, name: "Karaga Rural", coords: [13.20, 77.50], type: "festival", description: "Sacred overnight procession", best_time: "April" },
  { id: 20, name: "Village Jatre", coords: [15.20, 76.30], type: "festival", description: "Traditional temple fairs", best_time: "Varies" }

]

  // CLICK HANDLER (ZOOM + SELECT)
  const handleClick = (place) => {
    setSelectedPlace(place)

    if (mapRef) {
      mapRef.flyTo(place.coords, 10, { duration: 1.5 })
    }
  }

  return (
    <div className="min-h-screen bg-[#080f08] text-white">

      {/* HEADER */}
      <div className="pt-20 pb-6 px-6 md:px-12">
        <h1 className="text-4xl font-bold">Explore Rural Karnataka</h1>
        <p className="text-white/50 mt-2">
          Discover hidden temples & village festivals
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 px-6 mb-4 flex-wrap">

        <button
          onClick={() => {
            setFilter("all")
            setSelectedPlace(null)
          }}
          className={`px-4 py-2 rounded-full ${
            filter === "all" ? "bg-green-600" : "bg-white/10"
          }`}
        >
          All
        </button>

        <button
          onClick={() => {
            setFilter("temple")
            setSelectedPlace(null)
          }}
          className={`px-4 py-2 rounded-full ${
            filter === "temple" ? "bg-green-600" : "bg-white/10"
          }`}
        >
          🛕 Temples
        </button>

        <button
          onClick={() => {
            setFilter("festival")
            setSelectedPlace(null)
          }}
          className={`px-4 py-2 rounded-full ${
            filter === "festival" ? "bg-orange-500" : "bg-white/10"
          }`}
        >
          🎉 Festivals
        </button>

      </div>

      {/* MAIN */}
      <div className="flex flex-col lg:flex-row">

        {/* MAP */}
        <div className="h-[50vh] lg:h-[calc(100vh-120px)] w-full lg:w-1/2">
          <MapContainer
            center={[14.5, 75.5]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            whenCreated={setMapRef}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {places
              .filter((p) => filter === "all" || p.type === filter)
              .map((place) => (
                <Marker
                  key={place.id}
                  position={place.coords}
                  icon={place.type === "temple" ? templeIcon : festivalIcon}
                  eventHandlers={{
                    click: () => handleClick(place),
                  }}
                />
              ))}
          </MapContainer>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-1/2 p-6">

          {!selectedPlace && (
            <div className="text-center mt-20 text-white/40">
              Click any marker to explore details
            </div>
          )}

          {selectedPlace && (
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 shadow-lg">

              <h2 className="text-2xl font-bold text-green-400">
                {selectedPlace.name}
              </h2>

              <p className="text-sm text-white/50 uppercase mt-1">
                {selectedPlace.type}
              </p>

              <p className="mt-4 text-white/70">
                {selectedPlace.description}
              </p>

              {selectedPlace.best_time && (
                <p className="mt-2 text-orange-400">
                  Best Time: {selectedPlace.best_time}
                </p>
              )}

              <button
                onClick={() => navigate(`/district/${selectedPlace.id}`)}
                className="mt-6 px-5 py-2 bg-green-600 rounded-full hover:bg-green-500 transition"
              >
                Explore More →
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  )
}