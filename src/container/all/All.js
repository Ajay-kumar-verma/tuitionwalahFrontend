import React from 'react'
import {useSearchParams ,useParams} from 'react-router-dom'
import UserProfile from '../userProfile/UserProfile'
import Nav from '../nav/all/Navbar';
import Body from '../body/Body';
import Login from '../login/Login'
import CreateAccount from '../createAccount/CreateAccount'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'
import ContinueWithGoogle from '../signup-login-with-google/App'
const list =[<a href="/" style={{width:"40%"}} >TUITION WALAH</a>,
  <a href='#login'>Login</a>,
  <a href='#createAccount'>CreateAccount</a>,
  <a href='#contact'>Contact</a>,
  <a href='#faq'>FAQ</a>,
  <ContinueWithGoogle />
 ]


const All = () => {
let {id} = useParams();
id = String(id);   
if(id.startsWith('TW') && id.length===10)
  return <UserProfile id={id} />

  return (
    <>
    <Nav  data={list} />  
    {/* <div className="form" ><Body /></div>  */}
    <div   id="login" style={{height:'50px'}} ></div>
     <Login /> 
    <div  id="createAccount" style={{height:"50px"}} ></div>
    <CreateAccount />
    <div     id="contact" style={{height:"30px"}} ></div>
    <Contact />
    <div     id="faq" style={{height:"300px"}} ></div>
    <Faq />
    <div     style={{height:"20px"}} ></div>
    <Footer />
    </>
  )
}

export default All