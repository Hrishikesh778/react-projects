import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Description.css"

function Description() {
    let param = useParams()
    let id = param.id
    console.log(param, "param")
    let [singleData, setsingleData] = useState([])
    let [counter, setcounter] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((resp) => {
                console.log(resp.data, "resp  inside product desc")
                setsingleData([resp.data])
            })
    }, [])

    console.log(singleData, "singleData")

    return (
        <>
            <div>
                <h1>Desc</h1>
                {
                    singleData.map((val) => (
                        <>
                            <div className='mainContainer'>
                                <div className='imgContainer'></div>
                                <div className='descContainer'>
                                    <h1>{val.name}</h1>
                                    <h2>{val.description}</h2>
                                    <h3>₹{Number(val.price) * counter}</h3>

                                    <button onClick={() => { counter<val.quantity &&setcounter(counter + 1) }}>+</button>
                                    {counter}
                                    {<button onClick={()=>{counter>1 && setcounter(counter-1)}}>-</button>}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Description