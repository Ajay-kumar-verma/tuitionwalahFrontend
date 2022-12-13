import React from 'react'; 
import {Table ,Tooltip } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
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
    const {client,date} = data;    
    console.log({data,client,date})
return <Table
columns={columns} 
dataSource={[{...client,date}]}
/>

}

export default App;