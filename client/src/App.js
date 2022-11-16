import React,{useEffect} from 'react';
import { Divider } from 'antd'
import { Routes, Route ,useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import action  from './rtk/actions/index'

import All from './container/all/All'
import Auth from './container/auth/Auth';
import Nav from './container/nav/Nav'

import Login from './container/login/Login'
import Logout from './container/logout/Logout'

import CreateAccount from './container/createAccount/CreateAccount'
import Contact from './container/contact/Contact'
import Agreement from './container/agreement/Agreement'

import User from './container/user/User'
import Home from './container/user/home/Home'
import UserContact from './container/user/contact/Contact'
import Address from './container/user/address/Address'
import Document from './container/user/document/Document'
import AccountType from './container/user/accountType/AccountType'

import Teacher from './container/teacher/Teacher'
import Education from './container/teacher/education/Education'
import OtherDetail from './container/teacher/otherDetail/OtherDetail'


import Setting from './container/user/setting/Setting'
import ChangePassword from './container/user/setting/changePassword/ChnagePassword'
import ResetPassword from './container/user/setting/resetPassword/ResetPassword'
import DeleteAccount from './container/user/setting/deleteAccount/DeleteAccount'


import Parent from './container/parent/Parent'
import ParentDetail from './container/parent/parentDetail/ParentDetail'
import ChildrenDetail from './container/parent/childDetail/ChildDetail'

import Admin from './container/admin/Admin'
import Student from './container/admin/student/Student'
import Team from './container/admin/team/Team'

import Main from './container/main/Main'

import Payment from './container/payment/Payment'

import NoMatch from './container/noMatch/NoMatch'

function App() {
  const navigate = useNavigate();
 //  const data = useSelector(({user}) =>({login:user.login,userType:user.userType}))
 const state =useSelector(state =>state);
 console.log({ state },{action});
 let {all:{login,userType}} =state;
 const dispatch = useDispatch();
//console.log({login,userType});

userType=userType[0];

useEffect(()=>{
  if(!login && localStorage.getItem('token')!==null){
   //console.log("Login is called ")
    dispatch(action.all.login())
  }
//  userType  
const path = window.location.pathname; 
   navigate(userType);
  //  navigate(path)

},[dispatch,login])


if(userType==="/") {
  const list =[
    {href:"home",title:"Home"},
    {href:"signup",title:"Sign Up"},
    {href:"login",title:"Login"},
    {href:"faq",title:"FAQ"},
    {href:"contact",title:"Contact"},
  
  ]
  
  return (
    <>
       <Nav menuList={list} />
       <Divider />
        <Routes>
        <Route path="/" element={<All />} >  
          <Route  index element={<Login />} />
          <Route  path="login" element={<Login />} />
          <Route  path="createAccount" element={<CreateAccount />} />
          <Route  path="contact" element={<Contact />} />
          <Route  path="agreement" element={<Agreement/>} />
          <Route  path="*" element={<NoMatch />} />
        </Route>  
        </Routes>
      </>
    )
  } 


if(userType === 'user') {
  
  return (
        <>
          <Divider>USER</Divider>
          <Routes>
            <Route path="user" element={<User />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="contact" element={<UserContact />} />
              <Route path="address" element={<Address />} />
              <Route path="education" element={<Education />} />
              <Route path="document" element={<Document />} />
             
              <Route path="teacher" element={<Teacher />}>
              <Route index element={<Education />} />
              <Route path="education" element={<Education />} />
              <Route path="otherDetail" element={<OtherDetail />} />
              </Route>
        

              <Route path="setting" element={<Setting />}>
                <Route index element={<ChangePassword />} />
                <Route path="changePassword" element={<ChangePassword />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="deleteAccount" element={<DeleteAccount />} />
              </Route>
           
            <Route path="parent" element={<Parent />}>
              <Route index element={<ParentDetail />} />
              <Route path="parentInfo" element={<ParentDetail />} />
              <Route path="children" element={<ChildrenDetail />} />
            </Route>

            <Route path="accountType" element={<AccountType />} />
            
            <Route path="payment" element={<Payment />} />
            <Route path="logout" element={<Logout />} />
            <Route  path="*" element={<NoMatch />} />
          </Route>
        
          </Routes>
      
        </>
      )
    }

if (userType === 'admin') {
      return (
        <>
          <Divider>ADMIN</Divider>
          <Routes>
            <Route path="admin" element={<Admin />}>
              <Route index element={<User />} />
              <Route path="user" element={<User />} />
              <Route path="student" element={<Student />} />
              <Route path="teacher" element={<Teacher />} />
              <Route path="parent" element={<Parent />} />
              <Route path="team" element={<Team />} />
             <Route path="logout" element={<Logout />} />
            <Route path="payment" element={<Payment />} />
            <Route  path="*" element={<NoMatch />} />
           </Route>
         </Routes>
        </>
      )
    }

if (userType === 'main') {
      return (
        <>
          <Divider>MAIN</Divider>
          <Routes>
            <Route path="main" element={<Main />}>
              <Route index element={<Team />} />
              <Route path="team" element={<Team />} />
              <Route path="user" element={<User />} />
              <Route path="student" element={<Student />} />
              <Route path="teacher" element={<Teacher />} />
              <Route path="parent" element={<Parent />} />
              <Route path="logout" element={<Logout />} />
              <Route path="payment" element={<Payment />} />
              <Route  path="*" element={<NoMatch />} />
            </Route>
        
          </Routes>
        </>
      )
    }
  }

// return <NoMatch />


export default App
