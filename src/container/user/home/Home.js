import React, { useEffect , useState } from 'react'
import { Button, Modal,Divider,Upload,Image ,List, Row,Col  } from 'antd';
import ImgCrop from 'antd-img-crop';

import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rtk/actions/index'

const Home = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [{info,Gender},setInfo]=useState({info:[{}],Gender:'male'});
  const [fileList, setFileList] = useState([
     ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


  const dispatch = useDispatch()
  const { apiCall,data} = useSelector(({ user: { home } }) => home)
  const { home } = action.user

  useEffect(()=>{
   
   if(data?.user!==undefined)
   { setInfo(_=>{
      let {FirstName ,LastName ,Gender ,Email,Mobile,userType,Active} =data?.user;
     return {
      info:[
        {FirstName} ,{LastName },{Gender} ,{Email},
        {Mobile},{userType},{Active}
      ],Gender
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
 <ImgCrop rotate>
<Upload
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  listType="picture-card"
  // fileList={fileList}
  onChange={onChange}
  onPreview={onPreview}
>
  {fileList.length ===0 && '+ Upload'}
</Upload>
</ImgCrop>
</Modal>
) 



console.log({info})


  return (
    <div className="form">
      <Divider />
     {(<div className="ImageBox">
     <Image width={100} src={data?.Image?null:Gender==='male'?maleImage:femaleImage} /><br/>
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


    </div>
  )
}

export default Home
