import React,{useState ,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';
import { Button,message,Collapse,List,Row,Col,Tag ,Badge  } from 'antd';
// import Menu from './Menu';
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
      const indx = keys.indexOf('TimeAtCreated');
        keys.splice(indx,1);
        keys.unshift('TimeAtCreated'); 
   return <Panel showArrow={false} header={
     (<Row>
         <Col span='1'></Col>
          <Col><Badge.Ribbon key={i}   text={(i+1)}
        color={`#${Math.floor(100000 + Math.random() * 900000)}`} 
        ></Badge.Ribbon></Col> 
        <Col span='1'></Col>
        <Col>{<Tag color="success">{FirstName} {LastName} </Tag>}</Col>
     </Row>)
     } 

     extra={<Tag color="geekblue"> {Mobile} </Tag>} 
      key={i}>
      <Badge.Ribbon key={i}   text={<a href="1" style={{color:`white`}}
       onClick={(e)=>e.preventDefault()}>click me </a>}
        color={`#${Math.floor(100000 + Math.random() * 900000)}`} 
        >
     <List 
      size="small"
      bordered
      dataSource={keys}
      renderItem={(key,i) =>{
        if(key==="_id" || key==="__v") return null;
        
        let value =e[key] 
        if('TimeAtCreated'===key || 'DateOfBirth'===key)
        value = moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a")
        
        if(key==="userType" || key==="Active" || key==="Block")
            value=String(value);
            
           return <Row justify="space-between">
        <Col span={8}><List.Item>{key}</List.Item></Col>
        <Col span={0.2}></Col>
        <Col span={12}><List.Item>{value}</List.Item></Col>
    </Row>        }
      }   
   />    
     </Badge.Ribbon>
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