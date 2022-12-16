import React from 'react';

import {NavLink ,Outlet} from 'react-router-dom'
import NavBar from '../nav/Nav'
import {Divider} from 'antd'

const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 
const data =list(
  ["user","student","teacher","parent","agent",'team','admin']
  );

const Admin = () => {
 
  return (
  <div>
   <nav>
   <NavBar data={data} />
  </nav>
    <Outlet />
    <Divider />
    </div>
    )
}

export default Admin