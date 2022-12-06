import React,{useState ,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';
import { Button,message,Collapse,List,Row,Col} from 'antd';
import moment from 'moment';
const { Panel } = Collapse;
const App = () => {
  const [messageApi, contextHolder] = message.useMessage()
const dispatch = useDispatch();
const state = useSelector(({admin:{user}}) => user)
const {admin:{user}}  = action;

const [data ,setData] = useState([]);

// console.log({ data })

useEffect(() => {
 const {data}  = state ;
 const {recieved,users} = data;
 if(!recieved){
  const type = 'error'; 
  messageApi.open({type,content:"Error"})
  return ;
  }
 
  const type ='success';
    messageApi.open({type,content:data.data})
    setData(users)

},[state])

  return (
   <div 
   className="form"
   >
        {contextHolder}
      
     {JSON.stringify(data[0])}

  <Collapse accordion>
    {data.map((e,i)=>{
    const {FirstName,LastName,Mobile,Email} = e;  

   return <Panel header={`${FirstName} ${LastName}`} 
     extra={Mobile}
       key={i}>
    {/* <List 
      size="small"
      bordered
      dataSource={[e]}
      renderItem={(item) =>{
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        return <Row justify="space-between">
        <Col style={{backgroundColor:"#fff111"}} span={8}><List.Item>{key}</List.Item></Col>
        <Col span={16}><List.Item>{value}</List.Item></Col>
    </Row>        }
      }   
   />    
     */}
   {JSON.stringify(e)}
   </Panel>        
}
 )}
  
  </Collapse>
   <Button
   onClick={()=>{dispatch(user({info:"sent all data"}))}}
   >
         call api    
   </Button>
   
    </div>
  )
}

export default App