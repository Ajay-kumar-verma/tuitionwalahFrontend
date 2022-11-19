import {NavLink ,useNavigate } from 'react-router-dom'
import {ArrowLeftOutlined ,ArrowRightOutlined } from '@ant-design/icons';
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
      <a href="ww"   className="anchor" onClick={(e)=>{e.preventDefault();window.history.back()}} ><ArrowLeftOutlined /> </a>,
      <a  href="ww4" className="anchor"  onClick={(e)=>{e.preventDefault();window.history.forward()}} ><ArrowRightOutlined /> </a>,
      <p  className="anchor" to={``} > </p>, 
     ...list(["","","home","contact","address","document","payment","","",]),
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