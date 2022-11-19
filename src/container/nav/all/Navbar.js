
import React,{useRef,useState} from 'react'


import {Divider ,Button} from 'antd';
import {MenuFoldOutlined ,CloseOutlined } from '@ant-design/icons';

import './style.css'

const App = ({data}) => {
    const [b,setB] =useState(true); 
    const ref= useRef(null);
    const close = ()=>{
      ref.current.style.display='none';
      setB(false);
    }
  const open = ()=>{
    ref.current.style.display='block';
    setB(true);
  }
   
return (<>
 <div className="desktop" >
     {data}  
      </div>

      {!b?
  <Button type="primary" className="btn" onClick={()=>{open()}}><i  className="fas fa-bars"></i>
</Button>
  :
  <Button type="primary" className="btn" style={{color:"red"}}  onClick={()=>{close()}} 
  ><CloseOutlined />
  </Button>
   
}     
<div className="mobile" ref={ref} >
  <div className="sidebar" >
    {data.map((e,i)=>{
    if(i==0){
        return <div style={{marginTop:'10px'}} >{e}</div>
    }  
    return<div>{e}</div>;

    })}
    </div>
    </div>



</>)


}

export default App;