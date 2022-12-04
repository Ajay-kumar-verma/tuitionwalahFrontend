import React from 'react'
import {GoogleLogout } from 'react-google-login'
import obj from '../../config' 

const Logout = () => {
  const {clientId} = obj;
  return <GoogleLogout 
    onClick={()=>{localStorage.removeItem('token')}}
    clientId={clientId}
    buttonText=" Logout "
    />
   
}

export default Logout