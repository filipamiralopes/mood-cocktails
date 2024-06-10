import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddCocktail from './pages/AddCocktail'

function App() {
  const [cocktails, setCocktails] = useState([]); // Initialize state

  return (
    <>
     <Navbar />
     <SideBar />

     <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/add-cocktail' element={<AddCocktail cocktails={cocktails} 
            setCocktails={setCocktails} />} />
     </Routes>

     <Footer />
    </>
    
  )
}

export default App
