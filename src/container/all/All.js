import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import UserProfile from '../userProfile/UserProfile'
import Nav from '../nav/all/Navbar';
import Body from '../body/Body';
import Login from '../login/Login'
import CreateAccount from '../createAccount/CreateAccount'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'
import ContinueWithGoogle from '../signup-login-with-google/SigninSignout'
import ParentTeacher from './teacherParent'
import Pdf from '../pdf/Pdf'

const All = () => {
  const prms = useParams();
  const [searchParams, setSearchParam] = useSearchParams();
  const srchs = searchParams.entries();
  const srchObj = {};

  for (const [key, val] of srchs) srchObj[key] = val
  const { id, t } = srchObj;
  // console.log({ prms, id, t })

  const idd = prms['*'].split("/")[1]
  if (idd.startsWith('TW') && idd.length === 10)
    return <UserProfile id={idd} />

  if (!!(id.startsWith('TW') && idd.length === 10 && t))
    return <ParentTeacher referredBy={id} type={t} />

  const referredBy = id;
  const list = [<a href="/" style={{ width: "40%" }} >TUITION WALAH</a>,
  <a href='#login'>Login</a>,
  <a href='#createAccount'>CreateAccount</a>,
  <a href='#contact'>Contact</a>,
  <a href='#faq'>FAQ</a>,
  <ContinueWithGoogle referredBy={referredBy} />
  ]



  return (
    <>
      <Nav data={list} />
      {/* <div className="form" ><Body /></div>  */}
      <div id="login" style={{ height: '50px' }} ></div>
      <Login />
      <div id="createAccount" style={{ height: "50px" }} ></div>
      <CreateAccount referredBy={referredBy} />
      <div id="contact" style={{ height: "30px" }} ></div>
      <Contact />
      <div id="faq" style={{ height: "300px" }} ></div>
      <Faq />
      <div style={{ height: "20px" }} ></div>
      <Footer />
    </>
  )
}

export default All