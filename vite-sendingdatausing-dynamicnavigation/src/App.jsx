import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product/Product";
import ProductDesc from "./Product/ProductDesc";
function App() {


  return (
    <>
      {/* <Product/> */}


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path='/pdesc/:id' element={<ProductDesc />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
