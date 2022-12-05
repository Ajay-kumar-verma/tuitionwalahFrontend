import React ,{useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import moment from 'moment';
import { Form,  Button,Divider ,
  notification  ,Select ,
  List , Row , Col,Modal } from 'antd';

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
 const [contactData,setContactData] = useState([]);
 const [isModalOpen, setIsModalOpen] = useState(false);


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
 
  useEffect(() => {
 
  const  {contactSubmitted, contactObject} = data ;
     if(!contactSubmitted) return ;
   const {contact:{emails,mobiles},date} = contactObject ;
   setContactData([
    {emails}, {mobiles},{UpdatedDate :moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
   ])

 },[data])


  return (

<div   className="form">
 <Divider />
<List 
      size="small"
      header={<div>Your contact Details </div>}
      bordered
      dataSource={contactData}
      renderItem={(item) =>{
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        return <Row justify="space-between">
        <Col style={{backgroundColor:"#fff111"}} span={8}><List.Item>{key}</List.Item></Col>
        <Col span={16}><List.Item>{value}</List.Item></Col>
    </Row>        }
      }   
   />    
      <Form.Item>
           <Button 
           onClick={()=>{setIsModalOpen(true)}}
      type="primary" htmlType="submit"  
            style={{width:"100%"}}
           >
           Update contact 
           </Button>
         </Form.Item>
       
      <Modal title="Contact Details" open={isModalOpen}
       onOk={()=>{setIsModalOpen(false)}}
       onCancel={()=>{setIsModalOpen(false)}}
       width={1000}
       >

 
<Form   
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}
     initialValues={{ remember: true }}
     scrollToFirstError
       >

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
      </Modal>
 
</div>
)
}

export default Contact