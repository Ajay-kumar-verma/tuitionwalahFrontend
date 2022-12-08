import React,{useEffect} from 'react';
import {useSearchParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import action from '../../rtk/actions/index'
const App = () => {
 const [searchParams,setSearchParams] = useSearchParams();
 const state = useSelector(state=>state);
 const dispatch = useDispatch();
 //  console.log([...searchParams]);
 const id =searchParams.get('id');
//  console.log({id});
 
 //  console.log(Object.fromEntries([...searchParams]))
 //  console.log("Location",window.location.pathname);
 //  useEffect(() => {
 //   setSearchParams({ sort: 'name', order: 'zzzzzzzzzzzz' });
 //  },[searchParams])  

//  console.log({action});
//  console.log({state})
 useEffect(() => {
  dispatch(action.all.userProfile({id}));
 },[])
    return JSON.stringify(state?.all?.userProfile);
}

export default App;