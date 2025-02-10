import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./Product/Product"
import Description from "./Description/Description"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/productdesc/:id" element={<Description/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
