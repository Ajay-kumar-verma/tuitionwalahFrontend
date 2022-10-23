import { useEffect } from 'react';
import {useSelector,useDispatch}  from 'react-redux'
import { login , user } from './container/rtk/actions'

function App() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

console.log("state is :",state);
// console.log(login,user);
// console.log("dispatch is :",dispatch);
// console.log("obj is :",login);

 useEffect(()=>{
  // dispatch(login({apiCall:true}));
  dispatch(user({apiCall:false}));
  
 },[])

  return (
    <>
    Tuition Walah 
    Work is under Progress  
    </>
  );
}


export default App;
