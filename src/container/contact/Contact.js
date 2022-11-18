import React from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import action  from '../../rtk/actions/index'
import { Form, Input, Button, Checkbox, Divider } from 'antd';
const { TextArea } = Input;

function AppContact() {
  const state =useSelector(state =>state.user);
  const dispatch =useDispatch();
  const {all:{contact}} = action;
   


       const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    dispatch(contact(values));

  };  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
        <Form  
        id="contact"
        className="ContactPage"
      onFinish={onFinish}
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
     
      onFinishFailed={onFinishFailed}
         initialValues={{ remember: true }}
      
      >
     
       <Divider>We will contact you soon ! </Divider>
          <Form.Item
            name="FullName" 
            label="Enter full Name "
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input maxLength={50}  placeholder="Full Name" />
          </Form.Item>
       
          <Form.Item
          name="Email"
          label="Enter email address "
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
            <Input  maxLength={100} placeholder="Email Address"/>
          </Form.Item>
         
          
          <Form.Item
            name="Mobile"
            label="Enter mobile number"
            rules={[
                { 
                required: true,
                message: 'Please input your mobile number',
              }
            ]}
           >
            <Input maxLength={10} placeholder="Mobile" />
          </Form.Item>
        
        
          <Form.Item
            name="Subject"
            label="Enter subject you wat to talk about " 
            rules={[
             
              {
                required: true,
                message: 'Please input your subject',
              },
            ]}
          >
            <Input  placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="Message"
            label="Enter something "
            rules={[
              {
                required: true,
                message: 'Please input you want to talk about ',
              },
            ]}

           >
            <TextArea showCount 
             style={{
              height: 120,
              resize: 'none',
            }}
             maxLength={1000} placeholder="Message" />
          </Form.Item>
  
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
            <a href='#0' style={{float:"right"}}  > Thanks for contacting us ! </a>
          </Form.Item>

          <Form.Item>
            <Button
             style={{width:"100%"}}
            type="primary" htmlType="submit" className="btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
  
  );
}

export default AppContact;