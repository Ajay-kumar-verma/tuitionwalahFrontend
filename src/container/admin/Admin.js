import React from 'react'
import {NavLink ,useNavigate } from 'react-router-dom'
import {Tooltip } from 'antd'; 
import {Select} from 'antd';
import { Outlet } from 'react-router-dom'
import NavBar from '../nav/Nav'

import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'



const Admin = () => {
  const dispatch = useDispatch() 
  const state = useSelector(state=>state)
 


  return (
  <>
 {/* <Navbar data={['ajay','aja']} /> */}
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