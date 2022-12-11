import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import { NumericInput } from './NumberInput'
import moment from 'moment'
import { Button, Form, Input, Table, message, Divider } from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
import { Collapse, Select } from 'antd'
const { Panel } = Collapse
const { Option } = Select

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Number',
    dataIndex: 'number',
    sorter: (a, b) => a.number - b.number,
    render:(number)=><>
    <a href={`tel:+91 ${number}`}><PhoneOutlined /> {number}</a>
     <br />
     <a style={{color:'green'}} href={`https://wa.me/+91${number}?text=Hi ` }
      data-action="share/whatsapp/share"  
    target="_blank"><FaWhatsapp  />{number}</a> 
     </>,
       width: '40%',
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
    render: (e) => moment(e).format('dddd, MMMM Do YYYY, h:mm:ss a'),
    sorter: (a, b) => a?.time.localeCompare(b?.time),
  },
]

const Agent = () => {
  const [value, setValue] = useState('')
  const [data, setDate] = useState([])
  const dispatch = useDispatch()
  const {
    agent: { agent },
  } = action
  const state = useSelector(({ agent: { agent } }) => agent)
  const callApi = (val) => dispatch(agent(val))
  useEffect(() => {
    callApi({ info: 'no-data' })
  }, [])
  //console.log({ state })

  const [messageApi, contextHolder] = message.useMessage()
  const Notification = ({ type, content }) => messageApi.open({ type, content })

  const onFinish = (val) => callApi(val)
  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo)
    Notification({ type: 'error', content: JSON.stringify(errorInfo) })
  }

  const { apiCall } = state
  const { myClinets } = state.data

  // return <></>;
  useEffect(() => {
    setDate(
      myClinets?.map((e, i) => ({
        key: i,
        name: e?.client?.Name,
        number: e?.client?.Mobile,
        userType: e?.client?.userType,
        time: e?.date,
      })),
    )
  }, [myClinets])

  const obj = (e) => <Option value={e}>{e}</Option>
  const getForm = () => {
    return (
      <Form
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
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Select defaultValue="select" style={{ width: '100%' }}>
            {[
              'student छात्र',
              `teacher  शिक्षक`,
              'parent माता-पिता ',
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
// console.log({data});

  return (
    <>
      {contextHolder}
      <div className="form">
        <Divider />
        <Collapse accordion>
          <Panel
            header="Add student , teacher and parent "
            extra={
              <Button
                style={{ color: '#4ed973' }}
                onClick={() => {
                  callApi({ info: 'no-data' })
                }}
                type="dashed"
              >
                refresh
              </Button>
            }
            key="1"
          >
            {getForm()}
          </Panel>
          <Panel header="TOTAL USERS" key="2">
            <Table columns={columns} dataSource={data} />
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default Agent
