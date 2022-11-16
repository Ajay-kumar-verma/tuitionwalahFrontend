import React ,{useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import { Image } from 'antd';
import action  from '../../../rtk/actions/index';


const Home = () => {
  const dispatch =useDispatch();
  // console.log({action}) 
  const {apiCall,data} = useSelector(({user:{home}}) =>home);
  const {home} = action.user; 
  // console.log("home api ",{apiCall,data,home});
 
useEffect(()=>{
   if(!apiCall){
    dispatch(home());
   }


},[dispatch,apiCall,home])

const maleImage = "https://img.icons8.com/color/96/null/person-male.png";
const femaleImage ="https://img.icons8.com/color/96/null/person-female.png"; 

return (
    <div>
 <Image
    width={100}
    src={maleImage}
  />
 <Image
    width={100}
    src={femaleImage}
  />


      This is home page 
     {JSON.stringify(data)}

      </div>
  )
}

export default Home