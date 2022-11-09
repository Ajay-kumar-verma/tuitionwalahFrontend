import React ,{useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux'

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

  return (
    <div>
      This is home page 
     {JSON.stringify(data)}

      </div>
  )
}

export default Home