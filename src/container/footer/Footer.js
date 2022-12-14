import React from "react";
import {Row, Col,List,Divider} from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';


const data = [
    ['INFROMATION','About Us','terms & Condition ','privacy & policy'],
    ['CONTACT US',
    <h4><a href={`tel:+918095240976`}><PhoneOutlined />  +91 8095240976 </a></h4>,
    <h4><a href={`tel:+919135722324`}><PhoneOutlined />  +91 9135722324 </a></h4>,
     <h4><a style={{color:'green'}} href={`https://wa.me/+91${8095240976}?text=Hi`}
      data-action="share/whatsapp/share"  rel="noreferrer"
      target="_blank"><FaWhatsapp  /> 8095240976</a></h4>,
    <h4><a style={{color:'green'}} href={`https://wa.me/+91${9135722324}?text=Hi`}
     data-action="share/whatsapp/share"  rel="noreferrer"
     target="_blank"><FaWhatsapp  /> 9135722324</a></h4>,
     <h4><a href={`mailto:tuitionwalah@gmail.com`}><MailOutlined /> tuitionwalah@gmail.com</a></h4> ],
    ['OPPORTUNITY','Be business partner','Be Agent','Be leader','join us '],
    ['WHO CAN CONTACT US','Student','Teacher','Parent','Schools'],
     ['ACCOUNT','login Now','create Account','reset password','My Order'],
    ['REGISTERED ADDRESS','Karorichok,phulwarisharif,  Near Aroma Plaza ,Patna (Bihar) 801505'],
 ]
 
const Footer = () => {
return <Row 
 style={{padding:"10px",backgroundColor:'#4227cc'}}
 justify="space-between">
   <Divider  style={{color:"#fff",backgroundColor:'#422'}}
>TUITION WALAH</Divider>
{
 data.map(e=>{
 return  <Col
   xs={{span:24}}
   md={{span:11}}
   lg={{span:7}}
 >
 <Divider />
<List 
 style={{padding:"10px"}}
 dataSource={e}
 renderItem={(item ,i) =>
 (<List.Item  key={i} style={{color:"white"}} >
   {i===0?<h2 style={{color:"white"}}>{item}</h2>:item}</List.Item>)}
   />
</Col>

 })   
}
    </Row> ;
};
export default Footer;



// <div className='form'>
//     <h5 style={{ color: "green", textAlign: "center"}}>
// 		TUITION WALAH FOR STUDENT, TEACHER AND PARENT 
// 	</h5>
//  <Row style={{backgroundColor:"#1a1b1c",color:'white'}} >
// <Col span={6}   >
//  <h3 style={{color:"green",}} >About Us</h3>
//  <Row  >Aim</Row>
//  <Row>Vision</Row>
//  <Row>Team</Row>
//      </Col>

// <Col span={6}  >
// <h3 style={{color:"green"}} > Service</h3>
// <Row  >teaching</Row>
// <Row   >Tutor at home</Row>
// <Row >  Earning with Learning </Row>
// </Col>
// <Col span={6}  >
// <h3 style={{color:"green"}} >  Contact Us</h3>
// <Row  ><a href="tel:+91 8095240976">+91 8095240976</a></Row>
// <Row  ></Row>
// <Row  ></Row>
// <Row  >70vikash123@gmail.com</Row>

//     </Col>

// <Col span={6}  >
// <h3 style={{color:"green"}} > Social Media</h3>
// <Row  ><a href="https://www.instagram.com/tuitionwalah/">
//     <img height="30px" with="30px" src="https://img.icons8.com/color/480/null/instagram-new--v1.png"  
//      alt="instragram"
        
//     /></a>
    
//     </Row>
//  </Col>

//  </Row>
// </div>
