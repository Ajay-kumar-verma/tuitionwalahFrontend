import React ,{ useState} from 'react';
import {Link} from 'react-router-dom'
import Style from './Style';
import './Style.css'
import popup from '../../popups/Message';

import { Button,  Checkbox,
  Col, Form, Input, InputNumber, Row, Select,} from 'antd';
const { Option } = Select;
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
  const [sentOtp,setSentOtp] = useState(true);
  const style = Style();
   console.log("Style is ",style);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  // console.log(popup)
 popup.success("Form submit ho gya  ")
  return (
    <Row className="form"  >
    <Col span={8} ></Col>
    <Col span={16}> 
    <Form 
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
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
        tooltip="How we can contact you  ?"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <InputNumber   maxLength={10} 
          prefix='+91'
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
        <Row >
          <Col span={16}>
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
          <Col span={1}></Col>
          <Col span={7}>
          {sentOtp?<Button
           onClick={() => setSentOtp(false)}>Sent Otp </Button>:
          <Button
          onClick={() => setSentOtp(true)}
          >Verify Otp </Button>}
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
      <Form.Item
       {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};
export default SignUp;