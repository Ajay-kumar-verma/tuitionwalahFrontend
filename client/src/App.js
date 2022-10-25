import { useEffect } from 'react';
import {Routes ,Route} from 'react-router-dom';
import Agreement from './container/pages/agreement/Agreement'
// import Index from './container/container/header/Index'
// import AppHeader from './container/container/header/AppHeader'
import Navbar from './container/container/header/Navbar'
import Login from './container/pages/login/Login'
import SignUp from './container/pages/signup/SignUp'
import Auth from './container/auth/Auth'
import Home from './home/Home'
// import { login , user } from './container/rtk/actions'

function App() {

 useEffect(()=>{
  // dispatch(login({apiCall:false}));
  // dispatch(user({apiCall:false}));
  },[])
 


 return (
    <>
    <Home />
    {/* <Routes> 
     <Route path='menu'  element={ <Index /> } /> 
    <Route path='login'  element={<Login />}/>
    <Route path='signup'  element={<SignUp />}/>
    <Route path='agreement'  element={<Agreement /> } />
    <Route path='home'  element={ <Auth><Home /></Auth> } />
    </Routes> */}

    </>
  );
}


export default App;
