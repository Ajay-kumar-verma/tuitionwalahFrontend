import React ,{useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux'

import action  from '../../../rtk/actions/index';

const App = () => {
  const dispatch =useDispatch();
  // console.log({action}) 
  const state = useSelector(state =>state);
  
  const {address} = action.user; 
    console.log({state})
   const {apiCall,data} =state; 
   
useEffect(()=>{
   if(!apiCall){
    dispatch(address({city:"patna"}));
   }


},[dispatch,apiCall])

  return (
    <div>
      This is home page 
     {JSON.stringify(data)}

      </div>
  )
}

export default App