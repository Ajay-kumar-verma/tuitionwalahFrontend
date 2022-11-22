import { Upload ,Divider } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
const App = () => {
  const [fileList, setFileList] = useState([]);
  
  // {
  //   uid: '-1',
  //   name: 'image.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // },

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
  return (
    <div className="form">
      <Divider>Upload your Adhaar card</Divider>
     <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        // fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
      {fileList.length===0?'Front Side ':fileList.length===1?"Back Side ":null}
      </Upload>
    </ImgCrop>
    </div>
    );
};
export default App;