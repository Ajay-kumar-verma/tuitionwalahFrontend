import {NavLink,useNavigate} from 'react-router-dom';
import React,{useState} from 'react'
import {Button,Drawer,Divider ,Select , Tooltip} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
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
  {['changePassword','changePassword','resetPassword','deleteAccount','logout'].map((e,i)=>obj(e,i))}
 </Select>

  const usertypes =<Select size={"large"} defaultValue={currentUser}
  onChange={(value)=>{
    dispatch(action.all.changeUser(value));
     navigate(`/${value}`)
     }}
   style={{width: 150}}>
  {userType.map((e,i)=>obj(e,i))}
  </Select>

  // data.push(usertypes);
  // data.push(settings);


  return (
 <>
 <div className="desktop" >
  {"TWU0000001"}
  {data}
 {usertypes}
 {settings}
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
  <Divider> {settings} </Divider>
   </Drawer>
 </>
)
}

export default Navbar