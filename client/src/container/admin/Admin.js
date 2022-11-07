import { NavLink,Outlet } from 'react-router-dom'

import React from 'react'

const Admin = () => {
  return (
  <>
    <h1>ADMIN </h1>
  <nav>
<NavLink to="user" >user </NavLink>
<NavLink to="student" >student </NavLink>
<NavLink to="teacher" >teacher </NavLink>
<NavLink to="parent" >parent </NavLink>
<NavLink to="setting" >setting </NavLink>
<NavLink to="team" >team </NavLink>
<NavLink to="logout" >logout</NavLink>

  </nav>
<Outlet />

</>    

    )
}

export default Admin