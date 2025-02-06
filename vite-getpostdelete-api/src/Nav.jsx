import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
 
  let navData = [
    {
      path: '/',
      item: 'Home'
    },
    {
      path: '/form',
      item: 'Form'
    }
  ]
  return (
    <div>
        <ul>
            {
              navData.map((val)=>{
                return (
                  <>
                      <li><Link to={val.path}>{val.item}</Link></li>

                  </>
                )
              })
            }
            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li> */}
        </ul>
    </div>
  )
}

export default Nav