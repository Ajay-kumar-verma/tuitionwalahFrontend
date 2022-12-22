import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{teacher}}) => teacher)
const {admin:{teacher}}  = action;

console.log({ state }, { teacher })

useEffect(()=>{
dispatch(teacher())
},[])

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      This is teacher 
    </div>
  )
}

export default App