import { NavLink,Outlet } from 'react-router-dom'

import React from 'react'

const User = () => {
  return (
    <>
    <h1>USER ACCOUNT </h1>
  <nav>
<NavLink to="home" >home </NavLink>
<NavLink to="address" >address </NavLink>
<NavLink to="education" >education </NavLink>
<NavLink to="parent" >parent </NavLink>
<NavLink to="setting" >setting </NavLink>
<NavLink to="logout" >logout</NavLink>

  </nav>
<Outlet />
    </>
 
    )
}

export default User