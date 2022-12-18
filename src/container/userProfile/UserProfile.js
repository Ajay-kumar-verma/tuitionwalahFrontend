import React,{useEffect,useState} from 'react';
import {useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../rtk/actions/index'
import {List,Col,Row,Button,Divider,Badge ,Slider } from 'antd';
import { RWebShare } from "react-web-share"; 
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
import { QRCode } from 'react-qrcode-logo';
import './style.css';
const App = ({id}) => {
  const [userProfile,setUserProfile] = useState([]);
  const [size,setSize] = useState(10);
//  const [searchParams] = useSearchParams();
 const state = useSelector(((state)=>state));
 const dispatch = useDispatch();
 //  console.log([...searchParams]);
//  const id =searchParams.get('id');
//  console.log({id});
 
 //  console.log(Object.fromEntries([...searchParams]))
 //  console.log("Location",window.location.pathname);
 //  useEffect(() => {
 //   setSearchParams({ sort: 'name', order: 'zzzzzzzzzzzz' });
 //  },[searchParams])  

//  console.log({action});
//  console.log({state})

useEffect(() => {
  dispatch(action.all.userProfile({id}));
},[id])

useEffect(() => {
 const {all:{userProfile:{user}}} = state;
//  console.log({user})
 if(!user) return ;
 setUserProfile(Object.keys(user).map(e=>{
    const obj={};
    obj[e]=user[e];
    return obj;
  }))
},[state])
const url= window.location.href;
const Sharebtn = ()=>{
return <RWebShare  
 rel="noopener"
data={{ text:"I am a home tutor if you have teacher requirement Please contact me .\n",url ,
  title: "I AM OPEN FOR TEACHING  ",
}}
onClick={() => console.log("shared successfully!")}
>
<Button style={{color:"#07ed16"}} type="solid" >Share in web</Button>
</RWebShare>

}




return (
        <div className="form">
        <Divider />
 
    <div style={{color:"white",backgroundColor:"blue",textAlign:"center",
    fontFamily:"sans-serif", height:"45px",
    fontSize:"30px"}} >I AM OPEN FOR TEACHING. </div> 
   <Divider/>     
  
   <Badge.Ribbon key={0}   text={<a href="https://www.tuitionwalah.com"
    style={{color:`white`}}
  >CREATE YOUR PROFILE  </a>}
        color={`#${Math.floor(100000 + Math.random() * 900000)}`} 
        >
        <List
        size="small"
        header={
      <Row justify="space-between">
     <Col span={8}> 
     <Slider onChange={(e)=>setSize(e)}   defaultValue={10} />
      <QRCode 
      // logoIm age={ImageLink}
      size={(size*10)}
      logoWidth={100}
      logoHeight={100}
      // logoOpacity={1}
      removeQrCodeBehindLogo={true}
      bgColor="#04327d"
      fgColor="white"
      // value="https://github.com/gcoro/react-qrcode-logo"
      // value="https://tuitionwalah.com/"
     value={`https://www.tuitionwalah.com/${id}`}
      qrStyle='dots'
     />
  </Col>
          <Col span={8}>
        
              </Col>
      </Row>     
  
        }
        bordered
        dataSource={userProfile}
        renderItem={(item) =>{  
            // console.log({item})
          let key = Object.keys(item)[0];
          let value = Object.values(item)[0];
           if(key==="_id" || key==="__v" || key ==='Imgae' || key==='userType')return null;
           if(key==='Active' ||key==='Block')
           value = String(value);

           if(key==='Mobile')
           value =<>
           <a href={`tel:+91 ${value}`}><PhoneOutlined /> {value}</a>
           <br />
           <a style={{color:'green'}} href={`https://wa.me/+91${value}?text=Hi ` }
            data-action="share/whatsapp/share"  rel="noreferrer"
          target="_blank"><FaWhatsapp  />{value}</a>   
           </>
           if(key==='Email')
          value =<a href={`mailto:${value}`}><MailOutlined /> {value}</a>
            if(key === 'FirstName')
             value =<> {value} <Sharebtn /> </>
         return <Row justify="space-between">
          <Col span={10}><List.Item>{key}</List.Item></Col>
          <Col span={12}>{value}</Col>
      </Row>        
   
  }
    }   
 />    
      </Badge.Ribbon>
  <div className="ocean">
  <div className="wave"></div>
  <div className="wave"></div>
</div>
  </div>);
}

export default App;