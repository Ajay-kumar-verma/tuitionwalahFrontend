import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import { Form,  Button,
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
 
  const formData =[]; 
    const numberOption = selectInput("Enter numbers we can contact with ","mobiles",[])
     formData.push(numberOption)

   const emailsOption = selectInput("Enter Emails we can contact with ","emails",[])
       formData.push(emailsOption)

const Contact = () => {
  const { apiCall,data} = useSelector(({ user: { contact } }) => contact)
  
  
  const { contact } = action.user
  const dispatch = useDispatch();
  const onFinish = (values) => dispatch(contact(values)) 

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
<>


    <Form   className="form"
    onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     labelCol={{span: 24,}}
     
     wrapperCol={{span: 24,}}
    
         initialValues={{ remember: true }}
         scrollToFirstError
         
       >
  <Divider>Contact number</Divider>   
  {JSON.stringify(data)}
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
</>
)
}

export default Contact