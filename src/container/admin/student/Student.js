import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';

const App = () => {
const dispatch = useDispatch();
const state = useSelector(({admin:{student}}) => student)
const {admin:{student}}  = action;

console.log({ state }, { student })
  

  return (
    <div className="form" >
     {JSON.stringify(state)}
     {/* {JSON.stringify(user)} */}
      This is student 
    </div>
  )
}

export default App