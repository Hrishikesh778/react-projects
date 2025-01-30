import { BrowserRouter, Route, Routes } from "react-router-dom"
import Help from "./NestedRouting/Help"
import Message from "./NestedRouting/Messsage"
import Mail from "./NestedRouting/Mail"
import Call from "./NestedRouting/Call"
import Home from "./NestedRouting/Home"
import HelpD from "./DynamicRouting/HelpD"

function App() {
  return (
    <>
      <BrowserRouter>
      <Home />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/helpdynamic/:type' element={<HelpD/>}/>
          <Route path="/help" element={<Help />}>

            <Route path="/help/call" element={<Call />} />
            <Route path="/help/mail" element={<Mail />} />
            <Route path="/help/message" element={<Message />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
