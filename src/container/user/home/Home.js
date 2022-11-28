import React, { useEffect , useState } from 'react'
import { Button, Modal,Divider,Image ,List, Row,Col  } from 'antd';

import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'
import ImageUpload from './Fileupload';
import { RWebShare } from "react-web-share";
// import { QRCode } from 'react-qrcode-logo';
const Home = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [{info,Gender,ImageLink},setInfo]=useState({info:[{}],ImageLink:null,Gender:'male'});
 
  const dispatch = useDispatch()
  const { apiCall,data} = useSelector(({ user: { home } }) => home)
  const { home } = action.user

  useEffect(()=>{
   
   if(data?.user!==undefined)
   { setInfo(_=>{
      let {FirstName ,LastName ,Gender ,Email,Mobile,userType,Active,Imgae} =data?.user;
     return {
      info:[
        {FirstName} ,{LastName },{Gender} ,{Email},
        {Mobile},{userType},{Active},
      ],Gender,ImageLink:Imgae
     }
   })}

  },[data])
  
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
console.log({info})

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
      header={<div>YOUR INFO</div>}
      bordered
      dataSource={info.length===1?[]:info}
      renderItem={(item) =>
     <Row justify="space-between">
        <Col span={20}><List.Item>{`${Object.keys(item)[0]} : ${Object.values(item)[0]}`}</List.Item></Col>
        <Col span={4}><a href="22" onClick={(e)=>e.preventDefault()} >edit</a></Col>
    </Row>        
      }   
   
   />    

<RWebShare
        data={{
          text: "Web Share - GfG",
          url: "http://localhost:3000",
          title: "GET HOME TUTOR",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share in web</button>
      </RWebShare>
      {/* <a href="whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"  rel="nofollow noopener" target="_blank" className="share-icon"><img alt="imag" style={{height:'36px'}}/>Share via Whatsapp</a> */}
      
      {/* <QRCode 
      // logoImage={ImageLink}
      size={300}
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
     />, */}
   
    </div>
  )
}

export default Home
