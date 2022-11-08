import React from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom';

const All = () => {
    const navigate = useNavigate();
  return (
    <>
    <nav>
   <NavLink to="login" > LOGIN </NavLink>
   <NavLink to="createAccount" > CREATE ACCOUNT </NavLink>
   <NavLink to="contact" > CONTACT </NavLink>
  <span onClick={()=>{navigate("agreement")}} > AGGREMEENT </span>
    </nav>
  <Outlet />
    </>
  )
}

export default All