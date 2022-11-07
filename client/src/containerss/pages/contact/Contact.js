import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
    <div   className="block contactBlock">
      <div className="container-fluid">
        <div id="contact" className="titleHolder">
          <p>We will contact you soon  </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname" 
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
          name="email"
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
            name="telephone"
            rules={[
             
              {
                required: true,
                message: 'Please input your mobile number',
              },
            ]}
           >
            <Input maxLength={10} placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
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
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input you want to talk about ',
              },
            ]}

           >
            <TextArea showCount  maxLength={1000} placeholder="Message" />
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
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;