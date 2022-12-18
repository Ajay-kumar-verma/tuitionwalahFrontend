import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Button, Result } from 'antd';
const App = () =>{
  const Navigate = useNavigate();
//  const {id}= useParams ();
console.log("No match com") 

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