import { useState } from "react"
import Navbar from "./stateLiftingup/Navbar"
import Product from "./stateLiftingup/Product"


function App() {
let [count,setCount]=useState();
// console.log(count,"count")

  // let data
  function getData(a){
    setCount(a)
    // console.log("get data is called")
    
    // let data=a
  }
  // console.log(count,"count pp")
// console.log(data,"data")

let name=count
console.log(name)

let moviedata = [
  {
      movieName: "bahubali",
      actor: "Prabhas",
      actress: "Anushka shetty",
      category: "action"
  },
  {
      movieName: "bahubali2",
      actor: "Prabhas",
      actress: "Anushka shetty",
      category: "action"
  },
  {
      movieName: "Tumbhad",
      actor: "Shah",
      actress: "Amma",
      category: "thriller"
  },
  {
      movieName: "kantaara",
      actor: "Aakash",
      actress: "Aakashi",
      category: "horror"
  },
  {
      movieName: "fastx",
      actor: "Harsh",
      actress: "Harsha",
      category: "action"
  },
  {
      movieName: "The Conjuring",
      actor: "Patrick Wilson",
      actress: "Vera Farmiga",
      category: "horror"
  },
  {
      movieName: "Inception",
      actor: "Leonardo DiCaprio",
      actress: "Marion Cotillard",
      category: "thriller"
  },
  {
      movieName: "Joker",
      actor: "Joaquin Phoenix",
      actress: "Zazie Beetz",
      category: "thriller"
  },
  {
      movieName: "The Sixth Sense",
      actor: "Bruce Willis",
      actress: "Toni Collette",
      category: "thriller"
  },
  {
      movieName: "Se7en",
      actor: "Brad Pitt",
      actress: "Gwyneth Paltrow",
      category: "thriller"
  },
  {
      movieName: "13 Exorcisms",
      actor: "Urko Olazabal",
      actress: "María Romanillos",
      category: "horror"
  }
]


  return (
    <>
      <Navbar data={getData}/>
      <Product data1={count} mdata={moviedata} />
    </>
  )
}

export default App
