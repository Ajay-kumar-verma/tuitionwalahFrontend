import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{parent}}) => parent)
const {admin:{parent}}  = action;

console.log({ state }, { parent })
  

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      This is parent 
    </div>
  )
}

export default App