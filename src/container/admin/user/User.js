import React,{useState ,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';
import { Button,message,Collapse,List,Row,Col,Tag } from 'antd';
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
 
const sort =({type}) =>{
  const newData = [...data];
  if(type==='reverse'){
    setData(newData.reverse());
    return ;
  }
  if(type==='name'){
  newData.sort(function(a, b){
    return a.FirstName.localeCompare(b.FirstName)
  })
  setData(newData); 
 }
}  

const len = data.length;
const data1 = data.slice(0,len/2);
const data2 = data.slice(len/2);


const Lists = (data)=>{
 return  <Collapse accordion>
   {data.map((e,i)=>{
    const {FirstName,LastName,Mobile} = e;  
     const keys =Object.keys(e);
   return <Panel header={<>{(i+1 )} <Tag color="geekblue">{FirstName} {LastName} </Tag> 
      <Tag color="success">Verified </Tag>
      </> } 
     extra={<Tag color="geekblue">{Mobile}</Tag>}
       key={i}>
     <List 
      size="small"
      bordered
      dataSource={keys}
      renderItem={(key) =>{
        let value =e[key] 
         if('TimeAtCreated'===key || 'DateOfBirth'===key)
            value = moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a")
        return <Row justify="space-between">
        <Col span={8}><List.Item>{key}</List.Item></Col>
        <Col span={16}><List.Item>{value}</List.Item></Col>
    </Row>        }
      }   
   />    
    </Panel>        
}
 )}
  </Collapse>
} 



  return (
   <div 
   style={{margin:"0 20px 0 20px"}} 
  >
    {contextHolder}
    <Button 
     onClick={()=>{sort({type:'reverse'})}}>
     reverse
   </Button>
   <Button 
     onClick={()=>{sort({type:'name'})}}>
  Name
   </Button>
  <Button
   onClick={()=>{dispatch(user({info:"sent all data"}))}}
   >
         call api    
   </Button>

  <Row  gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }} >
   <Col 
     xs={{span:24}}
     md={{span:24}}
     lg={{span:12}}
   >{Lists(data1)}</Col>
     <Col
     xs={{span:24}}
     md={{span:24}}
     lg={{span:12}}
   
   >{Lists(data2)}</Col>
  </Row>

    </div>
  )
}

export default App