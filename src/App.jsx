import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Navbar />
     <SideBar />

     <Routes>
       <Route path='/' element={<HomePage />} />
     </Routes>

     <Footer />
    </>
    
  )
}

export default App
