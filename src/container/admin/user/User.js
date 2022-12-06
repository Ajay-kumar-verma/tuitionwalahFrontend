import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{user}}) => user)
const {admin:{user}}  = action;

console.log({ state }, { user })
  

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      this is user 
    </div>
  )
}

export default App