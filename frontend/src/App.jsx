import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main className='flex-1 container mx-auto px-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Createnote />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
