import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./description.css"

function Description() {
  let [count, setCount] = useState(1)
  let param = useParams()
  let id = param.id
  console.log(param,"param")
  let [singleData, setsingleData] = useState([])
  let [image, setImage] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then((resp)=>{
            console.log(resp.data,"resp  inside product desc")
            setsingleData([resp.data])
            setImage(resp.data.image[0])
        })
    },[param])

    console.log(singleData,"singleData")

  return (
    <div>
      <h1>Desc</h1>
      {
        singleData.map((val)=>{
          console.log(val.image[0],"ll")
          return (
            
            <>
                <div className='mainContainer'>
                    <div className='imgContainer'>
                      <div className='mainImg'>
                        <img src={image} alt="" />
                      </div>
                      <div className='downImage'>
                        <div className='sImg' onMouseOver={()=>{setImage(val.image[1])}}>
                          <img src={val.image[1]} alt="" />
                        </div>
                        <div className='sImg'  onMouseOver={()=>{setImage(val.image[2])}}>
                          <img src={val.image[2]} alt="" />
                        </div>
                        <div className='sImg'  onMouseOver={()=>{setImage(val.image[0])}}>
                          <img src={val.image[0]} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className='descContainer'>
                        <h1>{val.name}</h1>
                        <h2>{val.description}</h2>
                        <h3>{val.price * count}</h3>
                        <button onClick={()=>{setCount(count+1)}}>+</button>
                        {count}
                        <button onClick={()=>{setCount(count-1)}}>-</button><br/>
                        <button >wishlist</button>  <button >Add to cart</button>
                    </div>
                </div>
            </>
        
          )
        })
      }
    </div>
  )
}

export default Description
