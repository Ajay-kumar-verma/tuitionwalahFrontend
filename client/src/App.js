import { useEffect } from 'react';
import {Routes ,Route} from 'react-router-dom';
import Agreement from './container/pages/agreement/Agreement'
import Header from './container/container/header/Header'
import Login from './container/pages/login/Login'
import SignUp from './container/pages/signup/SignUp'
import Auth from './container/auth/Auth'
import Home from './container/pages/home/Home'
// import { login , user } from './container/rtk/actions'

function App() {

 useEffect(()=>{
  // dispatch(login({apiCall:false}));
  // dispatch(user({apiCall:false}));
  },[])
 


 return (
    <>
    <Header />
    <Routes> 
    <Route path='login'  element={<Login />}/>
    <Route path='signup'  element={<SignUp />}/>
    <Route path='agreement'  element={<Agreement /> } />
    <Route path='home'  element={ <Auth><Home /></Auth> } />
    </Routes>

    </>
  );
}


export default App;
