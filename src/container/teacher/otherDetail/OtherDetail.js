import React from 'react'
import { Form, Input, Button,
  notification  ,
  // Select , 
   Divider } from 'antd';

  // const option = (list)=>list.map((name)=>(<Select.Option allowClear key={name}>{name}</Select.Option>));
  
 
 const dataInput =(...data)=>{
  const {maxLength} = data[2]; 
    return (<>
   
      <Form.Item label={data[0]} name={data[1]} rules={[{required: true,message: 'required !'}]} >
      {maxLength?<Input allowClear placeholder={data[0]} showCount maxLength={maxLength}  />:<Input placeholder={data[0]} />} 
       </Form.Item>
</>
  )
}



  const formData =[]; 
    const fullName = dataInput("Enter full name as per Adhar card ","fullName",{maxLength:12})
        formData.push(fullName)

    
 
  
  // const [form] = Form.useForm();
  // const data = Form.useWatch('sunday',form);
  // console.log('Form data is :',data)
    



const OtherDetail = () => {


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => { 
    notification['error']({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement:"bottom", 
      });
     
    console.log('Failed:', errorInfo);
  };
  





  return (

    <Form   className="form"
    onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}
     initialValues={{ remember: true }}
     scrollToFirstError
       >
        
  <Divider>Other details</Divider>   
   {formData.map(e=>e)}
         <Form.Item>
           <Button 
           type="primary" htmlType="submit"  
            style={{width:"100%"}}
           >
             Submit
           </Button>
         </Form.Item>
       </Form>
    )
}

export default OtherDetail