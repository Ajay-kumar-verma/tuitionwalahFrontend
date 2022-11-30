import React,{useMemo} from 'react'
import {NavLink ,Outlet} from 'react-router-dom'
import NavBar from '../nav/Nav'

const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 
   
const User = () => {
   

     const data = [
     ...list(["","home","contact","address","document",]),
   ]

   const navLists= useMemo(()=>{
    return <NavBar data={data} />
  },[])
  

  return (
    <>
   <nav>
   {navLists}
  </nav>
<Outlet />
    </>
 
    )
}

export default User