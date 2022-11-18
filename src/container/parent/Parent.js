import {NavLink,Outlet} from 'react-router-dom';

import React from 'react'

const Parent = () => {
console.log("parent page ")

  return (
<>
<h1>Parent</h1>
    <nav>
    <NavLink to="parentInfo">Parent info </NavLink> 
    <NavLink to="children">Children </NavLink> 
     </nav>
  <Outlet />

</>
    )
}

export default Parent