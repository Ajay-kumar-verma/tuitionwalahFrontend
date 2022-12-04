import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'





import { Form, Input, Button,
  Select  ,Divider} from 'antd';


const zipList = [
  ...new Array(30).fill(0).map((_,i)=>800000+(i+1)),
  801105,801113,801503,801505,801506,801507,804453,"other"
]

const selectInput =(...data)=>{
  return (<>
    <Form.Item  label={data[0]}  name={data[1]} rules={[{required: true,message: 'required !'}]} >
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
   
      <Form.Item label={data[0]} name={data[1]} rules={[{required: true,message: 'required !'}]} >
      {maxLength?<Input allowClear showCount maxLength={maxLength} placeholder={placeholder}  />:<Input  />} 
       </Form.Item>
</>
  )
}

    const formData =[]; 

    const stateName = selectInput("State","state",["Bihar","Uttar Pradesh","Karnataka","Other"])
    formData.push(stateName)

    const city = selectInput("City","city",["Patna","Noida","Bengaluru","Other"])
    formData.push(city)


    const zipCode = selectInput("Enter Zip code of your area ","zipCode",zipList)
        formData.push(zipCode)

     const address2 = dataInput("Address 2 ","address 2",{maxLength:100})
     formData.push(address2);

     const street = dataInput("Street  ","street",{maxLength:100})
     formData.push(street);

     const area = dataInput("Area  ","area",{maxLength:100})
     formData.push(area);

     const colony = dataInput("colony ","colony",{maxLength:100})
     formData.push(colony);
 
     const landMark = dataInput("landMark ","landmark",{maxLength:100})
     formData.push(landMark);







const App = () => {
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

  return (
   <Form  className="form"
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
     
      scrollToFirstError
        >
        <Divider>Current Address </Divider> 
        {JSON.stringify(data)}
   {formData.map(e=>e)}

          <Form.Item>
            <Button 
            type="primary" htmlType="submit" style={{width:"100%"}} >
               Submit Address
            </Button>
          </Form.Item>
       <div style={{marginBottom:"200px"}} >&nbsp; </div>  
   
        </Form>

  )
}

export default App