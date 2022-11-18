import React from 'react';
import {Row ,Col, Divider} from 'antd'
import AppLogin from '../../container/pages/login/Login'

function Login() {
  return (
    <div id="login"  style={{height:"100vh",backgroundColor:"#f1f1f1" }}  >
      <Divider />
       <Row justify="space-between"  >
      <Col xs={{ span: 24}}  sm={{ span: 24}} md={{ span: 12 }} lg={{span:12}} >
          
          kdjsdklrshlk
         </Col>
         <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 8 }} lg={{span:8}} >
        
         <AppLogin />  
        </Col>

    </Row>
         </div>


    );
}

export default Login;