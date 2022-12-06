import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{team}}) => team)
const {admin:{team}}  = action;

console.log({ state }, { team })
  

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      This is team 
    </div>
  )
}

export default App