import React from 'react';

import {NavLink ,Outlet} from 'react-router-dom'
import NavBar from '../nav/Nav'
import {Divider} from 'antd'

const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 
const data =list(["incommingcalls","outcommingcalls"]);

const Lead = () => {
 
  return (
  <>
    <nav>
   <NavBar data={data} />
  </nav>
    <Outlet />
     </>
    )
}

export default Lead