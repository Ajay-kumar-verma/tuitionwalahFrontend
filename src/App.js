import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import action from './rtk/actions/index'

import All from './container/all/All'
// import Auth from './container/auth/Auth';
// import Nav from './container/nav/Nav'

import Logout from './container/logout/Logout'

import Agreement from './container/agreement/Agreement'

import User from './container/user/User'
import Home from './container/user/home/Home'
import UserContact from './container/user/contact/Contact'
import Address from './container/user/address/Address'
import Document from './container/user/document/Document'
import Payment from './container/payment/Payment'

import AccountType from './container/user/accountType/AccountType'

import Teacher from './container/teacher/Teacher'
import Education from './container/teacher/education/Education'
import OtherDetail from './container/teacher/otherDetail/OtherDetail'

// import Setting from './container/user/setting/Setting'
import ChangePassword from './container/user/setting/changePassword/ChnagePassword'
import ResetPassword from './container/user/setting/resetPassword/ResetPassword'
import DeleteAccount from './container/user/setting/deleteAccount/DeleteAccount'

import Parent from './container/parent/Parent'
import ParentDetail from './container/parent/parentDetail/ParentDetail'
import ChildrenDetail from './container/parent/childDetail/ChildDetail'

import Agent from './container/agent/Agent'

import Admin from './container/admin/Admin'
import Student from './container/admin/student/Student'
import Team from './container/admin/team/Team'

import Main from './container/main/Main'

import NoMatch from './container/noMatch/NoMatch'

function App() {
  const navigate = useNavigate()
  //  const data = useSelector(({user}) =>({login:user.login,currentUser:user.currentUser}))
  const state = useSelector((state) => state)
  console.log({ state }, { action })
  
  const {
    all: { login, currentUser },
  } = state
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser!==null)
    dispatch(action.all.changeUser(currentUser));
    
    const token = localStorage.getItem('token');
    if (!login && token !== null)
      dispatch(action.all.login());
  
    const path = window.location.pathname
    if(path.split("/")[0]===currentUser)
      navigate(path);
     else navigate(currentUser); 


  }, [dispatch, login, currentUser])

 
  if (currentUser === '/')
    // return <Lo />
  return (
        
      <Routes>
        <Route path="logout" element={<Logout />} />
        <Route path="/" element={<All />} />
        <Route path="agreement" element={<Agreement />} />
        <Route path=":id" element={<NoMatch />} />
      </Routes>
    )

  if (currentUser === 'user')
    return (
      <Routes>
          <Route path="logout" element={<Logout />} />
        <Route path="user" element={<User />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<UserContact />} />
          <Route path="address" element={<Address />} />
          <Route path="education" element={<Education />} />
          <Route path="document" element={<Document />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="deleteAccount" element={<DeleteAccount />} />

          <Route path="parent" element={<Parent />}>
            <Route index element={<ParentDetail />} />
            <Route path="parentInfo" element={<ParentDetail />} />
            <Route path="children" element={<ChildrenDetail />} />
          </Route>

          <Route path="teacher" element={<Teacher />}>
            <Route index element={<Education />} />
            <Route path="education" element={<Education />} />
            <Route path="otherDetail" element={<OtherDetail />} />
          </Route>

          <Route path="accountType" element={<AccountType />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path="logout" element={<Logout />} />
        <Route path=":id" element={<NoMatch />} />
      </Routes>
    )

  if (currentUser === 'agent'){
    console.log({currentUser})
    return (
      <Routes>
          <Route path="logout" element={<Logout />} />
         <Route path="agent"  element={<Agent />} >
          <Route index element={<Agent />} />
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="parent" element={<Parent />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    )}

  if (currentUser === 'admin')
   return (
    <Routes>
        <Route path="logout" element={<Logout />} />
    <Route path="admin" element={<Admin />}>
      <Route index element={<Admin />} />
      <Route path="user" element={<User />} />
      <Route path="student" element={<Student />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="parent" element={<Parent />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
   )
 
   if (currentUser === 'main')
   return (
   <Routes>
      <Route path="logout" element={<Logout />} />
    <Route path="main" element={<Main />}>
      <Route index element={<Team />} />
      <Route path="team" element={<Team />} />
      <Route path="user" element={<User />} />
      <Route path="student" element={<Student />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="parent" element={<Parent />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>)
}

export default App
