import { Divider,Row,Col,Image } from 'antd';
import React,{useState}  from 'react';
import ImageUpload from './Fileupload';

const App = () => {

  return (
    <div className="form">
       <Divider />
      
       <Row justify="space-between">
    <Col>
       <Image width={100} height={100} src={'https://drive.google.com/uc?export=view&id=1u8zGiSS-pBxNETcXywnz-F-ngd3MOeEz'} />
    </Col>
    <Col>
       <Image width={100} height={100} src={'https://drive.google.com/uc?export=view&id=1wYZ-EhUEFOpRaR1Q_tbD91lD5YW6xunp'}/>

    </Col>
    
    </Row>

     <Divider />
    <Row justify="space-between">
    <Col>
     <ImageUpload name="front" />
    </Col>
    <Col>
     <ImageUpload name="back" />
    </Col>
    
    </Row>
    </div>
    );
};
export default App;