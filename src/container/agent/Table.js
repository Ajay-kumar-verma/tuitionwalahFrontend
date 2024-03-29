import React, { useState,Row,Col } from 'react'; 
import {Table ,Tooltip } from 'antd';
import {  PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
// import Menu from './Menu';
import moment from 'moment';
const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      sorter: (a, b) => a.Name.localeCompare(b.Name),
      width: '50%',

    },
    {
      title: 'Mobile',
      dataIndex: 'Mobile',
      sorter: (a, b) => a?.Mobile - b?.Mobile,
      render:(value)=><>
      <a href={`tel:+91 ${value}`}><PhoneOutlined /> {value}</a>
       <br />
       <a style={{color:'green'}} href={`https://wa.me/+91${value}?text=Hi ` }
       rel="noreferrer"
     data-action="share/whatsapp/share"  
      target="_blank"><FaWhatsapp  />{value}</a> 
       </>,
     width: '50%',
    },
    {
      title: 'PTO',
      dataIndex: 'userType',
      filters: [
        {
          text: 'student',
          value: 'student',
        },
        {
          text: 'teacher',
          value: 'teacher',
        },
        {
          text: 'parent',
          value: 'parent',
        },
        
      ],
      sorter: (a, b) => a.userType.localeCompare(b.usertype),
      onFilter: (value, record) => record.userType.startsWith(value),
      filterSearch: true,
 
    },
    {
      title: 'date',
      dataIndex: 'date',
      render:(time)=>(<Tooltip title={moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a")} color="blue" key='blue'>date</Tooltip>),
      sorter: (a, b) => a?.date.localeCompare(b?.date),
    },
    
  ];
const App = ({data})=>{
   const [info,setInfo]= useState("")
  let clientList =  data?.map(({client,user,date})=>({...client,date,user}));
  console.log({data,clientList})
 return <Table
columns={columns} 

dataSource={!!clientList?clientList:[]}
title={() =>{
if(!!data && data?.length)
  return `${data?.length} clients || ${!!info? 'Added by '+ info:"unknown"}`
return "No client"
}}

onRow={
  (row,index)=>{
     return {
       onMouseEnter:_=> {
        setInfo(!!row.user?.FirstName?`${row.user?.FirstName} | +91${row.user?.Mobile}`:undefined)
       }
     }
   }
 }

/>
 
}

export default App;