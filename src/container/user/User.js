import { NavLink,Outlet } from 'react-router-dom'

import React from 'react'

const User = () => {
  return (
    <>
  <h3 style={{color:"green"}} >USER ACCOUNT </h3>
  <nav>
<NavLink to="home" >home </NavLink>
<NavLink to="contact" >contact </NavLink>
<NavLink to="address" >address </NavLink>
<NavLink to="education" >education </NavLink>
<NavLink to="otherDetail" >otherDetail</NavLink>
<NavLink to="document" >Documnet</NavLink>
<NavLink to="accounttype" >Account Type</NavLink>
<NavLink to="teacher" >teacher</NavLink>
<NavLink to="parent" >parent </NavLink>
<NavLink to="setting" >setting </NavLink>
<NavLink to="payment" >Payment </NavLink>
<NavLink to="logout" >logout</NavLink>

  </nav>
<Outlet />
    </>
 
    )
}

export default User