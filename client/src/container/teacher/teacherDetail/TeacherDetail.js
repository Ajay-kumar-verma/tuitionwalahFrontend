import { NavLink,Outlet } from 'react-router-dom'

const TeacherDetail = () => {
  return (
<>
<nav>
<NavLink to="home" >home </NavLink>
<NavLink to="contact" >contact </NavLink>
<NavLink to="address" >address </NavLink>
<NavLink to="education" >education </NavLink>
<NavLink to="otherDetail" >otherDetail</NavLink>
<NavLink to="document" >Documnet</NavLink>
<NavLink to="parent" >parent </NavLink>
<NavLink to="setting" >setting </NavLink>
<NavLink to="logout" >logout</NavLink>

  </nav>
<Outlet />

  </>
 
    )
}

export default TeacherDetail