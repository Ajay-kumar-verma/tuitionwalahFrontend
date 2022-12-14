import React from 'react'
import {Button} from 'antd'; 
import {GoogleLogout } from 'react-google-login'

import obj from '../../config' 

const Logout = () => {
  const {clientId} = obj;
  const LoggedOut = ()=>{
    console.log(`Logginng out`);
    localStorage.removeItem('token');
    window.location.href="/"
   }

  return <GoogleLogout 
     clientId={clientId}
     buttonText=" Logout "
     onLogoutSuccess={()=>LoggedOut()}
     onFailure={()=>LoggedOut()}
     />
   
}

export default Logout