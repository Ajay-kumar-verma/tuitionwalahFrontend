import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{admin}}) => admin)
const {admin:{admin}}  = action;

console.log({ state }, { admin })
  

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      This is admin 
    </div>
  )
}

export default App