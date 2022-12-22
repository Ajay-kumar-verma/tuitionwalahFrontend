import React,{ useState,useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';
import action from '../../../rtk/actions';
import Lists from './List.js'
const App = () => {
  const [data,setData] = useState([])
const dispatch = useDispatch();
const state = useSelector(({admin:{teacher}}) => teacher)
const {admin:{teacher}}  = action;

console.log({ state }, { teacher })

useEffect(()=>{
dispatch(teacher())
},[])

useEffect(()=>{
  const {data:{lists}} = state ;
       console.log(lists)
       if(Array.isArray(lists))
        setData(lists);
},[state])


  return (
    <div className="container" >
     {JSON.stringify(data)}
   
    <Lists  data={data} /> 

    </div>
  )
}

export default App