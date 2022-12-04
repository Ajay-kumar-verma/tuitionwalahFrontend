import React from 'react'
import {GoogleLogout } from 'react-google-login'
import obj from '../../config' 

const Logout = () => {

  const {clientId} = obj;
  
  const lgot= ()=>{
localStorage.removeItem('token');
  window.location.href="/"
}



  return <GoogleLogout 
    clientId={clientId}
    buttonText=" Logout "
    onLogoutSuccess={lgot}
    />
   
}

export default Logout