import {NavLink,useNavigate} from 'react-router-dom';
import React,{useState} from 'react'
import {Button,Drawer,Divider  } from 'antd';


import './style.css'
const Navbar = ({data}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [childrenDrawer1, setChildrenDrawer1] = useState(false);
  const [childrenDrawer2, setChildrenDrawer2] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer1 = () => {
    setChildrenDrawer1(true);
  };
  const onChildrenDrawerClose1 = () => {
    setChildrenDrawer1(false);
  };


  const showChildrenDrawer2 = () => {
    setChildrenDrawer2(true);
  };
  const onChildrenDrawerClose2 = () => {
    setChildrenDrawer2(false);
  };

 const menu= data.filter((e,i)=>{
    const {props:{options}} =e;
    if(options || i<2)
     return null;
    return e;
  
  })
  

const [op1,op2]= data.filter(e=>{
  const {props:{options}} =e;
  if(options)
   return options
  return null;

})

 const nav=(e)=>{
  e.preventDefault();
  const {target:{innerHTML}}= e;
console.log({innerHTML})
if(innerHTML==='admin' || innerHTML==='main' || innerHTML==='agent' || innerHTML==='logout') 
   navigate(`/${innerHTML}`);
else navigate(innerHTML)
}

const userType=op1.props.options.map(({value})=><NavLink onClick={nav} to={`/${value}`} >{value}</NavLink>  );
const setting=op2.props.options.map(({value})=><NavLink onClick={nav} to={`/${value}`} >{value}</NavLink>  );

  return (
 <>
 <div className="desktop" >
     {data}  
      </div>
      
 
 {!open?<Button type="primary" className="btn" 
  onClick={showDrawer}><i  className="fas fa-bars"></i>
  </Button>
  :null
}     
<Drawer title="TUITION WALAH"  width={220}
 placement="right" onClose={onClose} open={open}>
  {menu.map((e,i)=>i<3 ||i>=menu.length-2 ?null:<Divider>{e}</Divider>)}
    
 <Divider>  
    <Button type="primary" onClick={showChildrenDrawer1}>
         UserType
        </Button>
 </Divider>
 <Divider>
 <Button type="primary" onClick={showChildrenDrawer2}>
   Setting
   </Button>
 </Divider>
   
    <Drawer title="Usetype" width={220} onClose={onChildrenDrawerClose1} 
    open={childrenDrawer1}
       >
         {userType.map(e=><div>{e}</div>)}
         </Drawer>
   
   <Drawer title="Setting" width={220} onClose={onChildrenDrawerClose2} 
    open={childrenDrawer2}
       >
         {setting.map(e=><div>{e}</div>)}
         </Drawer>
   
   </Drawer>

 </>

)
}

export default Navbar