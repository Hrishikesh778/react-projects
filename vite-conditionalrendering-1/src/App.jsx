import { products } from "./data"
import "./App.css"
import { useState } from "react"
import Navbar from "./ConditionalRendering/Navbar";
function App() {
  let [counter, setcounter] = useState(1);

  return (
    // <>
    //   <div className='boxContainer'>
    //     {

    //       products.map((val) => {
    //         return (
    //           <>
    //             <div className='box'>
    //               <h2>{val.name}</h2>
    //               <p>{val.price}</p>
    //               {val.bestseller == true ? <span>Bestseller</span> : ""}
    //               <br />
    //               {val.price > 50 ? <span>10% OFF</span> : ""}
    //               <br />

    //               <button onClick={() => { setcounter(counter + 1) }}>increase</button>
    //               {counter}
    //               {/* <button onClick={()=>{setcounter(counter-1)}}>decrease</button> */}
    //               {/* or */}

    //               {/* {counter<=1?<button>decrease</button>:<button onClick={()=>{setcounter(counter-1)}}>decrease</button>} */}
    //               {/* or */}

    //               {<button onClick={()=>{counter>1 && setcounter(counter-1)}}>decrease</button>}

    //             </div>
    //           </>


    //         )
    //       })

    //     }
    //   </div>
    // </>


    <>

      <Navbar />
    </>
  )
}

export default App
