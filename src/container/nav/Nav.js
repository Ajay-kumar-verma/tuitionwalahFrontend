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
  
  // data.unshift(
  // <a href="id"    className="anchor" onClick={(e)=>{e.preventDefault();navigate('/TWU0000001')}} >
  // <Tooltip title="SHARE YOUR PROFILE IN WEB " color='#108ee9'  >
  // {String('TWU0000001')}
  // </Tooltip>
  // </a>)

  const obj=(e)=> <Option value={e} >{e}</Option>
  const settings =<Select size={"large"} defaultValue="setting"
  onChange={(value)=>{navigate(`/${value}`)}} style={{width: 150,}}>
  {['changePassword','changePassword','resetPassword','deleteAccount','logout'].map(e=>obj(e))}
 </Select>
  const usertypes =<Select size={"large"} defaultValue={currentUser}
  onChange={(value)=>{
    dispatch(action.all.changeUser(value));
     navigate(`/${value}`)
     }}
   style={{width: 150}}>
  {userType.map(e=>obj(e))}</Select>

  // data.push(usertypes);
  // data.push(settings);


  return (
 <>
 <div className="desktop" >
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
  {data.map((e)=><Divider>{e}</Divider>)}
 <Divider>{usertypes} </Divider>
  <Divider> {settings} </Divider>
   </Drawer>
 </>
)
}

export default Navbar