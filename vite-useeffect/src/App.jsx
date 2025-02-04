import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Effect from "./Hooks/Effect";
import Home from "./Home";
function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/effect" element={<Effect />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
