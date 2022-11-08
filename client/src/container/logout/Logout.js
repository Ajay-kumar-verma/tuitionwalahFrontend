import React from 'react'

const Logout = () => {
 
  localStorage.removeItem('token');
  window.location.href="/";
  // console.log("")
  return (
    <>LOG OUT</>
  )
}

export default Logout