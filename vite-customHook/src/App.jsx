import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Description from './Description/Description'
import ProviderFunction from './Context/ProviderFunction'
import Nav from './NavigationBar/Nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <ProviderFunction>
          <Nav/>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/productdesc/:id" element={<Description />} />
          </Routes>
        </ProviderFunction>

      </BrowserRouter>
    </>
  )
}

export default App
