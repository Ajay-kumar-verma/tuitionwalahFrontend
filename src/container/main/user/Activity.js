import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions'
import { Button, Modal,Select ,message
  } from 'antd';
const options = [];

['admin','main','lead','user','agent'].forEach(e=>
options.push({
    value: e,
    label: e,
  }))

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const App = ({user}) => {
  const [open, setOpen] = useState(false);
   const [userType, setUserType] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()
  const state =useSelector(({ main: { permission } })=> permission)
  const {main:{permission}} = action

  console.log({ state ,permission})

  useEffect(() => {
    const { data, loading } = state
    let { message, recieved } = data
    if (!loading && recieved)
     messageApi.open({ type: 'success', content: message })
    if (loading) messageApi.open({ type: 'loading', content: `please wait` })

  },[state])

  return (
    <>
    {contextHolder}
      <Button style={{width:"50%"}} block onClick={() => setOpen(true)}>
      Activity
      </Button>
      <Modal
        title="Permission and previllage "
        centered
        open={open}
        onOk={() =>dispatch(permission({userType,user})) }
        onCancel={() => setOpen(false)}
        width={1000}
      >
    {JSON.stringify(user)}
             <Select

    mode="tags"
    style={{
      width: '100%',
    }}
    placeholder="Tags Mode"
    onChange={(e)=>setUserType(e)}
    defaultValue={user.userType}
    options={options}
  />
      </Modal>
    </>
  );
};
export default App;