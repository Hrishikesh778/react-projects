import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
function Nav() {


 
//   let navData = [
//     {
//       path: '/',
//       item: 'Home'
//     },
//     // {
//     //   path: '/effect',
//     //   item: 'Effect'
//     // }
//   ]
  return (
    <div className='navbar'>
        <ul>
            {/* {
              navData.map((val)=>{
                return (
                  <>
                      <li><Link to={val.path}>{val.item}</Link></li>

                  </>
                )
              })
            } */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pages/users'>Users</Link></li>
            <li><Link to='/pages/random'>Random</Link></li>
            <li><Link to='/pages/products'>Products</Link></li>
            <li><Link to='/pages/universities'>Universities</Link></li>
            <li><Link to='/pages/posts'>Posts</Link></li>
        </ul>
    </div>
  )
}

export default Nav