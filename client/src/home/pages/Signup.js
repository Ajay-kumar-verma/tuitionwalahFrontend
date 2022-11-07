import React from 'react'
import { Row ,Divider } from 'antd'
import SignUp from '../../container/pages/signup/SignUp'
const Signup = () => {
  return (
   <>
    <div id="createAccount"></div>
    <Divider>CREATE YOUR ACCOUNT</Divider>
 
  <Row
   style={{height:"100vh",width:"100vw",backgroundColor:"#f1f1f1"}}
    justify="space-evenly" align='middle'
   >
   <SignUp />
  </Row>


 
   </>

    )
}

export default Signup