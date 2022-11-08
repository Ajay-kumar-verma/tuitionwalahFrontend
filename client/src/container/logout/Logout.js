import React from 'react'

const Logout = () => {
   localStorage.removeItem('token');
  //  console.log("LOGOUT COMPONENET ")
  window.location.href="/";
  return (
    <>LOG OUT</>
  )
}

export default Logout