import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import { NumericInput } from './NumberInput'
import Parent from './Parent';
import Teacher from './Teacher';
import moment from 'moment'
import { Button, Form, Input, Table, message, Divider ,Space,Collapse ,Select} from 'antd'
import { MailOutlined, PhoneOutlined ,PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
const { Panel } = Collapse
const { Option } = Select


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
       

          </Panel>
          <Panel header="Totals leads" key="2">
            <Parent />
           <Teacher name="parent" />
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default App
