import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Description from './Description/Description'
import ProviderFunction from './Context/ProviderFunction'
import Nav from './NavigationBar/Nav'
import Addtocart from './Cart/Addtocart'
import Addtowishlist from './Wishlist/Addtowishlist'
import Category from './Category/Category'

function App() {

  return (
    <>
      <BrowserRouter>
        <ProviderFunction>
          <Nav/>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path='/cart' element={<Addtocart/>}/>
            <Route path='/wishlist' element={<Addtowishlist/>}/>
            <Route path="/productdesc/:id" element={<Description />} />
            <Route path='/category' element={<Category/>}/>
          </Routes>
        </ProviderFunction>

      </BrowserRouter>
    </>
  )
}

export default App
