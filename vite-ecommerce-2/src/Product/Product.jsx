import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import createStore from '../Context/createStore'
import FetchApi from '../CustomHook/useFetchApi'

function Product() {
  let [apiData, setApiData] = useState([])
  let [filterData, setFilterData] = useState([])
  let { data } = useContext(createStore)


  let returnData = FetchApi("http://localhost:5000/products")
  console.log(returnData, "returnfetchdata")

  useEffect(() => {
    setApiData(returnData)
    setFilterData(returnData)
  }, [returnData])

  //     useEffect(()=>{
  //         axios.get("http://localhost:5000/products")
  //     .then((resp)=>{
  //         console.log(resp.data,"resp")
  //         setApiData(resp.data)
  //         setFilterData(resp.data)
  //     })
  // },[])

  useEffect(() => {
    let filterData1 = apiData.filter((val) => {
      return val.name.toLowerCase().includes(data.toLowerCase()) || String(val.id).includes(data.toLowerCase())

    })
    console.log(filterData1, "filterData1")
    setFilterData(filterData1)
  }, [data])

  return (
    <div>
   
      <h1 className='headdingp'>Products</h1>
      <div className='boxContainer'>
        {
          filterData.map((val) => {
            var pp = `productdesc/${val.id}`
            return (
              <>
                <Link to={pp} className='link'>
                  <div className='box'>
                    <img src={val.image[0]} alt="" />
                    <p>{val.name}</p>
                    <p>₹{val.price}</p>
                    <p>{val.discount}% OFF</p>
                  </div>
                </Link>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Product
