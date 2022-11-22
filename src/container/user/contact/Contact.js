import React from 'react'
import { Form, Input, Button,
  notification  ,Select ,Divider } from 'antd';

  const option = (list)=>list.map((name)=>(<Select.Option allowClear key={name}>{name}</Select.Option>));
  const selectOption =(placeholder,list) =><Select placeholder={placeholder} mode="tags" style={{width: '100%',}}>{option(list)}</Select>
  
  const selectInput =(...data)=>{
    return (<>
     
        <Form.Item  label={data[0]}  name={data[1]} rules={[{required: true,message: 'required !'}]} >
        {data[2]!==undefined ? selectOption(data[0],data[2]):null}
   </Form.Item>
 </>
    )
 }
 
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
    const fullName = dataInput("Enter full name ","fullName",{maxLength:30})
          formData.push(fullName)

   const numberOption = selectInput("Enter numbers we can contact with ","mobiles",[])
     formData.push(numberOption)

   const emailsOption = selectInput("Enter Emails we can contact with ","emails",[])
       formData.push(emailsOption)

  
const Contact = () => {


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
  <Divider>Personal details</Divider>   
   {formData.map(e=>e)}
         <Form.Item>
           <Button 
           type="primary" htmlType="submit"  
            style={{width:"100%"}}
           >
             Submit Contact
           </Button>
         </Form.Item>
       </Form>
    )
}

export default Contact