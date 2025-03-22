
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Navbuttons from './Components/Navbuttons'
import Footer from './Components/Footer'
import Select from './Components/Select'
import Page from './Components/Page'
// import tailwindcss from '@tailwindcss/vite'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navbuttons />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/" element={<Select/>}/>
          <Route path="pages/:page" element={<Page/>}/>
        </Routes>
        {/* <Footer /> */}

      </BrowserRouter>
    </>
  )
}

export default App
