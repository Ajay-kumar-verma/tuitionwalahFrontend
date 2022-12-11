import React from 'react'
import { Form, Input, Button,
  notification  ,Select ,Divider,Row, Col } from 'antd';




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
  const qualifications = ["BCA","10th","12th","Bachelor","B.E","BSC",]
  const qualificationsOption =selectInput("Enter your qualification  ","qualification ",qualifications);
     formData.push(qualificationsOption);     

  const subjects =["Hindi","English","Math","Science","Computer","All"]
  const subjectsOption =selectInput("Subjects you want to  teach","subjects",subjects);
       formData.push(subjectsOption);
  
  const classes =["NC","LKG","UKG",...new Array(12).fill(0).map((_,i)=>i+1+" class")]
  const classesOption = selectInput("which all classes  you want to  teach","classes",classes);
        formData.push(classesOption);
  const boards =["CBSE","NCERT","BSEB","Other"];
  const BoardOption =selectInput("which all Board  you want to  teach","board",boards);
        formData.push(BoardOption)
  const days =["All days",'Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const daysOption=selectInput("Days you are free to take classes","freeDaya",days);
              formData.push(daysOption)
      
  const vehicles = ["Nothing","Bike","Bicyle","other"]
  const  vehicleOption=selectInput("Vehicles you have ","vehicles",vehicles);
          formData.push(vehicleOption)
 
  const distanceOption =selectInput("How far can you go from your current location ","distance",new Array(5).fill(0).map((_,i)=>2*(i+1)+" KM" ));
        formData.push(distanceOption);

   const teachingExperience = selectInput("your teaching experience "," teaching Experience",['fresher',...new Array(5).fill(0).map((_,i)=>`Below ${(i+1)} year`),'Above 5 year'])
   formData.push(teachingExperience);
    

  const expectedFeeOption = selectInput("your fee expectation ","expectedFee",new Array(4).fill(0).map((_,i)=>500*(i+1)+" Rupees " ))
    formData.push(expectedFeeOption);

const Teacher = () => {


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

    <Form  
    //  className="form"
    onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}
    initialValues={{ remember: true }}
    scrollToFirstError
       >
  <Divider>Other details</Divider>   
  <Row justify="space-between">
  {formData.map(e=><Col 
          xs={{span:24}}
          md={{span:11}}
          lg={{span:7}}
       >
        {e}</Col>)}
   </Row>  
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

export default Teacher