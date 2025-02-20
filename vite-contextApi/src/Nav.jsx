import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CreateStore from './ContextApi/CreateStore'
// import CreateStore from '../ContextApi/CreateStore'


function Nav() {

  let {data,setData} = useContext(CreateStore)

   console.log(setData,"getData inside nav")
  return (
    <div>
        <h1>Search bar from nav</h1>
        <input type='search' onChange={(e)=>{setData(e.target.value)}} />
      
    </div>
  )
}

export default Nav