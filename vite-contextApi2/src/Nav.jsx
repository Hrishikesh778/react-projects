import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CreateStore from './ContextApi/CreateStore'
// import CreateStore from '../ContextApi/CreateStore'


function Nav() {

  let {dispatch}=useContext(CreateStore)

  console.log(dispatch,"dispatch inside nav")
  return (
    <div>
        <h1>Search bar from nav</h1>
        <input type='search' onChange={(e)=>{dispatch({type:"data",payload: e.target.value})}} />
      
    </div>
  )
}

export default Nav