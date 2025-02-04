import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"

import Pages from "./Pages"
function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="pages/:page" element={<Pages/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
