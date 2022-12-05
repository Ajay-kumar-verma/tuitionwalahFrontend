import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Divider,Row,Col,Image } from 'antd';
import action from '../../../rtk/actions/index'
import moment from 'moment';

import ImageUpload from './Fileupload';

const App = () => {
  const [{front,back},setDoc] = useState({
   front:'https://drive.google.com/uc?export=view&id=1u8zGiSS-pBxNETcXywnz-F-ngd3MOeEz',
   back:'https://drive.google.com/uc?export=view&id=1wYZ-EhUEFOpRaR1Q_tbD91lD5YW6xunp'
  })
  const {apiCalled,data} = useSelector(({user:{document}})  =>document )
    console.log(data);

 useEffect(() => {
   if(apiCalled){
    const {documentObject:{back,front}} = data;
      setDoc({back,front})
  }

},[data])

  return (
    <div className="form">
       <Divider />
       <Row justify="space-between">
    <Col>
       <Row>
       <Col span={24} >
       <Image width={150} height={150}
        src={front} />
         </Col>
         <Col span={24} >
         <ImageUpload name="front" />
         </Col>
       </Row> 
       
    
    </Col>
    <Col>
    <Row>
       <Col span={24} >
       <Image width={150} height={150} 
       src={back}/>
         </Col>
         <Col span={24} >
       <ImageUpload name="back" />
         </Col>
       </Row> 
       
       
   
    </Col>
    
    </Row>

    </div>
    );
};
export default App;