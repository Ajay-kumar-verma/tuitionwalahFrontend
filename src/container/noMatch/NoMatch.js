import React from 'react';
import {useParams ,useNavigate} from 'react-router-dom'
import { Button, Result } from 'antd';
const App = () =>{
  const Navigate = useNavigate();
 const {id}= useParams ();
 
 if(id.startsWith('TW') && id.length===10)
return (
  <>
  {`Your Tuition walah ID is : ${id}`}
  </>
)
   else
 return (
  
    <Result
     status="404"
     title="404"
     subTitle="PAGE NOT FOUND !"
    extra={<Button onClick={()=>{Navigate("/")}} type="primary">Back Home</Button>}
  />
 )
};
export default App;