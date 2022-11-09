import {NavLink} from 'react-router-dom'
import React from 'react'

const NoMatch = () => {
  return (
    <>
    <h1>PLEASE  WAIT   </h1>
    <nav>
    <a href="/" >Home</a>
    <a href="/login" >Login</a>
    <a href="/craetAccounte" >CreateAccount</a>
    <NavLink to="/">home page </NavLink> 
    <NavLink to="/login">Login </NavLink> 
    <NavLink to="/createAccount">CreateAccount </NavLink> 
    </nav>
 
 </>
    )
}

export default NoMatch