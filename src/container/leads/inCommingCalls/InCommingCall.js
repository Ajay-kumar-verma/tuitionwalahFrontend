import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import Parent from './Parent';
import Teacher from './Teacher';
import List from './List'; 
import { Button, Form, message, Divider ,Col,Row,Collapse ,Select} from 'antd'
const { Panel } = Collapse

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [userType, SetUserType] = useState('parent');
  const [data, setDate] = useState()
  const dispatch = useDispatch();
  const {lead: { add,list }} = action
  const { all,client} = useSelector(({ lead: { all,client } }) => ({all,client}))
  useEffect(() =>dispatch(list()),[dispatch,list])
  console.log({add,list,all,client}) 

  const Notification = ({ type, content }) => messageApi.open({ type, content })

 useEffect(() => {
  setDate(client?.data);
 }, [client]);

 useEffect(() => {
 Notification({ type: 'info', content:data?.message })
},[data])  

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
  
     </Col>
    
    </Row>
        
    {userType==='parent'?<Parent />:
    userType==='teacher'?<Teacher />:
    "Form does not exist for this role "}
     
          </Panel>
          <Panel header="Totals leads" key="2">
         <>
   <Button  style={{ color: '#4ed973',width:"100%" }}
    onClick={()=>dispatch(list())}
    type="dashed"
  > refresh
   </Button>
  
    <List data={data} />
   
       {/* {JSON.stringify(data)} */}

         </>
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default App
