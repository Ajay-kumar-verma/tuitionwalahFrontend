import React from 'react'
import {List,Row,Col ,Badge  ,Divider } from 'antd';
import { PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
import moment from 'moment';

const getList=(data)=>{
  return <Row justify="space-between">
  {
    data.map((e,i)=>{ 
     const keys= Object.keys(e); 
     const {Lead} = e;
     const indx = keys.indexOf('date');
          keys.splice(indx,1);
          keys.unshift('date'); 
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
        renderItem={(key)=>{
       let value = e[key];
          if(key==='number')
          value =<>
         <a href={`tel:+91 ${value}`}><PhoneOutlined /> {value}</a>
          <br />
          <a style={{color:'green'}} href={`https://wa.me/+91${value}?text=Hi ` }
           data-action="share/whatsapp/share"  rel="noreferrer"
         target="_blank"><FaWhatsapp  />{value}</a> 
          </>
        if(key==='date')
        value=moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a") 


        return<Row key={String(i)} style={{padding:'1%'}} justify="space-between">
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
  
  const {lists} = data;
  if(lists===undefined) 
  return "No data ,refresh or add"
  
  const client =lists?.map(({lead,date})=>({...lead,date}));  
 console.log({client})
 
return getList(client)
} 
  
  
export default  Lists;

