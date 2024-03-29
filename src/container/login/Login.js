import React, { useEffect } from 'react'
import { GoogleLogin, } from 'react-google-login'
import { gapi } from 'gapi-script'
// import { useGoogleOneTapLogin } from 'react-google-one-tap-login'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tooltip, Divider,Row,Col } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'
import { message } from 'antd'
import obj from '../../config' 

const {clientId} = obj;

const Login = () => { 

  const [messageApi, contextHolder] = message.useMessage()
  const Notification = ({ type, content }) => messageApi.open({ type, content })

  const dispatch = useDispatch()

  const [form] = Form.useForm()
  const username = Form.useWatch('username', form)

  const reset = (obj) => dispatch()
  const {
    all: { login },
  } = action

  const onFinish = (values) =>{
     const data = {...values,username:(""+values?.username)?.toLowerCase()}    
    dispatch(login(data))

}  
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    Notification({
      type: 'error',
      content: 'Some field are missing ,Please fill ',
    })
  }

  const state = useSelector(({ all: { loginData } }) => loginData)

  useEffect(() => {
    if (state === undefined) return;
    const { login, message } = state
    const content = message
    if (login === undefined) return
    if (login) Notification({ type: 'success', content })
    if (!login) Notification({ type: 'warning', content })
  }, [state])


  return (
    <Form
      form={form}
      className="form"
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true, Mobile: '', Password: '' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Divider>Login form </Divider>
      {contextHolder}

      <Form.Item
        label="Mobile or Email "
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  
         prefix={<UserOutlined className="site-form-item-icon" />}
         showCount maxLength="70" />
      </Form.Item>
      <Form.Item
        name="Password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
        <Tooltip
          title={
            ('' + username)?.length >= 9 ? null : 'Enter mobile number or email'
          }
          color={'#108ee9'}
        >
          <a
            href="#0"
            onClick={() => {
              reset({ username })
            }}
            style={{ float: 'right' }}
            disabled={('' + username)?.length <= 9 || state?.loading}
          >
            {' '}
            Get new Password{' '}
          </a>
        </Tooltip>
      </Form.Item>
      <p></p>

      <Tooltip
        title={
          ('' + username)?.length >= 9 ? null : 'Enter  mobile number or email'
        }
        color={'#108ee9'}
      >
        <Form.Item>
          <Button
            style={{ width: '100%' }}
            disabled={('' + username)?.length <= 9 || state?.loading}
            type="primary"
            htmlType="submit"
          >
            {state?.loading ? 'Please wait ' : 'Login'}
          </Button>
        </Form.Item>
      </Tooltip>
      <Row  gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }} 
      justify="space-between"
      >
       <Col span={8} >
       Not having account ?<a href="#createAccount">Create account</a>
       </Col>
       <Col  span={8} >

     
        </Col>
          </Row>
    </Form>
  )
}
export default Login
