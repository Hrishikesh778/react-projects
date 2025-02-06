import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Forms from "./Forms"

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
