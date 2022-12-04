import React,{useRef} from 'react'
import {GoogleLogout } from 'react-google-login'
import obj from '../../config' 

const Logout = () => {
  console.log("Logout butddton ")
 const ref = useRef(null);
  const {clientId} = obj;
  
  const lgot= ()=>{
localStorage.removeItem('token');
  window.location.href="/"
}



  return <GoogleLogout  ref={ref}
    clientId={clientId}
    buttonText=" Logout "
    onLogoutSuccess={lgot}
    />
   
}

export default Logout