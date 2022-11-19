import React from "react";

import {Row, Col,} from 'antd';

const Footer = () => {
return (
	<div className='form'>
    <h5 style={{ color: "green", textAlign: "center"}}>
		TUITION WALAH FOR STUDENT, TEACHER AND PARENT 
	</h5>
 <Row style={{backgroundColor:"#1a1b1c",color:'white'}} >
<Col span={6}   >
 <h3 style={{color:"green",}} >About Us</h3>
 <Row  >Aim</Row>
 <Row>Vision</Row>
 <Row>Team</Row>
     </Col>

<Col span={6}  >
<h3 style={{color:"green"}} > Service</h3>
<Row  >teaching</Row>
<Row   >Tutor at home</Row>
<Row >  Earning with Learning </Row>
</Col>
<Col span={6}  >
<h3 style={{color:"green"}} >  Contact Us</h3>
<Row  ><a href="tel:+91 8095240976">+91 8095240976</a></Row>
<Row  ><a href="tel:+91 9135722324">+91 9135722324</a></Row>
<Row  >tuitionwalah@gmail.com</Row>
<Row  >70vikash123@gmail.com</Row>

    </Col>

<Col span={6}  >
<h3 style={{color:"green"}} > Social Media</h3>
<Row  ><a href="https://www.instagram.com/tuitionwalah/">
    <img height="30px" with="30px" src="https://img.icons8.com/color/480/null/instagram-new--v1.png"  
     alt="instragram"
        
    /></a>
    
    </Row>
 </Col>

 </Row>
</div>
);
};
export default Footer;
