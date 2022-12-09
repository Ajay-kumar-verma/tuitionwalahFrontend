import React,{useEffect,useState} from 'react';
import {useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../rtk/actions/index'
import {List,Col,Row,Button,Divider,Badge,Tag } from 'antd';
import { RWebShare } from "react-web-share"; 
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa';
const App = () => {
  const [userProfile,setUserProfile] = useState([]);
 const [searchParams,setSearchParams] = useSearchParams();
 const state = useSelector((({all:{userProfile}})=>userProfile));
 const dispatch = useDispatch();
 //  console.log([...searchParams]);
 const id =searchParams.get('id');
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
const {user} = state;
  if(!user) return ;
setUserProfile(Object.keys(user).map(e=>{
    const obj={};
    obj[e]=user[e];
    return obj;
  }))

},[])

console.log({state})
    return (
        <div className="form">
        <Divider />
        <Badge.Ribbon key={0}   text={<a href="1" style={{color:`white`}}
       onClick={(e)=>e.preventDefault()}>CREATE YOUR PROFILE  </a>}
        color={`#${Math.floor(100000 + Math.random() * 900000)}`} 
        >
        <List
        size="small"
        header={
      <Row justify="space-between">
          <Col span={8}> <Tag color="geekblue">I AM OPEN FOR TEACHING. </Tag> </Col>
          <Col span={8}><a>
          <RWebShare
          data={{
            text: `${window.location.href}` ,
            url: `${window.location.href}`,
            title: "I AM OPEN FOR TEACHING  ",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button style={{color:"#4ed973"}} type="dashed" ghost>Share in web</Button>
        </RWebShare>
  
            </a></Col>
      </Row>     
  
        }
        bordered
        dataSource={userProfile}
        renderItem={(item) =>{  
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
            data-action="share/whatsapp/share"  
          target="_blank"><FaWhatsapp  />{value}</a>   
           </>
    
       if(key==='Email')
          value =<a href={`mailto:${value}`}><MailOutlined /> {value}</a>
                 
     

         return <Row justify="space-between">
          <Col span={10}><List.Item>{key}</List.Item></Col>
          <Col span={12}>{value}</Col>
      </Row>        
   
  }
    }   
 />    
      </Badge.Ribbon>
  </div>);
}

export default App;