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
  const state = useSelector(({all})=>all?.userType);
  // console.log({state})
  // const state=['user','agent']
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  data.unshift(
  <a href="id"    className="anchor" onClick={(e)=>{e.preventDefault();navigate('/TWU0000001')}} >
  <Tooltip title="SHARE YOUR PROFILE IN WEB " color='#108ee9'  >
  {String('TWU0000001')}
  </Tooltip>
  </a>)

  const obj=(e)=> <Option value={e} >{e}</Option>
  const settings =<Select size={"large"} defaultValue="setting"
  onChange={(value)=>{navigate(`/${value}`)}} style={{width: 150,}}>
  {['changePassword','changePassword','resetPassword','deleteAccount','logout'].map(e=>obj(e))}
 </Select>
  const usertypes =<Select size={"large"} defaultValue="user"
  onChange={(value)=>{
    dispatch(action.all.changeUser(value));
     navigate(`/${value}`)
     }}
   style={{width: 150}}>
  {state.map(e=>obj(e))}</Select>
  data.push(usertypes);
  data.push(settings);

 const menu= data.filter((e,i)=>{
    const {props:{options}} =e;
    if(options || i<2)
     return null;
    return e;
  
  })
  


  return (
 <>
 <div className="desktop" >{data}</div>
       
 {!open?<Button type="primary" className="btn" 
  onClick={showDrawer}><i  className="fas fa-bars"></i>
  </Button>
  :null
}

<Drawer title="TUITION WALAH"  width={220}
 placement="right" onClose={onClose} open={open}>
  {menu.map((e,i)=><Divider>{e}</Divider>)}
 <Divider>{usertypes} </Divider>
  <Divider> {settings} </Divider>
   </Drawer>
 </>
)
}

export default Navbar