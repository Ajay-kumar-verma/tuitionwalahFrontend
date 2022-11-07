import {Routes,Route} from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux'

function App() {
 
  const {login ,userType} = useSelector(({user:{login,userType}}) =>{login,userType});

 if(!login){
    return (<>
  <Routes> 
  <Route path='/'  element={<Login /> } /> 
  <Route path='login'  element={<Login /> } /> 
  <Route path='createAccount'  element={<CreateAccount /> } /> 
  <Route path='contact'  element={<Contact /> } />
  <Route path='agreement'  element={<Agreement /> } />
  </Routes>  
    </>)
 }
else {

if(userType==='user'){
  return (<>
    <Routes>
   <Route path='user' element={ <User /> } >
      <Route index element={ <Home /> } />
      <Route path='home' element={<Home /> } />
      <Route path='address' element={<Address /> } />
      <Route path='education' element={<Education /> } />
      <Route path='docVerification' element={<DocVerification /> } />
      <Route path='otherDetail' element={<OtherDetail /> } />
      <Route path='setting' element={<Setting /> } >
         <Route path='changePassword' element={<ChangePassword /> } />
         <Route path='resetPassword' element={<ResetPassword /> } />
         <Route path='deleteAccount' element={<DeleteAccount /> } />
      </Route>
    </Route> 

     <Route path='teacher'  element={<Teacher />}>
       <Route index  element={<TeacherDetail />}  />
   </Route>

   <Route path='parent'  element={<Parent />}>
      <Route index  element={<ParentDetail />}  />
       <Route path='children'  element={<ChildrenDetail />}  />
    </Route>
   </Routes>
  </>)
}

 if(userType==='admin'){
 return (<>
   <Routes>
   <Route path='admin' element={<Admin /> } >
   <Route index element={<User /> } />
   <Route path='user' element={<User /> } />
   <Route path='student' element={<Student /> } />
   <Route path='teacher' element={<Teacher /> } />
   <Route path='parent' element={<Parent /> } />
   <Route path='team' element={<Team /> } />
   </Route>
   </Routes>
 </>)
 
}

if(userType==='main'){

return (<>
  <Routes>
  <Route path='main' element={<Main /> } >
   <Route index element={<Team /> } />
   <Route path='team' element={<Team /> } />
   <Route path='user' element={<User /> } />
   <Route path='student' element={<Student /> } />
   <Route path='teacher' element={<Teacher /> } />
   <Route path='parent' element={<Parent /> } />
   </Route>
  </Routes>

</>)

}

}

return <NoMatch />

}

export default App;
