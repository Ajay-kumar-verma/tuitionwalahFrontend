import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import Parent from './Parent';
import Teacher from './Teacher';
import moment from 'moment'
import { Button, Form, message, Divider ,Col,Row,Collapse ,Select} from 'antd'
import { MailOutlined, PhoneOutlined ,PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
const { Panel } = Collapse


const valLab =(e)=>({value:e,label:e});
const ar = ['name','number','altNumber','address',
'state', 'city','zipNo','board','other']
const  ParentOption =[...ar,'childName',`childClass`].map(e=>valLab(e));
const TeacherOption =[...ar,'exprce','fresher',
  'vehicycle','expectedFee',`distancego `].map(e=>valLab(e))


const App = () => {
  const [userType, SetUserType] = useState('parent');
  const [data, setDate] = useState([])
  const dispatch = useDispatch();
  
  const {
    lead: { lead },
  } = action
  const state = useSelector(({ lead: { lead } }) => lead)
  const callApi = (val) => dispatch(lead(val));
  
  const [messageApi, contextHolder] = message.useMessage()
  const Notification = ({ type, content }) => messageApi.open({ type, content })

  useEffect(() => {
console.log({state})
  }, [state])

   return (
    <>
      {contextHolder}
      <div className="form">
        <Divider />
        <Collapse accordion>
          <Panel
            header="Add leads "
            key="1"
          >
        <Row justify="space-between">
        <Col 
          xs={{span:23,order:3}}
          md={{span:11,order:1}}
          lg={{span:7,order:1}}
         >
        <Form.Item  
          name='userType'
           rules={[{required: true,message: 'required !'}]} >
<Select  
      allowClear
   showSearch
    style={{width: '100%',}}
placeholder="Select user type "
optionFilterProp="children"
filterOption={(input, option) => (option?.label ?? '').includes(input)}
filterSort={(optionA, optionB) =>
  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
}
onChange={(e)=>SetUserType(e)}
options={['student',`teacher`,'parent','other'].map(e=>({value:e,label:e}))}
/>

</Form.Item>
     </Col>

     <Col 
      xs={{span:23,order:1}}
      md={{span:11,order:2}}
      lg={{span:7,order:2}}
       >
   <Button 
    style={{ color: '#4ed973',width:"100%" }}
    onClick={()=>callApi({ info: 'no-data' })}
    type="dashed"
              >
    refresh
    </Button>
     </Col>
    
    </Row>
        
    {userType==='parent'?<Parent />:
    userType==='teacher'?<Teacher />:
    "Form does not exist for this role "}
     
          </Panel>
          <Panel header="Totals leads" key="2">
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default App
