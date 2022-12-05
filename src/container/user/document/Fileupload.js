import React from 'react';
import { useDispatch } from 'react-redux'
import { Divider,Row,Col,Image } from 'antd';
import action from '../../../rtk/actions/index'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import config from '../../../config'
const {ENDPOINT} =config ;
const Token =localStorage.getItem('token');
const token = `Bearer ${Token}`;

const App = ({name}) =>{
   const dispatch = useDispatch(); 
  const props = {
    name,
    action: `${ENDPOINT}/user/document`,
    headers: {token},
    onChange(info) {
      console.log({uploadInfo:info.response});
     
      if (info.file.status !== 'uploading') {
        console.log({file:info.file},{ fileList:info.fileList});
      }
      if (info.file.status === 'done') {
        
        dispatch(action.user.document(info.file.response))

        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return <Upload {...props} >
      <Button icon={<UploadOutlined />}>{`Click to upload ${name} side`} </Button>
    </Upload>
 

}
export default App;