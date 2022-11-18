import {NavLink,Outlet} from 'react-router-dom'
import React from 'react'

const Setting = () => {
  return (
    <>
    <h1>Setting </h1>
     <nav>
    <NavLink to="changePassword">changePassword </NavLink> 
    <NavLink to="resetPassword">resetPassword </NavLink> 
    <NavLink to="deleteAccount">deleteAccount </NavLink> 
    </nav>
   <Outlet />
    
    </>
  )
}

export default Setting