import { useState } from "react"
import Navbar from "./stateLiftingup/Navbar"
import Product from "./stateLiftingup/Product"


function App() {
let [count,setCount]=useState();
console.log(count,"count")

  // let data
  function getData(a){
    setCount(a)
    console.log("get data is called")
    
    // let data=a
  }
  console.log(count,"count pp")
// console.log(data,"data")

  return (
    <>
      <Navbar data={getData}/>
      <Product data1={count}/>
    </>
  )
}

export default App
