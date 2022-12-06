import {useNavigate} from 'react-router-dom';
import React,{useState} from 'react'
import {Button,Drawer,Divider ,Select  } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Logout from '../logout/Logout'
import action from '../../rtk/actions/index'
import './style.css'
const {Option} = Select; 


const Navbar = ({data}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch() 
  const {userType,currentUser} = useSelector(({all})=>all);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  

  const obj=(e,i)=> <Option value={e} key={i} >{e}</Option>

  const settings =<Select size={"large"} defaultValue="setting"
  onChange={(value)=>{navigate(`/${value}`)}} style={{width: 150,}}>
  {['changePassword','changePassword','resetPassword','deleteAccount'].map((e,i)=>obj(e,i))}
 </Select>

  const usertypes =<Select size={"large"}
  
  defaultValue={currentUser}
  onChange={(value)=>{
    localStorage.setItem('currentUser',value)
    dispatch(action.all.changeUser(value));
     navigate(`/${value}`)
     }}
   style={{width: 150}}>
  {userType.map((e,i)=>obj(e,i))}
  </Select>


  return (
 <>
 <div className="desktop" >
  {"TWU0000001"}
  {data}
 {usertypes}
 {currentUser==='admin'?null:settings}
 <Logout /> 
  </div>
       
 {!open?<Button type="primary" className="btn" 
  onClick={showDrawer}><i  className="fas fa-bars"></i>
  </Button>
  :null
}

<Drawer title="TUITION WALAH"  width={220}
 placement="right" onClose={onClose} open={open}>
 {"TWU0000001"}
  {data.map((e, i)=><Divider key={i} >{e}</Divider>)}
  <Divider>{usertypes} </Divider>
  <Divider>  {currentUser==='admin'?null:settings}</Divider>
  <Divider> <Logout /> </Divider>
    
 
   </Drawer>
 </>
)
}

export default Navbar