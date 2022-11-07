import {NavLink,Outlet} from 'react-router-dom';

import React from 'react'

const Parent = () => {
console.log("parent page ")

  return (
<>
<h1>Parent</h1>
    <nav>
   <NavLink to="children">Children </NavLink> 
   <NavLink to="/">home </NavLink> 
   <NavLink to="deleteAccount">deleteAccount </NavLink> 
   </nav>
  <Outlet />

</>
    )
}

export default Parent