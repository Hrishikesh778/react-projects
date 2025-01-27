import Navbar from "./stateLiftingup/Navbar"
import Product from "./stateLiftingup/Product"
import {useState} from 'react'
import UseState from "./Hooks/UseState"

function App() {
  let [count, setCount] = useState(0)
  console.log(count,"count")
  // var getNavData
  function getData(a){
    // getNavData = a
    setCount(a)
    console.log(a,'a')
  }
  console.log(count,"count pp")
  // console.log(getNavData,"getNavdata")


  return (
    <>
      <div>
        <UseState />
        {/* <Navbar data={getData} />
        <Product data1={count} /> */}
       
       </div>
    </>
  )
}

export default App
