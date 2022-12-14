import React from 'react'
import {GoogleLogout } from 'react-google-login'
import obj from '../../config' 

const Logout = () => {

  const {clientId} = obj;
  
  const lgot= ()=>{
   console.log("Logging out ")
 localStorage.removeItem('token');
  window.location.href="/"
}



  return <GoogleLogout 
    clientId={clientId}
    buttonText=" Logout "
    onLogoutSuccess={lgot}
    onLogoutFailure={lgot}
    />
   
}

export default Logout