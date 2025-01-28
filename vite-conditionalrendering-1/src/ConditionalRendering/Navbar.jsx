import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import { useState } from "react"

function Navbar() {
    let [data, setdata] = useState(0)

    return (
        <div>
            <h1>Navbar</h1>
            <button onClick={() => { setdata(0) }}>Home</button>
            <button onClick={() => { setdata(1) }}>About</button>
            <button onClick={() => { setdata(2) }}>Contact</button>
            {/* {
            data == 0 ? <Home /> : ""
        }   
        {
            data == 1 ? <About /> : ""
        }   
        {
            data == 2 ? <Contact /> : ""
        }   */}

            {data == 0 ? <Home />:data==1?<About/>:data==2?<Contact/>:""}

        </div>
    )
}

export default Navbar