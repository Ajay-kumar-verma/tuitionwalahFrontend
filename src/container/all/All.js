import React from 'react'
import {Divider} from 'antd'
import Nav from '../nav/all/Navbar';
import {Outlet} from 'react-router-dom';
import Login from '../login/Login'
import CreateAccount from '../createAccount/CreateAccount'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'

const list =[<a href="/" style={{width:"40%"}} >TUITION WALAH</a>,
  <a href='#login'>Login</a>,
  <a href='#createAccount'>CreateAccount</a>,
  <a href='#contact'>Contact</a>,
  <a href='#faq'>FAQ</a>,
 ]


const All = () => {

   
  return (
    <>
    <Nav  data={list} />  
    <Outlet />
 
    <div   id="login" style={{height:'50px'}} ></div>
     <Login /> 
    <div     id="createAccount" style={{height:"50px"}} ></div>
    <CreateAccount />
    <div     id="contact" style={{height:"30px"}} ></div>
    <Contact />
    <div     id="faq" style={{height:"120px"}} ></div>
    <Faq />
    </>
  )
}

export default All