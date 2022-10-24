import React from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import MultiStepForm from './MultiStepForm'
import {signup} from '../../rtk/actions'

const SignUp = () => {

    const state = useSelector(state => state.signup);
    const dispatch = useDispatch();
   console.log(state)  
    
   const action = _ =>{
 
    if(!state.apiCalled)
      dispatch(signup())

  console.log("signup called ");

  }
  return (
  <>
       Signup  page
    <button 
   onClick={action} 
   > SignUp  </button>
   <MultiStepForm />

   </> 
  )
}

export default SignUp