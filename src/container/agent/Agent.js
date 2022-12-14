import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'
import { NumericInput } from './NumberInput'
import NavBar from '../nav/Nav'
// import List from './List'
import Table from './Table';
import { Button, Form, Input, message, Divider } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import { Collapse, Select } from 'antd'
const { Panel } = Collapse
const { Option } = Select

 const lists =['home', 'contact'].map((e) => (
  <NavLink className="anchor" to={`${e}`}>
    {' '}
    {e}{' '}
  </NavLink>
))

  const Agent = () => {
  const [value, setValue] =useState('')
  const [form] = Form.useForm();
  const {resetFields} = form;
  // console.log({form});
  const [data, setDate] = useState()
  const dispatch = useDispatch()
  const {all,client} = useSelector(({agent:{all,client}}) =>({all,client}))
  const {agent:{add,clients}} = action ;
  console.log({ all,client,add,clients })

  const [messageApi, contextHolder] = message.useMessage()
  const Notification = ({ type, content }) => messageApi.open({ type, content })
  const onFinish = (val) =>{
    dispatch(add(val));
    resetFields();
  };

  const onFinishFailed = (errorInfo) => {
      Notification({ type: 'error', content: JSON.stringify(errorInfo) })
  }

  useEffect(() => {
       setDate(client?.data?.client);
    },[client])

  useEffect(()=>{
   dispatch(clients())
   },[])

  const obj = (e) => <Option value={e}>{e}</Option>
  
  const getForm = () => {
    return (
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
              message: 'Only Aplhabet is allowed',
            },
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
            style={{ width: '100%' }}
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
              message: 'Please input type !',
            },
          ]}
        >
          <Select defaultValue={'select'}
          style={{ width: '100%' }}>
            {[
              'student ',
              `teacher `,
              'parent  ',
              `other`,
            ].map((e) => obj(e))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <>
       <nav>
        <NavBar data={lists} />
      </nav>
      <Outlet />
      {contextHolder}

      <div className="form">
        <Divider />
        
        <Collapse accordion>
          <Panel
            header="Add student , teacher and parent "
           
            key="1"
          >
         {getForm()} 
          </Panel>
          <Panel header="TOTAL USERS" key="2">
      <Button style={{ color: '#4ed973' }}
          onClick={() =>dispatch(clients()) }
                type="dashed"
              >
                refresh
              </Button>
             <Table  data={data} /> 
 
          </Panel>
        </Collapse>
      </div> 
         </>
  )
}

export default Agent

