# ಕರ್ನಾಟಕ Rural Tourism 🌿

A full-stack interactive web application for exploring rural tourism in Karnataka, built for hackathon.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone / unzip the project
cd karnataka-rural-tourism

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Folder Structure

```
karnataka-rural-tourism/
├── index.html                  # Root HTML with Google Fonts + Leaflet CSS
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Router setup
    ├── index.css               # Global styles + Tailwind + Leaflet overrides
    │
    ├── pages/
    │   ├── LandingPage.jsx     # Hero + falling leaves + video BG
    │   ├── ExplorePage.jsx     # Interactive map + district cards
    │   └── DistrictPage.jsx    # Split view: map + info panel
    │
    ├── components/
    │   ├── Navbar.jsx          # Sticky top nav with dark mode toggle
    │   ├── DistrictCard.jsx    # Card for each district in explore page
    │   ├── PlaceModal.jsx      # Slide-up modal for tourist place details
    │   ├── ImageGallery.jsx    # 2x2 grid gallery with lightbox
    │   └── SearchBar.jsx       # Search input component
    │
    └── data/
        ├── districts.js        # All district + places data (JSON-like)
        └── karnatakaGeoJSON.js # Simplified GeoJSON for map polygons
```

---

## 🗺️ Using Full Karnataka GeoJSON (Recommended for Production)

The included GeoJSON uses simplified bounding boxes for demo purposes.
For accurate district boundaries:

1. Download from: https://github.com/datameet/maps/tree/master/Districts
2. Or use: https://maps.mapaction.org/dataset/india-karnataka-admin-level-2

Replace `src/data/karnatakaGeoJSON.js` with:

```js
// Option A: Import local file
import karnatakaData from './karnataka_districts.geojson'
export const karnatakaGeoJSON = karnatakaData

// Option B: Fetch from URL
export async function fetchKarnatakaGeoJSON() {
  const res = await fetch('/karnataka_districts.geojson')
  return res.json()
}
```

Make sure each feature in the GeoJSON has:
```json
{
  "properties": {
    "id": "mysuru",       // must match district id in districts.js
    "name": "Mysuru"
  }
}
```

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Landing page with video BG + falling leaves | ✅ |
| Animated hero (Framer Motion) | ✅ |
| Interactive Karnataka map (Leaflet) | ✅ |
| Clickable district polygons | ✅ |
| Hover tooltips on districts | ✅ |
| District cards with search + filter | ✅ |
| District detail page (split layout) | ✅ |
| Interactive map with place pins | ✅ |
| Tourist place cards + modal | ✅ |
| Image gallery with lightbox | ✅ |
| Dark mode toggle | ✅ |
| Responsive (mobile + desktop) | ✅ |
| Smooth animations throughout | ✅ |

---

## 🗂️ Adding More Districts / Places

Edit `src/data/districts.js`. Each district follows this schema:

```js
{
  id: 'district-id',          // URL slug, must match GeoJSON feature id
  name: 'District Name',
  kannadaName: 'ಕನ್ನಡ ಹೆಸರು',
  tagline: 'Short tagline',
  description: 'Long description...',
  color: '#hexcolor',          // Map polygon + card accent
  accentColor: '#hexcolor',    // Lighter accent for text
  coverImage: 'https://...',   // Hero image URL
  coordinates: [lat, lng],     // Map center
  highlights: ['Tag1', 'Tag2'],
  places: [
    {
      id: 'place-id',
      name: 'Place Name',
      lat: 12.345,
      lng: 76.789,
      image: 'https://...',
      description: '...',
      category: 'Heritage',    // Heritage | Wildlife | Nature | Spiritual | Beach | Trekking
      timings: '9am–5pm',
      bestSeason: 'Oct–Feb',
    }
  ],
  gallery: ['url1', 'url2', 'url3', 'url4'],
}
```

---

## 🔮 Bonus / Upgrade Ideas

- **Backend**: Add Node.js + Express API serving districts from MongoDB
- **Auth**: Firebase auth for user bookmarks / wishlists
- **Real GeoJSON**: Load Karnataka's 31 official districts with proper boundaries
- **Mapbox GL JS**: Swap Leaflet for Mapbox for 3D terrain + custom map styles
- **CMS**: Use Contentful or Sanity.io to manage district data without code changes
- **i18n**: Add Kannada language toggle using react-i18next
- **PWA**: Make it installable as an app for offline use
- **Analytics**: Track most-viewed districts with Plausible/Posthog

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Maps | React Leaflet + Leaflet.js |
| Map tiles | CARTO Dark tiles (free) |
| Fonts | Playfair Display, DM Sans, Noto Serif Kannada |
| Data | Static JSON (upgradeable to REST API) |

---

## 📸 Image Credits

Images from Unsplash (free to use). Replace with actual Karnataka photography for production.

---

Built with ❤️ for Karnataka Rural Tourism Hackathon
