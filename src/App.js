import {Spin,Alert,Row,Col} from 'antd';
import React, { useEffect ,lazy,Suspense} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import action from './rtk/actions/index'

const Loading = () => (
  <Row justify="space-around" align="middle">
  <Col span={24}>

  <Spin tip="Please wait ... ">
  <Alert
    message="Conetnt is being fetched "
    // description=""
    type="info"
  />
</Spin>
       </Col>
    </Row>

  );

const All =lazy(()=>import('./container/all/All'))
// const Auth =lazy(()=>import './container/auth/Auth';
// const Nav =lazy(()=>import './container/nav/Nav'

const Logout =lazy(()=>import('./container/logout/Logout'))
const Agreement =lazy(()=>import('./container/agreement/Agreement'))

const User =lazy(()=>import('./container/user/User'))
const Home =lazy(()=>import('./container/user/home/Home'))
const UserContact =lazy(()=>import('./container/user/contact/Contact'))
const Address =lazy(()=>import('./container/user/address/Address'))
const Document =lazy(()=>import('./container/user/document/Document'))
const Payment =lazy(()=>import('./container/payment/Payment'))

const AccountType =lazy(()=>import('./container/user/accountType/AccountType'))

const Teacher =lazy(()=>import('./container/teacher/Teacher'))
const Education =lazy(()=>import('./container/teacher/education/Education'))
const OtherDetail =lazy(()=>import('./container/teacher/otherDetail/OtherDetail'))

// const Setting =lazy(()=>import('./container/user/setting/Setting'
const ChangePassword =lazy(()=>import('./container/user/setting/changePassword/ChnagePassword'))
const ResetPassword =lazy(()=>import('./container/user/setting/resetPassword/ResetPassword'))
const DeleteAccount =lazy(()=>import('./container/user/setting/deleteAccount/DeleteAccount'))

const Parent =lazy(()=>import('./container/parent/Parent'))
const ParentDetail =lazy(()=>import('./container/parent/parentDetail/ParentDetail'))
const ChildrenDetail =lazy(()=>import('./container/parent/childDetail/ChildDetail'))

const Agent =lazy(()=>import('./container/agent/Agent'))

const Admin =lazy(()=>import('./container/admin/Admin'))
const Auser =lazy(()=>import('./container/admin/user/User'));
const Astudent =lazy(()=>import('./container/admin/student/Student'));
const Ateacher =lazy(()=>import('./container/admin/teacher/Teacher'));
const Aparent =lazy(()=>import('./container/admin/parent/Parent'));
const Aagent =lazy(()=>import('./container/admin/agent/Agent'));
const Ateam =lazy(()=>import('./container/admin/team/Team'));
const Aadmin =lazy(()=>import('./container/admin/admin/Admin'));

const Lead =lazy(()=>import('./container/leads/Lead'));
const Incommingcalls =lazy(()=>import('./container/leads/inCommingCalls/InCommingCall'))
const Outcommingcalls =lazy(()=>import('./container/leads/outGoingCall/OutgoingCall'))

const Student =lazy(()=>import('./container/admin/student/Student'))
const Team =lazy(()=>import('./container/admin/team/Team'))

const Main =lazy(()=>import('./container/main/Main'))

const NoMatch =lazy(()=>import('./container/noMatch/NoMatch'))

