import React,{useState} from 'react'
import Logout from '../logout/Logout'
import './style.css' 
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'
import {Button,Drawer ,Select,List } from 'antd';
const {Option} = Select; 


const Navbar = ({data}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch() 
  let {userType,currentUser,all:{user:{MyId}}} = useSelector(({all})=>all);
//  console.log(useSelector(state=>state));
  // const  MyId= "24e234" 
 MyId= <Button style={{color:"#4ed973"}} type="dashed" >{MyId}</Button>;
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
     dispatch(action.all.changeUser(value));
     navigate(`/${value}`)
     }}
   style={{width: 150}}>
  {userType.map((e,i)=>obj(e,i))}
  </Select>


  return (
 <>
 <div className="desktop" >
  {MyId}
  {data}
 {usertypes}
 {currentUser!=='user'?null:settings}
 <Logout /> 
  </div>
       
 {!open?<Button type="primary" className="btn" 
  onClick={showDrawer}><i  className="fas fa-bars"></i>
  </Button>
  :null
}

<Drawer title="TUITION WALAH"  width={220}
 placement="right" onClose={onClose} open={open}>
 
 <List
      // bordered
      dataSource={[MyId,...data,usertypes,<Logout /> ]}
      renderItem={(item ,i) =>
       (<List.Item key={i} >{item}</List.Item>)}
    />
   </Drawer>
 </>
)
}

export default Navbar