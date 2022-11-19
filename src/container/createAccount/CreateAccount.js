// import {useEffect} from 'react';
// import {message} from 'antd';
import {
  // useSelector,
  useDispatch} from 'react-redux';
import action  from '../../rtk/actions/index'
import {MailOutlined , PhoneOutlined  }  from '@ant-design/icons'

import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Divider,
    DatePicker,
   message,
   Space,
  } from 'antd';
  
  const { Option } = Select;
    
  const App = () => {
    const [messageApi, contextHolder] = message.useMessage()
 

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'This is a success message From CreateAccount',
      });
    };
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message From CreateAccount',
      });
    };
    const warning = () => {
      messageApi.open({
        type: 'warning',
        content: 'This is a warning message From CreateAccount',
      });
    };
  
  
  



    const dispatch =useDispatch();
  const {all:{createAccount}} = action;
      // console.log({createAccount})

    const onFinish = (values) => {
    // console.log('On submit values is :',values);
    dispatch(createAccount(values));
    };
     
   
    const onFinishFailed = (values) =>{
    console.log('Received values of form: ', values);
    } 

    return (
     <>
   
      <Form  
      
       className="form"
        name="register"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
       
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
        }}
        scrollToFirstError
      >
       <Divider>Create Account </Divider>
       {contextHolder}
       <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
        <Form.Item
          name="FirstName"
          label="FirstName"
           rules={[
             {
              required: true,
              message: 'Please input your first Name!',
            },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Enter first Name" />
        </Form.Item>

        <Form.Item
          name="LastName"
          label="LastName"
          rules={[
            {
              type: 'text',
              message: 'The input is not valid !',
            },
            {
              required: true,
              message: 'Please input your last Name!',
            },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Enter last Name" />
        </Form.Item>



        <Form.Item
          name="Mobile"
          label="Mobile" 
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore=<PhoneOutlined />  maxLength="10" showCount
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
 

        <Form.Item
          name="Email"
          label="Email" 
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            addonBefore=<MailOutlined />  maxLength="70" showCount
            style={{
              width: '100%',
            }}
          />
        </Form.Item>



        <Form.Item
          name="Gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
      
      
          
                  <Form.Item
                    name="DateOfBirth"
                    label="DateOfBirth"
                    rules={[
                      {
                        required: true,
                        message: 'Please choose your date of birth !',
                      },
                    ]}
                  >
                  <DatePicker  style={{width:"100%"}}   />
                  </Form.Item>
                
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="#0">agreement</a>
          </Checkbox>
        </Form.Item>


        <Form.Item >
          <Button type="primary" style={{width:"100%"}} htmlType="submit"  >
           createAccount
           </Button>
        </Form.Item>
        <p style={{float:"right"}} > Having Account ?<a href="#login">Login</a>
       </p>
   </Form>
   </>
    );
  };
  export default App;