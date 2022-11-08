import React from 'react';
import { Divider } from 'antd'
import { Routes, Route  } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
import Address from './container/user/address/Address'
import Education from './container/user/education/Education'
import Document from './container/user/document/Document'
import OtherDetail from './container/user/otherDetail/OtherDetail'

import Setting from './container/user/setting/Setting'
import ChangePassword from './container/user/setting/changePassword/ChnagePassword'
import ResetPassword from './container/user/setting/resetPassword/ResetPassword'
import DeleteAccount from './container/user/setting/deleteAccount/DeleteAccount'

import Teacher from './container/teacher/Teacher'
import TeacherDetail from './container/teacher/teacherDetail/TeacherDetail'

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
 //  const data = useSelector(({user}) =>({login:user.login,userType:user.userType}))

  const { login, userType } = useSelector(({ user: { login, userType } }) => ({
    login,
    userType,
  }))

  console.log({ login, userType })
  if (!login) {
    return (
      <>
        <Nav />
        <Divider>ALL</Divider>
        <Routes>
        <Route path="/" element={<All />} >  
          <Route  index element={<Login />} />
          <Route  path="login" element={<Login />} />
          <Route  path="createAccount" element={<CreateAccount />} />
          <Route  path="contact" element={<Contact />} />
          <Route  path="agreement" element={<Auth><Agreement/></Auth>} />
          <Route  path="*" element={<NoMatch />} />
        </Route>  
        </Routes>
      </>
    )
  } else {
    if (userType === 'user') {
      return (
        <>
          <Divider>USER</Divider>
          <Routes>
            <Route path="user" element={<User />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="address" element={<Address />} />
              <Route path="education" element={<Education />} />
              <Route path="document" element={<Document />} />
              <Route path="otherDetail" element={<OtherDetail />} />
             
              <Route path="setting" element={<Setting />}>
                <Route index element={<ChangePassword />} />
                <Route path="changePassword" element={<ChangePassword />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="deleteAccount" element={<DeleteAccount />} />
              </Route>
           
            <Route path="teacher" element={<Teacher />}>
              <Route index element={<TeacherDetail />} />
            </Route>

            <Route path="parent" element={<Parent />}>
              <Route index element={<ParentDetail />} />
              <Route path="children" element={<ChildrenDetail />} />
            </Route>

            <Route path="logout" element={<Logout />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route  path="*" element={<NoMatch />} />
        
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
            </Route>
            <Route path="logout" element={<Logout />} />
            <Route path="payment" element={<Payment />} />
            <Route  path="*" element={<NoMatch />} />
        
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
            </Route>

            <Route path="logout" element={<Logout />} />
            <Route path="payment" element={<Payment />} />
            <Route  path="*" element={<NoMatch />} />
        
          </Routes>
        </>
      )
    }
  }

  return <NoMatch />
}

export default App
