import { Button, Checkbox, Form, Input ,Tooltip ,Divider } from 'antd';
import React  from 'react';
import {useSelector,useDispatch} from 'react-redux';
import action  from '../../rtk/actions/index'
import { message, Space } from 'antd';


const Login = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const state =useSelector(state =>state);
  const dispatch =useDispatch();
  
  const [form] = Form.useForm();
  const username = Form.useWatch('username', form)
  


 const reset = (obj)=>dispatch();
 const {all:{login}} = action;

  const onFinish = (values) =>dispatch(login(values));
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const data =  process.env;
  console.log({data})


  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message From Login',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message From Login',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message From Login',
    });
  };













  return (
  <Form  form={form} 
 
  className="form"
      name="basic"
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
      initialValues={{remember: true,Mobile:"",Password:""}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Divider>Login form </Divider>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
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
        <Input showCount maxLength="70" />
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
        <Input.Password />
      </Form.Item>

       <Form.Item
          name="remember"
          valuePropName="checked"
          noStyle
        
         >
        <Checkbox>Remember me</Checkbox>
    <Tooltip title={(""+username).length >=9?null:"Enter mobile number or email"} color={"#108ee9"}  >
    <a href="#0" onClick={()=>{reset({username})}} style={{float:"right"}} 
        disabled={(""+username).length<=9 || state.loading}
       > Get new Password  </a>
     
    </Tooltip>
    
    </Form.Item> 
     <p></p>
    
    <Tooltip
     title={(""+username).length>=9?null:
    "Enter  mobile number or email"} color={"#108ee9"}  >
     
     <Form.Item>
        <Button  
          style={{width:"100%"}}
          disabled={(""+username).length<=9 || state.loading}
         type="primary" htmlType="submit">
         {state.loading?"Please wait ":"Login"}

        </Button>
      </Form.Item>
      </Tooltip>
      <p style={{float:"right"}} > Not having account ?<a href="#signup">Create account</a></p>
   
     </Form>
  );
};
export default Login;