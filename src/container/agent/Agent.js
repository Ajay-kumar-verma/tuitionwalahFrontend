import React,{useState ,useEffect} from 'react'
import {NavLink ,Outlet} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'
import {NumericInput} from './NumberInput'
import NavBar from '../nav/Nav'

import { Button , Form, Input,Table , message } from 'antd'
import {  PhoneOutlined } from '@ant-design/icons'
import { Collapse,Select } from 'antd';
const { Panel } = Collapse;

const {Option} = Select;

const list = (data)=>data.map(e=><NavLink  className="anchor" to={`${e}`} > {e} </NavLink>) 

const lists =  list(["","home","contact","address","document"])


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: 'userType',
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
    width: '20%',
  },
  {
    title: 'time',
    dataIndex: 'time',
    sorter: (a, b) => a?.time.localeCompare(b?.time),
  },
  
];

const Agent = ()=>{
  const [value, setValue] = useState('');
  const [data,setDate] =useState([]); 
  const dispatch = useDispatch() 
  const state = useSelector(state=>state)
 
  const [messageApi, contextHolder] = message.useMessage()
  const Notification = ({ type, content }) => messageApi.open({ type, content })

  const [form] = Form.useForm();
   const onFinish = (values) => dispatch(action.user.agent(values))
     const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    Notification({
      type: 'error',
      content: 'Some field are missing ,Please fill ',
    })
  }

  
useEffect(() => {
  dispatch(action.user.agent({x:'no-data'}))
},[])

const clients = state?.user?.agent?.data?.myClinets;
useEffect(() => {
   setDate(
        clients?.map((e,i)=>(
           {
            key:i,
            name:e?.client?.Name,
            number:e?.client?.Mobile,
            userType:e?.client?.userType,
            time:e?.date
           }
        ))
   )

},[clients])
const obj=(e)=> <Option value={e} >{e}</Option>
return (
 <>
 <nav>
  <NavBar data={lists} />
  </nav>
<Outlet />
<div className="form">
 
<Collapse accordion>
    <Panel header="Add student , teacher and parent  " extra="शिक्षक माता-पिता तथा छात्र को जोड़" key="1">
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true, Mobile: '', Password: '' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
         {contextHolder}
      <Form.Item
          name="Name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your  Name!',
            },
            {
              pattern: new RegExp(/^[a-zA-Z_ ]*$/),
              message:"Only Aplhabet is allowed"
            }
          ]}
        >
          <Input maxLength={50} showCount placeholder="Enter  Name" />
        </Form.Item>

        <Form.Item
          name="Mobile"
          label="Mobile"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <NumericInput
           addonBefore=<PhoneOutlined />
                 maxLength="10"
                 showCount
      style={{width: '100%',}}
      value={value}
      onChange={setValue}
    />
     

        </Form.Item>

        <Form.Item
          name="userType"
          label="User Type"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >

<Select
    defaultValue="teacher  शिक्षक"
    style={{width: '100%',}}
  >
   {['student छात्र',`teacher  शिक्षक`,'parent माता-पिता ',`other`].map(e=>obj(e))}
  </Select>

  </Form.Item>
    <Form.Item>
          <Button style={{ width: '100%' }} 
           type="primary"
            htmlType="submit"
            >
            Submit 
           </Button>
        </Form.Item>
    
      </Form>
    
    </Panel>
    
    <Panel header="TOTAL USERS"  key="6">
    
    <Table columns={columns} dataSource={data} />

    </Panel>
  
  </Collapse>

</div>
    </> 
)

}

export default Agent