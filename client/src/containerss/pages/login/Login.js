import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Rules from './Rules'
import './style.css'
// import {useSelector,useDispatch}  from 'react-redux'
// import {login} from '../../rtk/actions'

const Login = () => {
  const {userName,password} =Rules();
 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
        userName:"",
        password:""
      }}
 
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
  
  >
      <Form.Item
        name="username"
        rules={userName}
      >
        <Input   maxLength={50} 
         prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={password}
      >
        <Input.Password maxLength={50}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="#createAccount">register now!</a>
      </Form.Item>
    </Form>
  );
};


export default Login