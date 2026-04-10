import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ExplorePage from './pages/ExplorePage'
import DistrictPage from './pages/DistrictPage'
import About from './pages/About'
// ✅ Import your new AboutUs component here
import AboutUs from './pages/Aboutus' 
import Calendar from './pages/Calendar'
import SmartPlanner from './pages/Planner'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/district/:id" element={<DistrictPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          {/* ✅ Add the route for /aboutus here */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/planner" element={<SmartPlanner />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App