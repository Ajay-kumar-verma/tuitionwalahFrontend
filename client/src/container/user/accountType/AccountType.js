import React from 'react'
import { Checkbox, Col, Row } from 'antd';

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

 const AccountType = () =>{

return(<>
<div className="form" >
<Checkbox.Group
    // style={{
    //   width: '100%',
    // }}
    onChange={onChange}
    defaultValue={['user']}
>
    <Row>
    <Col span={12}>
        <Checkbox   value="user">User</Checkbox>
      </Col>
    <Col span={12}>
      <Checkbox value="teacher">Teacher</Checkbox>
      </Col>
      <Col span={12}>
        <Checkbox value="student">Student</Checkbox>
      </Col>
      <Col span={12}>
        <Checkbox value="parent">Parent</Checkbox>
      </Col>
      <Col span={12}>
        <Checkbox value="other">other</Checkbox>
      </Col>
     </Row>
  </Checkbox.Group>
</div>


</>)


}

export default AccountType;







