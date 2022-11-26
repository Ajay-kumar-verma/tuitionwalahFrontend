import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import config from '../../../config'
const {ENDPOINT} =config ;
const Token =localStorage.getItem('token');
const token = `Bearer ${Token}`;

const props = {
  name: 'image',
  action: `${ENDPOINT}/user/photo`,
  headers: {token},
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
export default App;