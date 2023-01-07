import React, { useEffect , useState } from 'react'
import { Button, Modal,Image ,List, Row,Col  } from 'antd';

import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import ImageUpload from './Fileupload';
import { RWebShare } from "react-web-share";
// import { QRCode } from 'react-qrcode-logo';
import moment from 'moment';
const Home = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [{info,Gender,ImageLink,MyId},setInfo]=useState({info:[{}],ImageLink:null,Gender:'male',MyId:"0"});
   const dispatch = useDispatch()
  const { apiCall,data} = useSelector(({ user: { home } }) => home)
  const { home } = action.user

  useEffect(()=>{
    if(!data) return ;
    const {user} = data ;
    if(!user) return ;

    let {Gender ,Image,MyId} =user;
      
    setInfo(_=>{
     return {
      info:Object.keys(user).map(e=>{
        const obj={};
        obj[e]=user[e];
        return obj;
      }),Gender,ImageLink:Image,MyId
     }
   })

  },[data])
  // dispatch(home())
  useEffect(() => {
    if (!apiCall) {
      dispatch(home())
    }
    
  }, [dispatch, apiCall, home])

 
  const maleImage = 'https://img.icons8.com/color/96/null/person-male.png'
  const femaleImage = 'https://img.icons8.com/color/96/null/person-female.png'

const  UploadImage =()=>(
  <Modal title="Change Image " open={true}
   onOk={()=>{setUploadImage(true)}}
   onCancel={()=>{setUploadImage(false)}}
   >
<ImageUpload />
 </Modal>
) 
const link = `https://www.tuitionwalah.in`;

info.push({
"Referal Link":<RWebShare
        data={{
          text: `My referral link ` ,
          url:`${link}/?id=${MyId}`,
          title: "If you are Teacher Connect with us . ",
        }}
        // onClick={() => console.log("shared successfully!")}
      >
        <Button style={{color:"#4ed973"}} type="solid" 
        >share</Button>
      </RWebShare>
 
})

  return (
    <div className="form">
     {(<div className="ImageBox">
      <Image width={100} height={100} src={ImageLink!==null?ImageLink:Gender==='male'?maleImage:femaleImage}  /><br/>
     <Button type="text" onClick={()=>{setUploadImage(true)}}>Change Image</Button></div>)} 
    {uploadImage?<UploadImage/>:null}
     <br />
  <List
      size="middle"
      header={
    <Row justify="space-between">
        <Col span={8}>MY DETAILS</Col>
        <Col span={8}><RWebShare
        data={{ 
          text: `Create your teacher account and share in web .\n ` ,
          url: `${link}/${MyId}`,
          title: "I AM OPEN FOR TEACHING ",
        }}
    
    >
        <Button style={{color:"#4ed973"}} type="dashed" >Share your profile </Button>
      </RWebShare>
        </Col>
  <Col span={8}>
    <Button style={{color:"#4ed973"}} onClick={()=>{dispatch(home())}} type="dashed" >refresh</Button>
  </Col>
    </Row>     

      }
      bordered
      dataSource={info?.length===1?[]:info}
      renderItem={(item) =>{  
        const key = Object.keys(item)[0];
        let value = Object.values(item)[0];
        if(key==="_id" || key==="__v" || key ==='Image' ||
         key === 'Active'  || key === 'Block')return null;
        if('TimeAtCreated'===key || 'DateOfBirth'===key)
        value = moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a")
        
       if(key === 'referredBy')
       value = `${value.MyId},${value.FirstName} ${value.LastName}` 
        if(key === 'userType') 
          value = <b>{value.join(' | ')}</b>;
                   
       return <List.Item >
      <Row style={{width:"100%"}} 
    
      gutter={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
      }}
      justify="space-between">
     <Col span={20}>{key} <b> | </b> {value} </Col>
     <Col span={2}><a href="modal" onClick={(e)=>e.preventDefault()} > Edit</a></Col>
      </Row>
       </List.Item>  
    }
  }   
 
   />    

      {/* <a href="whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"  rel="nofollow noopener" target="_blank" className="share-icon"><img alt="imag" style={{height:'36px'}}/>Share via Whatsapp</a> */}
      
     {/* <QRCode 
      // logoImage={ImageLink}
      size={100}
      logoWidth={100}
      logoHeight={100}
      // logoOpacity={1}
      removeQrCodeBehindLogo={true}
      bgColor="#04327d"
      fgColor="white"
      // value="https://github.com/gcoro/react-qrcode-logo"
      // value="https://tuitionwalah.com/"
    value={JSON.stringify(info)}
      qrStyle='dots'
     />,     */}
    </div>
  )
}

export default Home
