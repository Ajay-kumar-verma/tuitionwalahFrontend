import React, { useState } from 'react';
import { Button, Modal,Select   } from 'antd';
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
  return (
    <>
      <Button style={{width:"50%"}} block onClick={() => setOpen(true)}>
      Activity
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
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
    onChange={handleChange}
    defaultValue={user.userType}
    options={options}
  />
      </Modal>
    </>
  );
};
export default App;