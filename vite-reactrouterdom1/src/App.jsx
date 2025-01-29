import { BrowserRouter, Route ,Routes } from 'react-router-dom'

import Contact from './Routing/Contact'
import About from './Routing/About'
import Error from './Routing/Error'
import Nav from './Routing/Nav'
import Home from './Routing/Home'

function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
