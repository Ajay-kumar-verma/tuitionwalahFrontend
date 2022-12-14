import React from 'react'
import {GoogleLogout } from 'react-google-login'

import obj from '../../config' 

const Logout = () => {
  const {clientId} = obj;
  const LoggedOut = (val)=>{
    console.log(`Logginng out`,val);
  return (val)=>{
    localStorage.removeItem('token');
    window.location.href="/"
  }
  }

  return <GoogleLogout 
     clientId={clientId}
     buttonText=" Logout "
     onLogoutSuccess={LoggedOut}
     onFailure={LoggedOut}
     />
   
}

export default Logout