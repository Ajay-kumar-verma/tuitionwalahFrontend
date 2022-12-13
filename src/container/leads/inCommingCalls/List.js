import React from 'react'
import {List,Row,Col ,Badge  ,Divider } from 'antd';
import { PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
// import Menu from './Menu';
import moment from 'moment';

const getList=(data)=>{
  return <Row justify="space-between">
  {
    data.map((e,i)=>{ 
     const keys= Object.keys(e); 
     const {Lead} = e;  
    return <Col 
      xs={{span:23,}}
      md={{span:23,}}
      lg={{span:11}}
     >
     <Divider />
     <Badge.Ribbon key={i}   text={Lead}
        color={`#${Math.floor(100000 + Math.random() * 900000)}`} 
        >
      <List 
        size="small"
        bordered
        dataSource={keys}
        renderItem={(key,i)=>{
      let value = e[key];
          if(key==='number')
          value =<>
         <a href={`tel:+91 ${value}`}><PhoneOutlined /> {value}</a>
          <br />
          <a style={{color:'green'}} href={`https://wa.me/+91${value}?text=Hi ` }
           data-action="share/whatsapp/share"  
         target="_blank"><FaWhatsapp  />{value}</a> 
          </>

        return<Row style={{padding:'1%'}} justify="space-between">
          <Col span={5}>{key}</Col>
          <Col span={1}>:</Col>
          <Col span={16} >{value}</Col>
       </Row>}}
          />
     </Badge.Ribbon>
     </Col>
     }
    )
  }
   </Row>
}


const Lists = ({data})=>{
   if(data===undefined )
    return "No data ,refresh or add"
  
  const {lists, message} = data;
  if(lists===undefined) 
  return "No data ,refresh or add"
  
  const client =lists?.map(({lead,date})=>({...lead,date}));  
 console.log({client})
 
return getList(client)
} 
  
  
export default  Lists;




// <List 
// size="small"
// bordered
// dataSource={keys}
// renderItem={(key,i) =>{
// //   if(key==="_id" || key==="__v") return null;
// //   let value =e[key] 
// //   if('TimeAtCreated'===key || 'DateOfBirth'===key)
// //   value = moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a")
  
// //   if(key==="userType" || key==="Active" || key==="Block")
// //       value=String(value);
// // if(key==="Active" || key==="Block") 
// //   value = <Switch 
// //   checkedChildren="Active" unCheckedChildren="Inactive" 
// //   defaultChecked 
// //   // onChange={onChange} 
// //   />;

// if(key==="Active" || key==="Block") 
//   value= <Radio.Group
//   //  defaultValue="Active"
//     buttonStyle="solid" 
//   // onChange={(e)=>{console.log(e.target)}}
// >
//   <Radio.Button value="Active">Active</Radio.Button>
//   <Radio.Button value="Inactive">Inactive</Radio.Button>
// </Radio.Group>

//   if(key==='number')
//      value =<>
//     <a href={`tel:+91 ${value}`}><PhoneOutlined /> {value}</a>
//      <br />
//      <a style={{color:'green'}} href={`https://wa.me/+91${value}?text=Hi ` }
//       data-action="share/whatsapp/share"  
//     target="_blank"><FaWhatsapp  />{value}</a> 
//      </>

//  if(key==='Email')
//     value =<a href={`mailto:${value}`}><MailOutlined /> {value}</a>
           
//      return <Row justify="space-between">
//   <Col span={8}><List.Item>{key}</List.Item></Col>
//   <Col span={0.2}></Col>
//   <Col span={12}><List.Item>{value}</List.Item></Col>
//       </Row>        }
// }   
// />    
