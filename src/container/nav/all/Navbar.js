import React,{useState} from 'react'
import {Button,Drawer  } from 'antd';
import {CloseCircleOutlined } from '@ant-design/icons';

import './style.css'

const App = ({data}) => {
  const [open, setOpen] = useState(false);
    // const ref= useRef(null);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
return (<>
 <div className="desktop" >
     {data}  
      </div>
 

 {!open?
  <Button type="primary" className="btn" 
  onClick={showDrawer}><i  className="fas fa-bars"></i>
  </Button>
  :
  <Button type="primary"  className="btn"  
  onClick={onClose} 
  ><CloseCircleOutlined />
  </Button>   
}     

<Drawer title="TUITION WALAH" width='60%' placement="right" onClose={onClose} open={open}>
{data.map((e,i)=>{
    if(i===0) return null;
    return<div>{e}</div>;
    })}
   </Drawer>

</>)


}

export default App;