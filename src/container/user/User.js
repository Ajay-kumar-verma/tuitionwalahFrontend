import React from 'react'
import {NavLink ,Outlet} from 'react-router-dom'
import NavBar from '../nav/Nav'

const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 
const data = [
...list(["","home","contact","address","document",]),
]
   
const User = () => {
  return (
    <>
   <nav>
   <NavBar data={data} />
   </nav>
<Outlet />
    </>
 
    )
}

export default User