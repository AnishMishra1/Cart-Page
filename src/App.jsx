import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Components/ProductPage'
import { data } from 'autoprefixer'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<ProductPage />} ></Route>
      <Route path='/cart' element={<Cart />} ></Route>
      
    </Routes>
   

    
    
    
    
    </>
    
  
    
  )
}

export default App
