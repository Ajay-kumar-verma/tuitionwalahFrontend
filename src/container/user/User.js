import {NavLink ,useNavigate } from 'react-router-dom'
import {Tooltip } from 'antd'; 
import {Select} from 'antd';
import { Outlet } from 'react-router-dom'
import React from 'react'
import NavBar from '../nav/Nav'

const obj =(value,label)=>({value,label});
const options1 = ['changePassword','resetPassword','deleteAccount','logout']
.map(e=>obj(e));

const options2 =['user','student','teacher','parent','agent','admin','main']
.map(e=>obj(e));
 


const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 
   

const User = () => {
  const navigate = useNavigate();
   
  const handleChange = (e)=>{
     navigate(`/${e}`);
   }
     const data = [
      <a href="id"    className="anchor" onClick={(e)=>{e.preventDefault();navigate('/TWU0000001')}} >
        <Tooltip title="SHARE YOUR PROFILE IN WEB " color='#108ee9'  >
        {String('TWU0000001')}
        </Tooltip>
        
        </a>,
      <a  href="ww4" className="anchor"  onClick={(e)=>{e.preventDefault()}} > </a>,
      <p  className="anchor" to={``} > </p>, 
     ...list(["","","home","contact","address","document","","",]),
   <Select size={"large"} defaultValue="user" onChange={handleChange} style={{width: 110,}}options={options2}/>,
   <Select size={"large"} defaultValue="setting" onChange={handleChange} style={{width: 160, }} options={options1} /> 
     ]



  return (
    <>
  <h3 style={{color:"green"}} >USER ACCOUNT </h3>
   <nav>
  <NavBar data={data} />
  </nav>
<Outlet />
    </>
 
    )
}

export default User