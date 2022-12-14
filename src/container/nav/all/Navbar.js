import React,{useState} from 'react'
import {Button,Drawer ,List } from 'antd';
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
  <List
      // bordered
      dataSource={data}
      renderItem={(item ,i) =>
       (<List.Item key={i} >{i===0?"":item}</List.Item>)}
    />

   </Drawer>

</>)


}

export default App;