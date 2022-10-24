import {Link} from 'react-router-dom'
import { AutoComplete, Button, Cascader, Checkbox,
  Col, Form, Input, InputNumber, Row, Select,} from 'antd';

import React, { useState } from 'react';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="firstName"
        label="firstName"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your firstName!',
            whitespace: true,
          },
        ]}
      >
        <Input showCount maxLength={20} />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="lastName"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your lastName!',
            whitespace: true,
          },
        ]}
      >
        <Input showCount maxLength={20} />
      </Form.Item>



   
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input showCount maxLength={10} 
          addonBefore='+91'
          style={{width: '100%',}}
        />
      </Form.Item>

      <Form.Item
        name="gender"
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

      <Form.Item label="Verify otp" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={24}>
            <Form.Item
              name="otp"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the otp to verify phone number  !',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
       <Row style={{margin:"10px"}} >
          <Col span={4}>
            <Button>Send Otp </Button>
          </Col>
          <Col span={4}>
            <Button>Verify Otp </Button>
          </Col>
        
        </Row>
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
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to="/agreement">agreement</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;