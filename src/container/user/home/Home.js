import React, { useEffect , useState } from 'react'
import { Button, Modal,Divider,Image ,List, Row,Col  } from 'antd';

import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import ImageUpload from './Fileupload';
import { RWebShare } from "react-web-share";
import { QRCode } from 'react-qrcode-logo';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [{info,Gender,ImageLink,MyId},setInfo]=useState({info:[{}],ImageLink:null,Gender:'male',MyId:"0"});
   const dispatch = useDispatch()
  const { apiCall,data} = useSelector(({ user: { home } }) => home)
  const { home } = action.user

  useEffect(()=>{
   
   if(data?.user!==undefined)
   { setInfo(_=>{
     const {user} =data;
      let {Gender ,Imgae,MyId} =user;
     
     return {
      info:Object.keys(user).map(e=>{
        const obj={};
        obj[e]=user[e];
        return obj;
      }),Gender,ImageLink:Imgae,MyId
     }
   })}

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
// console.log({info})

  return (
    <div className="form">
      <Divider />
     {(<div className="ImageBox">
      <Image width={100} height={100} src={ImageLink!==null?ImageLink:Gender==='male'?maleImage:femaleImage}  /><br/>
     <Button type="text" onClick={()=>{setUploadImage(true)}}>Change Image</Button></div>)} 
    {uploadImage?<UploadImage/>:null}
      {/* {JSON.stringify(data.user)} */}

  <Divider />
  <List
      size="small"
      header={
    <Row justify="space-between">
        <Col span={8}>MY DETAILS</Col>
        <Col span={8}><a>
        <RWebShare
        data={{
          text: `https://www.tuitionwalah.com/?id=${MyId}` ,
          url: `https://www.tuitionwalah.com/?id=${MyId}`,
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
      dataSource={info.length===1?[]:info}
      renderItem={(item) =>{  
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        if(key==="_id" || key==="__v" || key ==='Imgae')return null;

       return <Row justify="space-between">
        <Col span={20}><List.Item>{`${key} : ${value}`}</List.Item></Col>
        <Col span={4}><a href="22" onClick={(e)=>e.preventDefault()} >edit</a></Col>
    </Row>        
 
}
  }   
 
   />    

      {/* <a href="whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"  rel="nofollow noopener" target="_blank" className="share-icon"><img alt="imag" style={{height:'36px'}}/>Share via Whatsapp</a> */}
      
     <QRCode 
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
     />,    
    </div>
  )
}

export default Home
