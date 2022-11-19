import {NavLink,useNavigate} from 'react-router-dom';
import React,{useState} from 'react'
import {Button,Drawer  } from 'antd';


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


  const [op1,op2]= data.filter(e=>{
  const {props:{options}} =e;
   if(options)
   return options
 
})
const nav=(e)=>{
  e.preventDefault();
  const {target:{innerHTML}}= e;
console.log({innerHTML})
if(innerHTML==='admin' || innerHTML==='main') 
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
 


{data.map((e,i)=>{
  const {props:{children,options}} =e;
    if(children && children[1]!=="")
     {if(i===0)return <span style={{marginRight:"140px"}} >{e}</span>;
      else return <>{e}<br /></>; 
     }
     if(options){
       return <>{e}<br/></>;
      }
      return null;
    })}
    <Button type="primary" onClick={showChildrenDrawer1}>
         UserType
        </Button>

   <Button type="primary" onClick={showChildrenDrawer2}>
   Setting
   </Button>
   
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