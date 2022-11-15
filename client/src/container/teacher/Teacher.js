import { NavLink,Outlet } from 'react-router-dom'

const TeacherDetail = () => {
  return (
<>
<nav>
<NavLink to="education" >Education  </NavLink>
<NavLink to="otherDetail" >Other details </NavLink>

  </nav>
<Outlet />

  </>
 
    )
}

export default TeacherDetail