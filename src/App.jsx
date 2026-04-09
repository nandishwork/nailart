import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Artists from './pages/Artists'
import Pricing from './pages/Pricing'
import Booking from './pages/Booking'
import Profile from './pages/Profile'

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
