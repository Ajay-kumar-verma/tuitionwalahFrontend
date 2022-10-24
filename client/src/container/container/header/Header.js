import React from 'react'
import { useNavigate,Link,NavLink } from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate();
  const styl=({isActive})=>isActive?{color:'red',fontSize:"20px"}:null;
  
    return (
  <nav>
    <NavLink to="/login" style={state=>styl(state)}  >Login </NavLink>
    <NavLink to="/signup"  style={state=>styl(state)} >create Account </NavLink>
    <NavLink to="/home"  style={state=>styl(state)} >Home </NavLink>
</nav>

  )
}
export default Header