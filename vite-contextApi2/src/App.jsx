import { BrowserRouter, Routes, Route } from "react-router-dom"
import UseReducer from "./Hooks/UseReducer"
import Nav from "./Nav"
import ConsumeData from "./ContextApi/ConsumeData"
import ProvideStore from "./ContextApi/ProvideStore"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <ProvideStore>

      <ConsumeData />
      <Nav/>
      {/* <UseReducer/> */}
      <Routes>
        <Route>

        </Route>
      </Routes>
      </ProvideStore>
      </BrowserRouter>
    </>
  )
}

export default App
