import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import moment from 'moment';


import { Form, Input, Button,
  Select  ,Divider} from 'antd';

  import {notification ,
    List , Row , Col,Modal } from 'antd';
  

const zipList = [
  ...new Array(30).fill(0).map((_,i)=>800000+(i+1)),
  801105,801113,801503,801505,801506,801507,804453,"other"
]

const selectInput =(...data)=>{
  return (<>
    <Form.Item  label={data[0]}  name={data[1]}
     rules={[{required: true,message: 'required !'}]} 
     >
   <Select defaultValue={data[1]}  showSearch  >
  {data[2].map(e=><Select.Option value={e==="other"?0:e} >{e}</Select.Option>)}

 
 </Select>
 </Form.Item>
</>
  )
}

const dataInput =(...data)=>{
  const {maxLength} = data[2]; 
    const placeholder=data[0];
   return (<>
   
      <Form.Item label={data[0]} name={data[1]} 
       rules={[{required: data[1]==='address'?true:false,message: 'required !'}]}      
       >
     {maxLength?<Input allowClear showCount maxLength={maxLength} placeholder={placeholder}  />:<Input  />} 
       </Form.Item>
</>
  )
}

    const formData =[]; 
    formData.push(dataInput("name ","name",{maxLength:50}));
    formData.push(dataInput("number ","number",{maxLength:10}));

    const stateName = selectInput("State","state",["Bihar","Uttar Pradesh","Karnataka","Other"])
    formData.push(stateName)

    const city = selectInput("City","city",["Patna","Noida","Bengaluru","Other"])
    formData.push(city)


    const zipCode = selectInput("Zip code ","zipCode",zipList)
        formData.push(zipCode)
     const address = dataInput("Address ","address ",{maxLength:100})
     formData.push(address);

     const landMark = dataInput("landMark ","landmark",{maxLength:100})
     formData.push(landMark);


     const qualifications = ["BCA","10th","12th","Bachelor","B.E","BSC",]
     const qualificationsOption =selectInput("Enter your qualification  ","qualification ",qualifications);
        formData.push(qualificationsOption);     
   
     

const App = () => {
  const [addressData,setAddressData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const dispatch =useDispatch();
  const { apiCall,data} = useSelector(({ user: { address } }) => address)
  
   
  useEffect(()=>{
   if(!apiCall){
    // dispatch(address({city:"patna"}));
   }
},[dispatch,apiCall])

     const { address } = action.user
     const onFinish = (values) => dispatch(address(values)) 

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


useEffect(() => {
  const  {addressSubmitted, AddressObject} = data ;
  if(!addressSubmitted) return ;

  const {Address:{state,city,zipCode,
    address  ,street,area,colony,landmark,  
  },
  date} = AddressObject ;

  setAddressData([
    {UpdatedDate :moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")},
    {state}, {city},{zipCode},{address},{street},{area},{colony},{landmark} 
  ])
 

 },[data])
  return (
    
<div className="form">
  <Divider />
  {/* {JSON.stringify(data.AddressObject.Address.address)} */}
<List 
      size="small"
      header={<div>Address Details</div>}
      bordered
      dataSource={addressData}
      renderItem={(item, i) =>{
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        const styles={backgroundColor:i===0?"#fff111":'#fff',
        color:i===0?"#fff":'#000'};
       return <Row justify="space-between">
        <Col style={styles} span={8}><List.Item>{key}</List.Item></Col>
        <Col style={styles} span={16}><List.Item>{value}</List.Item></Col>
    </Row>        }
      }   
   />    
      <Form.Item>
           <Button 
           onClick={()=>{setIsModalOpen(true)}}
      type="primary" htmlType="submit"  
            style={{width:"100%"}}
           >
           submit Address  
           </Button>
         </Form.Item>
       
      <Modal title="Address details" open={isModalOpen}
       onOk={()=>{setIsModalOpen(false)}}
       onCancel={()=>{setIsModalOpen(false)}}
       width={1000}
       height='150vh'
      >

<Form  className="form"
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
     
      scrollToFirstError
        >
       
       <Row justify="space-between">
        <Col  span={10}><List.Item>{formData[0]}</List.Item></Col>
        <Col  span={10}><List.Item>{formData[1]}</List.Item></Col>
      </Row>  
    <Row justify="space-between">
        <Col  span={8}><List.Item>{formData[2]}</List.Item></Col>
        <Col  span={8}><List.Item>{formData[3]}</List.Item></Col>
        <Col  span={8}><List.Item>{formData[4]}</List.Item></Col>
    </Row>  


      {formData.map((e,i)=>{
         if(i>4)
        return e;
      })}

          <Form.Item>
            <Button 
            type="primary" htmlType="submit" style={{width:"100%"}} >
               Submit Address
            </Button>
          </Form.Item>
       <div style={{marginBottom:"200px"}} >&nbsp; </div>  
   
        </Form>

      </Modal>
 
</div>




  )
}

export default App