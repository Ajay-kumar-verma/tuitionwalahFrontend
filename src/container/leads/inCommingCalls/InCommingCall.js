import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import { NumericInput } from './NumberInput'
import moment from 'moment'
import { Button, Form, Input, Table, message, Divider ,Space,Collapse ,Select} from 'antd'
import { MailOutlined, PhoneOutlined ,PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
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

const valLab =(e)=>({value:e,label:e});
const ar = ['name','number','altNumber','address',
'state', 'city','zipNo','board','other']
const  ParentOption =[...ar,'childName',`childClass`].map(e=>valLab(e));
const TeacherOption =[...ar,'exprce','fresher',
  'vehicycle','expectedFee',`distancego `].map(e=>valLab(e))


const App = () => {
  const [form] = Form.useForm();
  const {resetFields,setFieldsValue} =form ;
  const [value, setValue] = useState('')
  const [userType, SetUserType] = useState('all');
  const [inputType,setInputType] = useState('text');
  const [data, setDate] = useState([])
  const dispatch = useDispatch();
  
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

  const onFinish =console.log;
    // (val) =>  callApi(val) 
  
    const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo)
    Notification({ type: 'error', content: JSON.stringify(errorInfo) })
  }

  const { apiCall } = state
  const { myClinets } = state.data


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

 console.log({userType})
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
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Select defaultValue="select"
          onChange={(e) =>SetUserType(e)}
          style={{ width: '100%' }}>
            {['student',`teacher`,
              'parent',`other`,
            ].map(e =><Option value={e}>{e}</Option>)}

          </Select>
        </Form.Item>
        
        <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
              
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing type ',
                    },
                  ]}
                  >
     
                <Select  
           onChange={e=>{
             let val =`text`; 
             if(e==='number')
               val='number'
               if(e==='expectedFee')
                 val='range';
            setInputType(val)
           }}
               allowClear
       showSearch
        style={{width: '100%',}}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={userType==='parent'?ParentOption:
    userType==='teacher'?TeacherOption:[...ParentOption,TeacherOption]}
    />
</Form.Item>
              <Form.Item
                  {...restField}
                  name={[name, 'value']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing value',
                    },
                  ]}
                >
             {inputType==='text'?
             <Input 
             style={{width: '100%',}}
             allowClear maxLength={50}
               placeholder=" Enter value" /> :null}
                {inputType==='number'?
               <NumericInput
               addonBefore=<PhoneOutlined />
            maxLength="10" showCount style={{ width: '100%' }}
            value={value}
            onChange={setValue}
          />
          :null}
         {inputType==='range'?<Select  
              style={{width: '100%',}}
         
              defaultValue="1000 - 1500"
          >
            {['1000 - 1500',`1000 - 2000`,
              '1500 - 2000','2000 - 2500','2000 - 3000',`3000 - 4000` ,
              `4000 - 5000` ,`more than 5k`,
            ].map(e =><Option value={e}>{e}</Option>)}

          </Select>:null}

                           </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}

      </Form.List>
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
            header="Add leads "
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
          <Panel header="Totals leads" key="2">
            <Table columns={columns} dataSource={data} />
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default App
