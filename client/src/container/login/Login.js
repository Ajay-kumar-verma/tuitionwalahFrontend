import React ,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import action  from '../../rtk/actions/index'
const {user:{loginUsertype}} =action;

console.log("Login page ");
console.log({loginUsertype});

const Login = () => {
  const inputEle = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () =>{
    const login =true;
    const userType=inputEle.current.value; 
    const token ="113uiewyisdkd";
    localStorage.setItem('token',token); 
    navigate(`/${userType}`);
    dispatch(loginUsertype({login,userType}));
   
  }

  return (
    <>
     <input ref={inputEle} type="text" required/>
    <button onClick={()=>{login()}} >LOGIN</button>
    
    </>
  )
}

export default Login