function App() {
  const navigate = useNavigate()
  const state = useSelector((state) => state)
  const {
    all: { login, currentUser },
  } = state
  
  const dispatch = useDispatch()
  
useEffect(() => {
  if(!login) return ;
 const path = window.location.pathname;
  if(path.split("/")[1]===currentUser)
    navigate(path);
  else if(path==="/")
    navigate(currentUser); 
  wait(1).then(()=>dispatch(action.all.changeUser(path.split("/")[1])))
    
},[currentUser,dispatch,login])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!login && token !== null)
      dispatch(action.all.login({token}));
  }, [dispatch, login ])


  if (currentUser === '/')
  return (
      <Routes>
       <Route path="/" 
        element={<Suspense fallback={<Loading />}><All /></Suspense>}
         />
      <Route path="agreement" element={<Agreement />} />
      <Route path="logout"
        element={<Suspense fallback={<Loading />}><Logout /></Suspense>}
      />
      
      <Route path="*"
        element={<Suspense fallback={<Loading />}><NoMatch /></Suspense>}
            />
      </Routes>
    )

  if (currentUser === 'user')
    return (
      <Routes>
          <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
         <Route path="user" element={<Suspense fallback={<Loading />}><User /></Suspense>} >
          <Route index element={<Suspense fallback={<Loading />}><Home /></Suspense> } />
          <Route path="home" element={<Suspense fallback={<Loading />}><Home /></Suspense> } />
          <Route path="contact" element={<Suspense fallback={<Loading />}><UserContact /></Suspense> } />
          <Route path="address" element={<Suspense fallback={<Loading />}><Address /></Suspense> } />
          <Route path="education" element={<Suspense fallback={<Loading />}><Education /></Suspense> } />
          <Route path="document" element={<Suspense fallback={<Loading />}><Document /></Suspense> } />
          <Route path="changePassword" element={<Suspense fallback={<Loading />}><ChangePassword /></Suspense> } />
          <Route path="resetPassword" element={<Suspense fallback={<Loading />}><ResetPassword /></Suspense> } />
          <Route path="deleteAccount" element={<Suspense fallback={<Loading />}><DeleteAccount /></Suspense> } />

          <Route path="parent" element={<Suspense fallback={<Loading />}><Parent /> </Suspense>}>
            <Route index element={<Suspense fallback={<Loading />}><ParentDetail /></Suspense> } />
            <Route path="parentInfo" element={<Suspense fallback={<Loading />}><ParentDetail /></Suspense> } />
            <Route path="children" element={<Suspense fallback={<Loading />}><ChildrenDetail /></Suspense> } />
          </Route>

          <Route path="teacher" element={<Suspense fallback={<Loading />}><Teacher /> </Suspense>}>
            <Route index element={<Suspense fallback={<Loading />}><Education /></Suspense> } />
            <Route path="education" element={<Suspense fallback={<Loading />}><Education /></Suspense> } />
            <Route path="otherDetail" element={<Suspense fallback={<Loading />}><OtherDetail /></Suspense> } />
          </Route>

          <Route path="accountType" element={<Suspense fallback={<Loading />}><AccountType /></Suspense> } />
          <Route path="payment" element={<Suspense fallback={<Loading />}><Payment /></Suspense> } />
        </Route>

        <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
        <Route path=":id" element={<Suspense fallback={<Loading />}><NoMatch /></Suspense> } />
      </Routes>
    )

  if (currentUser === 'agent'){
    return (
      <Routes>
          <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
         <Route path="agent"  element={<Suspense fallback={<Loading />}><Agent /> </Suspense>}>
          <Route index element={<Suspense fallback={<Loading />}><>aa</></Suspense> } />
          <Route path="student" element={<Suspense fallback={<Loading />}><Student /></Suspense> } />
          <Route path="teacher" element={<Suspense fallback={<Loading />}><Teacher /></Suspense> } />
          <Route path="parent" element={<Suspense fallback={<Loading />}><Parent /></Suspense> } />
          <Route path="team" element={<Suspense fallback={<Loading />}><Team /></Suspense> } />
          <Route path="*" element={<Suspense fallback={<Loading />}><NoMatch /></Suspense> } />
        </Route>
      </Routes>
    )}

  if (currentUser === 'admin')
   return (
    <Routes>
        <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
    <Route path="admin" element={<Suspense fallback={<Loading />}><Admin /> </Suspense> }>
      <Route index element={<Suspense fallback={<Loading />}><Auser /></Suspense> } />
      <Route path="user" element={<Suspense fallback={<Loading />}><Auser /></Suspense> } />
      <Route path="student" element={<Suspense fallback={<Loading />}><Astudent /></Suspense> } />
      <Route path="teacher" element={<Suspense fallback={<Loading />}><Ateacher /></Suspense> } />
      <Route path="parent" element={<Suspense fallback={<Loading />}><Aparent /></Suspense> } />
      <Route path="agent" element={<Suspense fallback={<Loading />}><Aagent /></Suspense> } />
      <Route path="team" element={<Suspense fallback={<Loading />}><Ateam /></Suspense> } />
      <Route path="admin" element={<Suspense fallback={<Loading />}><Aadmin /></Suspense> } />
      <Route path="*" element={<Suspense fallback={<Loading />}><NoMatch /></Suspense> } />
    </Route>
  </Routes>
   )

   if (currentUser === 'lead')
   return (
    <Routes>
       <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
       <Route path="lead" element={<Suspense fallback={<Loading />}><Lead /> </Suspense> } >
      <Route index element={<Suspense fallback={<Loading />}><Incommingcalls /></Suspense> } />
      <Route path="incommingcalls" element={<Suspense fallback={<Loading />}><Incommingcalls /></Suspense> } />
      <Route path="outcommingcalls" element={<Suspense fallback={<Loading />}><Outcommingcalls /></Suspense> } />
      <Route path="outgoingcalls" element={<Suspense fallback={<Loading />}><Ateacher /></Suspense> } />
      <Route path="parent" element={<Suspense fallback={<Loading />}><Aparent /></Suspense> } />
      <Route path="agent" element={<Suspense fallback={<Loading />}><Aagent /></Suspense> } />
      <Route path="team" element={<Suspense fallback={<Loading />}><Ateam /></Suspense> } />
      <Route path="admin" element={<Suspense fallback={<Loading />}><Aadmin /></Suspense> } />
      <Route path="*" element={<Suspense fallback={<Loading />}><NoMatch /></Suspense> } />
    </Route>
  </Routes>
   )

 
  if (currentUser === 'main')
   return (
   <Routes>
      <Route path="logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense> } />
    <Route path="main" element={<Suspense fallback={<Loading />}><Main /> </Suspense> }>
      <Route index element={<Suspense fallback={<Loading />}><Team /></Suspense> } />
      <Route path="team" element={<Suspense fallback={<Loading />}><Team /></Suspense> } />
      <Route path="user" element={<Suspense fallback={<Loading />}><User /></Suspense> } />
      <Route path="student" element={<Suspense fallback={<Loading />}><Student /></Suspense> } />
      <Route path="teacher" element={<Suspense fallback={<Loading />}><Teacher /></Suspense> } />
      <Route path="parent" element={<Suspense fallback={<Loading />}><Parent /></Suspense> } />
      <Route path="*" element={<Suspense fallback={<Loading />}><NoMatch /></Suspense> } />
    </Route>
  </Routes>)
}

export default App

function wait(time){
  return new Promise(resolve =>{
    setTimeout(resolve,time)
  }) 
}