import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ExplorePage from './pages/ExplorePage'
import DistrictPage from './pages/DistrictPage'
import About from './pages/About'
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
